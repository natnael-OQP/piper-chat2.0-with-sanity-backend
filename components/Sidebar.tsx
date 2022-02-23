import React, { Dispatch, FC, SetStateAction } from "react";
import { RiHomeFill } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";
import logo1 from "../assets/logo1.png";
import Link from "next/link";
import Image from "next/image";

const isNotActiveStyle = "flex items-center px-5 gap-3 text-gray-500 hover:text-black transition-all duration-200 ease-in-out capitalize";
const isActiveStyle = "flex items-center px-5 gap-3 font-extrabold border-r-2 border-black  transition-all duration-200 ease-in-out capitalize";
interface Props {
	user: any;
	setToggleSidebar?: any;
}

const Sidebar: FC<Props> = ({ user, setToggleSidebar }) => {
	return (
		<div className="flex h-full min-w-[210px] flex-col justify-between overflow-y-scroll bg-white  ">
			<div className="flex flex-col">
				<Link href="/" passHref>
					<div
						className="relative my-6 flex h-7 w-[190px] items-center gap-2 px-2 pt-1"
						onClick={() => setToggleSidebar(false)}
						// onClick={() => setToggleSidebar(false)}
					>
						<Image
							src={logo1}
							layout="fill"
							objectFit="contain"
							className="cursor-pointer"
						/>
					</div>
				</Link>
				<div className="flex flex-col gap-5"></div>
			</div>
		</div>
	);
};

export default Sidebar;
