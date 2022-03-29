import React,{useReducer} from 'react'

import styles from './demo-undo.module.scss'

const initialState = {
    languages: [
        {id:'1', name:'Java'},
        {id:'2', name:'Golang'},
        {id:'3', name:'Typescript'},
        {id:'4', name:'Python'},
    ]
}
const reducer = function(state, action){
    switch(action.type){
        case 'removeLang':
            return {...state, languages:state.languages.filter(lang=>lang.id!==action.payload.id)}
        case 'removeLangUndo':
            let index = state.languages.findIndex(lang=>lang.id>action.payload.id)
            index = index===-1 ? state.languages.length : index
            console.log(index)
            return {
                languages:[...state.languages.slice(0,index),action.payload ,...state.languages.slice(index)]
            }
        default:
            return state;
    }
}

const actions = []
const undoActions = []

function TuseReducer() {

    const [state, dispatch] = useReducer(reducer, initialState)

    const removeLang = (lang)=>{
        const action = {type:'removeLang',payload:lang}
        actions.push(action)
        dispatch(action)
        //清空undoActions
        if(undoActions.length){
            undoActions = []
        }
    }
    const removeLangUndo = ()=>{
        //取actions中的最后一个
        const action = actions.pop()
        const undoAction = {...action, type:action.type+'Undo'}
        undoActions.push(undoAction)
        dispatch(undoAction)
    }
    return (
        <div>
            <ul >
                {state.languages.map(lang=>(
                    <li className={styles.item} key={lang.id}>
                        <button className={styles.deleteBtn}
                            onClick={()=>removeLang(lang)}
                        >删除</button>
                        <span>{lang.name}</span>
                    </li>
                ))
                }
            </ul>

            <div>
                <button className={styles.redoBtn}
                    onClick={removeLangUndo}
                >撤销</button>
            </div>

        </div>
    )
}

export default TuseReducer
