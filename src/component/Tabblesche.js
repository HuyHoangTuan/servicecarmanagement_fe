import {makeStyles } from '@material-ui/core';
import { MDBCard, MDBCardBody , MDBDataTableV5,  } from 'mdbreact';
import React from 'react';

const myStyle = makeStyles((theme) =>(
    {
        root :  {
                    display : "flex",
                    flexDirection : 'column',
                },
        contariner :    {
                            position : "relative",
                            top : "0%",
                            width : "100%",
                            height : "100%",
                        },
        contariner1 :   {
                            position : "relative",
                            width : "90%",
                            height : "100%",
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
                                label: "ID chuyến",
                                field: "IDc",
                                sort: "asc",
                                width: 150,
                              },
                              {
                                label: "ID xe",
                                field: "IDx",
                                sort: "asc",
                                width: 200,
                              },
                              {
                                label: "Điểm đi",
                                field: "start",
                                sort: "asc",
                                width: 200,
                              },
                              {
                                label: "Điểm đến",
                                field: "arrive",
                                sort: "asc",
                                width: 270,
                              },
                              {
                                label: "Thời gian đi",
                                field: "timestart",
                                sort: "asc",
                                width: 200,
                              },
                              
                              {
                                label: "Thời gian đến",
                                field: "timearrive",
                                sort: "asc",
                                width: 200,
                              },
                              
                              {
                                label: "Số chỗ/Trọng tải",
                                field: "capact",
                                sort: "asc",
                                width: 200,
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
                                        height : "30%",
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
                            <h1> Thêm lịch trình  </h1>
                            <MDBDataTableV5
                                sortable = {false}
                                striped
                                fixed
                                searching = {false}
                                hover = {true}
                                bordered = {true}
                                data = {data}
                                fullPagination = {false}
                            />
                        </MDBCardBody>
                    </MDBCard>
                </div>
            </div>
        </div>
    );

}

export default CarList;