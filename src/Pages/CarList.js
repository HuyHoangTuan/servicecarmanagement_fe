import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css';
import'mdbreact/dist/css/mdb.css';

import {makeStyles } from '@material-ui/core';
import { MDBCard, MDBCardBody , MDBDataTableV5,  } from 'mdbreact';
import React from 'react';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import AddIcon from '@material-ui/icons/Add';
import ChangeHistoryIcon from '@material-ui/icons/ChangeHistory';
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
                                            sort : 'asc',
                                            width : 150,
                                        },
                                        {
                                            label : "Lái Xe",
                                            field : "Name",
                                            sort : 'asc',
                                            width : 150,
                                        },
                                        {
                                            label : "Biển số",
                                            field : "Code",
                                            sort : 'asc',
                                            width : 150,
                                        },
                                        {
                                            label : "Hãng Xe",
                                            field : "Brand",
                                            sort : 'asc',
                                            width : 150,
                                        },
                                        {
                                            label : "Đời Xe",
                                            field : "Age",
                                            sort : 'asc',
                                            width : 150,
                                        },
                                        {
                                            label : "Loại xe",
                                            field : "Type",
                                            sort : "asc",
                                            width : 150,
                                        },
                                        {
                                            label : "Ngày Đăng Kiểm",
                                            field : "CheckedDate",
                                            sort : 'asc',
                                            width : 150,
                                        },
                                        {
                                            label : "Đang Hoạt Động",
                                            field : "Act",
                                            sort : 'asc',
                                            width : 150,
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
                                            top : "5%",
                                        }
                                    }
                        >
                            <h1> Danh sách xe </h1>   
                            <MDBDataTableV5
                                sortable = {false}
                                striped
                                fixed
                                searching
                                hover = {true}
                                bordered = {true}
                                entriesOptions={[6]} 
                                entries={6}
                                data = {data}
                                fullPagination 
                            />
                            <div>
                                <button className = "button2">  <AddIcon/> </button>
                                <button className = "button2"> <ChangeHistoryIcon/> </button>
                                <button className = "button2"> <DeleteForeverOutlinedIcon/> </button>
                                </div>
                        </MDBCardBody>
                    </MDBCard>
                </div>
            </div>
        </div>
    );

}

export default CarList;