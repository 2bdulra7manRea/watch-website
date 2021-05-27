import { Action } from "@ngrx/store";
import { cartItemModel } from "../../models/cart.item.model";
import { WATCH } from "../../models/watch.model";

const initState:stateType={
Watches:[
    {name:'German Watch 2221' ,id:'294959591', price:100 , discount:20 , description:'A very flexibale watch using very solid material '},
    {name:'German Watch 2211' ,id:'294959592', price:100 , discount:20 , description:'A very flexibale watch using very solid material '},
    {name:'German Watch 2521' ,id:'294959593', price:100 , discount:20 , description:'A very flexibale watch using very solid material '},
    {name:'German Watch 2131' ,id:'294959594', price:100 , discount:20 , description:'A very flexibale watch using very solid material '},
    {name:'German Watch 2241' ,id:'294959595', price:100 , discount:20 , description:'A very flexibale watch using very solid material '},
    {name:'German Watch 2151' ,id:'294959596', price:100 , discount:20 , description:'A very flexibale watch using very solid material '},
]   
}

enum typeActions{
Add='ADD_ITEM',
Delete='DELETE_ITEM',
Update='UPDATE_ITEM'
}


interface CustomAction{
type:string,
payload:WATCH
}


interface StoreType{

Item:stateType
}


export interface stateType{
Watches:Array<WATCH>
}






export function Reducer(state=initState,action:Action):stateType{   
switch (action.type) {

    default:
       return state
}
}


//------------------------------------------------------------------


export interface CartType{
CartWatches:cartItemModel[]
}

const InitCart:CartType={
CartWatches:[]
}


export interface stateCartStore{
    CartItem:CartType
}


export interface actionCustomCart extends Action { 
Payload:WATCH
}


export enum cartActionsType{
addToCart='ADD_TO_CART',
removefromCart='REMOVE_FROM_CART',
updateCart='UPDATE_ITEM_IN_CART'
}

interface fakeAction{
type?:string,
Payload:cartItemModel
}

export function ReducerAddToCart(state:CartType=InitCart,action:any):CartType{
switch (action.type) {
    case cartActionsType.addToCart:
    return state={CartWatches:[action.Payload,...state.CartWatches]}

    case cartActionsType.removefromCart:
    let empArr:cartItemModel[]=[];
    for(let x =0 ; x<state.CartWatches.length ;x++){
        if(state.CartWatches[x].Product.id!==action.Payload.Product.id){
           empArr.push(state.CartWatches[x])  
        }
    }
     return state={CartWatches:[...empArr]}   

     

    case cartActionsType.updateCart:
    const beforeUpdate:any=[];
    state.CartWatches.forEach((val)=>{
        console.log(action.Payload)
        console.log(val.Product.id)
        console.log(action.Payload.Product.id)
        if(val.Product.id===action.Payload.Product.id){
            beforeUpdate.push(action.Payload)
        }else{
            beforeUpdate.push(val)
        }
    })
console.log(beforeUpdate)
return state={CartWatches:[...beforeUpdate]}

    default:
        return state
}



}