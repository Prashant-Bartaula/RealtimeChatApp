import { useState } from "react";
import {Outlet, Navigate} from "react-router-dom";

export const PrivateRoute = () => {
    const auth=false
    return auth?<Outlet/>:<Navigate to="/sign-up"/>
};