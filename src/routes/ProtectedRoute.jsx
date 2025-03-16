/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router";
import { useAuth } from "../hooks/useAuth";

export const ProtectedRoute = ({ children }) => {
	const { user, loading } = useAuth();
	const location = useLocation();

	if (loading) {
		return (
			<div className="flex items-center justify-center h-[400px] container mx-auto">
				<div className="w-full mx-auto animate-pulse p-9">
					<h1 className="h-2 bg-gray-300 rounded-lg w-52 dark:bg-gray-600"></h1>

					<p className="w-full h-2 mt-6 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
					<p className="w-full h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
					<p className="w-full h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
					<p className="w-full 5 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
				</div>
			</div>
		);
	}

	if (!user) {
		return <Navigate to="/login" state={location.pathname} replace />;
	}

	return children;
};
