import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CartType, stateCartStore, stateType } from "../_Reducers/watches";

export const selectFd=createFeatureSelector<stateType>('Item')

export let selectorWatches=createSelector(selectFd,s=>{


return s.Watches


})



export const selectCartsFT=createFeatureSelector<CartType>('CartItem');



export let selectCarts=createSelector(selectCartsFT,(v)=>{

return v.CartWatches

})