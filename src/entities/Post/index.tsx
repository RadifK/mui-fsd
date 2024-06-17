import { FC } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Typography } from "@mui/material";

interface IPost {
  title: string;
  text: string;
}

const Post: FC<IPost> = ({ title, text }) => {
  return (
    <Card variant="outlined" sx={{ width: "100%" }}>
      <CardContent>
        <Typography sx={{ fontSize: 18 }}>{title}</Typography>
        <Typography sx={{ fontSize: 14 }}>{text}</Typography>
      </CardContent>
    </Card>
  );
};

export default Post;
