import React, { FC } from "react";

interface Props {
	user: string;
	closeToggle?: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar: FC<Props> = ({ user, closeToggle }) => {
	return <div>{user}</div>;
};

export default Sidebar;
