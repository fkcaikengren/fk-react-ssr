
/*
参考：https://www.redux.org.cn/docs/advanced/Middleware.html
 一）中间件:
  1.一个函数，接受store API的子集{dispatch, getState}
  2.返回一个接受next的函数，该函数负责返回新的dispatch. 其中next是上一个middleware的dispatch方法！
  3.在applyMiddleware里的中间件，dispatch时是从左到右依次经过，即最右边中间件放在最内部，执行时机最晚。

 

 二）区分{dispatch}和next: 
  middleware 中调用的是 store.dispatch(action) 而不是 next(action)，
  那么这个操作会再次遍历包含当前 middleware 在内的整个 middleware 链。
  （dispatch是store上最终的dispatch, next是上一个middleware处理后的dispatch）

 三）store上默认（未经过任何中间件）的dispatch返回的是plain action.


 四）中间件讲究次序
 const store = createStore(
  reducer,
  applyMiddleware(thunk, promise, logger)
);
*/

// applyMiddleware的简单实现（非真实实现）
export function applyMiddleware(store, middlewares) {
  middlewares = middlewares.slice()
  middlewares.reverse()

  let dispatch = store.dispatch
  middlewares.forEach(middleware =>
    dispatch = middleware(store)(dispatch)
  )

  return Object.assign({}, store, { dispatch })
}

// thunk的实现
function createThunkMiddleware(extraArgument) {
  return ({ dispatch, getState }) => (next) => (action) => {
    if (typeof action === 'function') {
      return action(dispatch, getState, extraArgument);
    }

    return next(action);
  };
}

const thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;
export default thunk