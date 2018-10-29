import { FETCH_POSTS, NEW_POST, USER_POSTS, DELETE_POST, ADD_LIKE } from '../actions/types';

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
    return {items: state.items.filter(post => post.id !== action.payload)}

    case ADD_LIKE:
    const post = state.items.filter(post => post.id == action.payload.id)
    post[0].likes = post[0].likes + 1
    return {
      items: [
        ...state.items
      ]
    };

    default:
    return state;

  }
}
