import { Route, Routes } from "react-router";
import { MainLayout } from "./layout/MainLayout";
import { Home } from "./pages/home/Home";
import Login from "./pages/auth-pages/Login";
import Registration from "./pages/auth-pages/Registration";
import JobDetails from "./pages/jobs/JobDetails";
import AddJob from "./pages/jobs/AddJob";
import ErrorPage from "./pages/ErrorPage";
import MyPostedJobs from "./pages/jobs/MyPostedJobs";
import MyBids from "./pages/jobs/MyBids";
import BidRequests from "./pages/jobs/BidRequests";
import UpdateJob from "./pages/jobs/UpdateJobs";

export const App = () => {
	return (
		<Routes>
			<Route path="/" element={<MainLayout />}>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/registration" element={<Registration />} />
				<Route path="/job/:id" element={<JobDetails />} />
				<Route path="/add-job" element={<AddJob />} />
				<Route path="/my-posted-jobs" element={<MyPostedJobs />} />
				<Route path="/my-bids" element={<MyBids />} />
				<Route path="/bid-requests" element={<BidRequests />} />
				<Route path="/update-job/:id" element={<UpdateJob />} />
				<Route path="*" element={<ErrorPage />} />
			</Route>
		</Routes>
	);
};
