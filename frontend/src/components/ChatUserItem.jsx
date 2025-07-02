import {useGlobalStateStore} from "../store/useGlobalStateStore";

export default function ChatUserItem({user}) {
  const { toggleProfileView, setProfileViewData}=useGlobalStateStore();
  const handleClick=(e)=>{
    e.stopPropagation();
    setProfileViewData(user);
    toggleProfileView();
  }

  return (
    <div className="flex justify-between items-center gap-2 px-3 py-4 bg-sky-100/70 hover:bg-sky-100/70 cursor-pointer rounded-xl">
      {/* content  */}
      <div className="flex items-center gap-2">
        {/* image wrap  */}
        <div className="flex-center w-[45px] h-[45px] rounded-full overflow-hidden" onClick={(e)=>handleClick(e)}>
          <img
            src="https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?90af0c8"
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
            Hi there sapana
          </span>
        </div>
      </div>

      {/* time and status  */}
      <div className="flex flex-col items-end gap-2">
        <span className="text-gray-400 font-medium text-[13px]">11:23</span>
        <span className="bg-green-500 w-[10px] h-[10px] inline-block rounded-full"></span>
      </div>
    </div>
  );
}
