/*
    render props 作用类似HOC
    组件逻辑复用
*/ 


import React,{useState} from 'react'

function Toggle(props) {
    const [visible, setVisible] = useState(true)
    const {render} = props
    return (
        <div>
            {visible &&
                render({visible})
            }
            <button onClick={e=>{
                setVisible(!visible)
            }}>toggle</button>
        </div>
    )
}

export default Toggle
