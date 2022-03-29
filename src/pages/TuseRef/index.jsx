/*
    作用一：引用Dom元素, 命令是控制组件
    作用二：保存状态/值
*/
import React,{useState, useRef} from 'react'

function TuseRef() {
    const [state, setstate] = useState(false)
    let inputRef = useRef(null)
    // let refContainer = React.createRef()

    let dataRef = useRef({value:''})
    return (
        <div>
            <input type="text" ref={inputRef}/>
            <br/>
            <button onClick={e=>{
                // console.log(inputRef)
                alert(inputRef.current.value)
                dataRef.current.value = inputRef.current.value
            }}>get input value</button>
            <button onClick={e=>{
                inputRef.current.focus()
            }}>focus input</button>
            <button onClick={e=>{
                setstate(!state)
            }}>change state</button>
            <p>state: {state+''}</p>
        </div>
    )
}

export default TuseRef
