import { BrowserRouter, Route, Routes } from "react-router-dom";
import Blog from "../pages/blog";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
