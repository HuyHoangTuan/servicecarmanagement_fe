import React, {useState} from 'react';
import { MDBModal, MDBModalBody, MDBModalFooter } from 'mdbreact';
import AddIcon from '@material-ui/icons/Add';
import { Button, makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
const myStyle = makeStyles((theme) =>(
    {
        modal : {
                    backgroundColor : 'transparent',
                },
        
        addbutton :    {
                        position : 'relative',
                        fontSize : '50px',
                        top : '35px',
                        left : '-640px',
                        Color : 'lightgrey'
                //textAlign : 'top',
                    },
    }
))
function AddCarlist(props){

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
            <MDBModal  isOpen={open}     size = 'lg'>
                <MDBModalBody className = {myclass.modal}>
                    <h2>Thêm xe</h2>
                    <TextField
                        required
                        label="ID "
                        helperText ="Number"
                        >
                    </TextField>
                    <TextField
                    required
                    label="Lái xe"
                    helperText ="Text"
                    >
                    </TextField>
                    <TextField
                    required
                    label="Biển số "
                    helperText ="14D-3709"
                    >
                    </TextField>
                    <TextField
                    required
                    label="Hãng xe"
                    helperText ="Ford"
                    >
                    </TextField>
                    <TextField
                    required
                    label="Đời xe"
                    helperText ="yyyy"
                    >
                    </TextField>
                    <TextField
                    required
                    label="Loại xe"
                    helperText ="Xe chở khách/Xe chở hàng"
                    >
                    </TextField>
                    <TextField
                    required
                    label="Ngày đăng kiểm"
                    helperText ="dd/mm/yyyy"
                    >
                    </TextField>
                    <TextField
                    required
                    label="Đang hoạt động"
                    helperText ="Active/InActive"
                    >
                    </TextField>
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

export default AddCarlist;