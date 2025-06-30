import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import {PrivateRoute} from "../src/components/PrivateRoute.jsx";
import Home from "./pages/Home.jsx";
import SignUp from "./pages/SignUp.jsx";
import SignIn from "./pages/SignIn.jsx";
import { Toaster } from "react-hot-toast";
import { useAuthStore } from "./store/useAuthStore.jsx";
import "./index.css"

export default function App(){
  const {authUser, checkAuth}=useAuthStore();

  useEffect(() => {
    //check auth everytime page refreshes
    checkAuth();
  }, []);
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoute />}>
            <Route exact path='/' element={<Home/>}/>
        </Route>
        <Route path='/sign-up' element={authUser===null?<SignUp/>:<Navigate to="/" />}/>
        <Route path='/sign-in' element={authUser===null?<SignIn/>:<Navigate to="/" />}/>
      </Routes>
    </BrowserRouter>
    <Toaster/>
    </>
  );
}
