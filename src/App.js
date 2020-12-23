import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import LeftDrawer from './Navigation/LeftDrawer'
import HomePage  from './Pages/HomePage'
import { makeStyles } from '@material-ui/core';
const mySytle = makeStyles((theme) =>(
  {
    root :  {
              display :'flex',
              textAlign : 'center',
            },
    header :  {
                display : 'flex',
                minHeight : '100vh',
                alignItems : 'center',
                justifyContent :'center',
              },
  }
))
function App()
{
    const myclass = mySytle();
    return (
        <div className = {myclass.root}>
            <Router>
              <HomePage/>
            </Router>
        </div>
    );
}

export default App;
