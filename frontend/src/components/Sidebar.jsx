import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MdSearch } from "react-icons/md";
import ChatUserItem from "../components/ChatUserItem";

export default function Sidebar() {
    const [chatTab, setChatTab] = useState('dm');

    const handleTabChange=(e)=>{
        setChatTab(e.target.id)
    }

  return (
    <div className="grow max-w-[400px] px-7 py-7 flex flex-col gap-10">
      {/* your profile  */}
      <div className="flex gap-4 items-center">
        {/* image wrap  */}
        <div className="flex-center w-[80px] h-[80px] rounded-full overflow-hidden">
          <img
            src="https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?90af0c8"
            alt="profile-image"
            className="object-cover h-full w-full"
          />
        </div>

        {/* username and email  */}
        <div className="flex flex-col ">
          <p className="font-medium font-body text-lg leading-[15px] text-gray-800">
            Prashant Bartaula
          </p>
          <span className="text-gray-500">user@gmail.com</span>

          {/* active status toggle  */}
          <p className="mt-2 text-gray-400 text-sm">
            <span className="bg-green-500 w-[10px] h-[10px] inline-block rounded-full mr-3"></span>
            Active
          </p>
        </div>
      </div>

      {/* search contacts  */}
      <form className=" bg-gray-200/50 rounded-2xl px-4 py-3">
        <div className="flex justify-between items-center">
          <input
            type="text"
            name="searchTerm"
            id="searchTerm"
            placeholder="Search contacts"
          />
          <span className="text-gray-400">
            <MdSearch />
          </span>
        </div>
      </form>

      {/* chat list container */}
      <div className="flex flex-col gap-3">
            <h6 className="text-gray-800 font-medium font-body">Chats</h6>
            <div className="flex gap-8 text-start text-gray-800 ">
                <button onClick={(e)=>handleTabChange(e)} className={`cursor-pointer  ${chatTab === 'dm' ? 'border-sky-500 border-b-[2px]' : ''}`} id="dm">Dm</button>
                <button onClick={(e)=>handleTabChange(e)} className={`cursor-pointer  ${chatTab === 'group' ? 'border-sky-500 border-b-[2px]' : ''}`} id="group">Groups</button>
            </div>

            {/* chat user item  container*/}
            <div className="flex flex-col gap-1  mt-4">
                <ChatUserItem/>
                <ChatUserItem/>
                <ChatUserItem/>
            </div>
      </div>
    </div>
  );
}
