import { useState, useEffect, useRef } from "react";
import { useGlobalStateStore } from "../store/useGlobalStateStore";
import { useChatStore } from "../store/useChatStore";
import MessageInput from "./MessageInput";
import { formatTime } from "../utils/formatTime";
import {chatImage} from "../utils/images"

export default function ChatContainer() {
  const {chatviewActive, profileViewData }=useGlobalStateStore();
  const {messages, getMessages, subscribeToMessage, unsubscribeFromMessages}=useChatStore();
  const lastMessageRef=useRef(null);

  useEffect(() => {
    if(chatviewActive.state===true && profileViewData){
      getMessages(profileViewData._id);

      subscribeToMessage();

      return ()=>{unsubscribeFromMessages()};
    }
  }, [profileViewData, getMessages, subscribeToMessage, unsubscribeFromMessages, chatviewActive.state]);

  useEffect(() => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);



  return (chatviewActive.state?(<div className="grow px-8 py-2 flex flex-col gap-5">
      {/* messages  */}
      <div className="flex grow flex-col  gap-6 min-h-0 overflow-auto  font-body font-light text-gray-700">

      {messages.map((message, index) => (
        message.senderId !== profileViewData._id ? (
          <div className="flex flex-col items-end gap-3" key={index} ref={lastMessageRef}>
            <div className="relative max-w-[600px] flex items-center gap-2 bg-gray-200/80 p-3 rounded-xl">
              <p className="py-1 pl-2 pr-[60px] break-all">
                {message.text}
              </p>
              <span className="absolute bottom-1 right-2 text-xs">
                {formatTime(message.createdAt)}
              </span>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-start gap-3" key={index} ref={lastMessageRef}>
            <div className="relative max-w-[600px] flex items-center gap-2 shadow-md p-3 rounded-xl">
              <p className="py-1 pl-2 pr-[60px] break-all">
                {message.text}
              </p>
              <span className="absolute bottom-1 right-2 text-xs">
                {formatTime(message.createdAt)}
              </span>
            </div>
          </div>
        )
      ))}

      </div>

      {/* input message  */}
      <MessageInput user={profileViewData} />
    </div>):(<div className="grow px-8 py-2 flex-center  gap-5">
        
        <div className="flex flex-col gap-5 text-center">
          <div className="flex-center">
            <img src={chatImage} alt="chat-image"  className="w-[300px] "/>
          </div>
            <h6 className="font-body font-base text-gray-500">Select a chat user to start conversation</h6>
        </div>
    </div>));
}
