import React, { Fragment } from 'react';

/* 
    负责管理Command，不处理业务逻辑。

    方案已：HOC: 把Manager做成一个高阶组件，能够拥有访问state和管理Command的功能
    方案二：Hook: 做成一个钩子，提供给其他组件使用，能够拥有访问state和管理Command的功能
*/

export const commandManage = (initState) => (WrappedComponent)=>{
    return class ManageEnhancer extends React.Component{

        constructor(props){
            super(props)
            this.state = initState
            this.commands = []
            this.undoCommands = []
        }
    
        
        //执行
        addCommand = (command)=>{
            this.commands.push(command)
            this.setState(command.execute(this.state))
            //清空undoCommands
            if(this.undoCommands.length){
                this.undoCommands = []
            }
        }
    
        //撤销
        addUndoCommand = ()=>{
            if(this.commands.length===0){
                return
            }
            const command = this.commands.pop()
            this.undoCommands.push(command)
            this.setState(command.undo(this.state))
        }

        //重做
        addRedoCommand = ()=>{
            if(this.undoCommands.length===0){
                return
            }
            const command = this.undoCommands.pop()
            this.commands.push(command)
            this.setState(command.execute(this.state))
        }


        render(){
            return <Fragment>
                <WrappedComponent 
                languages={this.state.languages}
                addCommand={this.addCommand}
                addUndoCommand={this.addUndoCommand}
                addRedoCommand={this.addRedoCommand}
                commands={this.commands}
                undoCommands={this.undoCommands}
                ></WrappedComponent>
            </Fragment>
        }
    }
}






