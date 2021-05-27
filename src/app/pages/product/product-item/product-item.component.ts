import { Component, Input, OnInit } from '@angular/core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { cartItemModel } from 'src/app/core/models/cart.item.model';
import { WATCH } from 'src/app/core/models/watch.model';
import { selectCarts } from 'src/app/core/service/selectors/select.watches';
import { AddToCart } from 'src/app/core/service/_actions/watches.actions';
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
nm:number=1;
flag:boolean=false;
Fheart=faHeart;
@Input() watch:WATCH={name:'',id:'', price:0 , discount:0 , description:''}
  constructor(private store:Store) { }

  ngOnInit(): void {
  }


  AddToCart(){


    this.store.select(selectCarts).subscribe((v)=>{
      const CheckForAdding=v.some((v)=>{
        return v.Product.id===this.watch.id
      })
      if(!CheckForAdding){

        const WatchCart:cartItemModel={
          Product:this.watch,
          Quantity:1,
          priceOfProducts:this.watch.price

        }

        this.store.dispatch(new AddToCart(WatchCart))
      }

    })





  }





  
  
}
