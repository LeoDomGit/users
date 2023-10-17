import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import ChiTiet from "./pages/ChiTiet";
import NotFound from "./pages/NotFound";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/chitiet/:id" element={<ChiTiet/>}/>
          <Route path="/:id" element={<Detail />}/>
          <Route path="*" element={<NotFound/>}/>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
