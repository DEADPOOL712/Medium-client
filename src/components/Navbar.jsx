import Input from "./Input";
import Write from "../assets/icons/write";
import Button from "./Button";
import { Outlet } from "react-router-dom";
function Navbar() {
  return (
    <>
      <nav>
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
            <li>
              <Input />
            </li>
          </div>
          <div className="flex items-center justify-between">
            <li>
              <div className="flex items-center justify-center ">
                <Write />
                <p className="text-[14px] leading-3">Write</p>
              </div>
            </li>
            <li>
              <Button>Sign In</Button>
            </li>
          </div>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

export default Navbar;
