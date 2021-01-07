import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css';
import  'mdbreact/dist/css/mdb.css';

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

}

export default CarList;