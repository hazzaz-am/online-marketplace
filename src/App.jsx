import { Route, Routes } from "react-router";
import { MainLayout } from "./layout/MainLayout";

export const App = () => {
	return (
		<Routes>
			<Route path="/" element={<MainLayout />}></Route>
		</Routes>
	);
};
