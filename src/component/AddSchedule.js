import React, {useState} from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import AddIcon from '@material-ui/icons/Add';
import { Button, makeStyles } from '@material-ui/core';

import TableSchedule from '../component/Tabblesche';
const myStyle = makeStyles((theme) =>(
    {
        modal : {
                    backgroundColor : 'transparent',
                },
    }
))
function ModalPage(props){

    const myclass = myStyle();
    const [open,setOpen] =useState(false);
    const handleOpenAdd = () => {
        setOpen(true);
    }
    const handleCloseAdd = () => {
        setOpen(false)
    }
    return (
        <div>
            <Button
                onClick = {handleOpenAdd}
            > 
                <AddIcon/>
            </Button>
            <MDBModal 
                isOpen={open} 
                size = 'lg'
            >
                <MDBModalBody
                    className = {myclass.modal}
                    
                >
   
                </MDBModalBody>
                <MDBModalFooter>
                    <Button 
                        color="secondary" 
                        onClick = {handleCloseAdd}
                    >
                        Close
                    </Button>
                    <Button color="primary">Save changes</Button>
                </MDBModalFooter>
            </MDBModal>
        </div>
    );
}

export default ModalPage;