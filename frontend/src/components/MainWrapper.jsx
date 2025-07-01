import Sidebar from "../components/Sidebar";
import ChatContainer from "../components/ChatContainer";
import ProfileView from "../components/ProfileView";

export default function MainWrapper() {
  return (
    <section className="flex py-[20px] bg-secondaryBg h-[calc(100vh-100px)]">
            <Sidebar/>
            <ChatContainer/>
            <ProfileView/>
    </section>
  )
}
