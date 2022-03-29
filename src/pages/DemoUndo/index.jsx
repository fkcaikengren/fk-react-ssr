
import React from 'react'
import RemoveLangCommand from './commands/RemoveLangCommand'
import {commandManage} from './commandManage'

import styles from './demo-undo.module.scss'





function DemoUndo(props) {

    const {languages, commands, undoCommands,
        addCommand, addUndoCommand, addRedoCommand
    } = props
    return (
        <div>
            <ul >
                {languages.map(lang=>(
                    <li className={styles.item} key={lang.id}>
                        <button className={styles.deleteBtn}
                            onClick={()=>{
                                addCommand(new RemoveLangCommand(lang))
                            }}
                        >删除</button>
                        <span>{lang.name}</span>
                    </li>
                ))
                }
            </ul>

            <div>
                <button className={`${styles.doBtn} ${commands.length===0?styles.disable:''}`}
                    onClick={()=>{
                        addUndoCommand()
                    }}
                >撤销</button>
                <button className={`${styles.doBtn} ${undoCommands.length===0?styles.disable:''}`}
                    onClick={()=>{
                        addRedoCommand()
                    }}
                >重做</button>
            </div>

        </div>
    )
}
const initialState = {
    languages: [
        {id:'1', name:'Java'},
        {id:'2', name:'Golang'},
        {id:'3', name:'Typescript'},
        {id:'4', name:'Python'},
    ]
}
export default commandManage(initialState)(DemoUndo)



/*参考：https://juejin.cn/post/6844903921878564872*/