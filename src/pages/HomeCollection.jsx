import React from "react";
import { address, contactInfo, email } from "../utils/contactInfo.js";
import SEO from "../components/SEO";

const HomeCollection = () => {
	return (
		<div className="py-8 sm:py-12 animate-fade-in">
			<SEO
				title="Home Collection"
				path="/home-collection"
				description="Book home sample collection for blood tests and diagnostics in Kolkata. Safe, hygienic collection by trained professionals. Flexible scheduling. Call +91 7003571264."
				keywords="home sample collection Kolkata, blood test at home, home diagnostics Kolkata, pathology home collection Boral"
			/>
			<div className="max-w-3xl mx-auto">
				<h1 className="section-heading mb-3">Home Collection Services</h1>
				<p className="text-gray-500 leading-relaxed mb-10">
					At Family Health Care, we offer convenient home collection services
					for diagnostic tests, making healthcare accessible from the comfort of
					your home.
				</p>

				{/* How to Book */}
				<div className="card p-6 mb-5">
					<h2 className="text-lg font-bold text-gray-900 mb-4">How to Book</h2>
					<div className="space-y-3">
						<div className="flex gap-3">
							<div className="w-8 h-8 rounded-lg bg-primary-light text-primary flex items-center justify-center flex-shrink-0 text-sm font-bold">1</div>
							<div>
								<p className="text-sm text-gray-700">
									<span className="font-semibold">Call us</span> at{" "}
									<a href={`tel:${contactInfo.phoneNumbers.generalLine[0]}`} className="text-primary font-medium hover:underline">
										{contactInfo.phoneNumbers.generalLine[0]}
									</a>{" "}
									to schedule your home collection appointment.
								</p>
							</div>
						</div>
						<div className="flex gap-3">
							<div className="w-8 h-8 rounded-lg bg-primary-light text-primary flex items-center justify-center flex-shrink-0 text-sm font-bold">2</div>
							<div>
								<p className="text-sm text-gray-700">
									<span className="font-semibold">Use our chatbot</span> available 24/7 on this platform for instant help with booking or questions.
								</p>
							</div>
						</div>
					</div>
				</div>

				{/* Contact */}
				<div className="card p-6 mb-5">
					<h2 className="text-lg font-bold text-gray-900 mb-4">Contact Information</h2>
					<div className="space-y-3">
						{[
							{
								icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h2.28a2 2 0 011.94 1.515l.516 2.064a2 2 0 01-.45 1.947l-1.27 1.27a16.001 16.001 0 006.586 6.586l1.27-1.27a2 2 0 011.947-.45l2.064.516A2 2 0 0121 18.72V21a2 2 0 01-2 2h-1C9.163 23 1 14.837 1 5V4a2 2 0 012-2z" /></svg>,
								content: <a href={`tel:${contactInfo.phoneNumbers.generalLine[0]}`} className="text-primary hover:underline">{contactInfo.phoneNumbers.generalLine[0]}</a>,
							},
							{
								icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
								content: <a href={`mailto:${email}`} className="text-primary hover:underline">{email}</a>,
							},
							{
								icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
								content: <span className="text-gray-600">{address}</span>,
							},
						].map((item, i) => (
							<div key={i} className="flex items-center gap-3">
								<div className="w-9 h-9 rounded-lg bg-primary-light text-primary flex items-center justify-center flex-shrink-0">
									{item.icon}
								</div>
								<span className="text-sm">{item.content}</span>
							</div>
						))}
					</div>
				</div>

				{/* Why Choose */}
				<div className="card p-6">
					<h2 className="text-lg font-bold text-gray-900 mb-4">Why Choose Our Home Collection?</h2>
					<div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
						{[
							{ title: "Safe & Hygienic", desc: "Sample collection by trained professionals" },
							{ title: "Flexible Scheduling", desc: "Appointments to suit your needs" },
							{ title: "Fast Results", desc: "Reliable results delivered securely" },
						].map((item, i) => (
							<div key={i} className="p-4 bg-surface rounded-xl text-center">
								<h4 className="font-semibold text-gray-900 text-sm">{item.title}</h4>
								<p className="text-gray-500 text-xs mt-1">{item.desc}</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomeCollection;
