import { useEffect, useRef, useState } from "react";
// react-icon
import { HiMenu } from "react-icons/hi";
import { AiFillCloseCircle } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";
//  component
import Sidebar from "../components/Sidebar";
import Login, { client } from "../components/Login";
// logo
import logo1 from "../assets/logo1.png";
// query
import { userQuery } from "../utils/data";
import Pin from "../components/Pin";

const Home = () => {
	const [username, setUserName] = useState("");
	const [user, setUser] = useState(null);
	const [toggleSidebar, setToggleSidebar] = useState(false);
	const scrollRef = useRef(null);

	useEffect(() => {
		const getdata = async () => {
			try {
				const query = userQuery(username);
				await client.fetch(query).then((res) => {
					setUser(res);
				});
			} catch (error) {
				console.log(error);
			}
		};
		getdata();
	}, [username]);
	// scroll to top
	useEffect(() => {
		scrollRef.current?.scrollTo(0, 0);
	}, []);

	// login
	if (!username) return <Login setUserName={setUserName} />;

	return (
		<div className="transition-height flex h-screen  flex-col bg-gray-50 duration-75  ease-out md:flex-row">
			<div className="hidden h-screen flex-initial md:flex">
				{user && <Sidebar user={user} />}
			</div>
			<div className="flex flex-row md:hidden ">
				<div className="flex w-full flex-row items-center justify-between p-2 shadow-md">
					<HiMenu
						fontSize={30}
						className="cursor-pointer"
						onClick={() => setToggleSidebar(true)}
					/>
					<Link href="/" passHref>
						<div className="relative h-10 w-28  ">
							<Image
								src={logo1}
								layout="fill"
								objectFit="contain"
								className="cursor-pointer"
							/>
						</div>
					</Link>
					{user?.image && (
						<Link href={`user-profile/`} passHref>
							<div className="relative h-9 w-9 cursor-pointer overflow-hidden rounded-full ">
								<Image
									src={user?.image}
									layout="fill"
									objectFit="cover"
									className="cursor-pointer"
								/>
							</div>
						</Link>
					)}
				</div>
			</div>
			{toggleSidebar && (
				<div className="animate-slide-in relative z-10 flex h-screen w-4/5 overflow-y-auto bg-white shadow-md ">
					<div className="absolute flex w-full items-center justify-end p-2">
						<AiFillCloseCircle
							fontSize={30}
							className="cursor-pointer"
							onClick={() => setToggleSidebar(false)}
						/>
					</div>
					{user && (
						<Sidebar
							user={user}
							setToggleSidebar={setToggleSidebar}
						/>
					)}
				</div>
			)}
			<div
				className="h-screen flex-1 overflow-y-scroll pb-2 "
				ref={scrollRef}
			>
				<Pin user={user && user} />
			</div>
		</div>
	);
};

// export const getServerSideProps = async () => {
// const query = `*[_type == 'users']{
// 	_id,
// 	title,
// 	description,
// 	mainImage,
// 	slug,
// 	author->{
// 		name,
// 		slug,
// 		image,
// 		bio
// 	}
// } `;

// const posts = await sanityClient.fetch(query);
// return {
// 	props: {
// 		posts,
// 	},
// };
// };

export default Home;
