import React, { useState, useRef, useEffect } from "react";
import { HiMenu } from "react-icons/hi";
import { AiFillCloseCircle } from "react-icons/ai";
import Link from "next/link";
import logo from "../assets/logo1.png";
import logo1 from "../assets/logo1.png";
import Image from "next/image";
import Sidebar from "../components/Sidebar";

const Home = () => {
	const [toggleSidebar, setToggleSidebar] = useState(false);
	const [user, setUser] = useState<string>("");

	return (
		<div className="transition-height flex h-screen flex-col bg-gray-50 duration-75 ease-out md:flex-row">
			<div className="hidden h-screen flex-initial md:flex">
				<Sidebar user={user} />
				<div className="relative h-10 w-28">
					<Image
						layout="fill"
						objectFit="cover"
						src={logo}
						alt="logo"
					/>
				</div>
			</div>
			<div className="flex flex-row md:hidden">
				<div className="flex w-full flex-row items-center justify-between p-2 shadow-md">
					<HiMenu
						fontSize={40}
						className="cursor-pointer"
						onClick={() => setToggleSidebar(true)}
					/>
					<Link href="/">
						<div className="relative h-10 w-28">
							<Image
								layout="fill"
								objectFit="cover"
								src={logo}
								alt="logo"
							/>
						</div>
					</Link>
					<Link href="">
						<div className="relative h-9 w-9 rounded-full">
							<Image
								layout="fill"
								objectFit="cover"
								src={logo1}
								alt="user-pic"
							/>
						</div>
					</Link>
				</div>
				{toggleSidebar && (
					<div className="animate-slide-in fixed z-10 h-screen w-4/5 overflow-y-auto bg-white shadow-md">
						<div className="absolute flex w-full items-center justify-end p-2">
							<AiFillCloseCircle
								fontSize={30}
								className="cursor-pointer"
								onClick={() => setToggleSidebar(false)}
							/>
						</div>
						<Sidebar
							closeToggle={setToggleSidebar}
							user={user && user}
						/>
					</div>
				)}
			</div>
		</div>
	);
};

export default Home;
