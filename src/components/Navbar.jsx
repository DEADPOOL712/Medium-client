import Input from "./Input";
import Write from "../assets/icons/write";
import Button from "./Button";
import User from "../assets/icons/user";
import Stars from "../assets/icons/stars";
import Close from "../assets/icons/close";
import DownArrow from "../assets/icons/downArrow";
import OneTwentyArrow from "../assets/icons/120degArrow";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import DropDown from "./DropDown";
import Modal from "./Modal";

function Navbar() {
  const [isHover, setIsHover] = useState(false);
  const [isDropDown, setIsDropDown] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleDropDown() {
    setIsDropDown((cur) => !cur);
  }

  return (
    <>
      <Modal isOpen={isModalOpen} isClose={() => setIsModalOpen(false)}>
        <div className="absolute top-0 right-0 p-2">
          <Close />
        </div>
        <div className="text-xl"> Welcome Back. </div>
      </Modal>
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
            <li className="hidden md:block">
              <Input />
            </li>
          </div>
          <div className="flex items-center justify-between gap-3">
            <li className="pr-3 hidden md:block">
              <a
                className="flex items-center justify-center opacity-60 hover:opacity-100 "
                href="/compose"
              >
                <Write />
                <p className="text-[14px] leading-3">Write</p>
              </a>
            </li>
            <li
              className="hidden lg:block"
              onClick={() => setIsModalOpen(true)}
            >
              <Button
                hoverEffect="hover:bg-green-700"
                bgColor="bg-green-600"
                rounded
                textColor="text-[#f2f8f2]"
                padding="py-1.5 px-2 lg:py-2 lg:px-3"
              >
                Sign Up
              </Button>
            </li>
            <li className="hidden lg:block">
              <Button
                hoverEffect="hover:text-[#191919]"
                rounded
                textColor="text-[#848484]"
                padding="py-1.5 px-2 lg:py-2 lg:px-3"
              >
                Sign In
              </Button>
            </li>
            <li className="md:hidden block">
              <Input />
            </li>
            <li
              className="flex relative items-center border-2 border-[#f3f3f3] rounded-full p-1 cursor-pointer"
              onMouseEnter={() => setIsHover(true)}
              onMouseLeave={() => setIsHover(false)}
              onClick={handleDropDown}
            >
              <User />
              <DownArrow isHover={isHover} isDropDown={isDropDown} />
              {isDropDown && (
                <>
                  <DropDown Right="right-0" Top="top-10 ">
                    <div className="flex flex-col items-center px-6 pt-4 pb-2 gap-3">
                      <p className="mb-4">Get started on Medium </p>
                      <Button
                        rounded
                        textColor="text-[#f2f8f2]"
                        bgColor="bg-green-600"
                        hoverEffect="hover:bg-green-700"
                        padding="py-2 px-[70px]"
                      >
                        Sign Up
                      </Button>
                      <Button
                        rounded="border-2 border-[#848484]"
                        textColor="text-[#848484]"
                        bgColor="bg-white"
                        hoverEffect="hover:text-[#191919] hover:border-[#191919] "
                        padding="py-2 px-[70px]"
                      >
                        Sign In
                      </Button>
                    </div>
                  </DropDown>
                  <DropDown Right="right-0" Top="top-[220px] block md:hidden">
                    <a
                      href="/compose"
                      className="z-[50] my-[6px] mx-6 hover:text-[#191919] text-[#848484] flex items-center"
                    >
                      <Write />
                      <p className="text-[14px] leading-3">Write</p>
                    </a>
                  </DropDown>
                  <DropDown
                    Right="right-0"
                    Top="lg:top-[226px] md:top-[220px] top-[289px] "
                  >
                    <div className="my-[6px] mx-6 hover:text-[#191919] text-[#848484] flex justify-between">
                      <span>Become a member</span>
                      <Stars />
                    </div>
                    <div className="my-[6px] mx-6 hover:text-[#191919] text-[#848484]">
                      Create a Mastodon account
                    </div>
                    <div className="my-[6px] mx-6 hover:text-[#191919] text-[#848484]">
                      Apply for author verification
                    </div>
                    <div className="my-[6px] mx-6 hover:text-[#191919] text-[#848484]">
                      Apply to the Partner Program
                    </div>
                    <div className="my-[6px] mx-6 hover:text-[#191919] text-[#848484]">
                      Gift a membership
                    </div>
                  </DropDown>
                </>
              )}
            </li>
          </div>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

export default Navbar;
