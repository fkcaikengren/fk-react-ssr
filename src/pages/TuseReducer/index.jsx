
import React, { useState,useEffect, useReducer } from 'react'

const reducer = (state,action)=>{
    switch(action.type){
        case 'tick':
            return {...state, count:state.count+state.step}
        case 'changeStep':
            return {...state, step:state.step+action.step}
        default:
            return state;
    }
}

function TuseReducer() {
    // const [count, setCount] = useState(0)
    // const [step, setStep] = useState(1)

    //当step改变时，会开启一个新的计时器
    // useEffect(()=>{
    //     setInterval(()=>setCount(count+step),1000)
    // },[step])

    const [state, dispatch] = useReducer(reducer, {count:0, step:1})
    const {count, step} = state
    
    useEffect(()=>{
        console.log('effect',count, step)
        setInterval(()=>dispatch({type:'tick'}),1000)
    },[dispatch])
    return (
        <div>
            <p>count: {state.count}</p>
            <p>step: {state.step}</p>
            <button onClick={()=>{
                // setStep(step+1)
                dispatch({type:'changeStep',step:1})
            }}>step + 1</button>
        </div>
    )
}

export default TuseReducer
