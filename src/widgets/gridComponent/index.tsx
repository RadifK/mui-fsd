import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import {
  Grid,
  VirtualTable,
  TableHeaderRow,
} from "@devexpress/dx-react-grid-material-ui";
interface IRow {
  id: number;
  name: string;
  gender: string;
  city: string;
  car: string;
}
const getRowId = (row: IRow) => row.id;
const rowsArray: IRow[] = [];
for (let i = 0; i < 100000; i++) {
  rowsArray[i] = {
    id: i + 1,
    name: "Sandra",
    gender: "female",
    city: "Las Vegas",
    car: "Audi A4",
  };
}

const GridComponent = () => {
  const [columns] = useState([
    { name: "id", title: "ID" },
    { name: "name", title: "Name" },
    { name: "gender", title: "Gender" },
    { name: "city", title: "City" },
    { name: "car", title: "Car" },
  ]);

  const [rows] = useState(rowsArray);

  return (
    <Paper>
      <Grid rows={rows} columns={columns} getRowId={getRowId}>
        <VirtualTable />
        <TableHeaderRow />
      </Grid>
    </Paper>
  );
};

export default GridComponent;
