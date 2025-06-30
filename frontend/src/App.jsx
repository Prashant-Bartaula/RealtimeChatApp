import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import {PrivateRoute} from "../src/components/PrivateRoute.jsx";
import Home from "./pages/Home.jsx";
import SignUp from "./pages/SignUp.jsx";
import SignIn from "./pages/SignIn.jsx";
import { Toaster } from "react-hot-toast";
import "./index.css"

export default function App(){
  const auth=false
  useEffect(() => {
    //check auth everytime page refreshes
  }, []);
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoute />}>
            <Route exact path='/' element={<Home/>}/>
        </Route>
        <Route path='/sign-up' element={auth?<Navigate to="/"/>:<SignUp/>}/>
        <Route path='/sign-in' element={auth?<Navigate to="/"/>:<SignIn/>}/>
      </Routes>
    </BrowserRouter>
    <Toaster/>
    </>
  );
}
