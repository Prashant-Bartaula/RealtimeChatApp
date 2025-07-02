import {create} from "zustand";

export const useGlobalStateStore=create((set, get) => ({
    profileViewActive:false,
    profileViewData:[],


    toggleProfileView:()=>{
        set({profileViewActive:true})
    },
    setProfileViewData:(data)=>{
        set({profileViewData:data})
    }

}));