import {makeStyles } from '@material-ui/core';
import { MDBCard, MDBCardBody , MDBDataTableV5,  } from 'mdbreact';
import React from 'react';
import AddSchedule from '../component/AddSchedule';
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
        header :    {
                        position : 'absolute',
                        fontSize : '50px',
                        top : '3px',
                        left : '450px',
                        textAlign : 'left',
        },
    }
))
function Schedule(params) 
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
                                label: "Giờ đi",
                                field: "startinghour",
                                sort: "asc",
                                width: 200,
                              },
                              {
                                label: "Ngày đi",
                                field: "startingday",
                                sort: "asc",
                                width: 200,
                              },                              {
                                label: "Giờ đến",
                                field: "arrivinghour",
                                sort: "asc",
                                width: 200,
                              },
                              
                              {
                                label: "Ngày đến",
                                field: "arrivingday",
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
                                    startinghour: "10:00",
                                    arrive: "NEU",
                                    arrivinghour : "12:00",
                                    startingday: "2011/04/25",
                                    arrivingday: "2011/04/25",
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
                                        //top : '-10px',
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
                                Danh Sách Lịch Trình
                            </h3>   
                            <AddSchedule />
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
                            />
                        </MDBCardBody>
                    </MDBCard>
                </div>
            </div>
        </div>
    );

}

export default Schedule;