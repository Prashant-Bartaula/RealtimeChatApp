import { MdSend } from "react-icons/md";

export default function ChatContainer() {
  return (
    <div className="grow px-3 py-5 flex flex-col gap-3">
      {/* messages  */}
      <div className="flex grow flex-col gap-8 font-body font-light text-gray-700">
        
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

      </div>

      {/* input message  */}
      <div className="flex justify-between items-center shadow-float px-4 py-3 rounded-2xl">
        <input
          className="grow max-w-[500px] bg-sky-100/30 rounded-2xl"
          type="text"
          placeholder="Type a message..."
          name="message"
          id="message"
        />

        <button>
          <MdSend size={20} />
        </button>
      </div>
    </div>
  );
}
