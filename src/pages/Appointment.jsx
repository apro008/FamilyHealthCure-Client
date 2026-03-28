import React, { useContext, useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets_frontend/assets";
import RelatedDoctors from "../components/RelatedDoctors";
import toast from "react-hot-toast";
import axios from "axios";
import SEO from "../components/SEO";

const Appointment = () => {
	const { docId } = useParams();
	const navigate = useNavigate();
	const { currencySymbol, doctors, token, backendUrl, getDoctorsData } =
		useContext(AppContext);
	const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

	const docInfo = useMemo(
		() => doctors.find((doc) => doc._id === docId),
		[doctors, docId]
	);
	const [docSlots, setDocSlots] = useState([]);
	const [slotIndex, setSlotIndex] = useState(0);
	const [slotTime, setSlotTime] = useState("");

	const getAvailableSlots = async () => {
		const allSlots = [];
		const today = new Date();

		for (let i = 0; i < 7; i++) {
			let slotDate = new Date(today);
			slotDate.setDate(today.getDate() + i);

			let currentSlot = new Date(slotDate);
			let endSlot = new Date(slotDate);
			endSlot.setHours(21, 0, 0, 0);

			if (i === 0) {
				const now = new Date();
				currentSlot.setHours(
					now.getHours(),
					now.getMinutes() > 30 ? 30 : 0,
					0,
					0
				);
				if (currentSlot < now) {
					currentSlot.setMinutes(currentSlot.getMinutes() + 30);
				}
			} else {
				currentSlot.setHours(10, 0, 0, 0);
			}

			const daySlots = [];
			while (currentSlot < endSlot) {
				daySlots.push({
					datetime: new Date(currentSlot),
					time: currentSlot.toLocaleTimeString([], {
						hour: "2-digit",
						minute: "2-digit",
					}),
				});
				currentSlot.setMinutes(currentSlot.getMinutes() + 30);
			}

			allSlots.push(daySlots);
		}

		setDocSlots(allSlots);
	};

	const bookAppointment = async () => {};

	useEffect(() => {
		if (docInfo) getAvailableSlots();
	}, [docInfo]);

	if (!docInfo)
		return (
			<div className="flex items-center justify-center h-64">
				<p className="text-gray-400">Doctor not found.</p>
			</div>
		);

	return (
		<div className="py-8 animate-fade-in">
			<SEO
				title={`Book Appointment - ${docInfo.name}`}
				path={`/appointment/${docId}`}
				description={`Book an appointment with ${docInfo.name} (${docInfo.degree} - ${docInfo.speciality}) at Family Health Care Kolkata. ${docInfo.about || ''}`}
			/>
			{/* Doctor Info */}
			<div className="flex flex-col sm:flex-row gap-6">
				<div className="sm:w-72 flex-shrink-0">
					<img
						className="w-full rounded-2xl bg-primary-light object-cover"
						src={docInfo.image}
						alt=""
					/>
				</div>
				<div className="flex-1 card p-6 sm:p-8">
					<div className="flex items-center gap-2 mb-1">
						<h1 className="text-2xl font-bold text-gray-900">
							{docInfo.name}
						</h1>
						<img className="w-5" src={assets.verified_icon} alt="" />
					</div>

					<div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
						<span>{docInfo.degree} - {docInfo.speciality}</span>
						<span className="py-0.5 px-3 bg-surface text-xs font-medium rounded-full text-gray-600">
							{docInfo.experience}
						</span>
					</div>

					<div className="mb-4">
						<h3 className="flex items-center gap-1 text-sm font-semibold text-gray-900 mb-1">
							About <img className="w-3.5" src={assets.info_icon} alt="" />
						</h3>
						<p className="text-sm text-gray-500 leading-relaxed max-w-[700px]">
							{docInfo.about}
						</p>
					</div>

					<div className="inline-flex items-center gap-2 px-4 py-2 bg-surface rounded-xl">
						<span className="text-sm text-gray-500">Appointment Fee:</span>
						<span className="font-bold text-gray-900">
							{currencySymbol}{docInfo.fees}
						</span>
					</div>
				</div>
			</div>

			{/* Booking Slots */}
			<div className="sm:ml-[304px] mt-8">
				<h3 className="font-semibold text-gray-900 mb-4">Select a Date</h3>

				<div className="flex gap-3 overflow-x-auto pb-2">
					{docSlots.length === 0 ? (
						<p className="text-gray-400 text-sm">No available slots found.</p>
					) : (
						docSlots.map((item, index) => (
							<button
								onClick={() => setSlotIndex(index)}
								key={index}
								className={`flex flex-col items-center justify-center min-w-[4.5rem] py-4 rounded-xl transition-all duration-200 ${
									slotIndex === index
										? "bg-primary text-white shadow-glow"
										: "bg-surface text-gray-600 hover:bg-surface-dark"
								}`}>
								<span className="text-xs font-semibold">
									{item[0] && daysOfWeek[item[0].datetime.getDay()]}
								</span>
								<span className="text-lg font-bold mt-0.5">
									{item[0] && item[0].datetime.getDate()}
								</span>
							</button>
						))
					)}
				</div>

				<h3 className="font-semibold text-gray-900 mt-6 mb-3">Select a Time</h3>
				<div className="flex flex-wrap gap-2">
					{docSlots[slotIndex]?.map((item, index) => (
						<button
							onClick={() => setSlotTime(item.time)}
							className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
								item.time === slotTime
									? "bg-primary text-white shadow-glow"
									: "bg-surface text-gray-500 hover:bg-surface-dark hover:text-gray-700"
							}`}
							key={index}>
							{item.time.toLowerCase()}
						</button>
					))}
				</div>

				<button
					onClick={() => {
						bookAppointment();
						scrollTo(0, 0);
					}}
					className="btn-primary mt-8 px-12">
					Book an appointment
				</button>
			</div>

			<RelatedDoctors docId={docId} speciality={docInfo.speciality} />
		</div>
	);
};

export default Appointment;
