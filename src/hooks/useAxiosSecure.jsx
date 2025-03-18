import axios from "axios";
import { useAuth } from "./useAuth";
import { useNavigate } from "react-router";

const axiosSecure = axios.create({
	baseURL: import.meta.env.VITE_API_URL,
	withCredentials: true,
});

export const useAxiosSecure = () => {
	const { logout } = useAuth();
	const navigate = useNavigate();
	axiosSecure.interceptors.response.use(
		(res) => {
			return res;
		},
		async (error) => {
			const errorResponse = error.response.status;
			if (errorResponse === 401 || errorResponse === 403) {
				await logout();
				navigate("/login");
			}
			return Promise.reject(error);
		}
	);
	return axiosSecure;
};
