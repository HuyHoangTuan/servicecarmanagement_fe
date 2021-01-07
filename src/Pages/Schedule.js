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
    { field: "TripID", title: "ID chuyến" },
    { field: "CarID", title: "ID xe" },
    { field: "Dpt", title: "Điểm đi" },
    { field: "Dst", title: "Điểm đến" },
    { field: "DptTime", title: "Thời điểm đi" },
    { field: "ArrTime", title: "Thòi điểm đến" },
    { field: "Cap", title: "Số chỗ/ Trọng tải" },
  ];

  const data = [
    {
        //id,carid,depature,destination,startingtime,arrivingtime,capacity
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
<<<<<<< HEAD
  };
  return (
    <div>
      <MaterialTable
        icons={tableIcons}
        options={{ search: true }}
        title={"Danh sách lịch trình"}
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

>>>>>>> c5fbadee405e5c420f9a4f72d027892e1202a360
}

export default Schedule;
