import { cartItemModel } from "../../models/cart.item.model";
import { WATCH } from "../../models/watch.model";
import { cartActionsType } from "../_Reducers/watches";

export class AddToCart{
readonly type=cartActionsType.addToCart;
constructor(public Payload:cartItemModel){
this.Payload=Payload;
}
}

export class RemoveFromCart{
    readonly type=cartActionsType.removefromCart;
    constructor(public Payload:cartItemModel){
    this.Payload=Payload;
    }
    }



export class UpdateInCart{
readonly type=cartActionsType.updateCart;
constructor(public Payload:cartItemModel){
this.Payload=Payload

}



 }   