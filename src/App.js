import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import DetailProfile from "./DetailProfile";

export default function App() {
 return(
  <>
  <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/detailProfile/:id" element={<DetailProfile />}/>
  </Routes>
  </>
 );
}