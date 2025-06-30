import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { signupBg, facebook, google } from "../utils/images.jsx";
import { useAuthStore } from "../store/useAuthStore.jsx";
import { CiUser } from "react-icons/ci";
import { MdEmail } from "react-icons/md";
import { AiFillLock } from "react-icons/ai";

export default function SignUp() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  })
  const {signUp, isSigningUp}=useAuthStore();

  const handleChange=(e)=>{
    setFormData({
      ...formData,
      [e.target.name]:e.target.value
    })
  }

  const handleFormSubmit=async(e)=>{
    e.preventDefault();
    if(!formData.fullName || !formData.email || !formData.password){
      return toast.error("All fields are required");
    }

    signupBg(formData)
  }
  return (
    <section className="relative  h-full w-full">
      <div className="absolute inset-0 -scale-z-105 flex  h-full w-full">
        {/* image wrap  */}
        <div className="relative h-full w-full ">
          <img
            src={signupBg}
            alt="bg-image"
            className="h-full w-full object-cover grayscale-100"
          />
        </div>
      </div>

      {/* form content  */}
      <div className="relative h-full w-full z-100 backdrop-blur-md md:backdrop-blur-none">
        <div className="flex flex-col h-full justify-center  gap-4 px-4 md:px-8 mx-auto md:mx-0 md:ml-auto  max-w-[500px] md:max-w-[600px] md:backdrop-blur-sm">
          <h1 className="font-bold font-heading uppercase gradient-text">
            Sign Up
          </h1>
          <p className="text-xs font-body font-semibold text-gray-400">
            Sign in with email and pasword
          </p>

          <form className="relative w-full z-100 flex flex-col gap-4 py-7 border-b border-gray-600">
            <div className="form-item text-gray-400 flex items-center gap-2 px-3 py-2 border border-gray-400/10 rounded-md bg-black/10 backdrop-blur">
              <span className="flex-center">
                <CiUser />
              </span>
              <input
                className="max-w-[300px]"
                placeholder="Full Name"
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
                className="max-w-[300px]"
                placeholder="Youremail@gmail.com"
                type="email"
                name="email"
                id="email"
              />
            </div>
            <div className="form-item text-gray-400 flex items-center gap-2 px-3 py-2 border border-gray-400/10 rounded-md bg-black/10 backdrop-blur">
              <span className="flex-center">
                <AiFillLock />
              </span>
              <input
                className="max-w-[300px]"
                placeholder="password"
                type="password"
                name="password"
                id="password"
              />
            </div>

            <button className="gradient-button text-white">Sign Up</button>
          </form>

          {/* other content  */}
          <div className="flex flex-col gap-5">
            <p className="text-white text-[12px]">or continue with </p>
            <div className="flex w-full gap-4 flex-wrap  items-center">
              <button className="flex-1  flex justify-center items-center  gradient-button ">
                <span>
                  <img src={facebook} alt="social-icon" className="h-6 w-6 object-cover" />
                </span>
                <span className="ml-3">Facebook</span>
              </button>
              <button className="flex-1 flex justify-center items-center gradient-button ">
                <span>
                  <img src={google} alt="social-icon" className="h-6 w-6 object-cover" />
                </span>
                <span className="ml-3">Google</span>
              </button>
            </div>
            <p className="text-white text-body-sm">
              Already have an account?{" "}
              <Link to="/sign-in" className="transition-default text-orange-400 hover:text-orange-500">
                Sign In
              </Link>
            </p>
          </div>
        </div>


        <div className="hidden xl:block absolute bottom-0 left-0 py-10 px-10 max-w-[700px]">
              <h1 className="uppercase text-white  font-heading font-bold">Sign in to your <span className="gradient-text">adventure</span> </h1>
        </div>
      </div>
    </section>
  );
}
