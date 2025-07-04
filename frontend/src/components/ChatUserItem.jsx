import { useState } from "react";
import {useGlobalStateStore} from "../store/useGlobalStateStore";
import { useAuthStore } from "../store/useAuthStore";
import {formatTime} from "../utils/formatTime";

export default function ChatUserItem({user, id, handleChatClick, isSelected}) {

  const { toggleProfileView, setProfileViewData, setChatViewActive}=useGlobalStateStore();
  const {onlineUsers}=useAuthStore();

  const handleChatView=(e)=>{
    e.stopPropagation();
    handleChatClick(id);
    setProfileViewData(user);
    toggleProfileView();
    setChatViewActive(user);
  }

  return (
    <div className={`flex justify-between items-center gap-2 px-3 py-4 ${isSelected?'bg-sky-100/70':''}  hover:bg-sky-100/70 cursor-pointer rounded-xl`} onClick={handleChatView}>
      {/* content  */}
      <div className="flex items-center gap-2">
        {/* image wrap  */}
        <div className="flex-center w-[45px] h-[45px] rounded-full overflow-hidden">
          <img
            src={user?.profilePic}
            alt="profile-icon"
            className="object-cover h-full w-full"
          />
        </div>

        {/* username  */}
        <div className="flex flex-col gap-1 font-body itemce">
          <p className="font-medium font-body text-[17px] leading-[15px]  text-gray-800">
            {user?.fullName}
          </p>
          <span className="text-gray-400/80 font-medium text-[13px]">
            {user.recentMessage.text}
          </span>
        </div>
      </div>

      {/* time and status  */}
      <div className="flex flex-col items-end gap-2">
        <span className="text-gray-400 font-medium text-[13px]">{user.recentMessage?.createdAt?formatTime(user.recentMessage?.createdAt):null}</span>
        {onlineUsers.includes(user._id)?<span className="bg-green-500 w-[10px] h-[10px] inline-block rounded-full"></span>:<span className="bg-gray-300 w-[10px] h-[10px] inline-block rounded-full"></span>}
        
      </div>
    </div>
  );
}
