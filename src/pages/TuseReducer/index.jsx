
import React, { useState,useEffect, useReducer } from 'react'


const initState = {
    data: null,
    loading: false,
    error: null
}

/*
    将所有状态集中管理，对状态的修改逻辑也集中在reducer管理，
    可避免遗漏，方便维护

    当组件状态比较复杂时或者是深层嵌套，建议采用useReducer替代useState.
*/
const reducer = (state,action)=>{
    switch(action.type){
        case 'start':
            return {...state, loading:true}
        case 'success':
            return {...state, data:action.payload, loading:false}
        default:
            return state;
    }
}

function TuseReducer() {

    // useReducer相当于一个小型的redux, 采用dispatch来更新状态
    const [state, dispatch] = useReducer(reducer, initState)
 
    return (
        <div>
            {state.loading && 
                <p>loading ...</p>
            }
            {!state.loading && state.data && 
                <p>{state.data}</p>
            }
            <button onClick={()=>{
                dispatch({
                    type: 'start',
                })
                setTimeout(()=>{
                    dispatch({
                        type: 'success',
                        payload: 'Yes, you got it'
                    })
                },3000)
            }}>获取数据</button>
        </div>
    )
}

export default TuseReducer
