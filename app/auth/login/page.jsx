export default function Login() {
  return (
    <div
      style={{
        backgroundImage: "url('/images/login-bg.jpg')",
      }}
      className="min-h-screen h-auto w-full  bg-cover bg-center bg-no-repeat"
    >
      <div className="min-h-screen h-full w-full flex items-center justify-center bg-black/80">
        <div className="h-[500px] md:h-[550px] w-[95%] md:w-[70%] flex flex-col items-center bg-black/70 border-3 border-blue-400/80 rounded-[20px] shadow-lg shadow-blue-400/50">
          <h1 className="text-4xl font-bold mt-8">Login</h1>
          <div className=" flex flex-col  gap-6 mt-15 md:mt-20 ">
            <input
              type="email"
              placeholder="Username"
              className="h-[50px] w-[270px] md:w-[400px] rounded-[10px] p-2 bg-white text-black outline-amber-600"
            />
            <input
              type="password"
              placeholder="Password"
              className="h-[50px] w-[270px]  md:w-[400px]  rounded-[10px] p-2 bg-white text-black outline-amber-600"
            />
          </div>

          <button className="h-[50px] w-[270px]  md:w-[400px]  rounded-[10px] bg-red-500 hover:bg-red-700 mt-10 text-[20px] font-bold">
            Login
          </button>
          <div className="flex justify-between w-[270px]  md:w-[400px]  mt-4">
            <div className="flex items-center">
              <input type="checkbox" />
              <p className="text-[13px] md:text-[16px]">Remember me</p>
            </div>

            <p className="text-[13px] md:text-[16px]">Forgot your password?</p>
          </div>
          <div className="flex mt-15">
            <p className="mr-1">New here?</p>
            <p>Sign up now.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
