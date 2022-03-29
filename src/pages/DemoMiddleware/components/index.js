

import React, { Component } from 'react'
import { connect, Provider } from 'react-redux'
import { loadCount } from '../redux/actions'
import store from '../redux/store'

/*
  需求：发送一个Http请求, 对应三次plain action: start success failure
*/
class UIContainer extends Component {
  componentDidMount(){
    const {loadData} = this.props
    loadData().then(data=>{
      console.log('end...', data)
    })
  }
  render() {
    const {counter} = this.props
    return (
      <div>
        {counter.data.length>0 && 
          counter.data.map((item, i)=> (
            <div key={i}>
              <p>partCount: {item?.all_part_count}</p>
              <p>viewCount: {item?.all_view_count}</p>
            </div>
          ))
        }
        
      </div>
    )
  }
}
const mapDispatchToProps = (dispatch)=>{
  return {
    loadData: ()=>dispatch(loadCount(dispatch))
  }
}

const mapStateToProps = (state)=>{
  return {
    counter: state.counter
  }
}

const HOCContainer = connect(mapStateToProps, mapDispatchToProps)(UIContainer)

export default class DemoMiddleware extends Component{
  render(){
    return <Provider store={store}>
      <HOCContainer />
    </Provider>
  }
}