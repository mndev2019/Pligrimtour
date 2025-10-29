import React, { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
// import logo from "../assets/Image/newlogocolored.png";

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Our Packages", path: "/packages" },
    { name: "Our Gallery", path: "/gallery" },
    { name: "Our Blog", path: "/blog" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <nav className="w-full bg-white shadow-md fixed lg:top-[40px] top-[50px] left-0 z-[50]">
      {/* 👆 top-[40px] pushes navbar below header (since header ≈ 40px tall) */}
      <div className="max-w-[1300px] mx-auto flex justify-between items-center px-6 lg:px-10 py-3">
        {/* Logo */}
        <NavLink to="/">
          {/* <img
            src={logo}
            alt="Wandering Tourplanner"
            className="h-[45px] lg:h-[55px] object-contain"
          /> */}
        </NavLink>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-10 text-lg font-semibold text-black">
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  isActive ? "text-[#00bcd4]" : "hover:text-[#00bcd4]"
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Book Now Button */}
        <div className="hidden lg:block">
          <button onClick={() => navigate('/contact')} className="bg-[#00bcd4] text-white font-bold px-6 py-2 rounded-full flex items-center gap-2 hover:bg-[#00bcd4] transition-all cursor-pointer">
            Book Now <span className="text-lg">→</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? (
              <IoClose className="text-2xl text-[#00bcd4]" />
            ) : (
              <FiMenu className="text-2xl text-[#00bcd4]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-[50px] left-0 h-full bg-white z-40 w-[70%] shadow-lg transform ${isOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300`}
      >
        <div className="p-6">
          <ul className="flex flex-col gap-6 text-lg font-semibold text-black">
            {navLinks.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    isActive ? "text-[#00bcd4]" : "hover:text-[#00bcd4]"
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>

          <button onClick={() => navigate('/contact')} className="mt-6 w-full bg-[#00bcd4] text-white font-bold px-5 py-2 rounded-full flex justify-center items-center gap-2  transition-all cursor-pointer">
            Book Now <span className="text-lg">→</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
