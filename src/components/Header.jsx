import React, { useState, useEffect } from "react";
import { assets } from "../assets/assets_frontend/assets";
import {
	contactInfo,
	getFormattedHours,
	getSundayHours,
} from "../utils/contactInfo";

const Header = () => {
	const [currentSlide, setCurrentSlide] = useState(0);

	const headers = [
		// {
		// 	image: assets.banner1,
		// 	// title: "Book Appointment",
		// 	// subtitle: "With Trusted Doctors",
		// 	// description:
		// 	// 	"Simple browse through our extensive list of trusted doctors, schedule your appointment hassle-free.",
		// 	// buttonText: "Book Appointment",
		// },
		// {
		// 	image: assets.banner2,
		// 	// title: "Expert Healthcare",
		// 	// subtitle: "Professional Medical Services",
		// 	// description:
		// 	// 	"Access to qualified healthcare professionals for all your medical needs.",
		// 	// buttonText: "Get Started",
		// },
		{
			image: assets.banner3,
			// title: "Book Appointment",
			// subtitle: "With 100+ Trusted Doctors",
			// buttonText: "Create Account",
		},
		{
			image: assets.banner4,
			// title: "Expert Healthcare",
			// subtitle: "Professional Medical Services",
			// buttonText: "Book Now",
		},
	];

	// Auto slide functionality
	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentSlide((prev) => (prev + 1) % headers.length);
		}, 5000); // Change slide every 5 seconds

		return () => clearInterval(interval);
	}, [headers.length]);

	const nextSlide = () => {
		setCurrentSlide((prev) => (prev + 1) % headers.length);
	};

	const prevSlide = () => {
		setCurrentSlide((prev) => (prev - 1 + headers.length) % headers.length);
	};

	const goToSlide = (index) => {
		setCurrentSlide(index);
	};

	return (
		<div className="relative w-full overflow-hidden">
			{/* Header Container */}
			<div
				className="relative w-full overflow-hidden flex justify-center items-center bg-black"
				style={{
					// maxHeight: "700px", // limit banner height
					width: "100%", // always fill width
				}}>
				{headers.map(
					(header, index) =>
						index === currentSlide && (
							<img
								key={index}
								src={header.image}
								alt={header.name || "Banner Image"}
								style={{
									width: "100%",
									height: "100%",
									maxHeight: "750px",
									objectFit: "fill", // scale without cropping
								}}
							/>
						)
				)}
			</div>

			{/* Navigation Arrows */}
			<button
				onClick={prevSlide}
				className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 text-gray-800 p-2 rounded-full shadow-lg transition-all duration-200 z-20"
				aria-label="Previous slide">
				<svg
					className="w-6 h-6"
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
				className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 text-gray-800 p-2 rounded-full shadow-lg transition-all duration-200 z-20"
				aria-label="Next slide">
				<svg
					className="w-6 h-6"
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

			{/* Dots Indicator */}
			<div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
				{headers.map((_, index) => (
					<button
						key={index}
						onClick={() => goToSlide(index)}
						className={`w-3 h-3 rounded-full transition-all duration-200 ${
							index === currentSlide
								? "bg-white scale-110"
								: "bg-white bg-opacity-50 hover:bg-opacity-75"
						}`}
						aria-label={`Go to slide ${index + 1}`}
					/>
				))}
			</div>
		</div>
	);
};

export default Header;
