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
import { ProtectedRoute } from "./routes/ProtectedRoute";
import AllJobs from "./pages/jobs/AllJobs";

export const App = () => {
	return (
		<Routes>
			<Route path="/" element={<MainLayout />}>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/registration" element={<Registration />} />
				<Route path="/all-jobs" element={<AllJobs />} />

				<Route
					path="/job/:id"
					element={
						<ProtectedRoute>
							<JobDetails />
						</ProtectedRoute>
					}
				/>
				<Route
					path="/add-job"
					element={
						<ProtectedRoute>
							<AddJob />
						</ProtectedRoute>
					}
				/>
				<Route
					path="/my-posted-jobs"
					element={
						<ProtectedRoute>
							<MyPostedJobs />
						</ProtectedRoute>
					}
				/>
				<Route
					path="/my-bids"
					element={
						<ProtectedRoute>
							<MyBids />
						</ProtectedRoute>
					}
				/>
				<Route
					path="/bid-requests"
					element={
						<ProtectedRoute>
							<BidRequests />
						</ProtectedRoute>
					}
				/>
				<Route
					path="/update-job/:id"
					element={
						<ProtectedRoute>
							<UpdateJob />
						</ProtectedRoute>
					}
				/>

				<Route path="*" element={<ErrorPage />} />
			</Route>
		</Routes>
	);
};
