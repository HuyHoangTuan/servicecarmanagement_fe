import {makeStyles, useTheme } from '@material-ui/core';
import React from 'react';
import { useState } from 'react';
import LeftDrawer from '../Navigation/LeftDrawer';

const mySytle = makeStyles((theme) =>(
    {
        main :  {
                    display : 'flex',
                    flexDirection : 'row',
                },
        container1 :     {
                            position : 'relative',
                            backgroundColor : '#585858',
                            width : '50%',
                            height : '100vh',
                            animationTimingFunction : 'linear',
                            animationFillMode : 'forwards',
                            animation : '$ExitCon1 0.5s',
                            '&:hover' :     {
                                                animationTimingFunction : 'linear',
                                                animationFillMode : 'forwards',
                                                animation : '$Con1 0.5s',
                                            }
                        },
        container2 :    {
                            position : 'relative',
                            backgroundColor : '#ffca18',
                            width : '100%',
                            height : '100vh',
                        },
        "@keyframes Con1" :  {
                                "0%":   {
                                            width : '50%',
                                        },
                                "100%":     {
                                                width : '200%',
                                            },
                            },
        "@keyframes ExitCon1" :  {
                                "0%":   {
                                            width : '200%',
                                        },
                                "100%":     {
                                                width : '50%',
                                            },
                            },
    }
))
function HomePage(props)
{
    const myclass = mySytle();
    const theme = useTheme();
    const [X,setX] = useState(0);
    const [Y,setY] = useState(0);
    const handleMouseMove = event =>{
        setX(event.clientX);
        setY(event.clientY);
    }
    return(
        <div className = {myclass.main}>
            <div 
                className = {myclass.container1}
                onMouseMove = {handleMouseMove}
            >
                <LeftDrawer/>
            </div>
            <div 
                className = {myclass.container2}
                onMouseMove = {handleMouseMove}
            />
        </div>
    )

}

export default HomePage;
