import { useState, useEffect } from "react";
import { GiCrossedSabres } from "react-icons/gi";
import {useGlobalStateStore} from "../store/useGlobalStateStore";
export default function ProfileView() {
  const {profileViewActive, profileViewData}=useGlobalStateStore();

  const handleDisable = () => {
    useGlobalStateStore.setState({profileViewActive: false});
  };
  
  return (
    <div className={`${profileViewActive?'block':'hidden '} border-l border-gray-200 relative w-[350px] px-4 py-5`}>
      {/* cross button  */}
      <button
        className="absolute top-2 right-8 text-2xl"
        onClick={handleDisable}
      >
        <GiCrossedSabres />
      </button>

      {/* content  */}
      <div className="h-full max-h-[700px] flex flex-col justify-center gap-5">

        {/* image wrap and usernam2*/}
        <div className="flex flex-col items-center gap-5">
          <div className="flex-center w-[200px] h-[200px] rounded-full overflow-hidden">
            <img
              src="https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?90af0c8"
              alt="profile-image"
              className="object-cover h-full w-full"
            />
          </div>
          <h6 className="font-heading font-medium">{profileViewData?.fullName}</h6>
        </div>

        {/* other content  */}
        <div className="flex flex-col gap-4 mt-5">
            <div className="flex flex-col gap-[1px]">
                  <p className="font-body font-medium">Phone</p>
                  <span className="text-gray-500">+91 123456789</span>
            </div>
            <div className="flex flex-col gap-[1px]">
                  <p className="font-body font-medium">Description</p>
                  <span className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro illo !</span>
            </div>
            <div className="flex flex-col gap-[1px]">
                  <p className="font-body font-medium">Email</p>
                  <span className="text-gray-500">user@gmail</span>
            </div>
        </div>
      </div>
    </div>
  );
}
