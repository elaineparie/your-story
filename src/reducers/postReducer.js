import { FETCH_POSTS, NEW_POST, USER_POSTS, DELETE_POST } from '../actions/types';

const initialState = {
  items: [],
  item: {}
}

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        items: action.payload
      };
    case NEW_POST:
    return {
      items: [
        ...state.items,
        action.payload
      ]
    };
    case USER_POSTS:
    return {
      items: [
        ...state.items,
        action.payload
      ]
    };
    case DELETE_POST:
  // const posts = state.items.filter(post => post.id !== action.payload)
  // debugger
  // return {
  //   items: [ state.items = posts ]
  // }

   return {items: state.items.filter(post => post.id !== action.payload)}
    //   items: [
    //     ...state,
    //     items: posts
    //   ]
    // };

    default:
    return state;

  }
}
