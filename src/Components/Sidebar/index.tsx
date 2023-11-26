import React from 'react'
import { IoCalendarNumberOutline } from "react-icons/io5";
import { NavLink } from 'react-router-dom';
import { TbActivityHeartbeat } from "react-icons/tb";
import { LuCalendarDays } from "react-icons/lu";


type Props = {}

const Sidebar = (props: Props) => {
    return (
        <div className="col-span-2 transition-all ease-in">
            <div className="flex flex-col p-2 align-center">
                <div className="text-xl flex align-center">
                    <div className="text-center w-[30px] h-[30px] rounded-md  mr-2 bg-purple"></div>
                    <div>To-do</div>
                </div>
                <div className="text-md mt-[40px] rounded text-secondary">
                    <div className="bg-slate-600 rounded flex flex-col gap-2">
                        <NavLink
                            to="/"
                            className="flex flex-row p-2 rounded-2xl items-center hover:bg-tertiary
                            transition duration-00 ease-in-out
                        ">
                            <IoCalendarNumberOutline className="mr-2" />
                            <div className="">Today</div>
                        </NavLink>
                        <NavLink
                            to="/activity"
                            className="flex flex-row p-2 rounded-2xl items-center hover:bg-tertiary
                            transition duration-00 ease-in-out
                        ">
                            <TbActivityHeartbeat className="mr-2" />
                            <div className="">Activity</div>
                        </NavLink>
                        <NavLink
                            to="/upcoming"
                            className="flex flex-row p-2 rounded-2xl items-center hover:bg-tertiary
                            transition duration-00 ease-in-out
                        ">
                            <LuCalendarDays className="mr-2" />
                            <div className="">Upcoming</div>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar