import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { cartItemModel } from 'src/app/core/models/cart.item.model';
import { WATCH } from 'src/app/core/models/watch.model';
import { selectCarts, selectorWatches } from 'src/app/core/service/selectors/select.watches';
import { AddToCart, UpdateInCart } from 'src/app/core/service/_actions/watches.actions';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

watchDetails:any;
obwatch:any;
loading:boolean=false;
  
  constructor(private snap:ActivatedRoute , private store:Store) { }

  ngOnInit(): void {
    this.snap.params.subscribe((pramas)=>{
      console.log(pramas.id)

      this.store.select(selectorWatches).subscribe((v)=>{

        this.obwatch=v.filter((i)=>{
          return i.id===pramas.id;
        })
        
        this.checkLoading(this.obwatch)
        

      })

    })
  }


checkLoading(ob:any){
if(ob.length!==0){

this.watchDetails=ob[0]
this.loading=true

}

}

addToCart(){
  this.store.select(selectCarts).subscribe((v)=>{
    const CheckForAdding=v.some((v)=>{
      return v.Product.id===this.watchDetails.id
    })
    if(!CheckForAdding){
      const WatchCart:cartItemModel={
        Product:this.watchDetails,
        Quantity:1,
        priceOfProducts:this.watchDetails.price
      }
      this.store.dispatch(new AddToCart(WatchCart))
    }

  })
}

removeItem(){
  this.store.select(selectCarts).subscribe((carts) => {
    carts.filter((value) => {
      if (value.Product.id === this.watchDetails.id) {
        const updated: cartItemModel = {
          ...this.watchDetails,
          Quantity: value.Quantity-1,
          priceOfProducts: value.Product.price * (value.Quantity - 1)
        }
        this.store.dispatch(new UpdateInCart(updated))
      }
    })
  })
}



addItem(){
  this.store.select(selectCarts).subscribe((carts) => {
    carts.filter((value) => {
      if (value.Product.id === this.watchDetails['id']) {
        const updated: cartItemModel = {
          ...this.watchDetails,
          Quantity: value.Quantity + 1,
          priceOfProducts: value.Product.price * (value.Quantity + 1)
        }
        this.store.dispatch(new UpdateInCart(updated))
      }
    })
  })
}

}
