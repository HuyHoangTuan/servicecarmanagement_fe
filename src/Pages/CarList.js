import { Button, makeStyles } from "@material-ui/core";
import { MDBCard, MDBCardBody, MDBDataTableV5 } from "mdbreact";
import React, { useEffect, useState } from "react";
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
import AddCarlist from "../component/AddCarlist";
import axios from "axios";
function CarList(params) {
  const tableIcons = {
    Add: (props) => <AddCarlist />,
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
  const columns = [
    { field: "id", title: "ID" },
    { field: "driver", title: "Lái xe" },
    { field: "license", title: "Biển số" },
    { field: "MnDate", title: "Đời xe" },
    { field: "brand", title: "Hãng xe" },
    { field: "register", title: "Ngày đăng kiểm" },
    { field: "state", title: "Đang hoạt động" },
  ];

  const [data,setData] = useState([]);
  /*function handleGet()
  {
    axios.get("http://localhost:8080/carlist/get")
      .then(response => setData(response.data))
  }
  useEffect(() => {
    handleGet();
  }, [])*/
  function handleDeletion(Data)
  {
    var DeleteIds = [];
    Data.forEach(element => { DeleteIds.push(element.TripID) 
    });
    axios
    .post("http://localhost:8080/carlist/delete", DeleteIds)
    .then((response) => {
        console.log(response);
    })
  }
  const components={
    Actions: props => {
      return [
            <AddCarlist key = {0}/>, 
            <Button key = {1}
                onClick = {() => handleDeletion(props.data)}
            >
                <DeleteIcon/>
            </Button>];
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
}

export default CarList;
