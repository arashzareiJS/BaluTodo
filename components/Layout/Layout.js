import Link from "next/link";
import React, { useState } from "react";

//  Icons
import { CgProfile, CgMenuMotion } from "react-icons/cg";
import { FcTodoList } from "react-icons/fc";
import { MdOutlineAddCircle } from "react-icons/md";
import {
  AiOutlineLogout,
  AiOutlineLogin,
  AiOutlineClose,
} from "react-icons/ai";
import { FiLogIn } from "react-icons/fi";

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`max-w-6xl mx-auto flex justify-between relative ${
        isOpen ? "h-screen overflow-hidden" : ""
      }`}
    >
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="absolute top-0 left-0 w-full h-screen bg-gray-600 opacity-70 lg:hidden"
        ></div>
      )}
      {/* start aside */}
      <aside
        className={`w-[70%] sm:w-[50%] absolute top-0 ${
          isOpen ? "left-[0%]" : "left-[-70%] sm:left-[-50%]"
        } lg:relative lg:w-[20%] lg:left-0 bg-slate-100 px-4 py-2 min-h-screen transition-all`}
      >
        <div className="py-1 px-3 absolute bg-slate-100 rounded-xl top-12 right-[-35px] lg:hidden">
          {isOpen ? (
            <AiOutlineClose
              onClick={() => setIsOpen(false)}
              className="cursor-pointer text-2xl"
            />
          ) : (
            <CgMenuMotion
              onClick={() => setIsOpen(true)}
              className="cursor-pointer text-2xl"
            />
          )}
        </div>
        <div className="flex items-center justify-between">
          <h4 className="text-xl">Menu</h4>
        </div>

        <div>
          <ul className="border-b border-gray-300 pb-7">
            <li className="mt-6 flex items-center gap-2">
              <FcTodoList />
              <Link href="/">Todos</Link>
            </li>
            <li className="mt-6 flex items-center gap-2">
              <MdOutlineAddCircle />
              <Link href="/add-todo">Add ToDo</Link>
            </li>
            <li className="mt-6 flex items-center gap-2">
              <CgProfile />
              <Link href="/profile">Profile</Link>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="mt-6 flex items-center gap-2 cursor-pointer hover:text-red-600">
              <AiOutlineLogout /> Sign Out
            </li>
            <li className="mt-6 flex items-center gap-2 cursor-pointer hover:text-green-600">
              <AiOutlineLogin /> Sign In
            </li>
            <li className="mt-6 flex items-center gap-2 cursor-pointer hover:text-green-600">
              <FiLogIn /> Sign Up
            </li>
          </ul>
        </div>
      </aside>
      {/* end aside */}

      {/* start content */}
      <div className="w-[100%] lg:w-[80%]">{children}</div>
      {/* end content */}
    </div>
  );
};

export default Layout;