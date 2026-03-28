import React from "react";
import { address, contactInfo, email } from "../utils/contactInfo.js";
import SEO from "../components/SEO";

const PrivacyPolicy = () => {
	const sections = [
		{
			title: "Introduction",
			content: (
				<p>
					At Family Health Care, we are committed to protecting your privacy.
					This Privacy Policy explains how we collect, use, disclose, and
					safeguard your personal information when you use our digital
					healthcare booking platform. By using our services, you consent to
					the practices described in this policy.
				</p>
			),
		},
		{
			title: "Information We Collect",
			content: (
				<>
					<p className="mb-3">We collect information you provide directly, such as:</p>
					<ul className="list-disc list-inside space-y-1 mb-3">
						<li>Personal details (name, email, phone) when you create an account or book an appointment.</li>
						<li>Health-related information provided during booking or consultation.</li>
						<li>Payment information for processing transactions (handled via secure third-party processors).</li>
					</ul>
					<p className="mb-3">We also collect information automatically, such as:</p>
					<ul className="list-disc list-inside space-y-1">
						<li>IP address, browser type, and device information.</li>
						<li>Usage data, such as pages visited and interactions.</li>
					</ul>
				</>
			),
		},
		{
			title: "How We Use Your Information",
			content: (
				<ul className="list-disc list-inside space-y-1">
					<li>Facilitate appointment bookings and communication with healthcare professionals.</li>
					<li>Improve our platform's functionality and user experience.</li>
					<li>Send updates, reminders, or promotional content (with your consent).</li>
					<li>Comply with legal obligations and protect against fraud.</li>
				</ul>
			),
		},
		{
			title: "Sharing Your Information",
			content: (
				<>
					<p className="mb-3">We do not sell your personal information. We may share it with:</p>
					<ul className="list-disc list-inside space-y-1">
						<li>Healthcare professionals to facilitate your appointments.</li>
						<li>Trusted third-party service providers (payment processors, analytics).</li>
						<li>Legal authorities when required by law.</li>
					</ul>
				</>
			),
		},
		{
			title: "Your Rights",
			content: (
				<>
					<ul className="list-disc list-inside space-y-1 mb-3">
						<li>Access, correct, or delete your personal information.</li>
						<li>Opt out of marketing communications.</li>
						<li>Request data portability or restrict processing.</li>
					</ul>
					<p>
						To exercise these rights, contact us at{" "}
						<a href={`mailto:${email}`} className="text-primary font-medium hover:underline">{email}</a>.
					</p>
				</>
			),
		},
		{
			title: "Security",
			content: (
				<p>
					We implement industry-standard security measures to protect your
					data, including encryption and secure servers. However, no system is
					completely secure, and we cannot guarantee absolute security.
				</p>
			),
		},
		{
			title: "Contact Us",
			content: (
				<div className="space-y-2">
					<p>If you have questions about this Privacy Policy, contact us at:</p>
					<div className="flex flex-col gap-1">
						<a href={`mailto:${email}`} className="text-primary hover:underline">{email}</a>
						<span>{contactInfo.phoneNumbers.generalLine[0]}</span>
						<span>{address}</span>
					</div>
				</div>
			),
		},
	];

	return (
		<div className="py-8 sm:py-12 animate-fade-in">
			<SEO
				title="Privacy Policy"
				path="/privacy-policy"
				description="Family Health Care privacy policy. Learn how we collect, use, and protect your personal and health information."
			/>
			<div className="max-w-3xl mx-auto">
				<h1 className="section-heading mb-2">Privacy Policy</h1>
				<p className="text-sm text-gray-400 mb-10">Last Updated: August 3, 2025</p>

				<div className="space-y-6">
					{sections.map((section, i) => (
						<div key={i} className="card p-6">
							<h2 className="text-lg font-bold text-gray-900 mb-3">{section.title}</h2>
							<div className="text-sm text-gray-600 leading-relaxed">{section.content}</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default PrivacyPolicy;
