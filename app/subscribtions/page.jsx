export default function Subscriptions() {
  return (
    <div className=" min-h-screen h-auto w-full flex flex-col items-center justify-center py-[60px] lg:py-0">
      <h1 className="text-4xl lg:text-5xl md:text-4xl text-highlight font-bold">
        Choose Your <br className="block md:hidden" /> Subscription
      </h1>
      <div className="mt-[50px] lg:mt-[70px] flex flex-col lg:flex-row items-center gap-y-[30px] lg:gap-x-[30px]">
        <button className=" flex flex-col items-start pt-[22px] px-[50px] h-[330px] w-[90%] md:w-[380px] border-2 border-highlight text-white hover:text-black rounded-[28px] hover:bg-highlight/50 text-2xl font-semibold">
          <p className="place-self-center">Basic</p>
          <p className="text-4xl font-bold mt-[10px]">$9.99/Monthly</p>
          <ul className="mt-4 text-left text-[16px] font-light text-inherit">
            {" "}
            <li className="mb-2">- 1 Seat</li>
            <li className="mb-2">- Good video quality</li>
            <li className="mb-2">- No ads</li>
          </ul>
        </button>
        <button className=" flex flex-col items-start pt-[22px] px-[50px] h-[330px] w-[90%] md:w-[380px] border-2 border-highlight text-black  rounded-[28px] hover:bg-highlight/50 bg-highlight text-2xl font-semibold">
          <p className="place-self-center">Premium</p>
          <p className="text-4xl font-bold mt-[10px]">$12.99/Monthly</p>
          <ul className="mt-4 text-left text-[16px] font-light ">
            {" "}
            <li className="mb-2">- 4 Seat</li>
            <li className="mb-2">- 4k UHD video quality</li>
            <li className="mb-2">- No ads</li>
            <li className="mb-2">- Downloads</li>
            <li className="mb-2">- Share Streaming</li>
            <li className="mb-2">- Multiple devices streaming</li>
          </ul>
        </button>
        <button className=" flex flex-col items-start pt-[22px] px-[50px] h-[330px] w-[90%] md:w-[380px] border-2 border-highlight text-white hover:text-black  rounded-[28px] hover:bg-highlight/50 text-2xl font-semibold">
          <p className="place-self-center">Family</p>
          <p className="text-4xl font-bold mt-[10px]">$16.99/Monthly</p>
          <ul className="mt-4 text-left text-[16px] font-light text-inherit  ">
            <li className="mb-2">- 4 Seat</li>
            <li className="mb-2">- 4k UHD video quality</li>
            <li className="mb-2">- No ads</li>
            <li className="mb-2">- Downloads</li>
            <li className="mb-2">- Share Streaming</li>
            <li className="mb-2">- Multiple devices streaming</li>
          </ul>
        </button>
      </div>
      <div className="w-full flex flex-col md:flex-row items-center justify-center md:items-start mt-[50px] gap-y-[20px] lg:gap-x-[20px] ">
        <button className="px-[90px] py-[18px] bg-highlight text-black text-xl rounded-[28px] hover:bg-highlight/80 font-light">
          Pay Monthly
        </button>
        <div className=" text-center text-gray-500">
          <button className="px-[90px] py-[18px] border-2 border-highlight text-highlight hover:text-black text-xl rounded-[28px] hover:bg-highlight/80 font-light">
            Pay Yearly
          </button>
          <p className=" text-white/70 mt-2">Pay yearly and save 30%</p>
        </div>
      </div>
    </div>
  );
}
