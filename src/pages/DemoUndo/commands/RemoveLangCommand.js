
/*
    Command相当于一个传递的中间媒介，就好比顾客和厨师之间通过菜单交流。Command就是这个菜单。
    Command负责处理业务逻辑
*/

export default class AddLangCommand {

    constructor(action){
        //action是一个对象，包含修改描述
        this.action = action
    }

    //执行/重做
    execute(state){
        const action = this.action
        const {languages} = state
        return { languages:languages.filter(lang=>lang.id!==action.id)}
    }

    //撤销
    undo(state){
        const action = this.action
        const {languages} = state
        let index = languages.findIndex(lang=>lang.id>action.id)
        index = index===-1 ? languages.length : index
        console.log(index)
        return {
            languages:[...languages.slice(0,index),action ,...languages.slice(index)]
        }
    }
}
