import type { NextPage } from "next";
import { useState } from "react";
import Login from "../components/Login";
import Home from "../container/Home";

const App: NextPage = () => {
	const [user, setUser] = useState<boolean>(false);
	// login
	if (!user) return <Login setUser={setUser} />;
	const login = () => {
		setUser(false);
		localStorage.clear();
	};

	return (
		<div>
			<Home />
		</div>
	);
};

export default App;