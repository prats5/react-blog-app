import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {Button } from 'reactstrap';
import Base from "./components/Base";
import  { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import About from "./pages/About";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Userdashboard from "./pages/user-routes/Userdashboard";
import ProfileInfo from "./pages/user-routes/ProfileInfo";
import Privateroute from "./components/Privateroute";
import PostPage from './pages/PostPage';
import Services from "./pages/Services";
import Categories from "./pages/Categories";

function App() {
  return (

    <BrowserRouter>
    <ToastContainer position="bottom-center" />
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/services" element={<Services />} />
      <Route path="/posts/:postId" element={<PostPage/>}/>
      <Route path="/categories/:categoryId" element={<Categories />} />


      <Route path="/user" element={<Privateroute />}>
            <Route path="dashboard" element={<Userdashboard />} />
            <Route path="profile-info/:userId" element={<ProfileInfo />} />
            </Route>

    </Routes>
    
    
    </BrowserRouter>
    
  );
}

export default App;
