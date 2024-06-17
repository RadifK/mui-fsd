import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import {
  Grid,
  VirtualTable,
  TableHeaderRow,
  SearchPanel,
  Toolbar,
} from "@devexpress/dx-react-grid-material-ui";
import {
  SortingState,
  IntegratedSorting,
  Sorting,
  SearchState,
  IntegratedFiltering,
} from "@devexpress/dx-react-grid";
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
    name: `name${i}`,
    gender: `gender${i}`,
    city: `city${i}`,
    car: `car${i}`,
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

  const [rows, setRows] = useState(rowsArray);
  const [sorting, setSorting] = useState<Sorting[]>([
    { columnName: "city", direction: "asc" },
  ]);
  const [searchValue, setSearchState] = useState("");

  return (
    <Paper>
      <Grid rows={rows} columns={columns} getRowId={getRowId}>
        <SearchState value={searchValue} onValueChange={setSearchState} />
        <SortingState sorting={sorting} onSortingChange={setSorting} />
        <IntegratedSorting />
        <IntegratedFiltering />
        <VirtualTable />
        <TableHeaderRow />
        <Toolbar />
        <SearchPanel />
      </Grid>
    </Paper>
  );
};

export default GridComponent;
