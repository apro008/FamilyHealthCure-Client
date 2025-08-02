import React from "react";
import { assets } from "../assets/assets_frontend/assets";
import { NavLink } from "react-router-dom";
import { address, contactInfo, email } from "../utils/contactInfo.js";

const HomeCollection = () => {
	return (
		<div className="min-h-screen flex flex-col bg-gray-50">
			{/* Main Content */}
			<div className="flex-grow max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
				<h1 className="text-3xl font-bold text-gray-800 mb-6">
					Home Collection Services
				</h1>
				<p className="text-gray-600 leading-6 mb-8">
					At Family health care., we offer convenient home collection services
					for diagnostic tests, making healthcare accessible from the comfort of
					your home. To schedule a home collection or get more information,
					please contact us through our phone number or chat with our friendly
					chatbot for instant assistance.
				</p>

				<section className="mb-8">
					<h2 className="text-xl font-semibold text-gray-700 mb-3">
						How to Book Home Collection
					</h2>
					<p className="text-gray-600 leading-6">Reach out to us via:</p>
					<ul className="list-disc list-inside text-gray-600 leading-6 ml-4 mt-2">
						<li>
							<span className="font-medium">Phone:</span> Call our dedicated
							support team at{" "}
							<a
								href={`tel:${contactInfo.phoneNumbers.generalLine[0]}`}
								className="text-primary hover:underline">
								{contactInfo.phoneNumbers.generalLine[0]}
							</a>{" "}
							to schedule your home collection appointment.
						</li>
						<li>
							<span className="font-medium">Chatbot:</span> Use our 24/7 chatbot
							available on this platform to get instant help with booking or
							answering your questions.
						</li>
					</ul>
				</section>

				<section className="mb-8">
					<h2 className="text-xl font-semibold text-gray-700 mb-3">
						Contact Information
					</h2>
					<ul className="flex flex-col gap-2 text-gray-600">
						<li className="flex items-center gap-2">
							<svg
								className="w-5 h-5 text-green-500"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								viewBox="0 0 24 24">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M3 5a2 2 0 012-2h2.28a2 2 0 011.94 1.515l.516 2.064a2 2 0 01-.45 1.947l-1.27 1.27a16.001 16.001 0 006.586 6.586l1.27-1.27a2 2 0 011.947-.45l2.064.516A2 2 0 0121 18.72V21a2 2 0 01-2 2h-1C9.163 23 1 14.837 1 5V4a2 2 0 012-2z"
								/>
							</svg>
							<a
								href={`tel:${contactInfo.phoneNumbers.generalLine[0]}`}
								className="text-primary hover:underline">
								{contactInfo.phoneNumbers.generalLine[0]}
							</a>
						</li>
						<li className="flex items-center gap-2">
							<svg
								className="w-5 h-5 text-blue-500"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								viewBox="0 0 24 24">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
								/>
							</svg>
							<a
								href={`mailto:${email}`}
								className="text-primary hover:underline">
								{email}
							</a>
						</li>
						<li className="flex items-center gap-2">
							<svg
								className="w-5 h-5 text-gray-500"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								viewBox="0 0 24 24">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
								/>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
								/>
							</svg>
							{address}
						</li>
					</ul>
				</section>

				<section className="mb-8">
					<h2 className="text-xl font-semibold text-gray-700 mb-3">
						Why Choose Our Home Collection?
					</h2>
					<p className="text-gray-600 leading-6">
						Our home collection services are designed for your convenience:
					</p>
					<ul className="list-disc list-inside text-gray-600 leading-6 ml-4 mt-2">
						<li>
							Safe and hygienic sample collection by trained professionals.
						</li>
						<li>Flexible scheduling to suit your needs.</li>
						<li>Fast and reliable results delivered securely.</li>
					</ul>
				</section>
			</div>
		</div>
	);
};

export default HomeCollection;
