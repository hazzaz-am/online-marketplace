import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { JobCard } from "./JobCard";
import PropTypes, { object } from "prop-types";
import axios from "axios";
import { useEffect, useState } from "react";

export const TabCategories = () => {
	const [jobs, setJobs] = useState([]);

	useEffect(() => {
		const getData = async () => {
			const { data } = await axios(`${import.meta.env.VITE_API_URL}/jobs`);
			setJobs(data);
		};
		getData();
	}, []);

	//! WEB DEVELOPMENT JOBS
	const developmentJobs = jobs
		.filter((jobs) => jobs.category === "Web Development")
		.map((devJob) => <JobCard key={devJob._id} job={devJob} />);

	//! GRAPHICS DESIGN JOBS
	const designJobs = jobs
		.filter((jobs) => jobs.category === "Graphics Design")
		.map((devJob) => <JobCard key={devJob._id} job={devJob} />);

	//! DIGITAL MARKETING JOBS
	const marketingJobs = jobs
		.filter((jobs) => jobs.category === "Digital Marketing")
		.map((devJob) => <JobCard key={devJob._id} job={devJob} />);

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
						{developmentJobs}
					</div>
				</TabPanel>

				{/* GRAPHICS DESIGN JOBS */}
				<TabPanel>
					<div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
						{designJobs}
					</div>
				</TabPanel>

				{/* DIGITAL MARKETING JOBS */}
				<TabPanel>
					<div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
						{marketingJobs}
					</div>
				</TabPanel>
			</div>
		</Tabs>
	);
};

TabCategories.propTypes = {
	jobs: PropTypes.arrayOf(object),
};
