import {Link} from 'react-router-dom'
import styles from './home.module.scss'
const Home = (props)=>{
    return <ul className={styles.list}>
        <li><Link to="/context">context</Link></li>
        <li><Link to="/render-props">render props</Link></li>
        <li><Link to="/use-effect">useEffect</Link></li>
        <li><Link to="/use-ref">useRef</Link></li>
        <li><Link to="/use-context">useContext</Link></li>
        <li><Link to="/use-reducer">useReducer</Link></li>
        <li><Link to="/use-memo">useMemo & useCallback</Link></li>
        <li><Link to="/custom-hook">custom hook</Link></li>

        <li><Link to="/demo-undo">撤销重做案例</Link></li>
        <li><Link to="/demo-react-redux">react-redux实现</Link></li>
        <li><Link to="/demo-middleware">redux middleware实现</Link></li>
        <li><Link to="/demo-searchkit">电商search演示</Link></li>
        
    
        <li><Link to="/react-hooks-form">react-hooks-form</Link></li>
    </ul>
}

export default Home