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
                        //textAlign : 'top',
                        color : '#ffca18',
                        //backgroundColor : 'red'
                    },
    }
))
function AddSchedule(props){

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
                className = {myclass.addbutton}
            > 
                <AddIcon/>
            </Button>
            <MDBModal  isOpen={open}     size = 'lg'>
                <MDBModalBody className = {myclass.modal}>
                    <h2>Thêm lịch trình</h2>
                    <TextField
                        required
                        label="ID chuyến"
                        helperText ="Number"
                        >
                    </TextField>
                    <TextField
                    required
                    label="ID xe"
                    helperText ="Number"
                    >
                    </TextField>
                    <TextField
                    required
                    label="Điểm đi "
                    helperText ="Text"
                    >
                    </TextField>
                    <TextField
                    required
                    label="Điểm đến"
                    helperText ="Text"
                    >
                    </TextField>
                    <TextField
                    required
                    label="Giờ đi"
                    helperText ="hh/mm"
                    >
                    </TextField>
                    <TextField
                    required
                    label="Ngày đi"
                    helperText ="dd/mm/yyyy"
                    >
                    </TextField>
                    <TextField
                    required
                    label="Ngày đến"
                    helperText ="dd/mm/yyyy"
                    >
                    </TextField>
                    <TextField
                    required
                    label="Ngày đến"
                    helperText ="dd/mm/yyyy"
                    >
                    </TextField>    
                    <TextField
                    required
                    label="Số chỗ/ Trọng tải"
                    helperText ="Người/Kg"
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

export default AddSchedule;