"use client";

import Link from "next/link";
import { useState } from "react";
import { MdPersonOutline } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";
import { TbLockPassword } from "react-icons/tb";

export default function Register() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div
      // style={{
      //   backgroundImage: "url('/images/login-bg.jpg')",
      // }}
      className="min-h-screen h-auto w-full "
    >
      <div className="relative min-h-screen h-full w-full flex flex-col items-center justify-center bg-black/80">
        <div className=" absolute top-3 right-3 md:right-6 w-full flex justify-end items-center text-[14px] md:text-[15px] lg:text-[20px] ">
          <p className="mr-2">Already have an Account?</p>
          <Link
            href="/auth/login"
            className="border-2 border-red-500 rounded-[8px] p-[8px]"
          >
            Login
          </Link>
        </div>
        <div className="h-[480px] lg:h-[550px] w-full flex flex-col items-start md:items-center   mt-8 px-2">
          <h1 className="text-4xl font-bold">Sign up</h1>
          <form className="w-full lg:w-[473px]  flex flex-col items-start md:items-center   gap-10    mt-10">
            <div className="flex gap-3">
              {/* FirstName */}
              <div className="relative ">
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className=" h-[50px] w-full  md:w-[230px] rounded-[10px] p-2 bg-white text-black outline-amber-600"
                />
                {formData.firstName === "" && (
                  <div className=" absolute top-3 flex items-center text-gray-400 gap-2 pl-4 pointer-events-none ">
                    <MdPersonOutline />
                    <span>First Name</span>
                  </div>
                )}
              </div>
              {/* LastName */}
              <div className=" relative ">
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className=" h-[50px] w-full  md:w-[230px] rounded-[10px] p-2 bg-white text-black outline-amber-600"
                />
                {formData.lastName === "" && (
                  <div className=" absolute top-3 flex items-center text-gray-400 gap-2 pl-4 pointer-events-none ">
                    <MdPersonOutline />
                    <span>Last Name</span>
                  </div>
                )}
              </div>
            </div>
            {/* Email */}
            <div className=" w-full md:w-auto relative ">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="h-[50px] w-full md:w-[473px] rounded-[10px] p-2 bg-white text-black outline-amber-600"
              />
              {formData.email === "" && (
                <div className=" absolute top-3 flex items-center text-gray-400 gap-2 pl-4 pointer-events-none ">
                  <MdOutlineMail />
                  <span>Email</span>
                </div>
              )}
            </div>

            {/* Password */}
            <div className="w-full md:w-auto  relative ">
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="h-[50px] w-full md:w-[473px] rounded-[10px] p-2 bg-white text-black outline-amber-600"
              />
              {formData.password === "" && (
                <div className=" absolute top-3 flex items-center text-gray-400 gap-2 pl-4 pointer-events-none ">
                  <TbLockPassword />
                  <span>Create New Password</span>
                </div>
              )}
            </div>
          </form>

          <Link
            href="/auth/login"
            className="h-[50px] w-full md:w-[473px] flex items-center justify-center rounded-[10px] bg-red-500 hover:bg-red-700 mt-15 text-[20px] font-bold"
          >
            Continue
          </Link>
          <div className="flex  w-[270px] md:w-[473px]   mt-4">
            <div className="flex items-center">
              <input type="checkbox" />
              <p className="text-[13px] md:text-[16px]">Remember me</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
