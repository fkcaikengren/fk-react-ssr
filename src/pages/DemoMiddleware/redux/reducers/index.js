import { combineReducers } from "redux"



/*
 * reducer是一个纯函数, 一个reducer负责计算一个模块的状态
 */

const defaultState = {
  loading:false,
  data:[]
}

export const counterReducer = (state=defaultState, action)=>{
  switch(action.type){
    case 'couter/load_start':
      console.log('loading ...')
      return {...state, loading:true}
    case 'couter/load_success':
      console.log(action)
      return {...state, loading:false, data:action.payload.data}
    case 'couter/load_failure':
      console.log('failure !!!')
      return {...state, loading:false}
    default:return state
  }
}


export default combineReducers({
  counter:counterReducer
})