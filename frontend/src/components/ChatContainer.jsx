import { useState } from "react";
import { useGlobalStateStore } from "../store/useGlobalStateStore";
import MessageInput from "./MessageInput";

export default function ChatContainer() {
  const {chatviewActive, profileViewData }=useGlobalStateStore();

  return (chatviewActive.state?(<div className="grow px-8 py-2 flex flex-col gap-5">
      {/* messages  */}
      <div className="flex grow flex-col gap-8 overflow-auto font-body font-light text-gray-700">

        {/* senders chat  */}
        <div className="flex flex-col items-end gap-3">

          {/* messages  */}
          <div className="relative max-w-[600px] flex items-center gap-2 bg-gray-200/80 p-3 rounded-xl">
            <p className="py-1 pl-2 pr-[60px] break-all">
              Hello prashant bartaula{" "}
            </p>
            <span className="absolute bottom-1 right-2 text-xs">11:45</span>
          </div>
          <div className="relative max-w-[600px] flex items-center gap-2 bg-gray-200/80 p-3 rounded-xl">
            <p className="py-1 pl-2 pr-[60px] break-all">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptatem vitae velit, sint, repellat aliquid, veniam a quas
              consequuntur id sit facere assumenda maiores est nemo at? Porro
              possimus incidunt nostrum.{" "}
            </p>
            <span className="absolute bottom-1 right-2 text-xs">11:45</span>
          </div>
        </div>

        {/* receivers chat  */}
        <div className="flex flex-col items-start gap-3">
          <div className="relative max-w-[600px] flex items-center gap-2 shadow-lg p-3 rounded-xl">
            <p className="py-1 pl-2 pr-[60px] break-all">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptatem vitae velit, sint, repellat aliquid, veniam a quas
              consequuntur id sit facere assumenda maiores est nemo at? Porro
              possimus incidunt nostrum.{" "}
            </p>
            <span className="absolute bottom-1 right-2 text-xs">11:45</span>
          </div>
          <div className="relative max-w-[600px] flex items-center gap-2 shadow-lg p-3 rounded-xl">
            <p className="py-1 pl-2 pr-[60px] break-all">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptatem vitae 
            </p>
            <span className="absolute bottom-1 right-2 text-xs">11:45</span>
          </div>
        </div>
        {/* receivers chat  */}
        <div className="flex flex-col items-start gap-3">
          <div className="relative max-w-[600px] flex items-center gap-2 shadow-lg p-3 rounded-xl">
            <p className="py-1 pl-2 pr-[60px] break-all">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptatem vitae velit, sint, repellat aliquid, veniam a quas
              consequuntur id sit facere assumenda maiores est nemo at? Porro
              possimus incidunt nostrum.{" "}
            </p>
            <span className="absolute bottom-1 right-2 text-xs">11:45</span>
          </div>
          <div className="relative max-w-[600px] flex items-center gap-2 shadow-lg p-3 rounded-xl">
            <p className="py-1 pl-2 pr-[60px] break-all">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptatem vitae 
            </p>
            <span className="absolute bottom-1 right-2 text-xs">11:45</span>
          </div>
        </div>
        {/* receivers chat  */}
        <div className="flex flex-col items-start gap-3">
          <div className="relative max-w-[600px] flex items-center gap-2 shadow-lg p-3 rounded-xl">
            <p className="py-1 pl-2 pr-[60px] break-all">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptatem vitae velit, sint, repellat aliquid, veniam a quas
              consequuntur id sit facere assumenda maiores est nemo at? Porro
              possimus incidunt nostrum.{" "}
            </p>
            <span className="absolute bottom-1 right-2 text-xs">11:45</span>
          </div>
          <div className="relative max-w-[600px] flex items-center gap-2 shadow-lg p-3 rounded-xl">
            <p className="py-1 pl-2 pr-[60px] break-all">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptatem vitae 
            </p>
            <span className="absolute bottom-1 right-2 text-xs">11:45</span>
          </div>
        </div>

      </div>

      {/* input message  */}
      <MessageInput user={profileViewData} />
    </div>):(<div className="grow px-8 py-2 flex-center  gap-5">
        
        <div className="flex flex-col">
            <h3>Select user to start chatting...</h3>
        </div>
    </div>));
}
