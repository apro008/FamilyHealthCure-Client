import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { dummyDoctors } from "../pages/Doctors.jsx";

const TopDoctors = () => {
	const { getDoctorsData } = useContext(AppContext);
	const navigate = useNavigate();
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		getDoctorsData();
	}, []);

	const nextSlide = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === Math.max(0, dummyDoctors.length - 4) ? 0 : prevIndex + 1
		);
	};

	const prevSlide = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === 0 ? Math.max(0, dummyDoctors.length - 4) : prevIndex - 1
		);
	};

	const visibleDoctors = dummyDoctors.slice(currentIndex, currentIndex + 4);

	return (
		<div className="flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10">
			<h1 className="text-3xl font-medium">Top Doctors to Book</h1>
			<p className="sm:w-1/3 text-center text-sm">
				Simple browse through our extensive list of trusted doctors.
			</p>

			{/* Carousel Container */}
			<div className="relative w-full max-w-6xl">
				{/* Navigation Buttons */}
				<button
					onClick={prevSlide}
					className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-200 -ml-4">
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

				<button
					onClick={nextSlide}
					className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-200 -mr-4">
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

				{/* Doctors Cards */}
				<div className="flex gap-4 px-8 overflow-hidden">
					{visibleDoctors.map((doctor) => (
						<div
							key={doctor._id}
							className="flex-shrink-0 w-64 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 cursor-pointer group">
							{/* Doctor Image */}
							<div className="p-4 pb-2">
								<div className="flex justify-center">
									<div className="w-16 h-16 rounded-full overflow-hidden border-3 border-gray-200 group-hover:border-red-500 transition-all duration-300">
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
							</div>

							{/* Doctor Info */}
							<div className="px-4 pb-4">
								<h3 className="text-sm font-bold text-gray-900 text-center mb-1">
									{doctor.name}
								</h3>
								<p className="text-xs text-gray-600 text-center mb-1">
									{doctor.degrees}
								</p>
								<p className="text-xs text-gray-700 text-center mb-3 font-medium">
									{doctor.designation}
								</p>

								{/* Book Appointment Button */}
								<button
									onClick={(e) => {
										e.stopPropagation();
										navigate(`/appointment/${doctor._id}`);
									}}
									className="w-full bg-red-600 text-white py-2 px-3 rounded-lg hover:bg-red-700 hover:scale-105 transition-all duration-200 font-medium text-xs transform">
									Book Appointment
								</button>
							</div>
						</div>
					))}
				</div>

				{/* Dots Indicator */}
				<div className="flex justify-center mt-6 space-x-2">
					{Array.from({ length: Math.ceil(dummyDoctors.length / 4) }).map(
						(_, index) => (
							<button
								key={index}
								onClick={() => setCurrentIndex(index * 4)}
								className={`w-2 h-2 rounded-full transition-all duration-200 ${
									Math.floor(currentIndex / 4) === index
										? "bg-red-600"
										: "bg-gray-300 hover:bg-gray-400"
								}`}
							/>
						)
					)}
				</div>
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
