import React from "react";
import { assets } from "../assets/assets_frontend/assets";
import { NavLink } from "react-router-dom";
import { address, contactInfo, email } from "../utils/contactInfo.js";
import {
	FaPhoneAlt,
	FaEnvelope,
	FaFacebookF,
	FaInstagram,
	FaGoogle,
} from "react-icons/fa";

const Footer = () => {
	return (
		<footer className="bg-[#002B5B] text-white w-full">
			<div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-4 gap-14">
				{/* 1️⃣ Left Section */}
				<div>
					<img
						className="mb-5 w-40"
						src={assets.logo_new}
						alt="Family health care."
					/>
					<p className="w-full leading-6 text-gray-200">
						Family health care is a dynamic healthcare startup. We bring
						professional medical care and lab tests right to your doorstep,
						ensuring convenience and quality. Managing your health from home has
						never been easier.
					</p>
				</div>

				{/* 2️⃣ Company Links */}
				<div>
					<p className="text-xl font-medium mb-5">COMPANY</p>
					<ul className="flex flex-col gap-2 text-gray-200">
						<NavLink to="/" className="hover:text-primary">
							Home
						</NavLink>
						<NavLink to="/about" className="hover:text-primary">
							About Us
						</NavLink>
						<NavLink to="/contact" className="hover:text-primary">
							Contact Us
						</NavLink>
						<NavLink to="/privacy-policy" className="hover:text-primary">
							Privacy Policy
						</NavLink>
					</ul>
				</div>

				{/* 3️⃣ Policies Links */}
				<div>
					<p className="text-xl font-medium mb-5">POLICIES</p>
					<ul className="flex flex-col gap-2 text-gray-200">
						<NavLink to="/terms" className="hover:text-primary">
							Terms & Conditions
						</NavLink>
						<NavLink to="/privacy-policy" className="hover:text-primary">
							Privacy Policy
						</NavLink>
						<NavLink to="/disclaimer" className="hover:text-primary">
							Disclaimer
						</NavLink>
						<NavLink to="/business-terms" className="hover:text-primary">
							Business Terms
						</NavLink>
					</ul>
				</div>

				{/* 4️⃣ Map Section */}
				<div>
					<p className="text-lg font-semibold mb-4">Find Us</p>
					<div className="h-60 rounded-lg overflow-hidden shadow-lg">
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

			{/* Bottom Bar */}
			<div className="border-t border-white border-opacity-20 mt-6">
				<div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row justify-between items-center text-gray-300 text-sm">
					<p>
						© {new Date().getFullYear()} Family health care. All rights
						reserved.
					</p>
					<div className="flex gap-4 mt-2 sm:mt-0 text-white text-lg">
						<a
							href="https://facebook.com"
							target="_blank"
							rel="noopener noreferrer">
							<FaFacebookF />
						</a>
						<a
							href="https://instagram.com"
							target="_blank"
							rel="noopener noreferrer">
							<FaInstagram />
						</a>
						<a
							href="https://google.com"
							target="_blank"
							rel="noopener noreferrer">
							<FaGoogle />
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
