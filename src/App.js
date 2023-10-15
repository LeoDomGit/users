import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import ChiTiet from "./pages/ChiTiet";
import * as $ from 'jquery'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/:id" element={<Detail/>}/>
          <Route path="/chitiet/:id" element={<ChiTiet/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;