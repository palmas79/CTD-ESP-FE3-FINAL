

import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import {route} from "./Components/utils/route"
import Home from "./Routes/Home"
import Contact from "./Routes/Contact"
import Favs from "./Routes/Favs"
import ErrorPage from "./Components/ErrorPage"

function App() {
  return (
      <div className="App">
          <Navbar/>          
          <Routes>
            <Route path={route.home} element={<Home/>}/>
            <Route path={route.contact} element={<Contact/>}/>
            <Route path={route.favs} element={<Favs/>}/>
            <Route path="*" element={<ErrorPage/>}/>
          </Routes>
          <Footer/>
      </div>
  );
}

export default App;
