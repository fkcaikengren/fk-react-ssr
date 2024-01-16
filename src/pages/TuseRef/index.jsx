/*
    作用一：保存DOM元素/组件的引用, 访问其方法和属性
    作用二：保存值（值不是状态，不会引起视图更新）
*/
import React,{useState, useRef,forwardRef, useImperativeHandle} from 'react'


// 使用React.forwardRef包裹的组件，才能被ref。
const  Child = forwardRef(function(props, ref){
    // 暴露
    useImperativeHandle(ref, ()=>({
        count,
        handleCountPlus2
    }))
    const [count, setCount] = useState(0)
    const handleCountPlus2 = ()=>{
        setCount(count+2)
    }
    return <div>
        Child Count: {count}
    </div>
})


const Kid = ()=>{
    const [count, setCount] = useState(0)
    const handleCountPlus2 = ()=>{
        setCount(count+2)
    }
    return <div >
        {}
        </div>
}



function TuseRef() {
    const [state, setState] = useState(false)
    const inputRef = useRef(null)
    const compRef = useRef(null)
    return (
        <div>
            <div style={{padding:'20px'}}>
                <h2>1. 对html标签使用ref</h2>
                <input type="text" ref={inputRef}/>
                <br/>
                <button onClick={e=>{
                    // 获取DOM元素上的属性
                    console.log(inputRef.current)
                    console.log(inputRef.current.value)
                }}>get input value</button>
                <button onClick={e=>{
                    // 调用DOM元素上的方法
                    inputRef.current.focus()
                }}>focus input</button>
            </div>

            <div style={{padding:'20px'}}>
                <h2>2. 对组件使用ref</h2>
                <Child ref={compRef}/>
                <button onClick={e=>{
                    // 获取组件暴露的数据和方法
                    console.log(compRef.current)
                }}>获取组件暴露的内容</button>
                <button onClick={e=>{
                    // 调用组件的handleCountPlus2方法
                    compRef.current.handleCountPlus2()
                }}>handleCountPlus2方法</button>


            </div>
            
            
        </div>
    )
}

export default TuseRef
