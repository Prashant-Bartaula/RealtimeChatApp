import { create } from "zustand";
import { axiosInstance } from "../utils/axios";
import toast from "react-hot-toast";

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
      set({ users: res.data.users });
    } catch (error) {
      toast.error("something went wrong");
    } finally {
      set({ isUsersLoading: false });
    }
  },
}));
