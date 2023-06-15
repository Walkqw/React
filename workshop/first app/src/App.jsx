import React from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from "./User/Home/Home";
import UserLayout from "./User/UserLayout";
import Blog from "./User/Blog/Blog";
import AboutUs from './User/AboutUs/AboutUs';
import SingleBlog from './User/Blog/SingleBlog';
import AdminHome from './Admin/Home/AdminHome';
import AdminLayout from './Admin/AdminLayout';
import AddBlog from './Admin/Blog/AddBlog';
import EditBlog from './Admin/Blog/EditBlog';
import Login from './Auth/Login';







function App() {
  const [a, setA] = React.useState("Arjun");
  //React.useEffect(() => {
  // console.log("I am frst type useEffect");

  //});
  // React.useEffect(() => {
  // console.log("I am second type useEffect");

  // }, []); 
  React.useEffect(() => {
    console.log("I am third type useEffect");

  }, [a]);



  return (
    <>
      {/* <button onClick={() => setA('hey there')}>Change me</button>
      {a} */}
      <Router>
        <Routes>
          <Route path='/login' element={<Login/>} />

          <Route path="" element={<UserLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/Blog" element={<Blog />} />
            <Route path="/Blog/:id" element={<SingleBlog/>} />
          </Route>
           <Route path="/admin/" element={<AdminLayout />}>
            <Route path="home" element={<AdminHome />} />
            <Route path="add" element={<AddBlog />} />
            <Route path="edit/:id" element={<EditBlog />} />
            </Route>
        </Routes>
      </Router>

    </>
  );


}

export default App;
