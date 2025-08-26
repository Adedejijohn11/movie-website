import { useState } from "react";
import { TbHome } from "react-icons/tb";
import { LuListPlus } from "react-icons/lu";
import { MdLocalMovies } from "react-icons/md";
import { LuTvMinimalPlay } from "react-icons/lu";
import { IoMdSearch } from "react-icons/io";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navigationItems = [
    { href: "/", icon: TbHome, label: "Home" },
    { href: "/", icon: LuListPlus, label: "My List" },
    { href: "/", icon: MdLocalMovies, label: "TV Series" },
    { href: "/", icon: LuTvMinimalPlay, label: "Movies" },
    { href: "/", icon: IoMdSearch, label: "Search" },
  ];

  return (
    <>
      <div className="h-[90px]  w-full flex flex-row items-center justify-between bg-background px-[5%] z-50 relative">
        {/* Logo */}
        <h1 className="text-highlight text-center text-[24px] md:text-[30px] tracking-[8px] md:tracking-[16px] font-bold">
          CINEMA
        </h1>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex flex-row items-center gap-4">
          {navigationItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <a
                key={index}
                href={item.href}
                className="flex flex-row items-center text-highlight text-[16px] font-semibold hover:text-orange-500 transition-colors"
              >
                <span className="mr-[8px]">
                  <IconComponent />
                </span>
                {item.label}
              </a>
            );
          })}
        </div>

        {/* Right side - Profile and Mobile Menu Button */}
        <div className="flex items-center gap-4">
          {/* Profile Avatar */}
          <div className="h-[40px] w-[40px] md:h-[50px] md:w-[50px] rounded-full bg-orange-500" />

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-highlight text-[24px] hover:text-orange-500 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <IoClose /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/20 bg-opacity-50 z-40"
          onClick={toggleMenu}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-[90px] right-0 h-[calc(100vh-90px)] w-[280px] bg-background border-l border-gray-800 transform transition-transform duration-300 ease-in-out z-50 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col p-6 space-y-6">
          {navigationItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <a
                key={index}
                href={item.href}
                onClick={toggleMenu}
                className="flex flex-row items-center text-highlight text-[18px] font-semibold hover:text-orange-500 transition-colors py-2"
              >
                <span className="mr-[12px] text-[20px]">
                  <IconComponent />
                </span>
                {item.label}
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Navbar;
