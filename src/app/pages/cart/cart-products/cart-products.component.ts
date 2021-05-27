import { Component, DoCheck, OnInit } from '@angular/core';
import { Store, USER_PROVIDED_META_REDUCERS } from '@ngrx/store';
import { cartItemModel } from 'src/app/core/models/cart.item.model';
import { selectCarts } from 'src/app/core/service/selectors/select.watches';
import { AddToCart, RemoveFromCart, UpdateInCart } from 'src/app/core/service/_actions/watches.actions';

@Component({
  selector: 'app-cart-products',
  templateUrl: './cart-products.component.html',
  styleUrls: ['./cart-products.component.scss']
})
export class CartProductsComponent implements OnInit{

showDetails:boolean=false;
message:string='';
showSnapDiv:boolean=false;
details={
 country:'',
 total:0,
 time:'',
 item:[''] 
}
cartItems:any;
fakeWatch:cartItemModel={
  priceOfProducts:4000,
  Quantity:20,
  Product:{
    name:'wow',
    price:30,
    description:'wowow',
    id:'29330200000'
  }
}
  constructor(private Store:Store) { }

  ngOnInit(): void {


this.Store.select(selectCarts).subscribe((v)=>{
this.cartItems=v;
})


}





removeItem(item:cartItemModel){
  this.Store.dispatch(new RemoveFromCart(item))
}


AddQuntity(item:cartItemModel){

const updated:cartItemModel={
...item,
Quantity:item.Quantity+1,
priceOfProducts:item.Product.price*(item.Quantity+1)
}



this.Store.dispatch(new UpdateInCart(updated))
this.showSnap('You added product')
}


DeleteQuntity(item:cartItemModel){

if(item.Quantity!==1){
  const updated:cartItemModel={
    ...item,
    Quantity:item.Quantity-1,
    priceOfProducts:item.Product.price*(item.Quantity-1)
    }
    
    this.Store.dispatch(new UpdateInCart(updated))
   
    this.showSnap('You removed product')
  }
  
  this.showSnap('You connot remove last one')

}

addItem(){

this.Store.dispatch(new AddToCart(this.fakeWatch))

}



getDetails(){
this.showDetails=true;
this.details.country='Egypt';
this.details.time='from 12 May to 19 May';
this.Store.select(selectCarts).subscribe((d)=>{

d.forEach((v)=>{

this.details.item.push(v.Product.name)
this.details.total+=v.priceOfProducts
})


})

}



showSnap(message:string){
this.message=message
this.showSnapDiv=true;

setTimeout(() => {
this.showSnapDiv=false;
this.message=''
},5000);


}


}
