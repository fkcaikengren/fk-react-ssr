


import React,{useState} from 'react'

function Toggle(props) {
    const [visible, setVisible] = useState(true)
    const {render} = props
    return (
        <div>
            {
                render(visible)
            }
            <button onClick={e=>{
                setVisible(!visible)
            }}>toggle</button>
        </div>
    )
}

export default Toggle
