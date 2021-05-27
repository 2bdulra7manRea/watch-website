import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { WATCH } from 'src/app/core/models/watch.model';
import { selectorWatches } from 'src/app/core/service/selectors/select.watches';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

currentItems:number=1;
watches:any;
itemsWatches:WATCH[]=[];

  constructor(public Store :Store , private rout:ActivatedRoute) { }
  ngOnInit(): void {

  

    this.rout.queryParams.subscribe((url)=>{
      if(url.filter){
        this.Store.select(selectorWatches).subscribe((it)=>{
          this.watches=it.filter((v)=>{
            return v.name.includes(url.filter)
          });
        })

      }else{
    this.Store.select(selectorWatches).subscribe((it)=>{
          this.watches=it;
        })
      }

    })


    
    
  }
 

GetItems():void{
this.itemsWatches=this.watches.Items.Watches;
  }










  DisplayFilter(v:number){

    this.currentItems=v;
    console.log(this.currentItems)
  }  

}
