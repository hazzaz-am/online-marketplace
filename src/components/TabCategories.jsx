import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { JobCard } from "./JobCard";
import PropTypes, { object } from "prop-types";
import { useAxiosSecure } from "../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Skeleton from "./ui/Skeleton";

export const TabCategories = () => {
	const axiosSecure = useAxiosSecure();

	const { data, isLoading, isError, error } = useQuery({
		queryKey: ["jobs"],
		queryFn: () => getData(),
	});

	const getData = async () => {
		const { data } = await axiosSecure.get(`/jobs`);
		return data;
	};

	if (isError) return <p>Error: {error.message}</p>;

	//! WEB DEVELOPMENT JOBS
	const developmentJobs = data
		?.filter((jobs) => jobs.category === "Web Development")
		?.map((devJob) => <JobCard key={devJob._id} job={devJob} />);

	//! GRAPHICS DESIGN JOBS
	const designJobs = data
		?.filter((jobs) => jobs.category === "Graphics Design")
		?.map((devJob) => <JobCard key={devJob._id} job={devJob} />);

	//! DIGITAL MARKETING JOBS
	const marketingJobs = data
		?.filter((jobs) => jobs.category === "Digital Marketing")
		?.map((devJob) => <JobCard key={devJob._id} job={devJob} />);

	return (
		<Tabs className="py-10">
			<h2 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl">
				Browse Jobs By Categories
			</h2>
			<p className="max-w-2xl mx-auto my-6 text-center text-gray-500">
				Three categories available for the time being. They are Web Development,
				Graphics Design and Digital Marketing. Browse them by clicking on the
				tabs below.
			</p>
			<div className="flex justify-center items-center">
				<TabList>
					<Tab>Web Development</Tab>
					<Tab>Graphics Design</Tab>
					<Tab>Digital Marketing</Tab>
				</TabList>
			</div>

			<div className="py-6">
				{/* WEB DEVELOPMENT JOBS */}
				<TabPanel>
					<div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
						{isLoading ? <Skeleton /> : developmentJobs}
					</div>
				</TabPanel>

				{/* GRAPHICS DESIGN JOBS */}
				<TabPanel>
					<div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
						{isLoading ? <Skeleton /> : designJobs}
					</div>
				</TabPanel>

				{/* DIGITAL MARKETING JOBS */}
				<TabPanel>
					<div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
						{isLoading ? <Skeleton /> : marketingJobs}
					</div>
				</TabPanel>
			</div>
		</Tabs>
	);
};

TabCategories.propTypes = {
	jobs: PropTypes.arrayOf(object),
};
