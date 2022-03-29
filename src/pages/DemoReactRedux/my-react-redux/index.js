/*
  高阶组件，封装可复用的逻辑。
  myconnect功能：订阅
 */
import React,{ Component } from "react"

 
const MyContext = React.createContext(null)

export class MyProvider extends Component{
  render(){
    const {store, children} = this.props
    return <MyContext.Provider value={{store:store}} >{children}</MyContext.Provider>
  }
}

export const myconnect = (mapDispatchToProps, mapStateToProps)=> (UIComponent)=>{
  return class Container extends Component{
    static contextType = MyContext
    
    //维护一份state，控制更新
    state={
      ...(typeof mapStateToProps === 'function' && mapStateToProps(this.context.store.getState()))
    }
    componentDidMount(){
      const {store} = this.context
      // 订阅
      store.subscribe(()=>{
        if(typeof mapStateToProps === 'function'){
          const newState = mapStateToProps(store.getState())
          // console.log(this.state)
          // console.log(newState)
          //比较
          const notChange = Object.keys(newState).every(key=>{
            return newState[key] === this.state[key]
          })
          if(!notChange){
            this.setState(newState)
          }
        }
      })
    }
    render(){
      const {store} = this.context
      
      return <>
        <UIComponent 
          {...(typeof mapDispatchToProps === 'function' && mapDispatchToProps(store.dispatch))} 
          {...this.state}
        ></UIComponent>
        
      </>
    }
  }
}