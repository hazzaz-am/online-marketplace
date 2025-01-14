import { Outlet } from "react-router";

export const MainLayout = () => {
	return (
		<div>
			<h2>Navbar</h2>
			<Outlet />
			<h2>Footer</h2>
		</div>
	);
};
