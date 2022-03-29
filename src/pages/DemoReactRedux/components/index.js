import {Component} from 'react'
import store from '../redux/store'
import { myconnect, MyProvider } from '../my-react-redux'

class UIContainer extends Component{

  render(){
    return <div style={{padding:'50px'}}>
      <button style={{marginRight:'10px'}} onClick={()=>{
        // 发布
        store.dispatch({type:'couter/decrease'})
      }}>减少</button>
      <span>
      {this.props.counter.count}
      </span>
      <button style={{marginLeft:'10px'}} onClick={()=>{
        // 发布
        store.dispatch({type:'couter/increase'})
      }}>增加</button>
    </div>
  }
}

const mapDispatchToProps = ()=>{
  return{}
}

const mapStateToProps = (state)=>{
  return {
    counter: state.counter
  }
}



const HOCConatainer =  myconnect(mapDispatchToProps, mapStateToProps)(UIContainer)


export default class DemoReactRedux extends Component{
  render(){
    return <MyProvider store={store}>
      <HOCConatainer></HOCConatainer>
    </MyProvider>
  }
}