import React, { FC } from "react";
import { RiHomeFill } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";
import logo from "../assets/logo.png";
import Link from "next/link";
import Image from "next/image";

const isNotActiveStyle =
	"flex items-center px-5 gap-3 text-gray-500 hover:text-black transition-all duration-200 ease-in-out capitalize";
const isActiveStyle =
	"flex items-center px-5 gap-3 font-extrabold border-r-2 border-black  transition-all duration-200 ease-in-out capitalize";

interface Props {
	user: boolean;
}

const Sidebar = () => {
	const handleCloseSidebar = () => {};

	return (
		<div className="min-w-210 hide-scrollbar flex h-full flex-col justify-between overflow-y-scroll bg-white">
			
		</div>
	);
};

export default Sidebar;
