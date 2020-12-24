import {makeStyles} from '@material-ui/core';
import React from 'react';

const mySytle = makeStyles((theme) =>(
    {
        main :  {
                    display : 'flex',
                    flexDirection : 'column',
                },
        drawer :    {
                        display : 'fixed',
                        top : '0%',
                        left : '0%',
                    },
        container1 :     {
                            position : 'fixed',
                            top :'0%',
                            backgroundColor : '#585858',
                            width : '50%',
                            height : '100vh',
                            zIndex : '1',
                            transition : 'width 0.5s linear, z-index 0s linear 0.5s',
                            '&:hover' :     {           
                                                width : '70%',          
                                                zIndex : '5',
                                                transition : 'width 0.5s linear 0.5s, z-index 0s linear 0.5s'   ,          
                                            }
                        },
        container2 :    {
                            top: '0%',
                            right: '0%',
                            position : 'fixed',
                            backgroundColor : '#ffca18',
                            width : '50%',
                            height : '100vh',
                            zIndex : '1',
                            transition : 'width 0.5s linear, z-index 0s linear 0.5s',
                            '&:hover' :     {
                                                width : '70%',          
                                                zIndex : '5',
                                                transition : 'width 0.5s linear 0.5s, z-index 0s linear 0.5s'   ,          
                                            }
                        },
    }
))
function HomePage(props)
{
    const myclass = mySytle();
    return(
        <div className = {myclass.main}>
            <div 
                className = {myclass.container1}
            >      
            </div>
            
            <div 
                className = {myclass.container2}
            >
            </div>
        </div>
    )

}

export default HomePage;
