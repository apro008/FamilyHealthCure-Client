import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets_frontend/assets";
import { contactInfo } from "../utils/contactInfo.js";

const Header = () => {
	const [currentSlide, setCurrentSlide] = useState(0);
	const navigate = useNavigate();

	const headers = [
		{ image: assets.banner3 },
		{ image: assets.banner4 },
		{ image: assets.banner5 },
	];

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentSlide((prev) => (prev + 1) % headers.length);
		}, 5000);
		return () => clearInterval(interval);
	}, [headers.length]);

	return (
		<div className="relative w-full overflow-hidden rounded-2xl sm:rounded-3xl">
			{/* Slides */}
			<div className="relative w-full aspect-[16/9] sm:aspect-[12/5]">
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
							alt="Family Health Care"
							className="w-full h-full object-cover"
						/>
					</div>
				))}

				{/* Overlay with CTA */}
				<div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent z-10">
					<div className="flex flex-col justify-center h-full px-6 sm:px-12 lg:px-16 max-w-xl">
						<span className="text-white/80 text-xs sm:text-sm font-medium tracking-widest uppercase mb-2 sm:mb-3">
							Family Health Care
						</span>
						<h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-3 sm:mb-5 drop-shadow-lg">
							Quality Healthcare For Your Family
						</h1>
						<p className="text-white/80 text-sm sm:text-base mb-5 sm:mb-7 leading-relaxed hidden sm:block">
							From general physicians to specialists — trusted healthcare for every generation.
						</p>
						<div className="flex flex-wrap gap-3">
							<button
								onClick={() => {
									window.location.href = `tel:${contactInfo.phoneNumbers.generalLine[0]}`;
								}}
								className="bg-white text-gray-900 px-5 sm:px-7 py-2.5 sm:py-3 rounded-xl font-semibold text-sm sm:text-base hover:bg-primary hover:text-white transition-all duration-300 shadow-lg">
								Book Appointment
							</button>
							<button
								onClick={() => {
									navigate("/doctors");
									scrollTo(0, 0);
								}}
								className="border-2 border-white/60 text-white px-5 sm:px-7 py-2.5 sm:py-3 rounded-xl font-medium text-sm sm:text-base hover:bg-white/10 transition-all duration-300">
								Our Doctors
							</button>
						</div>
					</div>
				</div>
			</div>

			{/* Dots */}
			<div className="absolute bottom-3 sm:bottom-5 right-5 sm:right-8 flex gap-2 z-20">
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
