
import React,{useState, useEffect} from 'react'
import Child from './components/Child'

function TuseEffect() {
    
    useEffect(()=>{
        console.log('parent useEffect ..')
    })

    return (
        <div>
            parent
            <Child></Child>
        </div>
    )
}

export default TuseEffect
