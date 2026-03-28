import React, { useContext, useState, useEffect } from "react";
import { assets } from "../assets/assets_frontend/assets";
import { NavLink, useNavigate } from "react-router-dom";
import ConfirmLogout from "./ConfirmLogout";
import { AppContext } from "../context/AppContext";
import {
	contactInfo,
	getFormattedHours,
	getSundayHours,
} from "../utils/contactInfo.js";

const Navbar = () => {
	const navigate = useNavigate();
	const { token, userData } = useContext(AppContext);
	const [showConfirm, setShowConfirm] = useState(false);
	const [showMenu, setShowMenu] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => setScrolled(window.scrollY > 20);
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const navLinkClass = ({ isActive }) =>
		`relative py-2 px-1 text-sm font-medium tracking-wide transition-colors duration-200 ${
			isActive
				? "text-primary"
				: "text-gray-600 hover:text-primary"
		}`;

	const mobileNavClass = ({ isActive }) =>
		`px-6 py-3 rounded-xl text-base font-medium transition-all duration-200 w-full text-center ${
			isActive
				? "bg-primary text-white shadow-glow"
				: "text-gray-700 hover:bg-surface"
		}`;

	return (
		<nav
			className={`sticky top-0 z-50 transition-all duration-300 ${
				scrolled
					? "glass shadow-soft py-3"
					: "bg-white py-4"
			}`}>
			<div className="flex justify-between items-center">
				<img
					onClick={() => {
						navigate("/");
						scrollTo(0, 0);
					}}
					src={assets.logo_new}
					alt="Family health care."
					className="w-28 cursor-pointer hover:opacity-80 transition-opacity"
				/>

				{/* Desktop Nav */}
				<ul className="hidden lg:flex items-center gap-1 mx-auto">
					<NavLink to="/" className={navLinkClass}>
						Home
					</NavLink>
					<NavLink to="/doctors" className={navLinkClass}>
						All Doctors
					</NavLink>
					<NavLink to="/our-services" className={navLinkClass}>
						Our Services
					</NavLink>
					<NavLink to="/contact" className={navLinkClass}>
						Contact Us
					</NavLink>
					<NavLink to="/home-collection" className={navLinkClass}>
						Home Collection
					</NavLink>
				</ul>

				<div className="flex items-center gap-3">
					{/* Contact Info - Desktop */}
					<div className="hidden lg:flex flex-col items-end gap-0.5 text-xs text-gray-500">
						<a
							href={`tel:${contactInfo.phoneNumbers.generalLine[0]}`}
							className="flex items-center gap-1.5 hover:text-primary transition-colors font-medium text-sm text-gray-700">
							<div className="w-6 h-6 rounded-full bg-primary-light flex items-center justify-center">
								<svg className="w-3 h-3 text-primary" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h2.28a2 2 0 011.94 1.515l.516 2.064a2 2 0 01-.45 1.947l-1.27 1.27a16.001 16.001 0 006.586 6.586l1.27-1.27a2 2 0 011.947-.45l2.064.516A2 2 0 0121 18.72V21a2 2 0 01-2 2h-1C9.163 23 1 14.837 1 5V4a2 2 0 012-2z" />
								</svg>
							</div>
							{contactInfo.phoneNumbers.generalLine[0]}
						</a>
						<span className="text-gray-400">{getFormattedHours()}</span>
						<span className="text-gray-400">{getSundayHours()}</span>
					</div>

					{/* User Menu */}
					{token && userData ? (
						<div className="flex items-center gap-2 cursor-pointer group relative">
							<img
								className="w-9 h-9 rounded-full object-cover ring-2 ring-gray-100 group-hover:ring-primary/30 transition-all"
								src={userData.image}
								alt=""
							/>
							<svg className="w-4 h-4 text-gray-400 group-hover:text-primary transition-colors" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
							</svg>
							<div className="absolute top-full right-0 pt-2 text-sm text-gray-600 z-20 hidden group-hover:block">
								<div className="min-w-48 bg-white rounded-xl shadow-card border border-gray-100 p-2 animate-slide-down">
									<p
										onClick={() => navigate("/my-profile")}
										className="px-4 py-2.5 rounded-lg hover:bg-surface hover:text-primary cursor-pointer transition-colors">
										My Profile
									</p>
									<p
										onClick={() => navigate("/my-appointments")}
										className="px-4 py-2.5 rounded-lg hover:bg-surface hover:text-primary cursor-pointer transition-colors">
										My Appointments
									</p>
									<hr className="my-1 border-gray-100" />
									<p
										onClick={() => setShowConfirm(true)}
										className="px-4 py-2.5 rounded-lg hover:bg-red-50 hover:text-accent cursor-pointer transition-colors">
										Logout
									</p>
								</div>
							</div>
							{showConfirm && <ConfirmLogout item={{ setShowConfirm }} />}
						</div>
					) : null}

					{/* Mobile Menu Toggle */}
					<button
						onClick={() => setShowMenu(true)}
						className="lg:hidden p-2 rounded-lg hover:bg-surface transition-colors">
						<svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
						</svg>
					</button>
				</div>
			</div>

			{/* Mobile Menu */}
			<div
				className={`fixed inset-0 z-50 transition-all duration-300 lg:hidden ${
					showMenu ? "visible" : "invisible"
				}`}>
				{/* Overlay */}
				<div
					className={`absolute inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-300 ${
						showMenu ? "opacity-100" : "opacity-0"
					}`}
					onClick={() => setShowMenu(false)}
				/>
				{/* Panel */}
				<div
					className={`absolute top-0 right-0 w-80 max-w-[85vw] h-full bg-white shadow-elevated transition-transform duration-300 ${
						showMenu ? "translate-x-0" : "translate-x-full"
					}`}>
					<div className="flex items-center justify-between p-6 border-b border-gray-100">
						<img className="w-28" src={assets.logo_new} alt="Family health care." />
						<button
							onClick={() => setShowMenu(false)}
							className="p-2 rounded-lg hover:bg-surface transition-colors">
							<svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
							</svg>
						</button>
					</div>
					<ul className="flex flex-col gap-1 p-4">
						{[
							{ to: "/", label: "Home" },
							{ to: "/doctors", label: "All Doctors" },
							{ to: "/our-services", label: "Our Services" },
							{ to: "/contact", label: "Contact Us" },
							{ to: "/home-collection", label: "Home Collection" },
							{ to: "/privacy-policy", label: "Privacy Policy" },
						].map(({ to, label }) => (
							<NavLink
								key={to}
								onClick={() => {
									setShowMenu(false);
									scrollTo(0, 0);
								}}
								to={to}
								className={mobileNavClass}>
								{label}
							</NavLink>
						))}
					</ul>
					{/* Mobile Contact */}
					<div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-100 bg-surface">
						<a
							href={`tel:${contactInfo.phoneNumbers.generalLine[0]}`}
							className="flex items-center gap-3 text-sm font-medium text-gray-700">
							<div className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center">
								<svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h2.28a2 2 0 011.94 1.515l.516 2.064a2 2 0 01-.45 1.947l-1.27 1.27a16.001 16.001 0 006.586 6.586l1.27-1.27a2 2 0 011.947-.45l2.064.516A2 2 0 0121 18.72V21a2 2 0 01-2 2h-1C9.163 23 1 14.837 1 5V4a2 2 0 012-2z" />
								</svg>
							</div>
							<div>
								<p>{contactInfo.phoneNumbers.generalLine[0]}</p>
								<p className="text-xs text-gray-400 font-normal">{getFormattedHours()}</p>
							</div>
						</a>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
