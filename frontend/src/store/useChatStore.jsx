import { create } from "zustand";
import { axiosInstance } from "../utils/axios";
import toast from "react-hot-toast";
import { useAuthStore } from "./useAuthStore";
import {useGlobalStateStore} from "./useGlobalStateStore";

export const useChatStore = create((set, get) => ({
  messages: [],
  users: [],
  isUsersLoading: false,
  isMessagesLoading: false,
  selectedUserId: null,

  getUsers: async () => {
    set({ isUsersLoading: true });
    try {
      const res = await axiosInstance.post("/messages/getUser");
      set({ users: res.data.usersWithRecentMessages });
    } catch (error) {
      toast.error("something went wrong");
    } finally {
      set({ isUsersLoading: false });
    }
  },
  sendMessage:async(data, receiverId)=>{
    const {messages}=get();
    try {
        const res=await axiosInstance.post(`/messages/sendMessage/${receiverId}`, data);
        toast.success(res.data.message);
        set({messages:[...messages, res.data.data]});
    } catch (error) {
      const message = error.response?.data?.message || "Something went wrong";
      toast.error(message);
    } 
    },
  getMessages:async(receiverId)=>{
    set({isMessagesLoading:true});
    try {
        const res=await axiosInstance.post(`/messages/getMessages/${receiverId}`);
        set({messages:res.data.messages}); 
    } catch (error) {
      const message = error.response?.data?.message || "Something went wrong";
      set({messages:[]});
      toast.error(message);
    } finally{
      set({isMessagesLoading:false});
    }
    },
    subscribeToMessage:()=>{
        const receiverId=useGlobalStateStore.getState().profileViewData._id;

        if(!receiverId) return ;

        const socket= useAuthStore.getState().socket;
        socket.on('message', (data)=>{
            const isMessageSentFromUser=data.senderId===receiverId;
            if(isMessageSentFromUser) {
              set({
                messages:[...get().messages, data]
              })
            }
        })
    },
    unsubscribeFromMessages: () => {
    const socket = useAuthStore.getState().socket;
    socket.off("newMessage");
  },

}));
