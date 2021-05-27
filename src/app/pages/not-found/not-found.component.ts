import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { cartItemModel } from 'src/app/core/models/cart.item.model';
import { AddToCart, RemoveFromCart } from 'src/app/core/service/_actions/watches.actions';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {
products:cartItemModel[]=[
{priceOfProducts:5000,Quantity:400,Product:{name:'Car' ,     id:'301', description:'Carr' , price:40,}},
{priceOfProducts:4000,Quantity:400,Product:{name:'Car good' ,id:'999', description:'Carr' , price:40,}},
{priceOfProducts:3000,Quantity:400,Product:{name:'Car bad ' ,id:'989' ,description:'Carr' , price:40,}}


]
  constructor(private Store:Store) { }

  ngOnInit(): void {
  }



DOFac() {
this.Store.subscribe((value)=>{
console.log(value)
})
}




Add(){
this.Store.dispatch(new AddToCart(this.products[0]))
}


remove(){
  this.Store.dispatch(new RemoveFromCart(this.products[0]))
}





}
