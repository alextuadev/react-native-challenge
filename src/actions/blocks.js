import * as types from "../constants/actionTypes";

const fillNodeBlocksStart = (node) => {
  return {
    type: types.GET_BLOCKS_BY_NODE_START,
    node
  };
}

const fillNodeBlocksSucces = (node, res) => {
  return {
    type: types.GET_BLOCKS_BY_NODE_SUCCESS,
    node,
    res
  };
};


const fillNodeBlocksFailure = (node) => {
  return {
    type: types.GET_BLOCKS_BY_NODE_FAILURE,
    node
  };
}


export function getBlocksNode(node) {
  return async dispatch => {
    try {
      dispatch(fillNodeBlocksStart(node));
      const res = await fetch(`${node.url}/api/v1/blocks`);
      const json = await res.json();

        dispatch(fillNodeBlocksSucces(node, json));

    } catch (err) {
      dispatch(fillNodeBlocksFailure(node));
    }
  };
}

