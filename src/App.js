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
   <Login/>
   <Signin/>
   <NavScrollExample/>
    </>
  )
}
export default App;