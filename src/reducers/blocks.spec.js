import * as ActionTypes from '../constants/actionTypes';
import reducer from './nodes';
import initialState from './initialState';

describe('Reducers::BLOCKS', () => {
  const getInitialState = () => {
    return initialState().infoBlocks;
  };

  const res = {
    data: [
      {
        "id": "1",
        "attributes": {
          "data": "By reason of these things",
        }
      },
      {
        "id": "2",
        "type": "blocks",
        "attributes": {
          "index": 2,
          "timestamp": 1530677168,
          "data": "then the whaling voyage was welcome",
          "previous-hash": "nzl9y9lf4NdSQZCw293n5ICLniP6GnWecWcvAjWKjnc=",
          "hash": "oWkTh652fFc89h0PHcBaGB/l/pfsPup75k9hIaI30Kw="
        }
      },
    ]
  };


  const nodeA = {
    url: 'http://localhost:3002',
    online: true,
    name: null,
  };



  it('should handle GET_BLOCKS_BY_NODE_START', () => {
    const appState = {
      loading: true,
      failure: false
    };
    const action = { type: ActionTypes.GET_BLOCKS_BY_NODE_START, node: nodeA };
    const expected = {
      loading: true,
      failure: false
    };

    expect(reducer(appState, action)).toEqual(expected);
  });


  it('should handle GET_BLOCKS_BY_NODE_SUCCESS', () => {
    const appState = {
      loading: true,
      failure: false,
      list:[nodeA]
    };
    let list = {
      blocks: res
    }
    const action = { type: ActionTypes.GET_BLOCKS_BY_NODE_SUCCESS, node: nodeA, res };
    const expected = {
      list,
      loading: true,
      failure: false
    };

    expect(reducer(appState, action)).toEqual(expected);
  });

});
