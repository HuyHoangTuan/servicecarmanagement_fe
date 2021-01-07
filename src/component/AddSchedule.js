import React, {useState} from 'react';
import { MDBModal, MDBModalBody, MDBModalFooter } from 'mdbreact';
import AddIcon from '@material-ui/icons/Add';
import { Button, makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
const myStyle = makeStyles((theme) =>(
    {
        modal : {
                    backgroundColor : 'transparent',
                },
        addbutton :    {
                        width: '1px',
                        height: '1%vh',
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
    const [TripID, setTripID] = useState();
    const [CarID, setCarID] = useState();
    const [Dpt, setDpt] = useState();
    const [Dst, setDst] = useState();
    const [DptTime, setDptTime] = useState();
    const [ArrTime, setArrTime] = useState();
    const [Cap, setCap] = useState();

    const handleTripIDChange = (event) => {
        setTripID(event.target.value);
      };
      const handleCarIDChange = (event) => {
        setCarID(event.target.value);
      };
      const handleDptChange = (event) => {
        setDpt(event.target.value);
      };
      const handleDstChange = (event) => {
        setDst(event.target.value);
      };
      const handleDptTimeChange = (event) => {
        setDptTime(event.target.value);
      };
      const handleArrTimeChange = (event) => {
        setArrTime(event.target.value);
      };
      const handleCapChange = (event) => {
        setCap(event.target.value);
      };
    function handleSubmit()
    {
        //console.log({TripID, CarID, Dpt, Dst, DptTime, ArrTime, Cap});
        axios
        .post("http://localhost:8080/schedule/add", {TripID:TripID, CarID:CarID, Dpt:Dpt, Dst:Dst, DptTime:DptTime, ArrTime:ArrTime, Cap:Cap})
        .then((response) => {
            console.log(response);
        })
        setArrTime(null);
        setCap(null);
        setCarID(null);
        setDpt(null);
        setDptTime(null);
        setDst(null);
        setTripID(null);
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
                    <h2>Thêm lịch trình</h2>
                    <TextField
                        required
                        label="ID chuyến"
                        helperText ="Number"
                        onChange = {handleTripIDChange}
                        >
                    </TextField>
                    <TextField
                    required
                    label="ID xe"
                    helperText ="Number"
                    onChange = {handleCarIDChange}
                    >
                    </TextField>
                    <TextField
                    required
                    label="Điểm đi "
                    helperText ="Text"
                    onChange = {handleDptChange}
                    >
                    </TextField>
                    <TextField
                    required
                    label="Điểm đến"
                    helperText ="Text"
                    onChange = {handleDstChange}
                    >
                    </TextField>
                    <TextField
                    required
<<<<<<< HEAD
                    //label="Thời gian đi"
                    type = "date"
                    onChange = {handleDptTimeChange}
=======
                    label="Giờ đi"
                    helperText ="hh/mm"
>>>>>>> c5fbadee405e5c420f9a4f72d027892e1202a360
                    >
                    </TextField>
                    <TextField
                    required
<<<<<<< HEAD
                    //label="Thời gian đến"
                    type = "date"
                    onChange = {handleArrTimeChange}
=======
                    label="Ngày đi"
                    helperText ="dd/mm/yyyy"
>>>>>>> c5fbadee405e5c420f9a4f72d027892e1202a360
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
                    onChange = {handleCapChange}
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
                    <Button 
                        color="primary"
                        onClick = {handleSubmit}
                        >
                            Save changes</Button>
                </MDBModalFooter>
            </MDBModal>
        </div>
    );
}

export default AddSchedule;