import React, { useContext, useState } from "react";
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

	return (
		<div className="flex justify-between items-center text-sm py-4 mb-5 border-b border-b-gray-400 w-full top-0 bg-white z-50">
			<img
				onClick={() => {
					navigate("/");
					scrollTo(0, 0);
				}}
				src={assets.logo_new}
				alt="Family health care."
				className="w-28 cursor-pointer"
			/>
			<ul className="hidden md:flex items-center gap-5 font-medium mx-auto">
				<NavLink to="/">
					<li className="py-1">HOME</li>
					<hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden rounded-full" />
				</NavLink>
				<NavLink to="/doctors">
					<li className="py-1">ALL DOCTORS</li>
					<hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden rounded-full" />
				</NavLink>
				<NavLink to="/about">
					<li className="py-1">ABOUT</li>
					<hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden rounded-full" />
				</NavLink>
				<NavLink to="/contact">
					<li className="py-1">CONTACT US</li>
					<hr className="border-none outline-none h-0.5 bg-primary w-4/5 m-auto hidden rounded-full" />
				</NavLink>
				<NavLink to="/home-collection">
					<li className="py-1">HOME COLLECTION</li>
					<hr className="border-none outline-none h-0.5 bg-primary w-4/5 m-auto hidden rounded-full" />
				</NavLink>
				{/* <NavLink to="/privacy-policy">
					<li className="py-1">PRIVACY POLICY</li>
					<hr className="border-none outline-none h-0.5 bg-primary w-4/5 m-auto hidden rounded-full" />
				</NavLink> */}
			</ul>

			<div className="flex items-center gap-4">
				{token && userData ? (
					<div className="flex items-center gap-2 cursor-pointer group relative">
						<img
							className="w-8 rounded-full shadow-sm"
							src={userData.image}
							alt=""
						/>
						<img className="w-2.5" src={assets.dropdown_icon} alt="" />
						<div className="absolute top-1 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
							<div className="border-t-4 border-primary min-w-48 bg-slate-50 rounded flex flex-col gap-4 p-4">
								<p
									onClick={() => navigate("/my-profile")}
									className="hover:text-black cursor-pointer">
									My Profile
								</p>
								<p
									onClick={() => navigate("/my-appointments")}
									className="hover:text-black cursor-pointer">
									My Appointments
								</p>
								<p
									onClick={() => setShowConfirm(true)}
									className="hover:text-black cursor-pointer">
									Logout
								</p>
							</div>
						</div>
						{showConfirm && <ConfirmLogout item={{ setShowConfirm }} />}
					</div>
				) : null}

				<img
					onClick={() => setShowMenu(true)}
					className="w-6 md:hidden"
					src={assets.menu_icon}
					alt="Menu"
				/>
				{/* Mobile Menu */}
				<div
					className={`fixed inset-0 z-50 bg-white transition-transform duration-300 ease-in-out ${
						showMenu ? "translate-x-0" : "-translate-x-full"
					} md:hidden`}>
					<div className="flex items-center justify-between px-5 py-6">
						<img className="w-36" src={assets.logo} alt="Family health care." />
						<img
							className="w-7 cursor-pointer"
							onClick={() => setShowMenu(false)}
							src={assets.cross_icon}
							alt="Close menu"
						/>
					</div>
					<ul className="flex flex-col items-center gap-4 mt-5 px-5 text-lg font-medium">
						<NavLink
							onClick={() => {
								setShowMenu(false);
								scrollTo(0, 0);
							}}
							to="/"
							className={({ isActive }) =>
								isActive
									? "px-8 py-2 rounded-full bg-primary text-white"
									: "px-8 py-2 rounded-full hover:bg-gray-100"
							}>
							HOME
						</NavLink>
						<NavLink
							onClick={() => {
								setShowMenu(false);
								scrollTo(0, 0);
							}}
							to="/doctors"
							className={({ isActive }) =>
								isActive
									? "px-8 py-2 rounded-full bg-primary text-white"
									: "px-8 py-2 rounded-full hover:bg-gray-100"
							}>
							ALL DOCTORS
						</NavLink>
						<NavLink
							onClick={() => {
								setShowMenu(false);
								scrollTo(0, 0);
							}}
							to="/about"
							className={({ isActive }) =>
								isActive
									? "px-8 py-2 rounded-full bg-primary text-white"
									: "px-8 py-2 rounded-full hover:bg-gray-100"
							}>
							ABOUT
						</NavLink>
						<NavLink
							onClick={() => {
								setShowMenu(false);
								scrollTo(0, 0);
							}}
							to="/contact"
							className={({ isActive }) =>
								isActive
									? "px-8 py-2 rounded-full bg-primary text-white"
									: "px-8 py-2 rounded-full hover:bg-gray-100"
							}>
							CONTACT US
						</NavLink>
						<NavLink
							onClick={() => {
								setShowMenu(false);
								scrollTo(0, 0);
							}}
							to="/home-collection"
							className={({ isActive }) =>
								isActive
									? "px-8 py-2 rounded-full bg-primary text-white"
									: "px-8 py-2 rounded-full hover:bg-gray-100"
							}>
							HOME COLLECTION
						</NavLink>
						<NavLink
							onClick={() => {
								setShowMenu(false);
								scrollTo(0, 0);
							}}
							to="/privacy-policy"
							className={({ isActive }) =>
								isActive
									? "px-8 py-2 rounded-full bg-primary text-white"
									: "px-8 py-2 rounded-full hover:bg-gray-100"
							}>
							PRIVACY POLICY
						</NavLink>
					</ul>
				</div>
			</div>
			<div className="hidden md:flex flex-col items-end gap-1 ml-8 text-gray-700 text-sm min-w-[180px]">
				<div className="flex items-center gap-1">
					<svg
						className="w-4 h-4 text-green-500"
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
					<span>{contactInfo.phoneNumbers.generalLine[0]}</span>
				</div>
				<div className="flex flex-col items-end gap-1">
					<div className="flex items-center gap-1">
						<svg
							className="w-4 h-4 text-yellow-500"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							viewBox="0 0 24 24">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
							/>
						</svg>
						<span>{getFormattedHours()}</span>
					</div>
					<div className="flex items-center gap-1">
						<svg
							className="w-4 h-4 text-blue-500"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							viewBox="0 0 24 24">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
							/>
						</svg>
						<span>{getSundayHours()}</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
