import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import LeftDrawer from './Navigation/LeftDrawer'
function App()
{
  
    return (
        <div className="App">
          <Router>
            <LeftDrawer/>
          </Router>
        </div>
    );
}

export default App;
