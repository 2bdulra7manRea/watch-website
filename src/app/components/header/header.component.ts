import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{faUser ,faBars ,faSearch,faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import { Store } from '@ngrx/store';
import { selectCarts } from 'src/app/core/service/selectors/select.watches';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
search:any;
flagdrop:boolean=false;
Fuser=faUser
Fsearch=faSearch
shoppingcart=faShoppingCart
flag:boolean=false;
cartsItems:any;
totalPrice:number=0;
numberOfCarts=10;
Fabars=faBars
menu:boolean=false;
  constructor(private router:Router , private store:Store) { }

  ngOnInit(): void {

this.store.select(selectCarts).subscribe((v)=>{
this.totalPrice=0;  
this.cartsItems=v;
this.numberOfCarts=v.length;
v.forEach((val)=>{
this.totalPrice+=val.priceOfProducts;
})
})


  }

  dropdown(){
   if(this.flagdrop){
     this.flagdrop=false
   }else{
    this.flagdrop=true
   }
  }

  CLOSE(){
    this.flag=false;
  }
  Dosearch(){
this.flag=true;
  }


FindResultSearch(){
this.flag=false
this.router.navigateByUrl('/products/list?filter='+this.search)
  }  





  showMenu(){

if(this.menu){
  this.menu=false
}else{
  this.menu=true
}

  }






}
