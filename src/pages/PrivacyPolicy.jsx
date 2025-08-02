import React from "react";
import { assets } from "../assets/assets_frontend/assets";
import { NavLink } from "react-router-dom";
import { address, contactInfo, email } from "../utils/contactInfo.js";

const PrivacyPolicy = () => {
	return (
		<div className="min-h-screen flex flex-col bg-gray-50">
			{/* Main Content */}
			<div className="flex-grow max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
				<h1 className="text-3xl font-bold text-gray-800 mb-6">
					Privacy Policy
				</h1>
				<p className="text-sm text-gray-600 mb-8">
					Last Updated: August 3, 2025
				</p>

				<section className="mb-8">
					<h2 className="text-xl font-semibold text-gray-700 mb-3">
						Introduction
					</h2>
					<p className="text-gray-600 leading-6">
						At Family health care., we are committed to protecting your privacy.
						This Privacy Policy explains how we collect, use, disclose, and
						safeguard your personal information when you use our digital
						healthcare booking platform. By using our services, you consent to
						the practices described in this policy.
					</p>
				</section>

				<section className="mb-8">
					<h2 className="text-xl font-semibold text-gray-700 mb-3">
						Information We Collect
					</h2>
					<p className="text-gray-600 leading-6">
						We collect information you provide directly, such as:
					</p>
					<ul className="list-disc list-inside text-gray-600 leading-6 ml-4">
						<li>
							Personal details (e.g., name, email, phone number) when you create
							an account or book an appointment.
						</li>
						<li>
							Health-related information provided during booking or consultation
							processes.
						</li>
						<li>
							Payment information for processing transactions (handled securely
							via third-party payment processors).
						</li>
					</ul>
					<p className="text-gray-600 leading-6 mt-2">
						We also collect information automatically, such as:
					</p>
					<ul className="list-disc list-inside text-gray-600 leading-6 ml-4">
						<li>IP address, browser type, and device information.</li>
						<li>
							Usage data, such as pages visited and interactions with our
							platform.
						</li>
					</ul>
				</section>

				<section className="mb-8">
					<h2 className="text-xl font-semibold text-gray-700 mb-3">
						How We Use Your Information
					</h2>
					<p className="text-gray-600 leading-6">We use your information to:</p>
					<ul className="list-disc list-inside text-gray-600 leading-6 ml-4">
						<li>
							Facilitate appointment bookings and communication with healthcare
							professionals.
						</li>
						<li>Improve our platform's functionality and user experience.</li>
						<li>
							Send you updates, reminders, or promotional content (with your
							consent).
						</li>
						<li>Comply with legal obligations and protect against fraud.</li>
					</ul>
				</section>

				<section className="mb-8">
					<h2 className="text-xl font-semibold text-gray-700 mb-3">
						Sharing Your Information
					</h2>
					<p className="text-gray-600 leading-6">
						We do not sell your personal information. We may share it with:
					</p>
					<ul className="list-disc list-inside text-gray-600 leading-6 ml-4">
						<li>Healthcare professionals to facilitate your appointments.</li>
						<li>
							Trusted third-party service providers (e.g., payment processors,
							analytics tools).
						</li>
						<li>Legal authorities when required by law.</li>
					</ul>
				</section>

				<section className="mb-8">
					<h2 className="text-xl font-semibold text-gray-700 mb-3">
						Your Rights
					</h2>
					<p className="text-gray-600 leading-6">You have the right to:</p>
					<ul className="list-disc list-inside text-gray-600 leading-6 ml-4">
						<li>Access, correct, or delete your personal information.</li>
						<li>Opt out of marketing communications.</li>
						<li>
							Request data portability or restrict processing, where applicable.
						</li>
					</ul>
					<p className="text-gray-600 leading-6 mt-2">
						To exercise these rights, contact us at{" "}
						<a
							href={`mailto:${email}`}
							className="text-primary hover:underline">
							{email}
						</a>
						.
					</p>
				</section>

				<section className="mb-8">
					<h2 className="text-xl font-semibold text-gray-700 mb-3">Security</h2>
					<p className="text-gray-600 leading-6">
						We implement industry-standard security measures to protect your
						data, including encryption and secure servers. However, no system is
						completely secure, and we cannot guarantee absolute security.
					</p>
				</section>

				<section className="mb-8">
					<h2 className="text-xl font-semibold text-gray-700 mb-3">
						Contact Us
					</h2>
					<p className="text-gray-600 leading-6">
						If you have questions about this Privacy Policy, contact us at:
					</p>
					<ul className="list-disc list-inside text-gray-600 leading-6 ml-4">
						<li>
							Email:{" "}
							<a
								href={`mailto:${email}`}
								className="text-primary hover:underline">
								{email}
							</a>
						</li>
						<li>Phone: {contactInfo.phoneNumbers.generalLine[0]}</li>
						<li>{address}</li>
					</ul>
				</section>
			</div>
		</div>
	);
};

export default PrivacyPolicy;
