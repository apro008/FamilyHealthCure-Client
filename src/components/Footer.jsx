import React from "react";
import { assets } from "../assets/assets_frontend/assets";
import { NavLink } from "react-router-dom";
import { address, contactInfo, email } from "../utils/contactInfo.js";
import {
	FaPhoneAlt,
	FaEnvelope,
	FaFacebookF,
	FaInstagram,
} from "react-icons/fa";

const Footer = () => {
	return (
		<footer className="bg-gray-900 text-white">
			<div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
				{/* Brand */}
				<div className="sm:col-span-2 lg:col-span-1">
					<img
						className="mb-5 w-36"
						src={assets.logo_new}
						alt="Family health care."
					/>
					<p className="leading-relaxed text-gray-400 text-sm">
						Family health care is a dynamic healthcare startup. We bring
						professional medical care and lab tests right to your doorstep,
						ensuring convenience and quality.
					</p>
					{/* Social */}
					<div className="flex gap-3 mt-6">
						{[
							{ icon: <FaFacebookF />, href: "https://www.facebook.com/profile.php?id=61579017950797" },
							{ icon: <FaInstagram />, href: "https://instagram.com/familyhealthcarekolkata" },
						].map(({ icon, href }, i) => (
							<a
								key={i}
								href={href}
								target="_blank"
								rel="noopener noreferrer"
								className="w-9 h-9 rounded-lg bg-white/10 hover:bg-primary flex items-center justify-center transition-all duration-200 text-sm">
								{icon}
							</a>
						))}
					</div>
				</div>

				{/* Links */}
				<div>
					<h4 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-5">
						Company
					</h4>
					<ul className="flex flex-col gap-3">
						{[
							{ to: "/", label: "Home" },
							{ to: "/about", label: "About Us" },
							{ to: "/contact", label: "Contact Us" },
							{ to: "/privacy-policy", label: "Privacy Policy" },
						].map(({ to, label }) => (
							<NavLink
								key={to}
								to={to}
								className="text-gray-400 hover:text-white text-sm transition-colors">
								{label}
							</NavLink>
						))}
					</ul>
				</div>

				{/* Policies */}
				<div>
					<h4 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-5">
						Policies
					</h4>
					<ul className="flex flex-col gap-3">
						{[
							{ to: "/terms", label: "Terms & Conditions" },
							{ to: "/privacy-policy", label: "Privacy Policy" },
							{ to: "/disclaimer", label: "Disclaimer" },
							{ to: "/business-terms", label: "Business Terms" },
						].map(({ to, label }) => (
							<NavLink
								key={to + label}
								to={to}
								className="text-gray-400 hover:text-white text-sm transition-colors">
								{label}
							</NavLink>
						))}
					</ul>
				</div>

				{/* Map */}
				<div>
					<h4 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-5">
						Find Us
					</h4>
					<div className="h-48 rounded-xl overflow-hidden ring-1 ring-white/10">
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

			{/* Bottom */}
			<div className="border-t border-white/10">
				<div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row justify-between items-center gap-2">
					<p className="text-gray-500 text-sm">
						&copy; {new Date().getFullYear()} Family health care. All rights reserved.
					</p>
					<div className="flex items-center gap-4 text-gray-500 text-sm">
						<a href={`tel:${contactInfo.phoneNumbers.generalLine[0]}`} className="flex items-center gap-1.5 hover:text-white transition-colors">
							<FaPhoneAlt className="text-xs" />
							{contactInfo.phoneNumbers.generalLine[0]}
						</a>
						<a href={`mailto:${email}`} className="flex items-center gap-1.5 hover:text-white transition-colors">
							<FaEnvelope className="text-xs" />
							{email}
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
