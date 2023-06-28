import Input from "./Input";
import Write from "../assets/icons/write";
import Button from "./Button";
import User from "../assets/icons/user";
import DownArrow from "../assets/icons/downArrow";
import { Outlet } from "react-router-dom";
import { useState } from "react";
function Navbar() {
  const [isHover, setIsHover] = useState(false);

  return (
    <>
      <nav className="md:visible lg:hidden mb-2 flex justify-between">
        <div className="flex md:text-[14px] text-[13px] lg:hidden gap-2 items-center text-[#848484] hover:text-[#191919]">
          <a href="/">Open in app</a>
          <OneTwentyArrow />
        </div>
        <div className="flex gap-2">
          <Button
            rounded
            textColor="text-[#f2f8f2]"
            bgColor="bg-green-600"
            hoverEffect="hover:bg-green-700"
            padding="py-1.5 px-2 lg:py-2 lg:px-3"
          >
            Sign up
          </Button>
          <Button
            hoverEffect="hover:text-[#191919]"
            rounded
            textColor="text-[#848484]"
            padding="py-1.5 px-2 lg:py-2 lg:px-3"
          >
            Sign in
          </Button>
        </div>
      </nav>
      <nav className="border-2 border-x-0 border-[#f3f3f3]">
        <ul className="flex  items-center justify-between">
          <div className="flex">
            <li>
              <a href="#">
                <img
                  src="/public/medium-icon-126.svg"
                  alt="logo"
                  className="w-12 h-12"
                />
              </a>
            </li>
            <li className="hidden md:block">
              <Input />
            </li>
          </div>
          <div className="flex items-center justify-between gap-3">
            <l className="pr-3">
              <a
                className="flex items-center justify-center opacity-60 hover:opacity-100 "
                href="/c"
              >
                <Write />
                <p className="text-[14px] leading-3">Write</p>
              </a>
            </l>
            <li>
              <Button
                hoverEffect="hover:bg-green-700"
                bgColor="bg-green-600"
                rounded
                textColor="text-[#f2f8f2]"
              >
                Sign Up
              </Button>
            </li>
            <li>
              <Button
                hoverEffect="hover:text-[#191919]"
                rounded
                textColor="text-[#848484]"
              >
                Sign In
              </Button>
            </li>
            <li
              className="flex items-center border-2 border-[#f3f3f3] rounded-full p-1"
              onMouseEnter={() => setIsHover(true)}
              onMouseLeave={() => setIsHover(false)}
            >
              <User />
              <DownArrow isHover={isHover} />
            </li>
          </div>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

export default Navbar;
