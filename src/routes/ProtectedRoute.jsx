/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router";
import { useAuth } from "../hooks/useAuth";
import Skeleton from "../components/ui/Skeleton";

export const ProtectedRoute = ({ children }) => {
	const { user, loading } = useAuth();
	const location = useLocation();

	if (loading) {
		return <Skeleton />;
	}

	if (!user) {
		return <Navigate to="/login" state={location.pathname} replace />;
	}

	return children;
};
