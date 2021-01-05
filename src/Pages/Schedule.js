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
                            backgroundColor : "#ffca18",
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
                            rows: [
                                {
                                    IDc: "1",
                                    IDx: "01",
                                    start: "BK",
                                    timestart: "27-12-2000 10:00:00",
                                    arrive: "NEU",
                                    timearrive : "28-12-2000 10:00:00",
                                    date: "2011/04/25",
                                    capact: "10 chỗ",
                                },
                                {
                                    IDc: "1",
                                    IDx: "01",
                                    start: "BK",
                                    timestart: "28-12-2000 10:00:00",
                                    arrive: "NEU",
                                    timearrive : "01-01-2000 00:00:00",
                                    date: "2011/04/25",
                                    capact: "1000 kg",
                                },
                                {
                                    IDc: "1",
                                    IDx: "01",
                                    start: "BK",
                                    timestart: "10:00",
                                    arrive: "NEU",
                                    timearrive : "12:00",
                                    date: "2011/04/25",
                                    capact: "10",
                                },
                                {
                                    IDc: "1",
                                    IDx: "01",
                                    start: "BK",
                                    timestart: "10:00",
                                    arrive: "NEU",
                                    timearrive : "12:00",
                                    date: "2011/04/25",
                                    capact: "10",
                                },
                                {
                                    IDc: "1",
                                    IDx: "01",
                                    start: "BK",
                                    timestart: "10:00",
                                    arrive: "NEU",
                                    timearrive : "12:00",
                                    date: "2011/04/25",
                                    capact: "10",
                                },
                                {
                                    IDc: "1",
                                    IDx: "01",
                                    start: "BK",
                                    timestart: "10:00",
                                    arrive: "NEU",
                                    timearrive : "12:00",
                                    date: "2011/04/25",
                                    capact: "10",
                                },
                                {
                                    IDc: "1",
                                    IDx: "01",
                                    start: "BK",
                                    timestart: "10:00",
                                    arrive: "NEU",
                                    timearrive : "12:00",
                                    date: "2011/04/25",
                                    capact: "10",
                                },
                                {
                                    IDc: "1",
                                    IDx: "01",
                                    start: "BK",
                                    timestart: "10:00",
                                    arrive: "NEU",
                                    timearrive : "12:00",
                                    date: "2011/04/25",
                                    capact: "10",
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
                            <h1> Lịch trình  </h1>
                            <MDBDataTableV5
                                sortable = {false}
                                striped
                                fixed
                                searching
                                hover = {true}
                                bordered = {true}
                                entriesOptions={[6]} 
                                entries = {6}
                                data = {data}
                                fullPagination 
                            />
                            <div>
                                <button className = "button1">  <AddIcon/> </button>
                                <button className = "button1"> <ChangeHistoryIcon/> </button>
                                <button className = "button1"> <DeleteForeverOutlinedIcon/> </button>
                                </div> 
                        </MDBCardBody>
                    </MDBCard>
                </div>
            </div>
        </div>
    );

}

export default CarList;