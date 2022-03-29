

import { useState} from 'react'
import Son from './components/Son'
import {Provider} from './context'
import styles from './context.module.scss'

const Tcontext = (props)=>{
    const [fruit, setFruit] = useState('apple')
    const [count, setCount] = useState(0)


    const defaultValue = {
        fruit, 
        count,
        setFruit,
        setCount
    }

    return <Provider value={defaultValue}>
        <div className={styles.parent}>
            <br />
            [Parent] fruit={fruit} count={count}
            <Son/>
        </div>
    </Provider>
}

export default Tcontext