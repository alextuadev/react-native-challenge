

import {
  GET_BLOCKS_BY_NODE_START,
  GET_BLOCKS_BY_NODE_SUCCESS,
  GET_BLOCKS_BY_NODE_FAILURE,
} from '../constants/actionTypes';
import initialState from './initialState';


export default function blocksReducer(state = [], action) {
  console.log("action BLOCK", action)
  let list = [];

  switch (action.type) {
    case GET_BLOCKS_BY_NODE_START:
      return {
        ...state,
        loading: true,
        failure: false
      };

    case GET_BLOCKS_BY_NODE_SUCCESS:
      list = [
        ...action.res.data,
      ];
      return {
        ...state,
        list,
        loading: false,
        failure: false
      };

    case GET_BLOCKS_BY_NODE_FAILURE:
      return {
        ...state,
        loading:false,
        failure: true
      };

    default:
      return state
  }
}
