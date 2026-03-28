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
		setCurrentIndex((prev) => {
			const next = prev + visibleCount;
			return next >= dummyDoctors.length ? 0 : next;
		});
	};

	const prevSlide = () => {
		setCurrentIndex((prev) => {
			const next = prev - visibleCount;
			return next < 0 ? Math.max(0, dummyDoctors.length - visibleCount) : next;
		});
	};

	const visibleDoctors = dummyDoctors.slice(currentIndex, currentIndex + visibleCount);

	return (
		<section className="py-16 sm:py-20">
			<div className="text-center mb-10">
				<h2 className="section-heading">Top Doctors to Book</h2>
				<p className="section-subtext mt-3">
					Browse through our extensive list of trusted doctors.
				</p>
			</div>

			{/* Carousel */}
			<div className="relative max-w-6xl mx-auto">
				{/* Prev */}
				<button
					onClick={prevSlide}
					className="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-card hover:shadow-elevated flex items-center justify-center transition-all duration-200 hover:scale-110">
					<svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
						<path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
					</svg>
				</button>

				{/* Cards */}
				<div className="flex gap-5 overflow-hidden px-2">
					{visibleDoctors.map((doctor) => (
						<div
							key={doctor._id}
							className="flex-shrink-0 w-72 card p-0 overflow-hidden group cursor-pointer hover:-translate-y-1">
							{/* Image */}
							<div className="relative p-6 pb-4 bg-gradient-to-b from-primary-light to-white">
								<div className="w-24 h-24 mx-auto rounded-full overflow-hidden ring-4 ring-white shadow-soft group-hover:ring-primary/20 group-hover:scale-105 transition-all duration-300">
									<img
										src={doctor.image}
										alt={doctor.name}
										className="w-full h-full object-cover"
										onError={(e) => {
											e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23e5e7eb'/%3E%3Ccircle cx='50' cy='35' r='15' fill='%23d1d5db'/%3E%3Cpath d='M20 80 Q50 60 80 80' stroke='%23d1d5db' stroke-width='8' fill='none'/%3E%3C/svg%3E";
										}}
									/>
								</div>
							</div>

							{/* Info */}
							<div className="px-5 pb-5">
								<h3 className="text-base font-bold text-gray-900 text-center">
									{doctor.name}
								</h3>
								<p className="text-sm text-gray-500 text-center mt-0.5">
									{doctor.degrees}
								</p>
								<p className="text-sm text-gray-600 text-center mt-0.5 font-medium">
									{doctor.designation}
								</p>

								<button
									onClick={(e) => {
										e.stopPropagation();
										window.location.href = "tel:+917003571264";
									}}
									className="btn-accent w-full mt-4 py-2.5 text-sm rounded-xl">
									Book Appointment
								</button>
							</div>
						</div>
					))}
				</div>

				{/* Next */}
				<button
					onClick={nextSlide}
					className="absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-card hover:shadow-elevated flex items-center justify-center transition-all duration-200 hover:scale-110">
					<svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
						<path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
					</svg>
				</button>
			</div>

			<div className="text-center mt-10">
				<button
					onClick={() => {
						navigate("/doctors");
						scrollTo(0, 0);
					}}
					className="btn-outline text-sm px-10 py-3">
					View All Doctors
				</button>
			</div>
		</section>
	);
};

export default TopDoctors;
