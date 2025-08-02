import React from "react";
import { assets } from "../assets/assets_frontend/assets";
import { NavLink } from "react-router-dom";
import { address, contactInfo, email } from "../utils/contactInfo.js";

const Footer = () => {
	return (
		<div className="md:mx-10">
			<div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-10 text-sm">
				{/* Left Section */}
				<div>
					<img
						className="mb-5 w-40"
						src={assets.logo_new}
						alt="Family health care."
					/>
					<p className="w-full md:w-2/3 text-gray-600 leading-6">
						Family health care. bridges the gap between patients and healthcare
						professionals by providing a seamless, digital healthcare booking
						platform. It's scalable, secure, and user-friendly - aiming to make
						healthcare more accessible and stress-free.
					</p>
				</div>

				{/* Center Section */}
				<div>
					<p className="text-xl font-medium mb-5">COMPANY</p>
					<ul className="flex flex-col gap-2 text-gray-600">
						<NavLink
							to="/"
							className={({ isActive }) =>
								isActive ? "text-primary font-medium" : "hover:text-primary"
							}>
							Home
						</NavLink>
						<NavLink
							to="/about"
							className={({ isActive }) =>
								isActive ? "text-primary font-medium" : "hover:text-primary"
							}>
							About Us
						</NavLink>
						<NavLink
							to="/contact"
							className={({ isActive }) =>
								isActive ? "text-primary font-medium" : "hover:text-primary"
							}>
							Contact Us
						</NavLink>
						<NavLink
							to="/privacy-policy"
							className={({ isActive }) =>
								isActive ? "text-primary font-medium" : "hover:text-primary"
							}>
							Privacy Policy
						</NavLink>
					</ul>
				</div>

				{/* Right Section */}
				<div>
					<p className="text-xl font-medium mb-5">GET IN TOUCH</p>
					<ul className="flex flex-col gap-2 text-gray-600">
						<li>{contactInfo.phoneNumbers.generalLine[0]}</li>
						<li>{email}</li>
						<li>{address}</li>
					</ul>
				</div>
			</div>

			{/* Copyright Text */}
			<div>
				<hr />
				<p className="py-5 text-sm text-center">
					Copyright {new Date().getFullYear()} © Family health care. All Right
					Reserved.
				</p>
			</div>
		</div>
	);
};

export default Footer;
