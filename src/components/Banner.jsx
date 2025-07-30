import React, { useState, useEffect } from "react";
import { assets } from "../assets/assets_frontend/assets";
import { useNavigate } from "react-router-dom";

const Banner = () => {
	const navigate = useNavigate();
	const [currentSlide, setCurrentSlide] = useState(0);

	const banners = [
		{
			image: assets.banner1,
			title: "Book Appointment",
			subtitle: "With 100+ Trusted Doctors",
			buttonText: "Create Account",
		},
		{
			image: assets.banner2,
			title: "Expert Healthcare",
			subtitle: "Professional Medical Services",
			buttonText: "Book Now",
		},
	];

	// Auto slide functionality
	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentSlide((prev) => (prev + 1) % banners.length);
		}, 5000); // Change slide every 5 seconds

		return () => clearInterval(interval);
	}, [banners.length]);

	const nextSlide = () => {
		setCurrentSlide((prev) => (prev + 1) % banners.length);
	};

	const prevSlide = () => {
		setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);
	};

	const goToSlide = (index) => {
		setCurrentSlide(index);
	};

	return (
		<div className="relative my-20 md:mx-10 overflow-hidden rounded-lg">
			{/* Banner Container */}
			<div className="relative h-[300px] md:h-[400px] lg:h-[500px]">
				{banners.map((banner, index) => (
					<div
						key={index}
						className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
							index === currentSlide ? "opacity-100" : "opacity-0"
						}`}>
						{/* Background Image */}
						<div
							className="w-full h-full bg-cover bg-center bg-no-repeat relative"
							style={{ backgroundImage: `url(${banner.image})` }}>
							{/* Overlay */}
							<div className="absolute inset-0 bg-black bg-opacity-40"></div>

							{/* Content */}
							<div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-6 sm:px-10 md:px-14 lg:px-12">
								<div className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-white mb-4">
									<p>{banner.title}</p>
									<p className="mt-2">{banner.subtitle}</p>
								</div>
								<button
									onClick={() => {
										navigate("/login");
										scrollTo(0, 0);
									}}
									className="bg-white text-sm sm:text-base text-gray-600 px-8 py-3 rounded-full hover:scale-105 transition-all">
									{banner.buttonText}
								</button>
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
				{banners.map((_, index) => (
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

export default Banner;
