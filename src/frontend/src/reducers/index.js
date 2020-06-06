const reducer = (state, action) => {
  let index=0;
  switch (action.type) {
    case 'ADD_TO_CART':
        if(state.cart.length>0){
          index=state.cart.slice(state.cart.length-1)[0].key+1;
        }      
      return {
        ...state,   
        cart: [...state.cart, Object.assign({}, action.payload,{key: index})]
      }
      case 'DELETE_FROM_CART':
        return {
          ...state,
          cart: state.cart.filter((items) => items.key !== action.payload)
        }
      case 'EMPTY_CART':
        return {
          ...state,
          cart: []
        }
      case 'LOGIN_REQUEST':
        return {
          ...state,
          user: {
            email: action.payload.email,
            id: '3e3edcyet5E$rsdf4swefde3'
          }
        };
      case 'LOGOUT_REQUEST':
        return {
          ...state,
          user: action.payload,
        };
      case 'TOGGLE_CHANGE':
        document.getElementById("toggle").checked = false;
        return {
          ...state,
          isChecked: false,
        };
    default:
      return state;
  }
}

export default reducer;