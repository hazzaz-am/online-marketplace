import PropTypes from "prop-types";
import { Link } from "react-router";

export const JobCard = ({ job }) => {
	return (
		<Link
			to={`/job/${job._id}`}
			className="w-full max-w-sm px-4 py-3 bg-white rounded-md shadow-md hover:scale-[1.05] transition-all"
		>
			<div className="flex items-center justify-between">
				<span className="text-xs font-light text-gray-800 ">
					Deadline: {new Date(job.deadline).toLocaleDateString()}
				</span>
				<span
					className={`px-3 py-1 text-[8px] uppercase rounded-full ${
						job.category === "Web Development" &&
						"text-blue-500 bg-blue-100/60"
					} ${
						job.category === "Graphics Design" &&
						"text-emerald-500 bg-emerald-100/60"
					} ${
						job.category === "Digital Marketing" &&
						"text-pink-500 bg-pink-100/60"
					}`}
				>
					{job.category}
				</span>
			</div>

			<div>
				<h1 className="mt-2 text-lg font-semibold text-gray-800 ">
					{job.job_title}
				</h1>

				<p className="mt-2 text-sm text-gray-600 ">
					{job.description.slice(0, 90)}....
				</p>
				<p className="mt-2 text-sm font-bold text-gray-600 ">
					Range: ${job.min_price} - ${job.max_price}
				</p>
			</div>
		</Link>
	);
};

JobCard.propTypes = {
	job: PropTypes.object,
};
