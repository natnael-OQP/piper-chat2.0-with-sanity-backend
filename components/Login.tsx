import { Dispatch, FC, SetStateAction } from "react";
import { GoogleLogin } from "react-google-login";
import { FcGoogle } from "react-icons/fc";
import backgroundImage from "../assets/bg.gif";
import logo from "../assets/logo1.png";
import Image from "next/image";
import sanityClient from "@sanity/client";

export const config = {
	dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
	projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
	useCdn: process.env.NODE_ENV === "production",
	token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
	apiVersion: "2022-02-22",
};

const client = sanityClient(config);

interface Props {
	setUser: Dispatch<SetStateAction<boolean>>;
}

const Login: FC<Props> = ({ setUser }) => {
	const responseGoogle = async (response: any) => {
		localStorage.setItem("user", JSON.stringify(response.profileObj));
		const { name, googleId, imageUrl } = await response.profileObj;
		setUser(true);
		try {
			await client.create({
				_type: "users",
				userName: name,
				image: imageUrl,
			});
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="flex h-screen flex-col items-center justify-start overflow-hidden bg-black">
			<div className=" relative h-full w-full  opacity-40 ">
				<Image
					src={backgroundImage}
					layout="fill"
					objectFit="cover"
					priority={true}
					alt="backgroundImage"
				/>
			</div>
			<div className="bg-blackOverlay absolute top-0 right-0 left-0 bottom-0 flex flex-col items-center    justify-center">
				<div className="relative m-5 h-10 w-[170px]">
					<Image layout="fill" objectFit="contain" src={logo} />
				</div>
				<div className="shadow-2xl">
					<GoogleLogin
						clientId="907966493952-j838fqvgo77grm45p8vqlo6u338fdkpf.apps.googleusercontent.com"
						render={(renderProps) => (
							<button
								type="button"
								className="flex cursor-pointer items-center justify-center rounded-lg bg-white p-3 font-semibold outline-none"
								onClick={renderProps.onClick}
								disabled={renderProps.disabled}
							>
								<FcGoogle className="mr-4" /> Sign in with
								google
							</button>
						)}
						onSuccess={responseGoogle}
						onFailure={responseGoogle}
						isSignedIn={true}
						cookiePolicy="single_host_origin"
					/>
				</div>
			</div>
		</div>
	);
};

export default Login;
