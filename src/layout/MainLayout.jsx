import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const MainLayout = () => {
	return (
		<div>
			<Navbar />
			<main className="min-h-[calc(100vh-306px)]">
				<Outlet />
			</main>
			<Footer />
		</div>
	);
};
