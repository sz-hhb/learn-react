const store = require("./store");

const unsubscribe = store.subscribe(() => {
  console.log("订阅数据的变化", store.getState());
});

// 修改store中的数据: 通过action
store.dispatch({ type: "change_name", name: "ken" });
store.dispatch({ type: "change_name", name: "iu" });

// 取消订阅
unsubscribe();

store.dispatch({ type: "add_number", num: 10 });
