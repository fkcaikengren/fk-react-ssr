
/*
 处理一个特殊的Action
 action={
   types: array,
   promise: function
 }
*/
export function createPromiseMiddleware (){
  return ({dispatch, getState}) => (next) => (action) =>{

    const {types, promise} = action || {}
    if(types instanceof Array && typeof promise === 'function') { //处理特殊Action
      const [START, SUCCESS, FAILURE] = types
      next({type : START})
      const actionPromise = promise()
      if(actionPromise instanceof Promise){ //处理Promise
        actionPromise.then(data=>{
          next({type : SUCCESS, payload:data})
        }).catch(err=>{
          console.error('REDUX-PROMISE MIDDLEWARE ERROR', err)
          next({type : FAILURE, payload:err })
        })
      }
      return actionPromise
    }
    
    return next(action)
  }
} 