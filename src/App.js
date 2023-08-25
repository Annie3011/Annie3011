import Header from "./component/Header";
import Banner from "./component/Banner";
import Whw from "./component/Whatwedo";
import Company from "./component/Company";
import Portfolio from "./component/Portfolio";
import Whychose from "./component/Whuchoose";
import Change1 from "./component/Change1";
import Arrayexample from "./component/Arrayexample";
import Todo from "./component/Todo";
import Loaddata from "./component/Loaddata";
import Pagination from "./component/Pagination";
import Basiccomp from "./component/Basiccomp";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import About from "./component/About";
import Home from "./component/Home";
import Contact from "./component/Contact";
import Functcomp from "./component/Functcomp";
import { Provider } from "react-redux";
import Counter from "./component/Counter";
import Store from "./component/Store";
import Login from "./Project/Login";
import Signin from "./Project/Signin";
import NavScrollExample from "./Project/Dashboard";
import Dashboard from "./Project/Dashboard";
import 'bootstrap/dist/css/bootstrap.min.css';
import Singlepage from "./Project/Navbar/Singlepage";
import Cart from "./Project/Navbar/Cart";
import { useState } from "react";
import Productspage from "./Project/Productspage";
import Submit from "./Project/Submit";
import Profile from "./Project/Navbar/Profile";
import Buynow from "./Project/Navbar/Buynow";
import Search from "./Project/Navbar/Search";
function App(){
  
  return(
    <>
     {/* <Header/>
    <Banner/>
    <Whw/>
    <Company/>
    <Portfolio/>
    <Whychose/>
    <Change1/> 
     <Arrayexample/>
   <Todo/> 
    <Loaddata/>
    <Pagination/>
    <Basiccomp/>
    <Functcomp/> 
 <Provider store={Store}>
    <BrowserRouter>
  <Link to='/home'>Home</Link>
  <Link to='/about'>About</Link>
  <Link to='/contact'>Contact</Link>
  <Routes>
    <Route path="/home" element={<Home/>}></Route>
    <Route path="/about" element={<About/>}></Route>
    <Route path="/contact" element={<Contact/>}></Route>
    <Route path="/redux" element={<Counter/>}></Route>
  </Routes>
 </BrowserRouter>
 </Provider>
   
    */}
   {/* <Login/>
   <Signin/>
   <NavScrollExample/> */}
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Login/>}></Route>
    <Route path="/login" element={<Signin/>}></Route>
    <Route path="/Dashboard" element={<Dashboard/>}></Route>
    <Route path="/product/:product_id" element={<Singlepage/>}></Route>
    <Route path="/Dashboard/Cart" element={<Cart/>}></Route>
    <Route path="/submit" element={<Submit/>}></Route>
    <Route path="/profile" element={<Profile/>}></Route>
    <Route path="/Buynow" element={<Buynow/>}></Route>
    <Route path="/Search" element={<Search/>}></Route>
    {/* <Route path="/Dashboard/productspage" element={<Productspage/>}></Route> */}
    <Route path="/Dashboard/tv" element={<Productspage values={"Electronics|HomeTheater,TV&Video|Televisions|SmartTelevisions"}/>}></Route>
    <Route path="/Dashboard/cables" element={<Productspage values={"Computers&Accessories|Accessories&Peripherals|Cables&Accessories|Cables|USBCables"}/>}></Route>
    <Route path="/Dashboard/remote" element={<Productspage values={"Electronics|HomeTheater,TV&Video|Accessories|RemoteControls"}/>}></Route>
    <Route path="/Dashboard/mobile" element={<Productspage values={"Electronics|Mobiles&Accessories|Smartphones&BasicMobiles|Smartphones"}/>}></Route>
    <Route path="/Dashboard/earphones" element={<Productspage values={"Electronics|Headphones,Earbuds&Accessories|Headphones|In-Ear"}/>}></Route>
    </Routes>
   </BrowserRouter>
    </>
  )
}
export default App;