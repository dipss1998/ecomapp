import { ListItemAvatar } from '@mui/material'
import actionTypes from '../constants/actionTypes'


export const wishlistReducers = (state = {wishlistItems: []}, {type, payload} ) => {
    switch(type) {
        case actionTypes.ADD_TO_WISHLIST:
        return {   ...state, wishlistItems:  payload  };

        default:
            return state;
    }
}

export const cartReducers = (state = {cartItems:[]}, action ) => {
        switch (action.type) {
            case actionTypes.ADD_TO_CART:   
            const ItemIndex = state.cartItems.findIndex((item)=>item.id === action.payload.id)
            if(ItemIndex >=1){
              state.cartItems[ItemIndex].quantity +=1
            } else {
              const temp = {...action.payload, quantity : +1}
              return {
                ...state,
                cartItems : [...state.cartItems, temp]
              }
            }
            case actionTypes.REMOVE_TO_CART:
              // const itemId = action.payload;
                  const data = state.cartItems.filter((item)=> item.id !== action.payload)
                //  console.log(data);
                  return{
              ...state,
              cartItems: data
            };
            case actionTypes.REMOVE_ALL_TO_CART:
              const removecartdata = state.cartItems = [];
            return{
              ...state,
              cartItems: removecartdata
            }
            default:
                return state
        }
} 