import { Component } from '@angular/core';
import {faLevelUpAlt} from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'UNcommerce';
  falevel=faLevelUpAlt;
  showUp:boolean=false;



constructor(){
window.addEventListener('scroll',()=>{

this.showUp=true
if(window.scrollY<100){
  this.showUp=false
}

})
}



Doup(){



window.scrollTo(0,10)





}













}
