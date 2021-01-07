import { Button, makeStyles } from "@material-ui/core";
import { MDBCard, MDBCardBody, MDBDataTableV5 } from "mdbreact";
import React, { useState } from "react";
import { forwardRef } from "react";
import MaterialTable from "material-table";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import AddBox from "@material-ui/icons/AddBox";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";
import AddSchedule from "../component/AddSchedule";
import axios from "axios";

<<<<<<< HEAD
function Schedule(params) {
  const tableIcons = {
    Add: (props) => <AddSchedule />,
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => (
      <ChevronRight {...props} ref={ref} />
    )),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => (
      <ChevronLeft {...props} ref={ref} />
    )),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowUpward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => (
      <Remove {...props} ref={ref} />
    )),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
  };
  const [startErasing, SetStartErasing] = useState(true);
  function ToggleErase() {
    if (startErasing === true) SetStartErasing(false);
    else SetStartErasing(true);
  }
  const columns = [
    { field: "CarID", title: "ID chuyến" },
    { field: "", title: "ID xe" },
    { field: "Dpt", title: "Điểm đi" },
    { field: "Dst", title: "Điểm đến" },
    { field: "DptTime", title: "Thời điểm đi" },
    { field: "ArrTime", title: "Thòi điểm đến" },
    { field: "Cap", title: "Số chỗ/ Trọng tải" },
  ];

  const data = [
    {
      TripID: "1",
      CarID: "01",
      Dpt: "BK",
      DptTime: "27-12-2000 10:00:00",
      Dst: "NEU",
      ArrTime: "28-12-2000 10:00:00",
      Cap: "10 chỗ",
    },
    {
        TripID: "2",
        CarID: "01",
        Dpt: "BK",
        DptTime: "27-12-2000 10:00:00",
        Dst: "NEU",
        ArrTime: "28-12-2000 10:00:00",
        Cap: "20 chỗ",
      },
      {
        TripID: "3",
        CarID: "01",
        Dpt: "BK",
        DptTime: "27-12-2000 10:00:00",
        Dst: "NEU",
        ArrTime: "28-12-2000 10:00:00",
        Cap: "10 chỗ",
      },
  ];
  function handleDeletion(Data)
  {
    var DeleteIds = [];
    Data.forEach(element => { DeleteIds.push(element.TripID) 
    });
    axios
    .post("http://localhost:8080/schedule/delete", DeleteIds)
    .then((response) => {
        console.log(response);
    })
  }
  const components={
    Actions: props => {
      return (props.data == null) ? (
            <AddSchedule key = {0}/> ) : ( 
            <Button key = {1}
                onClick = {() => handleDeletion(props.data)}
            >
                <DeleteIcon/>
            </Button>);
    }
  };
  return (
    <div>
      <MaterialTable
        icons={tableIcons}
        options={{ search: true }}
        title={"Danh sách xe"}
        columns={columns}
        data={data}
        options={{
          selection: true,
        }}
        components={components}
      >
    </MaterialTable>
    </div>
  );
=======
import {Button, IconButton, makeStyles } from '@material-ui/core';
import { MDBCard, MDBCardBody , MDBCardHeader, MDBDataTableV5,  } from 'mdbreact';
import React from 'react';
import AddCarlist from '../component/AddCarlist';
const myStyle = makeStyles((theme) =>(
    {
        root :  {
                    display : "flex",
                    flexDirection : 'column',
                },
        contariner :    {
                            position : "fixed",
                            top : "0%",
                            width : "100%",
                            height : "100vh",
                            backgroundColor : "#585858",
                        },
        contariner1 :   {
                            position : "fixed",
                            width : "90%",
                            height : "100vh",
                            top : '5%',
                            left : '5%',
                            
                        },
        header :    {
                        position : 'absolute',
                        fontSize : '50px',
                        top : '3px',
                        left : '530px',
                        textAlign : 'left',
                    },
        addbutton : {
                        position : 'absolute',
                        top : '6%',
                        right : '30%',
                        borderWidth: theme.spacing(3),
                        width:  theme.spacing(3),
                        height: theme.spacing(3),
                        
                        borderRadius: theme.spacing(3),
                        
                        transform : 'scale(1.5)',
                    }
    }
))
function CarList(params) 
{
    const myclass = myStyle();
    const data =    {
                        columns :    [
                                        {
                                            label : "Id",
                                            field : "Id",
                                            //sort : 'asc',
                                            width : 10,
                                        },
                                        {
                                            label : "Lái Xe",
                                            field : "Name",
                                            //sort : 'asc',
                                            width : 300,
                                        },
                                        {
                                            label : "Biển số",
                                            field : "Code",
                                            //sort : 'asc',
                                            width : 100,
                                        },
                                        {
                                            label : "Hãng Xe",
                                            field : "Brand",
                                            //sort : 'asc',
                                            width : 100,
                                        },
                                        {
                                            label : "Đời Xe",
                                            field : "Age",
                                            //sort : 'asc',
                                            width : 100,
                                        },
                                        {
                                            label : "Loại xe",
                                            field : "Type",
                                            //sort : "asc",
                                            width : 100,
                                        },
                                        {
                                            label : "Ngày Đăng Kiểm",
                                            field : "CheckedDate",
                                            //sort : 'asc',
                                            width : 100,
                                        },
                                        {
                                            label : "Đang Hoạt Động",
                                            field : "Act",
                                            //sort : 'asc',
                                            width : 100,
                                        },
                                    ],
                        rows :   [
                                    {
                                        Id : "1",
                                        Name : "Huydz",
                                        Code : "14 X1-30607",
                                        Brand : "Huyndai",
                                        Age : "2019",
                                        CheckedDate : "27/12/2000",
                                        Type : "Xe chở hàng",
                                        Act : "Active",
                                    },
                                    {
                                        Id : "2",
                                        Name : "Ducnl",
                                        Code : "14 X1-123456",
                                        Brand : "Huyndai",
                                        Age : "2019",
                                        CheckedDate : "27/12/2000",
                                        Type : "Xe chở khách",
                                        Act : "Active",
                                    },{
                                        Id : "1",
                                        Name : "Huydz",
                                        Code : "14 X1-30607",
                                        Brand : "Huyndai",
                                        Age : "2019",
                                        CheckedDate : "27/12/2000",
                                        Act : "Active",
                                    },
                                    {
                                        Id : "1",
                                        Name : "Huydz",
                                        Code : "14 X1-30607",
                                        Brand : "Huyndai",
                                        Age : "2019",
                                        CheckedDate : "27/12/2000",
                                        Act : "Active",
                                    },
                                    {
                                        Id : "1",
                                        Name : "Huydz",
                                        Code : "14 X1-30607",
                                        Brand : "Huyndai",
                                        Age : "2019",
                                        CheckedDate : "27/12/2000",
                                        Act : "Active",
                                    },
                                    {
                                        Id : "1",
                                        Name : "Huydz",
                                        Code : "14 X1-30607",
                                        Brand : "Huyndai",
                                        Age : "2019",
                                        CheckedDate : "27/12/2000",
                                        Act : "Active",
                                    },
                                    {
                                        Id : "1",
                                        Name : "Huydz",
                                        Code : "14 X1-30607",
                                        Brand : "Huyndai",
                                        Age : "2019",
                                        CheckedDate : "27/12/2000",
                                        Act : "Active",
                                    },
                                    {
                                        Id : "1",
                                        Name : "Huydz",
                                        Code : "14 X1-30607",
                                        Brand : "Huyndai",
                                        Age : "2019",
                                        CheckedDate : "27/12/2000",
                                        Act : "Active",
                                    },
                                    {
                                        Id : "1",
                                        Name : "Huydz",
                                        Code : "14 X1-30607",
                                        Brand : "Huyndai",
                                        Age : "2019",
                                        CheckedDate : "27/12/2000",
                                        Act : "Active",
                                    },
                                    
                                ],

                    };
    return(
        <div className = {myclass.root}>
            <div className= {myclass.contariner}>
                <div
                    className = {myclass.contariner1}
                >
                    <MDBCard
                        style = {
                                    {
                                        position : "relative",
                                        width : "100%",
                                        height : "90vh",
                                    }
                                }
                    >
                        <MDBCardBody
                            style=  {
                                        {
                                            position : "relative",
                                            width : "100%",
                                            top : "3%",
                                        }
                                    }
                        >
                            <h3
                                className = {myclass.header}
                            >
                                Danh Sách Xe
                            </h3>   
                            <AddCarlist/> 
                            <MDBDataTableV5
                                info = {false}
                                striped
                                hover = {true}
                                bordered = {true}
                                entriesOptions={[5,6,7]} 
                                entries={7}
                                data = {data}
                                searchBottom = {false}
                                searchTop
                                barReverse
                                checkbox 
                                checkboxFirstColumn
                            >
                            </MDBDataTableV5>  
                        </MDBCardBody>
                    </MDBCard>
                </div>
            </div>
        </div>
    );

>>>>>>> c5fbadee405e5c420f9a4f72d027892e1202a360
}

export default CarList;
