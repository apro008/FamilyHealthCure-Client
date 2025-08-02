import React, { useState } from "react";
import { contactInfo, email } from "../utils/contactInfo.js";

const Contact = () => {
	const [formData, setFormData] = useState({
		fullName: "",
		email: "",
		phone: "",
		grievances: "",
		captcha: "",
	});

	const [captchaCode] = useState("5cgm9h");

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// Handle form submission here
		console.log("Form submitted:", formData);
	};

	return (
		<div className="min-h-screen min-w-screen bg-gray-50 py-8">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Header */}
				<div className="text-center mb-12">
					<h1 className="text-4xl font-bold text-gray-900 mb-2">
						CONTACT <span className="text-primary">US</span>
					</h1>
					<p className="text-gray-600">
						Get in touch with us for any inquiries or to schedule your
						diagnostic services
					</p>
				</div>

				{/* Main Content - Two Columns */}
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
					{/* Left Column - Contact Form */}
					<div className="bg-white rounded-lg shadow-lg p-8">
						<div className="mb-6">
							<h2 className="text-2xl font-bold text-gray-900 mb-2">
								Contact Now
							</h2>
							<p className="text-gray-600">
								Reach out to book an appointment, inquire about home collection,
								or share your concerns
							</p>
						</div>

						<form onSubmit={handleSubmit} className="space-y-6">
							<div>
								<label className="block text-sm font-medium text-gray-700 mb-2">
									Full Name*
								</label>
								<input
									type="text"
									name="fullName"
									value={formData.fullName}
									onChange={handleInputChange}
									required
									className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
									placeholder="Enter your full name"
								/>
							</div>

							<div>
								<label className="block text-sm font-medium text-gray-700 mb-2">
									Email Address
								</label>
								<input
									type="email"
									name="email"
									value={formData.email}
									onChange={handleInputChange}
									className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
									placeholder="Enter your email address"
								/>
							</div>

							<div>
								<label className="block text-sm font-medium text-gray-700 mb-2">
									Phone*
								</label>
								<input
									type="tel"
									name="phone"
									value={formData.phone}
									onChange={handleInputChange}
									required
									className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
									placeholder="Enter your phone number"
								/>
							</div>

							<div>
								<label className="block text-sm font-medium text-gray-700 mb-2">
									Your Grievances
								</label>
								<textarea
									name="grievances"
									value={formData.grievances}
									onChange={handleInputChange}
									rows="4"
									className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
									placeholder="Please describe your concerns..."></textarea>
							</div>

							<div>
								<label className="block text-sm font-medium text-gray-700 mb-2">
									Captcha Verification
								</label>
								<div className="flex items-center space-x-4">
									<div className="flex-1 bg-gray-100 p-3 rounded-lg text-center font-mono text-lg">
										{captchaCode}
									</div>
									<button
										type="button"
										className="p-3 text-gray-500 hover:text-primary"
										onClick={() => window.location.reload()}>
										<svg
											className="w-5 h-5"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24">
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
											/>
										</svg>
									</button>
									<input
										type="text"
										name="captcha"
										value={formData.captcha}
										onChange={handleInputChange}
										required
										className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
										placeholder="Enter code here"
									/>
								</div>
							</div>

							<button
								type="submit"
								className="w-full bg-red-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-red-700 transition-colors duration-200">
								Submit
							</button>
						</form>
					</div>

					{/* Right Column - Contact Information */}
					<div className="bg-white rounded-lg shadow-lg p-8">
						<h2 className="text-2xl font-bold text-gray-900 mb-6">
							Our Address
						</h2>

						<div className="space-y-6">
							<div>
								<h3 className="font-semibold text-gray-900 mb-2">
									Diagnostics Working Hours
								</h3>
								<p className="text-gray-600">
									Mon - Sat: 7:30 AM - 8:30 PM, Sun: 8:00 AM - 4:00 PM (Please
									make prior doctor appointment for consultations)
								</p>
							</div>

							<div>
								<h3 className="font-semibold text-gray-900 mb-2">
									Home Collection Availability
								</h3>
								<p className="text-gray-600">
									Available during diagnostics hours. Book via phone or online.
								</p>
							</div>

							<div>
								<h3 className="font-semibold text-gray-900 mb-2">Address</h3>
								<div className="space-y-2">
									<div>
										<p className="font-medium text-gray-800">
											Family Health Care Diagnostics Center
										</p>
										<p className="text-gray-600">
											455, Boral Main Road, Kolkata-700154, West Bengal, India
										</p>
									</div>
								</div>
							</div>

							<div>
								<h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
								<div className="space-y-1">
									<p className="text-gray-600">
										<a
											href="tel:+917003571264"
											className="text-primary hover:underline">
											{contactInfo.phoneNumbers.generalLine[0]}
										</a>
									</p>
								</div>
							</div>

							<div>
								<h3 className="font-semibold text-gray-900 mb-2">Email</h3>
								<div className="space-y-1">
									<p className="text-gray-600">
										<a
											href="mailto:familyhealthcare60@gmail.com"
											className="text-primary hover:underline">
											{email}
										</a>
									</p>
								</div>
							</div>

							<div>
								<h3 className="font-semibold text-gray-900 mb-2">
									Service Hours
								</h3>
								<p className="text-gray-600">
									Diagnostics: Mon - Sat: 7:30 AM - 8:30 PM, Sun: 8:00 AM - 4:00
									PM
									<br />
									Home Collection: Available during diagnostics hours
								</p>
							</div>
						</div>
					</div>
				</div>

				{/* Single Map Section */}
				<div className="mt-16">
					<div className="bg-white rounded-lg shadow-lg overflow-hidden">
						<div className="p-6">
							<h3 className="text-xl font-bold text-gray-900 mb-4">
								Family Health Care Location
							</h3>
							<p className="text-gray-600 mb-2">
								455, Boral Main Road, Kolkata-700154, West Bengal
							</p>
							<div className="flex items-center mb-4">
								<div className="flex text-yellow-400">
									{[...Array(5)].map((_, i) => (
										<svg
											key={i}
											className={`w-4 h-4 ${
												i < 3 ? "text-yellow-400" : "text-gray-300"
											}`}
											fill="currentColor"
											viewBox="0 0 20 20">
											<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
										</svg>
									))}
								</div>
								<span className="ml-2 text-sm text-gray-600">
									4.7 out of 5 stars (347 reviews)
								</span>
							</div>
						</div>
						<div className="h-64 bg-gray-200 flex items-center justify-center">
							<iframe
								title="Family Health Care Location"
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.1234567890123!2d88.375674!3d22.448464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0271234567890%3A0x1234567890abcdef!2s455%2CBoral%20Main%20Road%2C%20Kolkata-700154%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1234567890123"
								width="100%"
								height="100%"
								style={{ border: 0 }}
								allowFullScreen=""
								loading="lazy"
								referrerPolicy="no-referrer-when-downgrade"></iframe>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
