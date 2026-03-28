import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { dummyDoctors } from "../utils/contactInfo.js";
import { useLocation } from "react-router-dom";
import SEO from "../components/SEO";

const Doctors = () => {
	const [filterDoc, setFilterDoc] = useState([]);
	const [selectedSpecialty, setSelectedSpecialty] = useState("ALL");
	const [showFilters, setShowFilters] = useState(false);
	const navigate = useNavigate();
	const { getDoctorsData } = useContext(AppContext);
	const location = useLocation();

	const getUniqueSpecialties = () => {
		const specialties = dummyDoctors.map((doc) => doc.speciality);
		return ["ALL", ...new Set(specialties)];
	};

	const specialties = getUniqueSpecialties();

	const applyFilter = (specialty) => {
		if (specialty && specialty !== "ALL") {
			setFilterDoc(dummyDoctors.filter((doc) => doc.speciality === specialty));
		} else {
			setFilterDoc(dummyDoctors);
		}
	};

	const handleSpecialtyClick = (specialty) => {
		setSelectedSpecialty(specialty);
		applyFilter(specialty);
		setShowFilters(false);
	};

	useEffect(() => {
		const specialtyFromMenu = location.state?.specialty;
		if (specialtyFromMenu) {
			setSelectedSpecialty(specialtyFromMenu);
			applyFilter(specialtyFromMenu);
		} else {
			setSelectedSpecialty("ALL");
			applyFilter("ALL");
		}
	}, []);

	useEffect(() => {
		getDoctorsData();
	}, []);

	return (
		<div className="py-8 animate-fade-in">
			<SEO
				title="Our Doctors"
				path="/doctors"
				description="Find and book appointments with specialist doctors at Family Health Care Kolkata. General physicians, pediatricians, gynecologists, cardiologists, neurologists, orthopedic, dermatologists and ENT specialists."
				keywords="doctors Kolkata, specialist doctors Boral, pediatrician Kolkata, gynecologist Kolkata, cardiologist Kolkata, neurologist Kolkata, orthopedic Kolkata"
			/>
			{/* Page Header */}
			<div className="mb-8">
				<h1 className="section-heading">Our Doctors</h1>
				<p className="text-gray-500 mt-2">
					Find the right specialist for your needs
				</p>
			</div>

			<div className="flex flex-col lg:flex-row gap-8">
				{/* Mobile Filter Toggle */}
				<button
					onClick={() => setShowFilters(!showFilters)}
					className="lg:hidden btn-outline text-sm py-2.5 flex items-center justify-center gap-2">
					<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
						<path strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
					</svg>
					{showFilters ? "Hide Filters" : "Filter by Specialty"}
				</button>

				{/* Sidebar */}
				<div className={`lg:w-64 flex-shrink-0 ${showFilters ? "block" : "hidden lg:block"}`}>
					<div className="card p-5 sticky top-24">
						<h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
							Specialties
						</h3>
						<div className="space-y-1.5">
							{specialties.map((item, index) => (
								<button
									key={index}
									onClick={() => handleSpecialtyClick(item)}
									className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
										selectedSpecialty === item
											? "bg-primary text-white shadow-glow"
											: "text-gray-600 hover:bg-surface hover:text-gray-900"
									}`}>
									{item}
								</button>
							))}
						</div>
					</div>
				</div>

				{/* Doctor Grid */}
				<div className="flex-1">
					{filterDoc.length > 0 ? (
						<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
							{filterDoc.map((doctor) => (
								<div
									key={doctor._id}
									className="card p-0 overflow-hidden group cursor-pointer hover:-translate-y-1">
									<div className="p-6 pb-4">
										<div className="flex justify-center">
											<div className="w-20 h-20 rounded-full overflow-hidden ring-4 ring-surface group-hover:ring-primary/20 transition-all duration-300">
												<img
													src={doctor.image}
													alt={doctor.name}
													className="w-full h-full object-cover"
													onError={(e) => {
														e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23e5e7eb'/%3E%3Ccircle cx='50' cy='35' r='15' fill='%23d1d5db'/%3E%3Cpath d='M20 80 Q50 60 80 80' stroke='%23d1d5db' stroke-width='8' fill='none'/%3E%3C/svg%3E";
													}}
												/>
											</div>
										</div>
									</div>

									<div className="px-5 pb-5 text-center">
										<h3 className="text-base font-bold text-gray-900">
											{doctor.name}
										</h3>
										<p className="text-sm text-gray-500 mt-0.5">
											{doctor.degrees}
										</p>
										{doctor.specialInterest && (
											<p className="text-xs text-gray-400 mt-1 italic">
												{doctor.specialInterest}
											</p>
										)}
										<p className="text-sm text-gray-600 mt-1 font-medium">
											{doctor.designation}
										</p>

										<a
											href="tel:+917003571264"
											className="btn-accent block w-full mt-4 py-2.5 text-sm rounded-xl text-center">
											Book an Appointment
										</a>
									</div>
								</div>
							))}
						</div>
					) : (
						<div className="flex flex-col items-center justify-center h-64 card">
							<div className="w-16 h-16 bg-surface rounded-2xl flex items-center justify-center mb-4">
								<svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
								</svg>
							</div>
							<h3 className="text-lg font-semibold text-gray-700">
								No Doctors Found
							</h3>
							<p className="text-gray-400 text-sm mt-1">
								No doctors available for the selected specialty.
							</p>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Doctors;
