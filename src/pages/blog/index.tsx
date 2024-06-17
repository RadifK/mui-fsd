import { Container } from "@mui/material";
import GridComponent from "../../widgets/gridComponent";

export interface IRow {
  id: number;
  product: string;
  owner: string;
}

export interface IColumn {
  name: string;
  title: string;
}

const Blog = () => {
  return <GridComponent />;
};

export default Blog;
