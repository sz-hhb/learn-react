const store = require("./store");
const {
  changeNameAction,
  addNumberAction,
} = require("./store/actionCreator.js");

const unsubscribe = store.subscribe(() => {
  console.log("订阅数据的变化", store.getState());
});

// actionCreators 帮助我们创建action
// const changeNameAction = (name) => ({
//   type: "change_name",
//   name,
// });

// 修改store中的数据: 通过action
store.dispatch(changeNameAction("ken"));
store.dispatch(changeNameAction("iu"));
store.dispatch(changeNameAction("james"));

// const addNumberAction = (num) => ({
//   type: "add_number",
//   num,
// });

store.dispatch(addNumberAction(10));
store.dispatch(addNumberAction(20));
store.dispatch(addNumberAction(30));
store.dispatch(addNumberAction(100));
