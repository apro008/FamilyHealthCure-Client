import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { dummyDoctors } from "../utils/contactInfo.js";

const TopDoctors = () => {
	const { getDoctorsData } = useContext(AppContext);
	const navigate = useNavigate();
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		getDoctorsData();
	}, []);

	const visibleCount = 4;

	const nextSlide = () => {
		setCurrentIndex((prevIndex) => {
			const newIndex = prevIndex + visibleCount;
			return newIndex >= dummyDoctors.length ? 0 : newIndex;
		});
	};

	const prevSlide = () => {
		setCurrentIndex((prevIndex) => {
			const newIndex = prevIndex - visibleCount;
			return newIndex < 0
				? Math.max(0, dummyDoctors.length - visibleCount)
				: newIndex;
		});
	};

	const visibleDoctors = dummyDoctors.slice(currentIndex, currentIndex + 4);

	return (
		<div className="flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10">
			<h1 className="text-3xl font-medium">Top Doctors to Book</h1>
			<p className="sm:w-1/3 text-center text-sm">
				Simple browse through our extensive list of trusted doctors.
			</p>

			{/* Carousel Container */}
			<div className="relative w-full max-w-6xl flex items-center">
				{/* Prev Button */}
				<button
					onClick={prevSlide}
					className="absolute -left-8 md:-left-12 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200">
					<svg
						className="w-6 h-6 text-gray-600"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M15 19l-7-7 7-7"
						/>
					</svg>
				</button>

				{/* Cards Row */}
				<div className="flex gap-4 overflow-hidden w-full px-4">
					{visibleDoctors.map((doctor) => (
						<div
							key={doctor._id}
							className="flex-shrink-0 w-80 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group overflow-hidden border border-gray-100">
							{/* Top Image Section */}
							<div className="relative flex justify-center pt-6 pb-4 bg-gradient-to-b from-blue-50 to-white">
								<div className="w-24 h-24 rounded-full overflow-hidden shadow-lg border-4 border-white group-hover:scale-105 transition-transform duration-300">
									<img
										src={doctor.image}
										alt={doctor.name}
										className="w-full h-full object-cover"
										onError={(e) => {
											e.target.src =
												"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23e5e7eb'/%3E%3Ccircle cx='50' cy='35' r='15' fill='%23d1d5db'/%3E%3Cpath d='M20 80 Q50 60 80 80' stroke='%23d1d5db' stroke-width='8' fill='none'/%3E%3C/svg%3E";
										}}
									/>
								</div>
							</div>

							{/* Info Section */}
							<div className="px-6 pb-6">
								<h3 className="text-lg font-bold text-gray-900 text-center mb-1">
									{doctor.name}
								</h3>
								<p className="text-sm text-gray-500 text-center mb-1">
									{doctor.degrees}
								</p>
								<p className="text-sm text-gray-700 text-center mb-4 font-medium">
									{doctor.designation}
								</p>

								{/* Book Button */}
								<button
									onClick={(e) => {
										e.stopPropagation();
										window.location.href = "tel:+917003571264";
									}}
									className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white py-2.5 px-4 rounded-lg hover:from-red-600 hover:to-red-700 hover:scale-105 transition-all duration-200 font-medium text-sm shadow-md">
									Book Appointment
								</button>
							</div>
						</div>
					))}
				</div>

				{/* Next Button */}
				<button
					onClick={nextSlide}
					className="absolute -right-8 md:-right-12 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200">
					<svg
						className="w-6 h-6 text-gray-600"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M9 5l7 7-7 7"
						/>
					</svg>
				</button>
			</div>

			<button
				onClick={() => {
					navigate("/doctors");
					scrollTo(0, 0);
				}}
				className="bg-blue-50 text-gray-600 px-12 py-3 rounded-full mt-10 hover:bg-blue-100 transition-colors duration-200">
				View All Doctors
			</button>
		</div>
	);
};

export default TopDoctors;
