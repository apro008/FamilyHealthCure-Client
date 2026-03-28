import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import SEO from "../components/SEO";

const MyAppointments = () => {
	const { backendUrl, token, getDoctorsData } = useContext(AppContext);

	const navigate = useNavigate();

	const [appointments, setAppointments] = useState([]);
	const months = [
		" ",
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec",
	];

	const slotDateFormat = (slotDate) => {
		const dateArray = slotDate.split("_");
		return (
			dateArray[0] + " " + months[Number(dateArray[1])] + " " + dateArray[2]
		);
	};

	const getUserAppointments = async () => {
		// try {
		//   const { data } = await axios.get(`${backendUrl}/api/user/appointments`, { headers: { token } })
		//   if (data.success) {
		//     setAppointments(data.appointments)
		//   }
		// } catch (error) {
		//   toast.error(error.message)
		// }
	};

	const cancelAppointment = async (appointmentId) => {
		// toast.loading("Appointment canceling...");
		// try {
		// 	const { data } = await axios.post(`${backendUrl}/api/user/cancel-appointment`, { appointmentId }, { headers: { token } });
		// 	toast.dismiss();
		// 	if (data.success) { toast.success(data.message); getUserAppointments(); getDoctorsData(); }
		// 	else { toast.error(data.message); }
		// } catch (error) { toast.error(error.message); }
	};

	const initPay = (order) => {
		const options = {
			key: import.meta.env.VITE_RAZORPAY_KEY_ID,
			amount: order.amount,
			currency: order.currency,
			name: "Appointment Payment",
			description: "Appointment Payment",
			order_id: order.id,
			receipt: order.receipt,
			handler: async (response) => {
				console.log("response", response);
			},
		};
		const rzp = new Razorpay(options);
		rzp.open();
	};

	const appointmentRazorpay = async (appointmentId) => {
		// toast.loading("Processing...");
		// try {
		// 	const { data } = await axios.post(`${backendUrl}/api/user/payment-razorpay`, { appointmentId }, { headers: { token } });
		// 	toast.dismiss();
		// 	if (data.success) { initPay(data.order); }
		// } catch (error) { toast.dismiss(); toast.error(error.message); }
	};

	useEffect(() => {
		if (token) getUserAppointments();
	}, [token]);

	return (
		<div className="py-8 animate-fade-in">
			<SEO title="My Appointments" path="/my-appointments" description="View and manage your doctor appointments at Family Health Care." />
			<h1 className="section-heading mb-8">My Appointments</h1>

			{appointments.length === 0 ? (
				<div className="card p-12 text-center">
					<div className="w-16 h-16 bg-surface rounded-2xl flex items-center justify-center mx-auto mb-4">
						<svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
						</svg>
					</div>
					<h3 className="text-lg font-semibold text-gray-700">No appointments yet</h3>
					<p className="text-gray-400 text-sm mt-1">Your booked appointments will appear here</p>
				</div>
			) : (
				<div className="space-y-4">
					{appointments.map((item, index) => (
						<div
							className="card p-5 flex flex-col sm:flex-row gap-5"
							key={index}>
							<img
								className="w-24 h-24 rounded-xl object-cover bg-primary-light flex-shrink-0"
								src={item.docData.image}
								alt=""
							/>
							<div className="flex-1 text-sm">
								<p className="font-bold text-gray-900">{item.docData.name}</p>
								<p className="text-gray-500 mt-0.5">{item.docData.speciality}</p>
								<div className="mt-2 text-gray-600">
									<p className="text-xs">{item.docData.address.line1}</p>
									<p className="text-xs">{item.docData.address.line2}</p>
								</div>
								<p className="text-xs mt-2">
									<span className="font-semibold text-gray-700">Date & Time:</span>{" "}
									{slotDateFormat(item.slotDate)} | {item.slotTime}
								</p>
							</div>
							<div className="flex flex-col gap-2 sm:w-44">
								{!item.cancelled && item.payment && !item.isCompleted && (
									<span className="py-2 px-4 bg-primary-light text-primary text-center rounded-xl text-sm font-medium">
										Paid
									</span>
								)}
								{!item.cancelled && !item.payment && !item.isCompleted && (
									<>
										<button
											onClick={() => appointmentRazorpay(item._id)}
											className="btn-primary text-sm py-2">
											Pay Online
										</button>
										<button
											onClick={() => cancelAppointment(item._id)}
											className="py-2 px-4 border border-gray-200 rounded-xl text-sm text-gray-500 hover:border-accent hover:text-accent transition-all">
											Cancel
										</button>
									</>
								)}
								{item.cancelled && !item.isCompleted && (
									<span className="py-2 px-4 bg-accent-light text-accent text-center rounded-xl text-sm font-medium">
										Cancelled
									</span>
								)}
								{item.isCompleted && (
									<span className="py-2 px-4 bg-green-50 text-primary-green text-center rounded-xl text-sm font-medium">
										Completed
									</span>
								)}
							</div>
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default MyAppointments;
