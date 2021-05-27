
import { Injectable } from "@angular/core";
import { HttpClient  , HttpHeaders} from '@angular/common/http';

@Injectable()

export class apiWatchesService{


apiBaseUrl:string='http://localhost:3000/';

constructor(private http:HttpClient){}

protected authorization():HttpHeaders{
let tokan;
if(localStorage.getItem('currentUser')){
tokan=localStorage.getItem('currentUser')
}
if(tokan){
return new HttpHeaders().set('Authorization',tokan)
}else{
return new HttpHeaders().set('Authorization','')
}
}



public getAllWatches(limit:number){
if(limit){
return this.http.get(this.apiBaseUrl+'watches/'+limit)
}else{
return this.http.get(this.apiBaseUrl+'watches/'+10)
}
}

public getOneWatch(id:string){
return this.http.get(this.apiBaseUrl+'watch/details/'+id)
}



public SearchByWatch(key:string){
return this.http.get(this.apiBaseUrl+'filter/'+key)
}



public createAccount(info:object){
return this.http.post(this.apiBaseUrl+'user/register',info)
}

public LoginAccount(info:object){
return this.http.post(this.apiBaseUrl+'user/login',info)
}


public Order(id:string){
return this.http.get(this.apiBaseUrl+'user/order/product/'+id,{headers:this.authorization()})
}


public getUserProducts(){
return this.http.get(this.apiBaseUrl+'user/products',{headers:this.authorization()})
}








}