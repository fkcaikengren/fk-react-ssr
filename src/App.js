import {BrowserRouter as Router} from 'react-router-dom'
import PrimaryLayout from './pages/PrimaryLayout'

import './App.css';

function App() {
  return (
     <Router>
       <PrimaryLayout />
     </Router>
  );
}

export default App;
