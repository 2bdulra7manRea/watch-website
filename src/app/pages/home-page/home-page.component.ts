import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as moment from 'moment';
import { selectorWatches } from 'src/app/core/service/selectors/select.watches';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
watches:any;
hour:number=0;
minuts:number=0;
second:number=0;
Time:string='';
  constructor(private Store:Store) {
    
   }


  ngOnInit(): void {

this.Store.select(selectorWatches).subscribe((v)=>{
this.watches=v.slice(0,6);
})


this.Time=moment().format('ddd. D MMM YYYY')
    setInterval(()=>{
let date=new Date();
      this.second=date.getSeconds();
      this.hour=date.getHours();
      this.minuts=date.getMinutes();

    },1000)

  }




}
