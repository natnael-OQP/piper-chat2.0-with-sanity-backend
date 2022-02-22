import type { NextPage } from "next";
import { useState } from "react";
// react-icon
import { HiMenu } from "react-icons/hi";
import { AiFillCloseCircle } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";
//  component
import Sidebar from "../components/Sidebar";
import Login from "../components/Login";
// logo
import logo1 from "../assets/logo1.png";

const Home: NextPage = () => {
	const [user, setUser] = useState<boolean>(false);
	const [toggleSidebar, setToggleSidebar] = useState<boolean>(false);
	// login
	if (!user) return <Login setUser={setUser} />;

	return (
		<div className="transition-height flex h-screen  flex-col bg-gray-50 duration-75  ease-out md:flex-row">
			<div className="hidden h-screen flex-initial md:flex">
				<Sidebar />
			</div>
			<div className="flex flex-row md:hidden ">
				<HiMenu
					fontSize={40}
					className="cursor-pointer"
					onClick={() => setToggleSidebar(false)}
				/>
				<Link href="/" passHref>
					<div className="relative w-28 ">
						<Image
							src={logo1}
							layout="fill"
							objectFit="contain"
							className="cursor-pointer"
						/>
					</div>
				</Link>
			</div>
		</div>
	);
};

export default Home;
