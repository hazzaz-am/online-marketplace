import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import DatePicker from "react-datepicker";
import toast from "react-hot-toast";
import axios from "axios";

const AddJob = () => {
	const [startDate, setStartDate] = useState(new Date());
	const { user } = useAuth();

	async function handleFormSubmission(event) {
		event.preventDefault();
		const form = event.target;
		const job_title = form.job_title.value;
		const category = form.category.value;
		const deadline = startDate;
		const description = form.description.value;
		const min_price = parseFloat(form.min_price.value);
		const max_price = parseFloat(form.max_price.value);
		const email = user?.email;

		if (
			job_title.length === 0 ||
			category.length === 0 ||
			description.length === 0 ||
			min_price.toString().length === 0 ||
			max_price.toString().length === 0
		) {
			return toast.error("Please Fill up the form carefully");
		}

		const jobData = {
			job_title,
			category,
			deadline,
			description,
			min_price,
			max_price,
			buyer: {
				email,
				name: user?.displayName,
				photo: user?.photoURL,
			},
		};

		try {
			const { data } = await axios.post(
				`${import.meta.env.VITE_API_URL}/jobs`,
				jobData
			);
			if (data.insertedId) {
				return toast.success("Job added Successfully");
			} else {
				return toast.error("Something Went Wrong, Please try again later");
			}
		} catch (error) {
			if (error instanceof Error) {
				toast.error(error.message);
			} else {
				toast.error(error);
			}
		} finally {
			form.reset();
		}
	}

	return (
		<div className="flex justify-center items-center min-h-[calc(100vh-306px)] my-12">
			<section className=" p-2 md:p-6 mx-auto bg-white rounded-md shadow-md ">
				<h2 className="text-lg font-semibold text-gray-700 capitalize ">
					Post a Job
				</h2>

				<form onSubmit={handleFormSubmission}>
					<div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
						<div>
							<label className="text-gray-700 " htmlFor="job_title">
								Job Title
							</label>
							<input
								id="job_title"
								name="job_title"
								type="text"
								className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
							/>
						</div>

						<div>
							<label className="text-gray-700 " htmlFor="emailAddress">
								Email Address
							</label>
							<input
								id="emailAddress"
								type="email"
								name="email"
								disabled
								defaultValue={user?.email}
								className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
							/>
						</div>
						<div className="flex flex-col">
							<label className="text-gray-700">Deadline</label>
							<DatePicker
								className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
								selected={startDate}
								onChange={(date) => setStartDate(date)}
							/>
						</div>

						<div className="flex flex-col">
							<label className="text-gray-700 " htmlFor="category">
								Category
							</label>
							<select
								name="category"
								id="category"
								className="border p-2 rounded-md mt-2"
							>
								<option value="Web Development">Web Development</option>
								<option value="Graphics Design">Graphics Design</option>
								<option value="Digital Marketing">Digital Marketing</option>
							</select>
						</div>
						<div>
							<label className="text-gray-700 " htmlFor="min_price">
								Minimum Price
							</label>
							<input
								id="min_price"
								name="min_price"
								type="number"
								className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
							/>
						</div>

						<div>
							<label className="text-gray-700 " htmlFor="max_price">
								Maximum Price
							</label>
							<input
								id="max_price"
								name="max_price"
								type="number"
								className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
							/>
						</div>
					</div>
					<div className="flex flex-col mt-4">
						<label className="text-gray-700 " htmlFor="description">
							Description
						</label>
						<textarea
							className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
							name="description"
							id="description"
						></textarea>
					</div>
					<div className="flex justify-end mt-6">
						<button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transhtmlForm bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
							Save
						</button>
					</div>
				</form>
			</section>
		</div>
	);
};

export default AddJob;
