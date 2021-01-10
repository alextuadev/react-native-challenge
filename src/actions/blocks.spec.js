import * as ActionTypes from "../constants/actionTypes";
import * as ActionCreators from "./blocks";

describe("ActionsBlocks", () => {
  beforeAll(() => { });
  afterAll(() => { });

  const node = {
    url: "https://calm-anchorage-82141.herokuapp.com/api/v1/blocks",
    online: true,
    name: "Calm Anchorage"
  };

  it("should check if exist a function get blocks by node start ", () => {
    const dispatch = jest.fn();
    const expected = {
      node,
      type: ActionTypes.GET_BLOCKS_BY_NODE_START,
    };
    

    expect(typeof ActionCreators.getBlocksNode(node)).toEqual("function");

    // then we simulate calling it with dispatch as the store would do
    ActionCreators.getBlocksNode(node)(dispatch);

    // finally assert that the dispatch was called with our expected action
    expect(dispatch).toBeCalledWith(expected);
  });


});
