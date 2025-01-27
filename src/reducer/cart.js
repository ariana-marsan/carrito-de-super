
export const initialState=[];

export const CART_ACTIONS = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  CLEAR_CART: 'CLEAR_CART'
}

export function cartReducer (state, action) {
  const { type: actionType, payload: actionPayload } = action

  switch(actionType) {
    case CART_ACTIONS.ADD_TO_CART:{
      const { id } = actionPayload;
      const productIndex = state.findIndex(item => item.id === id);

      if(productIndex >= 0) {
        const newState= structuredClone(state)

        newState[productIndex].quantity+= 1;
        return newState;
    }

    return [
        ...state,
        {
            ...actionPayload,
            quantity: 1
    }
   ]
  }
    case CART_ACTIONS.REMOVE_FROM_CART:{
      const { id } = actionPayload;
      return state.filter(item => item.id !== id)
    }
    case CART_ACTIONS.CLEAR_CART:{
      return initialState;
    }
}
return state;
}