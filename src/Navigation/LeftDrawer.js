import { CssBaseline, Drawer, IconButton, makeStyles, useTheme, ListItem, List, ListItemText, ListItemIcon } from '@material-ui/core';
import clsx from 'clsx';
import React, { useState } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import { Toolbar } from '@material-ui/core';
import ChervonLeftIcon from '@material-ui/icons/ChevronLeft'
import ChervonRightIcon from '@material-ui/icons/ChevronRight'
import Home from '@material-ui/icons/Home'
import CommuteTwoToneIcon from '@material-ui/icons/CommuteTwoTone';
import DateRangeTwoToneIcon from '@material-ui/icons/DateRangeTwoTone';
import {Link} from 'react-router-dom';
const drawerWidth = 240;
const myStyle = makeStyles((theme) =>(
    {
        root :  {
                    display : 'flex',
                },
        
        centerbox :   {
                        position : 'fixed',
                        marginTop : '20% ',
                        width : drawerWidth,
                    },
        
        list :  {
                    position : 'absolute',
                    top : '50%',
                    transform : 'translateY(-50%)',
                    width : '100%',
                },
        menuButton :    {   
                            position : 'fixed',
                            zIndex : '10',
                            marginRight : theme.spacing(2),
                            borderWidth:1,
                            borderColor:'rgba(0,0,0,0.2)',
                            alignItems:'center',
                            justifyContent:'center',
                            backgroundColor : '#A9A9A9',
                            width:'100',
                            height:'100',
                            borderRadius:'50',
                        },

        hide :  { 
                    display : 'none',
                },

        drawer :    {   
                        width : drawerWidth,
                        flexShrink : 0,
                    },
        drawerPaper :   {
                            width : drawerWidth,
                            backgroundColor : "#ffca18",
                        },
        drawerHeader :  {
                            display : 'flex',
                            alignItems : 'center',
                            padding : theme.spacing(0,1),
                            justifyContent: 'flex-end',
                        },

        textcenter :    {
                            display : 'flex',
                            textAlign : 'center',
                        },
    }
))


function LeftDrawer(props) {
    const myclass = myStyle();
    const theme = useTheme();
    var [open, setOpen] = useState(false);

    function handleDrawer(value) {
        setOpen(value);
    }

    return (
        <div className={myclass.root}>
            <CssBaseline />
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="Drawer"
                    onClick={()=>handleDrawer(true)}
                    edge="start"
                    className={clsx(myclass.menuButton, open && myclass.hide)}
                >
                    <MenuIcon 
                        fontSize = 'large'
                        style = {{color : '#ffffff',  fontSizeLarge : 'large'}}
                        
                    />
                </IconButton>
            </Toolbar>
            <Drawer
                className = {myclass.drawer}
                variant = "persistent"
                anchor = "left"
                open = {open}
                classes ={{ paper : myclass.drawerPaper }}
            >
                <div className = {myclass.drawerHeader}>
                    <IconButton
                        onClick = {()=>handleDrawer(false)}
                    >
                        {theme.direction === 'ltr' ? <ChervonLeftIcon color = 'primary' /> : <ChervonRightIcon color = 'primary'/>}
                    </IconButton>
                </div>

                <List
                    className = {myclass.list}
                >
                    <ListItem 
                        button
                        component = {Link}
                        to = "/"
                        onClick = {()=>handleDrawer(false)}
                    >
                        <ListItemIcon>
                            <Home/>
                        </ListItemIcon>

                        <ListItemText className = {myclass.textcenter} primary="Home Page"/>
                    </ListItem>

                    <ListItem 
                        button
                        component = {Link}
                        to = "/carlist"
                        onClick = {()=>handleDrawer(false)} 
                    >

                        <ListItemIcon>
                            <CommuteTwoToneIcon/>
                        </ListItemIcon>

                        <ListItemText className = {myclass.textcenter} primary="Car List"/>
                    </ListItem>

                    <ListItem 
                        button
                    
                        onClick = {()=>handleDrawer(false)}
                    >

                        <ListItemIcon>
                            <DateRangeTwoToneIcon/>
                        </ListItemIcon>
                        
                        <ListItemText className = {myclass.textcenter} primary="Schedule"/>
                    </ListItem>

                </List>

            </Drawer>
        </div>
    );
}

export default LeftDrawer;