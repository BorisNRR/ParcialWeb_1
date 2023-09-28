import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Detail from "./Detail";
import Home from "./Home";
import Vehiculo from "./vehiculo";
import NavBar from "./navbar";
import { Container } from "react-bootstrap";

function App() {
 return (
   <div className="App">
     <NavBar></NavBar>
     <BrowserRouter>
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/vehiculos" element={<Vehiculo />} />
         <Route path="/home/:vehiculoCarModel" element={<Detail />} />
       </Routes>
     </BrowserRouter>
   </div>
 );
}

export default App;