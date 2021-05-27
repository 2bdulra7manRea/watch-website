import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { WATCH } from 'src/app/core/models/watch.model';
import { selectorWatches } from 'src/app/core/service/selectors/select.watches';

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


}
