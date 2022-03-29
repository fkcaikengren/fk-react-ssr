import {Route,Switch} from 'react-router-dom'


import Home from '../Home'
import Tcontext from '../Tcontext'
import TcustomHook from '../TcustomHook'
import BindExample from '../TcustomHook/components/BindExample'
import FetchExample from '../TcustomHook/components/FetchExample'
import TableExample from '../TcustomHook/components/TableExample'
import TErrorBoundaries from '../TErrorBoundaries'
import TRenderProps from '../TRenderProps'
import TuseContext from '../TuseContext'
import TuseEffect from '../TuseEffect'
import TuseMemo from '../TuseMemo'
import TuseReducer from '../TuseReducer'
import TuseRef from '../TuseRef'

import DemoUndo from '../DemoUndo'

import styles from './pmy-layout.module.scss'
import DemoSearchkit from '../DemoSearchkit'
import DemoMiddleware from '../DemoMiddleware/components'
import DemoReactRedux from '../DemoReactRedux/components'
import LReactHookForm from '../LReactHookForm'

const PrimaryLayout = ()=>{
    return <div className='container'>
        <div className={styles.header}>React 案例</div>
        <Switch>
            <Route path='/' exact component={Home}></Route>
            <Route path='/context' component={Tcontext}></Route>
            <Route path='/error-boundaries' component={TErrorBoundaries}></Route>
            <Route path='/render-props' component={TRenderProps}></Route>
            <Route path='/use-effect' component={TuseEffect}></Route>
            <Route path='/use-ref' component={TuseRef}></Route>
            <Route path='/use-context' component={TuseContext}></Route>
            <Route path='/use-reducer' component={TuseReducer}></Route>
            <Route path='/use-memo' component={TuseMemo}></Route>
            {/* 嵌套路由 */}
            <Route exact path='/custom-hook' component={TcustomHook}></Route>
            <Route  path='/custom-hook/bind' component={BindExample}></Route>
            <Route  path='/custom-hook/fetch' component={FetchExample}></Route>
            <Route  path='/custom-hook/table' component={TableExample}></Route>

            {/* Demo */}
            <Route path='/demo-undo' component={DemoUndo} />
            <Route path='/demo-react-redux' component={DemoReactRedux}/>
            <Route path='/demo-middleware' component={DemoMiddleware}/>
            <Route path='/demo-searchkit' component={DemoSearchkit} />

            {/* 第三方库 */}
            <Route path='/react-hooks-form' component={LReactHookForm} />


        </Switch>
    </div>
}

export default PrimaryLayout