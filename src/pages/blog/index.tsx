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

const rows: IRow[] = [];
const columns: IColumn[] = [
  { name: "id", title: "ID" },
  { name: "name", title: "Name" },
  { name: "gender", title: "Gender" },
  { name: "city", title: "City" },
  { name: "car", title: "Car" },
];

const Blog = () => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "16px",
      }}
    >
      {/* {isLoading
        ? "Loading..."
        : error
        ? "Error"
        : !data
        ? "Нет постов"
        : data.map((el) => (
            <Box maxWidth={500} width={"100%"} alignItems={"center"}>
              <Post title={el.title} text={el.text} />
            </Box>
          ))} */}
      <GridComponent />
    </Container>
  );
};

export default Blog;
