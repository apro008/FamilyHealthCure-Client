import React from "react";
import { assets } from "../assets/assets_frontend/assets";
import SEO from "../components/SEO";

const About = () => {
	return (
		<div className="py-8 sm:py-12 animate-fade-in">
			<SEO
				title="About Us"
				path="/about"
				description="Learn about Family Health Care - a premier diagnostics center in Kolkata providing comprehensive diagnostic services, specialist consultations, and home sample collection since over a decade."
				keywords="about Family Health Care, diagnostics center Kolkata, healthcare startup Kolkata, pathology lab Boral"
			/>
			{/* Header */}
			<div className="text-center mb-12">
				<h1 className="section-heading">
					About <span className="text-primary">Us</span>
				</h1>
			</div>

			{/* About Content */}
			<div className="flex flex-col md:flex-row gap-10 mb-20">
				<div className="md:w-2/5">
					<img
						className="w-full rounded-2xl shadow-soft object-cover"
						src={assets.about_image}
						alt="Family Health Care Diagnostics Center"
					/>
				</div>
				<div className="md:w-3/5 flex flex-col justify-center gap-5 text-gray-600 text-[15px] leading-relaxed">
					<p>
						Family Health Care is a premier diagnostics center in Kolkata,
						dedicated to providing comprehensive diagnostic services and
						consultations with multiple specialized doctors under one roof.
						Located at 455, Boral Main Road, Kolkata-700154, we offer both
						appointment-based and walk-in consultations for your convenience.
					</p>
					<p>
						Our state-of-the-art facility provides advanced pathology services,
						including blood and urine sample collection at our center or your
						home, ensuring accurate and timely results. Patients can easily book
						appointments online or visit us directly to consult with our expert
						doctors across various specialties.
					</p>
					<p>
						Contact us at{" "}
						<a href="tel:+917003571264" className="text-primary font-medium hover:underline">
							+91 7003571264
						</a>{" "}
						or{" "}
						<a href="mailto:familyhealthcare60@gmail.com" className="text-primary font-medium hover:underline">
							familyhealthcare60@gmail.com
						</a>{" "}
						to schedule your visit or home collection service.
					</p>
					<div className="mt-2 p-5 bg-primary-light rounded-xl border border-primary/10">
						<h3 className="font-bold text-gray-900 mb-2">Our Vision</h3>
						<p className="text-gray-600">
							To redefine diagnostic healthcare by offering a seamless, patient-centric
							experience through advanced technology, expert medical professionals,
							and convenient services like home sample collection.
						</p>
					</div>
				</div>
			</div>

			{/* Why Choose Us */}
			<div className="mb-12">
				<h2 className="text-xl font-bold text-gray-900 mb-6">
					Why <span className="text-primary">Choose Us</span>
				</h2>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
				{[
					{
						icon: (
							<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
							</svg>
						),
						title: "Comprehensive Diagnostics",
						desc: "Access advanced pathology services, including blood and urine tests, conducted with cutting-edge technology by experienced professionals for accurate results.",
					},
					{
						icon: (
							<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
							</svg>
						),
						title: "Flexible Consultations",
						desc: "Book appointments with specialized doctors or walk in at your convenience to receive expert care tailored to your needs.",
					},
					{
						icon: (
							<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
							</svg>
						),
						title: "Home Collection Services",
						desc: "Enjoy the convenience of blood and urine sample collection from your home, ensuring a hassle-free and safe diagnostic experience.",
					},
				].map((item, i) => (
					<div
						key={i}
						className="card p-7 group hover:bg-primary hover:-translate-y-1 cursor-pointer">
						<div className="w-12 h-12 rounded-xl bg-primary-light text-primary flex items-center justify-center mb-4 group-hover:bg-white/20 group-hover:text-white transition-colors">
							{item.icon}
						</div>
						<h3 className="font-bold text-gray-900 mb-2 group-hover:text-white transition-colors">
							{item.title}
						</h3>
						<p className="text-sm text-gray-500 leading-relaxed group-hover:text-white/80 transition-colors">
							{item.desc}
						</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default About;
