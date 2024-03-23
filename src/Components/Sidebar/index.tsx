import React from "react";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { TbActivityHeartbeat } from "react-icons/tb";
import { LuCalendarDays } from "react-icons/lu";

const Sidebar = () => {
  return (
    <div className="col-span-2 transition-all ease-in h-full flex flex-col p-2 gap-10">
      <div className="text-xl self-center flex justify-center mt-2 items-center">
        <div className="text-center w-[40px] aspect-square rounded-md mr-2 bg-white"></div>
        <div className="dark:text-white">To-do</div>
      </div>
      <div className="flex-1 text-md rounded text-secondary">
        <div className="bg-slate-600 rounded flex flex-col gap-2">
          <NavLink
            to="/"
            className="flex flex-row p-2 rounded-2xl items-center hover:bg-tertiary
                            transition duration-00 ease-in-out
                        "
          >
            <IoCalendarNumberOutline className="mr-2" />
            <div className="">Today</div>
          </NavLink>
          <NavLink
            to="/activity"
            className="flex flex-row p-2 rounded-2xl items-center hover:bg-tertiary
                            transition duration-00 ease-in-out
                        "
          >
            <TbActivityHeartbeat className="mr-2" />
            <div className="">Activity</div>
          </NavLink>
          <NavLink
            to="/upcoming"
            className="flex flex-row p-2 rounded-2xl items-center hover:bg-tertiary
                            transition duration-00 ease-in-out
                        "
          >
            <LuCalendarDays className="mr-2" />
            <div className="">Upcoming</div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
