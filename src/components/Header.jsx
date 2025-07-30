import React, { useState, useEffect } from "react";
import { assets } from "../assets/assets_frontend/assets";

const Header = () => {
	const [currentSlide, setCurrentSlide] = useState(0);

	const headers = [
		{
			image: assets.banner1,
			title: "Book Appointment",
			subtitle: "With Trusted Doctors",
			description:
				"Simple browse through our extensive list of trusted doctors, schedule your appointment hassle-free.",
			buttonText: "Book Appointment",
		},
		{
			image: assets.banner2,
			title: "Expert Healthcare",
			subtitle: "Professional Medical Services",
			description:
				"Access to qualified healthcare professionals for all your medical needs.",
			buttonText: "Get Started",
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
			<div className="relative h-[600px] md:h-[600px] lg:h-[800px]">
				{headers.map((header, index) => (
					<div
						key={index}
						className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
							index === currentSlide ? "opacity-100" : "opacity-0"
						}`}>
						{/* Background Image */}
						<div
							className="w-full h-full bg-cover bg-center bg-no-repeat relative"
							style={{ backgroundImage: `url(${header.image})` }}>
							{/* Overlay */}
							<div className="absolute inset-0 bg-black bg-opacity-50"></div>

							{/* Content */}
							<div className="relative z-10 flex flex-col md:flex-row items-center justify-center h-full px-6 md:px-10 lg:px-20">
								{/* Left Side - Text Content */}
								<div className="md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 text-center md:text-start">
									<div className="text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight">
										<p>{header.title}</p>
										<p className="mt-2">{header.subtitle}</p>
									</div>
									<div className="flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light">
										<img className="w-28" src={assets.group_profiles} alt="" />
										<p className="text-center md:text-start">
											{header.description}
										</p>
									</div>
									<a
										href="#speciality"
										className="flex items-center gap-2 bg-white px-8 py-3 rounded-full text-gray-600 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300">
										{header.buttonText}{" "}
										<img src={assets.arrow_icon} className="w-3" />
									</a>
								</div>

								{/* Right Side - Image */}
								{/* <div className="md:w-1/2 relative hidden md:block">
									<img
										src={assets.header_img}
										alt=""
										className="w-full md:absolute bottom-0 rounded-lg"
									/>
								</div> */}
							</div>
						</div>
					</div>
				))}
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
