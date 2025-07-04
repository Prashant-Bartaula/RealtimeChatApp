import { useState, useRef } from "react";
import { useAuthStore } from "../store/useAuthStore";
import toast from "react-hot-toast";
import { CiUser, CiPhone } from "react-icons/ci";
import { MdEmail } from "react-icons/md";
export default function Setting() {
  const inputRef = useRef(null);
  const imageRef = useRef(null);
  const { updateProfile, authUser } = useAuthStore();
  // const [file, setFile] = useState(null);
  const [formData, setFormData] = useState({
    fullName: authUser?.fullName || "",
    phone: authUser?.phone || "",
    description: authUser?.description || "",
    profilePic: authUser?.profilePic || "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const reader=new FileReader();
    // reader.readAsDataURL(file);
    // reader.onload=async()=>{
    //   setFormData({...formData, profilePic:reader.result});
    //   await updateProfile({formData});
    // }

    const data = new FormData();
    data.append("fullName", formData.fullName);
    data.append("phone", formData.phone);
    data.append("description", formData.description);
    
    if (formData.profilePic instanceof File) {
      data.append("profilePic", formData.profilePic);
    }
    
    await updateProfile(data);
  };

  const handleFileSelect = () => {
    inputRef.current.click();
  };

  const handleFileChange = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    if (!file || file.size > 2000000) {
      return toast.error(
        "File should be selected and  size should be less than 2mb"
      );
    }
    imageRef.current.src = URL.createObjectURL(file);
    setFormData({ ...formData, profilePic: file });
  };
  return (
    <div className="h-screen w-screen flex-center bg-signUpBg">
      <form
        className="flex flex-col gap-5 items-center"
        onSubmit={handleSubmit}
      >
        {/* image wrap  */}
        <div className="relative flex-center w-[200px] h-[200px] rounded-full overflow-hidden">
          <img
            src={authUser?.profilePic}
            alt="profile-image"
            className="object-cover h-full w-full"
            ref={imageRef}
          />
        </div>

        {/* edit image  */}
        <div>
          <button
            type="button"
            className="bg-transparent text-gray-300 border transition-all duration-300 ease-linear border-white/10 hover:border-white/50 hover:text-white  rounded-2xl px-4 py-2"
            onClick={handleFileSelect}
          >
            Edit
          </button>
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => handleFileChange(e)}
            ref={inputRef}
          />
        </div>

        <div className="form-item text-gray-400 flex items-center gap-2 px-3 py-2 border border-gray-400/10 rounded-md bg-black/10 backdrop-blur">
          <span className="flex-center">
            <CiUser />
          </span>
          <input
            value={formData.fullName}
            onChange={(e) => handleChange(e)}
            className="w-max md:w-[300px]"
            placeholder="eg. prashant bartaula"
            type="text"
            name="fullName"
            id="fullName"
          />
        </div>

        <div className="form-item text-gray-400 flex items-center gap-2 px-3 py-2 border border-gray-400/10 rounded-md bg-black/10 backdrop-blur">
          <span className="flex-center">
            <MdEmail />
          </span>
          <input
            value={authUser?.email}
            onChange={(e) => handleChange(e)}
            className="w-max md:w-[300px]"
            placeholder="eg. Youremail@gmail.com"
            type="email"
            name="email"
            disabled={true}
            id="email"
          />
        </div>

        <div className="form-item text-gray-400 flex items-center gap-2 px-3 py-2 border border-gray-400/10 rounded-md bg-black/10 backdrop-blur">
          <span className="flex-center">
            <CiPhone />
          </span>
          <input
            value={formData.phone}
            onChange={(e) => handleChange(e)}
            className="w-max md:w-[300px]"
            placeholder="eg. +977 9831287182"
            type="phone"
            name="phone"
            id="phone"
          />
        </div>

        <div className="form-item text-gray-400 flex items-center gap-2 px-3 py-2 border border-gray-400/10 rounded-md bg-black/10 backdrop-blur">
          <textarea
            value={formData.description}
            onChange={(e) => handleChange(e)}
            placeholder="Describe yourself..."
            className="w-max md:w-[300px]"
            type="text"
            name="description"
            id="description"
          />
        </div>

        <button className="bg-primary text-white border transition-all duration-300 ease-linear border-white/10 hover:border-white/50 hover:text-white  rounded-2xl px-4 py-2">
          Update
        </button>
      </form>
    </div>
  );
}
