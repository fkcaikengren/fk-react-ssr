
import React, {useState} from 'react'
import useBind from '../../hooks/useBind'
function BindExample(){
    //常规的双向绑定
    // const [name, setName] = useState('')

    //使用钩子的双向绑定
    const [name, onChange] = useBind('')
    return <div>
        <label htmlFor="name">输入名字</label>
        {/* <input id='name' type="text" value={name} onChange={e=>setName(e.target.value)}/> */}
        <input id='name' type="text" value={name} onChange={onChange}/>
    </div>

}

export default BindExample