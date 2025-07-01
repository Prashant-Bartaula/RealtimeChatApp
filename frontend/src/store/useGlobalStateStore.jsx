import {create} from "zustand";

export const useGlobalStateStore=create((set, get) => ({
    profileViewActive:true,

    toggleProfileView:()=>{
        set({profileViewActive:true})
    }

}));