import {Link} from 'react-router-dom'
import styles from './home.module.scss'
import { Fragment } from 'react'
const Home = (props)=>{
    return <Fragment>
    <h2>测试</h2>
    <ul className={styles.list}>
        <li><Link to="/context">context</Link></li>
        <li><Link to="/render-props">render props</Link></li>
        <li><Link to="/use-effect">useEffect</Link></li>
        <li><Link to="/use-ref">useRef</Link></li>
        <li><Link to="/use-context">useContext</Link></li>
        <li><Link to="/use-reducer">useReducer</Link></li>
        <li><Link to="/use-memo">useMemo & useCallback</Link></li>
        <li><Link to="/custom-hook">custom hook</Link></li>
    
    </ul>
    <h2>React 18</h2>
    <ul className={styles.list}>
        <li><Link to="/react18">React18新特性</Link></li>
    </ul>
    <h2>小案例</h2>
    <ul className={styles.list}>
        <li><Link to="/demo-undo">撤销重做案例</Link></li>
        <li><Link to="/demo-react-redux">react-redux实现</Link></li>
        <li><Link to="/demo-middleware">redux middleware实现</Link></li>
    </ul>
    </Fragment>
}

export default Home