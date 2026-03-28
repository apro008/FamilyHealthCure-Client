import React, { useState, useEffect } from "react";
import { assets } from "../assets/assets_frontend/assets";

const Header = () => {
	const [currentSlide, setCurrentSlide] = useState(0);

	const headers = [
		{ image: assets.banner3 },
		{ image: assets.banner4 },
	];

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentSlide((prev) => (prev + 1) % headers.length);
		}, 5000);
		return () => clearInterval(interval);
	}, [headers.length]);

	const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % headers.length);
	const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + headers.length) % headers.length);

	return (
		<div className="relative w-full overflow-hidden rounded-2xl">
			{/* Slides */}
			<div className="relative w-full aspect-[16/6] sm:aspect-[16/5] bg-gray-100">
				{headers.map((header, index) => (
					<div
						key={index}
						className={`absolute inset-0 transition-all duration-700 ease-in-out ${
							index === currentSlide
								? "opacity-100 scale-100"
								: "opacity-0 scale-105"
						}`}>
						<img
							src={header.image}
							alt="Banner"
							className="w-full h-full object-cover"
						/>
					</div>
				))}
			</div>

			{/* Navigation Arrows */}
			<button
				onClick={prevSlide}
				className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white shadow-soft flex items-center justify-center transition-all duration-200 hover:scale-110 z-10"
				aria-label="Previous slide">
				<svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
					<path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
				</svg>
			</button>
			<button
				onClick={nextSlide}
				className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white shadow-soft flex items-center justify-center transition-all duration-200 hover:scale-110 z-10"
				aria-label="Next slide">
				<svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
					<path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
				</svg>
			</button>

			{/* Dots */}
			<div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
				{headers.map((_, index) => (
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

export default Header;
