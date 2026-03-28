import React, { useState, useEffect } from "react";
import { assets } from "../assets/assets_frontend/assets";

const Banner = () => {
	const [currentSlide, setCurrentSlide] = useState(0);

	const banners = [
		{
			image: assets.banner1,
			title: "Book Appointment",
			subtitle: "With 100+ Trusted Doctors",
			buttonText: "Book Now",
		},
		{
			image: assets.banner2,
			title: "Expert Healthcare",
			subtitle: "Professional Medical Services",
			buttonText: "Book Now",
		},
		{
			image: assets.banner3,
			title: "Book Appointment",
			subtitle: "With 100+ Trusted Doctors",
			buttonText: "Book Now",
		},
		{
			image: assets.banner4,
			title: "Expert Healthcare",
			subtitle: "Professional Medical Services",
			buttonText: "Book Now",
		},
	];

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentSlide((prev) => (prev + 1) % banners.length);
		}, 5000);
		return () => clearInterval(interval);
	}, [banners.length]);

	const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % banners.length);
	const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);

	return (
		<div className="relative my-16 sm:my-20 overflow-hidden rounded-2xl">
			{/* Slides */}
			<div className="relative h-[280px] sm:h-[360px] lg:h-[450px]">
				{banners.map((banner, index) => (
					<div
						key={index}
						className={`absolute inset-0 transition-all duration-700 ease-in-out ${
							index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"
						}`}>
						<div
							className="w-full h-full bg-cover bg-center"
							style={{ backgroundImage: `url(${banner.image})` }}>
							{/* Gradient overlay */}
							<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />

							{/* Content */}
							<div className="relative z-10 flex flex-col justify-end h-full pb-16 sm:pb-20 text-center px-6">
								<h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white mb-2 drop-shadow-lg">
									{banner.title}
								</h2>
								<p className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-6 font-light">
									{banner.subtitle}
								</p>
								<div>
									<button
										onClick={() => {
											window.location.href = "tel:+917003571264";
										}}
										className="bg-white text-gray-800 px-8 py-3 rounded-xl font-medium text-sm sm:text-base hover:bg-primary hover:text-white hover:shadow-glow transition-all duration-300">
										{banner.buttonText}
									</button>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>

			{/* Arrows */}
			<button
				onClick={prevSlide}
				className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white shadow-soft flex items-center justify-center transition-all duration-200 hover:scale-110 z-20"
				aria-label="Previous slide">
				<svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
					<path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
				</svg>
			</button>
			<button
				onClick={nextSlide}
				className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white shadow-soft flex items-center justify-center transition-all duration-200 hover:scale-110 z-20"
				aria-label="Next slide">
				<svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
					<path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
				</svg>
			</button>

			{/* Dots */}
			<div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
				{banners.map((_, index) => (
					<button
						key={index}
						onClick={() => setCurrentSlide(index)}
						className={`rounded-full transition-all duration-300 ${
							index === currentSlide
								? "w-8 h-2.5 bg-white"
								: "w-2.5 h-2.5 bg-white/50 hover:bg-white/70"
						}`}
						aria-label={`Go to slide ${index + 1}`}
					/>
				))}
			</div>
		</div>
	);
};

export default Banner;
