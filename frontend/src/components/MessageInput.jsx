import { useState } from "react";
import { MdSend } from "react-icons/md";
import { useChatStore } from "../store/useChatStore";
export default function MessageInput({user}) {
  const [text, setText] = useState("");
  const {sendMessage}=useChatStore();

    const handleSubmit=(e)=>{
        e.preventDefault();
        sendMessage({text}, user._id);
        setText('')
    }

  return (
    <form className="flex justify-between items-center shadow-float px-4 py-3 rounded-2xl" onSubmit={(e) => handleSubmit(e)}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="grow max-w-[700px]  rounded-2xl"
        type="text"
        placeholder="Type a message..."
        name="message"
        id="message"
      />

      <button>
        <MdSend size={20} />
      </button>
    </form>
  );
}
