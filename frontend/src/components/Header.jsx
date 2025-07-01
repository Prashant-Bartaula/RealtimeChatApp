import {logo} from "../utils/images"
import { Link } from "react-router-dom"
import { useAuthStore } from "../store/useAuthStore"
import { useEffect } from "react";

export default function Header() {
  const {logOut, signOutSuccess}=useAuthStore();
  const handleLogout=()=>{
      logOut();
  }

  useEffect(() => {
    if (signOutSuccess) {
      useAuthStore.setState({ signOutSuccess: false }); // reset it so it doesn't auto-redirect again
    }
  }, [signOutSuccess])
  return (

    <div className="px-4 sm:px-6 md:px-10 py-5 bg-signUpBg flex justify-between gap-5 shadow-subtle h-[100px]">
        {/* logo wrapper  */}
        <div className='flex-center'>
                <img src={logo} alt="logo"  className="w-[180px]"/>
        </div>

        {/* log out and profile view section  */}
        <div className="flex items-center gap-6">
            
        {/* profile  */}
            <div className="relative w-[40px] h-[40px] rounded-full overflow-hidden">
                    <Link to='/' className="cursor-pointer"><img src="https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?90af0c8" alt="profile-image" className="object-cover h-full w-full"/></Link>
            </div>

        {/* logout button  */}
        <button className="bg-transparent text-gray-300 border transition-all duration-300 ease-linear border-white/10 hover:border-white/50 hover:text-white  rounded-2xl px-4 py-2" onClick={handleLogout}>Log out</button>
        </div>
    </div>
  )
}
