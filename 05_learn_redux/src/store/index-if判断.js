const { createStore } = require("redux");

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
  if (action.type === "change_name") {
    return { ...state, name: action.name };
  } else if (action.type === "add_number") {
    return { ...state, counter: state.counter + action.num };
  }

  return state;
}

// 创建的store
const store = createStore(reducer);

module.exports = store;
