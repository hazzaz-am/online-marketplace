import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

export const MainLayout = () => {
	return (
		<div>
			<Navbar/>
			<Outlet />
			<h2>Footer</h2>
		</div>
	);
};
