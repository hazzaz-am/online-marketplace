import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useAuth } from "../../hooks/useAuth";
import DatePicker from "react-datepicker";
import toast from "react-hot-toast";

const JobDetails = () => {
	const [job, setJob] = useState({});
	const [startDate, setStartDate] = useState(new Date());
	const params = useParams();
	const { user } = useAuth();

	useEffect(() => {
		const getData = async () => {
			const { data } = await axios(
				`${import.meta.env.VITE_API_URL}/jobs/${params.id}`
			);
			setJob(data);
		};
		getData();
	}, [params.id]);

	async function handleFormSubmission(event) {
		event.preventDefault();
		const form = event.target;
		const jobId = job?._id;
		const price = parseFloat(form.price.value);
		const comment = form.comment.value;
		const email = user?.email;
		const buyer_email = job?.buyer?.email;
		const deadline = new Date(startDate).toLocaleDateString();
		const status = "pending";

		if (price < job?.min_price) {
			return toast.error("You have to BID at least equal to minimum price");
		} else if (form.price.value.length < 1) {
			return toast.error("You have to enter the BID PRICE");
		}

		if (email === buyer_email) {
			return toast.error("You can't apply to this job");
		}

		const bidData = {
			jobId,
			price,
			comment,
			deadline,
			email,
			buyer_email,
			status,
			category: job?.category,
		};

		try {
			const { data } = await axios.post(
				`${import.meta.env.VITE_API_URL}/bids`,
				bidData
			);
			if (data.insertedId) {
				return toast.success("Bids Place Successfully");
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
		<div className="flex flex-col md:flex-row justify-around gap-5  items-center min-h-[calc(100vh-306px)] md:max-w-screen-xl mx-auto my-12">
			{/* Job Details */}
			<div className="flex-1  px-4 py-7 bg-white rounded-md shadow-md md:min-h-[350px]">
				<div className="flex items-center justify-between">
					<span className="text-sm font-light text-gray-800 ">
						Deadline: {new Date(job?.deadline).toLocaleDateString()}
					</span>
					<span className="px-4 py-1 text-xs text-blue-800 uppercase bg-blue-200 rounded-full ">
						{job?.category}
					</span>
				</div>

				<div>
					<h1 className="mt-2 text-3xl font-semibold text-gray-800 ">
						{job?.job_title}
					</h1>

					<p className="mt-2 text-lg text-gray-600 ">
						{job?.description?.slice(0, 70)}
					</p>
					<p className="mt-6 text-sm font-bold text-gray-600 ">
						Buyer Details:
					</p>
					<div className="flex items-center gap-5">
						<div>
							<p className="mt-2 text-sm  text-gray-600 capitalize">
								Name: {job?.buyer?.name}
							</p>
							<p className="mt-2 text-sm  text-gray-600 ">
								Email: {job?.buyer?.email}
							</p>
						</div>
						<div className="rounded-full object-cover overflow-hidden w-14 h-14">
							<img src={job?.buyer?.photo} alt="Buyer Photo" />
						</div>
					</div>
					<p className="mt-6 text-lg font-bold text-gray-600 ">
						Range: ${job?.min_price} - ${job?.max_price}
					</p>
				</div>
			</div>
			{/* Place A Bid Form */}
			<section className="p-6 w-full  bg-white rounded-md shadow-md flex-1 md:min-h-[350px]">
				<h2 className="text-lg font-semibold text-gray-700 capitalize ">
					Place A Bid
				</h2>

				<form onSubmit={handleFormSubmission}>
					<div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
						<div>
							<label className="text-gray-700 " htmlFor="price">
								Price<span className="font-bold text-red-600">*</span>
							</label>
							<input
								id="price"
								type="text"
								name="price"
								className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
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
								className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
							/>
						</div>

						<div>
							<label className="text-gray-700 " htmlFor="comment">
								Comment
							</label>
							<input
								id="comment"
								name="comment"
								type="text"
								className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
							/>
						</div>
						<div className="flex flex-col gap-2 ">
							<label className="text-gray-700">
								Deadline<span className="font-bold text-red-600">*</span>
							</label>
							<DatePicker
								className="border p-2 rounded-md w-full"
								selected={startDate}
								onChange={(date) => setStartDate(date)}
							/>
						</div>
					</div>

					<div className="flex justify-end mt-6">
						<button
							type="submit"
							className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
						>
							Place Bid
						</button>
					</div>
				</form>
			</section>
		</div>
	);
};

export default JobDetails;
