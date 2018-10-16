import { FETCH_POSTS, NEW_POST, DELETE_POST } from '../actions/types';

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

    case DELETE_POST:
    const posts = state.filter(post => post.id !== action.id)
    return posts


    default:
    return state;

  }
}
