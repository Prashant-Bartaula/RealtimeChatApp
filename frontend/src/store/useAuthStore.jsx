import { axiosInstance } from "../utils/axios";
import { create } from "zustand";
import { Navigate } from "react-router-dom";
import toast from "react-hot-toast";


export const useAuthStore = create((set, get) => ({
  authUser: null,
  isSigningUp: false,
  signUpSuccess: false,
  isSigningIn: false,
  signInSuccess: false,
  signOutSuccess:false,
  isCheckingAuth: true,

  checkAuth: async () => {
    
    try {
      const res = await axiosInstance.post("/auth/check-auth");
      set({ authUser: res.data.user });
    } catch (error) {
      // toast.error(error.message);
      set({ authUser: null });
    } finally {
      set({ isCheckingAuth: false });
    }
  },
  signUp: async (data) => {
    set({ isSigningUp: true });
    try {
      const res = await axiosInstance.post("/auth/signup", data);
      //axios handles errors directly in the catch block so this wont work
      //   if(!res.ok){
      //     console.log(res.data.message);
      //     return toast.error(res.data.message);
      //   }
      set({signUpSuccess: true});
      toast.success("user registered successfully");
      
    } catch (error) {
      const message = error.response?.data?.message || "Something went wrong";
      toast.error(message);
      set({ authUser: null, signUpSuccess: false });
    } finally {
      set({ isSigningUp: false });
    }
  },
  signIn: async (data) => {
    set({ isSigningIn: true });
    console.log('hello')
    try {
      const res = await axiosInstance.post("/auth/login", data);
      toast.success("logged in successfully");
      set({ authUser: res.data.user });
      Navigate('/')
    } catch (error) {
      const message = error.response?.data?.message || "Something went wrong";
      toast.error(message);
      set({ authUser: null });
    } finally {
      set({ isSigningIn: false });
    }
  },
  logOut:async()=>{
    try {
      const res=await axiosInstance.post('/auth/logout');
      toast.success("logged out successfully");
      set({authUser:null, signOutSuccess:true});
    } catch (error) {
        toast.error('Something went wrong');
    }
  },
}));
