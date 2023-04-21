import { BrowserRouter, Routes, Route } from "react-router-dom";
import Chart from "./pages/Chart/Chart";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Chart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
