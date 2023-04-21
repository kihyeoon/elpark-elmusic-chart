import { BrowserRouter, Routes, Route } from "react-router-dom";
import Chart from "./pages/Chart/Chart";
import AlbumDetail from "./pages/AlbumDetail/AlbumDetail";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Chart />} />
        <Route path="/:id" element={<AlbumDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
