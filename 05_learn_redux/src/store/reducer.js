const { CHANGE_NAME, ADD_NUMBER } = require("./constants");

// 初始化的数据
const initialState = {
  counter: 0,
  name: "why",
};

// 定义reducer函数: 纯函数
// 两个参数
// 参数一: store中目前保存的state
// 参数二: 本次需要更新的action(dispatch传入的action)
// 返回值: 作为store之后存储的state
function reducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_NAME:
      return { ...state, name: action.name };
    case ADD_NUMBER:
      return { ...state, counter: state.counter + action.num };
    default:
      return state;
  }
}

module.exports = reducer;
