import { Route, Routes } from "react-router";
import { MainLayout } from "./layout/MainLayout";
import { Home } from "./pages/home/Home";
import Login from "./pages/auth-pages/Login";
import Registration from "./pages/auth-pages/Registration";

export const App = () => {

	return (
		<Routes>
			<Route path="/" element={<MainLayout />}>
				<Route
					path="/"
					element={<Home />}
				/>
				<Route path="/login" element={<Login />} />
				<Route path="/registration" element={<Registration />} />
			</Route>
		</Routes>
	);
};
