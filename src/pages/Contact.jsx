import React, { useState } from "react";
import { contactInfo, email } from "../utils/contactInfo.js";
import SEO from "../components/SEO";

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
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Form submitted:", formData);
	};

	return (
		<div className="py-8 sm:py-12 animate-fade-in">
			<SEO
				title="Contact Us"
				path="/contact"
				description="Contact Family Health Care at 455, Boral Main Road, Kolkata-700154. Call +91 7003571264 or email familyhealthcarekolkata@gmail.com. Mon-Sat 7:30 AM - 8:30 PM, Sun 8:00 AM - 4:00 PM."
				keywords="contact Family Health Care, diagnostics Kolkata phone, healthcare Boral Main Road, doctor appointment contact"
			/>
			{/* Header */}
			<div className="text-center mb-12">
				<h1 className="section-heading">
					Contact <span className="text-primary">Us</span>
				</h1>
				<p className="section-subtext mt-3">
					Get in touch with us for any inquiries or to schedule your diagnostic services
				</p>
			</div>

			{/* Two Columns */}
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
				{/* Form */}
				<div className="card p-8">
					<h2 className="text-xl font-bold text-gray-900 mb-1">Contact Now</h2>
					<p className="text-gray-500 text-sm mb-6">
						Reach out to book an appointment, inquire about home collection, or share your concerns
					</p>

					<form onSubmit={handleSubmit} className="space-y-5">
						<div>
							<label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name *</label>
							<input
								type="text"
								name="fullName"
								value={formData.fullName}
								onChange={handleInputChange}
								required
								className="input-modern"
								placeholder="Enter your full name"
							/>
						</div>
						<div>
							<label className="block text-sm font-medium text-gray-700 mb-1.5">Email</label>
							<input
								type="email"
								name="email"
								value={formData.email}
								onChange={handleInputChange}
								className="input-modern"
								placeholder="Enter your email address"
							/>
						</div>
						<div>
							<label className="block text-sm font-medium text-gray-700 mb-1.5">Phone *</label>
							<input
								type="tel"
								name="phone"
								value={formData.phone}
								onChange={handleInputChange}
								required
								className="input-modern"
								placeholder="Enter your phone number"
							/>
						</div>
						<div>
							<label className="block text-sm font-medium text-gray-700 mb-1.5">Your Message</label>
							<textarea
								name="grievances"
								value={formData.grievances}
								onChange={handleInputChange}
								rows="4"
								className="input-modern resize-none"
								placeholder="Please describe your concerns..."
							/>
						</div>
						<div>
							<label className="block text-sm font-medium text-gray-700 mb-1.5">Captcha Verification</label>
							<div className="flex items-center gap-3">
								<div className="flex-1 bg-surface px-4 py-3 rounded-xl text-center font-mono text-lg tracking-widest text-gray-600 border border-gray-200">
									{captchaCode}
								</div>
								<button
									type="button"
									className="p-3 rounded-xl hover:bg-surface text-gray-400 hover:text-primary transition-colors"
									onClick={() => window.location.reload()}>
									<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
									</svg>
								</button>
								<input
									type="text"
									name="captcha"
									value={formData.captcha}
									onChange={handleInputChange}
									required
									className="flex-1 input-modern"
									placeholder="Enter code"
								/>
							</div>
						</div>
						<button type="submit" className="btn-accent w-full py-3">
							Submit Message
						</button>
					</form>
				</div>

				{/* Info */}
				<div className="space-y-5">
					{[
						{
							icon: (
								<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
								</svg>
							),
							title: "Working Hours",
							content: "Mon - Sat: 7:30 AM - 8:30 PM\nSun: 8:00 AM - 4:00 PM",
						},
						{
							icon: (
								<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
									<path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
								</svg>
							),
							title: "Address",
							content: "Family Health Care Diagnostics Center\n455, Boral Main Road, Kolkata-700154\nWest Bengal, India",
						},
						{
							icon: (
								<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h2.28a2 2 0 011.94 1.515l.516 2.064a2 2 0 01-.45 1.947l-1.27 1.27a16.001 16.001 0 006.586 6.586l1.27-1.27a2 2 0 011.947-.45l2.064.516A2 2 0 0121 18.72V21a2 2 0 01-2 2h-1C9.163 23 1 14.837 1 5V4a2 2 0 012-2z" />
								</svg>
							),
							title: "Phone",
							content: contactInfo.phoneNumbers.generalLine[0],
							isLink: true,
							href: "tel:+917003571264",
						},
						{
							icon: (
								<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
								</svg>
							),
							title: "Email",
							content: email,
							isLink: true,
							href: `mailto:${email}`,
						},
					].map((item, i) => (
						<div key={i} className="card p-5 flex gap-4">
							<div className="w-11 h-11 rounded-xl bg-primary-light text-primary flex items-center justify-center flex-shrink-0">
								{item.icon}
							</div>
							<div>
								<h3 className="font-semibold text-gray-900 text-sm">{item.title}</h3>
								{item.isLink ? (
									<a href={item.href} className="text-primary text-sm hover:underline mt-0.5 block">
										{item.content}
									</a>
								) : (
									<p className="text-gray-500 text-sm mt-0.5 whitespace-pre-line">{item.content}</p>
								)}
							</div>
						</div>
					))}
				</div>
			</div>

			{/* Map */}
			<div className="card overflow-hidden">
				<div className="p-6">
					<h3 className="text-lg font-bold text-gray-900">Our Location</h3>
					<p className="text-gray-500 text-sm mt-1">
						455, Boral Main Road, Kolkata-700154, West Bengal
					</p>
				</div>
				<div className="h-64">
					<iframe
						title="Family Health Care Location"
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.1234567890123!2d88.375674!3d22.448464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0271234567890%3A0x1234567890abcdef!2s455%2CBoral%20Main%20Road%2C%20Kolkata-700154%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1234567890123"
						width="100%"
						height="100%"
						style={{ border: 0 }}
						allowFullScreen=""
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
					/>
				</div>
			</div>
		</div>
	);
};

export default Contact;
