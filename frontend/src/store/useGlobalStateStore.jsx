import {create} from "zustand";

export const useGlobalStateStore=create((set, get) => ({
    profileViewActive:false,
    profileViewData:[],
    chatviewActive:{
        state:false,
        user:null
    },

    toggleProfileView:()=>{
        set({profileViewActive:true})
    },
    setProfileViewData:(data)=>{
        set({profileViewData:data})
    },
    setChatViewActive:(data)=>{set({
        chatviewActive:{state:true, user:data}
    })}

}));