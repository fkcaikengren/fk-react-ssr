import { combineReducers } from "redux"



/*
 * reducer是一个纯函数, 一个reducer负责计算一个模块的状态
 */

const defaultState = {
  count:0
}

export const counterReducer = (state=defaultState, action)=>{
  switch(action.type){
    case 'couter/increase':
      return {...state, count:state.count+1}
    case 'couter/decrease':
      return {...state, count:state.count-1}
    default:return state
  }
}


export default combineReducers({
  counter:counterReducer
})