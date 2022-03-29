
import React from 'react'
import {Consumer} from '../context'
import styles from '../context.module.scss'

function Grandson() {
    return (
    <Consumer>
        {context=>(
            <div className={styles.grandson}>
                <br />
                [Grandson] fruit={context.fruit} count={context.count}
                <div>
                    <button onClick={e=>{context.setCount(context.count+1)}}>add</button> 
                    <button onClick={e=>{context.setCount(context.count-1)}}>sub</button>
                </div>
            </div>
        )
        }
    </Consumer>
    )
}

export default Grandson
