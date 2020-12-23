import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import LeftDrawer from './Navigation/LeftDrawer'
import HomePage  from './Pages/HomePage'
function App()
{
  
    return (
        <div>
          <Router>
            <HomePage/>
          </Router>
        </div>
    );
}

export default App;
