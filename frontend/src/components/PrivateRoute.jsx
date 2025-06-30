import { useState } from "react";
import {Outlet, Navigate} from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";

export const PrivateRoute = () => {
    const {authUser}=useAuthStore();
    return authUser===null?<Navigate to="/sign-up"/>:<Outlet/>
};