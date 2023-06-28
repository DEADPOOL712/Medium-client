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
      <nav>
        <ul className="flex  items-center justify-between">
          <div className="flex gap-3 items-center">
            <li>
              <a href="/">
                <img
                  src="/public/medium-icon-126.svg"
                  alt="logo"
                  className="w-12 h-12"
                />
              </a>
            </li>
            <li>
              <Input />
            </li>
          </div>
          <div className="flex items-center justify-between gap-3">
            <li className="pr-3">
              <a
                className="flex items-center justify-center opacity-60 hover:opacity-100 "
                href="/compose"
              >
                <Write />
                <p className="text-[14px] leading-3">Write</p>
              </a>
            </li>
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
