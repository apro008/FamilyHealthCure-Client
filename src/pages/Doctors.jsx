import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { dummyDoctors } from "../utils/contactInfo.js";
import { useLocation } from "react-router-dom";

// Dummy data for doctors matching the image

const Doctors = () => {
	const [filterDoc, setFilterDoc] = useState([]);
	const [selectedSpecialty, setSelectedSpecialty] = useState("ALL");
	const navigate = useNavigate();
	const { getDoctorsData } = useContext(AppContext);
	const location = useLocation();
	// Get unique specialties from doctor data
	const getUniqueSpecialties = () => {
		const specialties = dummyDoctors.map((doc) => doc.speciality);
		return ["ALL", ...new Set(specialties)];
	};

	const specialties = getUniqueSpecialties();

	const applyFilter = (specialty) => {
		if (specialty && specialty !== "ALL") {
			const filtered = dummyDoctors.filter(
				(doc) => doc.speciality === specialty
			);
			setFilterDoc(filtered);
		} else {
			setFilterDoc(dummyDoctors);
		}
	};

	const handleSpecialtyClick = (specialty) => {
		setSelectedSpecialty(specialty);
		applyFilter(specialty);
	};

	useEffect(() => {
		const specialtyFromMenu = location.state?.specialty;
		console.log("specialtyFromMenu", specialtyFromMenu);

		if (specialtyFromMenu) {
			setSelectedSpecialty(specialtyFromMenu);
			applyFilter(specialtyFromMenu);
		} else {
			setSelectedSpecialty("ALL");
			applyFilter("ALL");
		}
	}, []); // 👈 No [location.state] here, run only on mount

	useEffect(() => {
		getDoctorsData();
	}, []);

	return (
		<div className="min-h-screen bg-gray-50">
			<div className="container mx-auto px-4 py-8">
				<div className="flex flex-col lg:flex-row gap-8">
					{/* Left Sidebar - Specialty Menu */}
					<div className="lg:w-1/4">
						<div className="bg-white rounded-lg shadow-sm p-6">
							<h3 className="text-lg font-semibold text-gray-800 mb-4">
								Specialties
							</h3>
							<div className="space-y-2">
								{specialties.map((item, index) => (
									<div
										key={index}
										onClick={() => handleSpecialtyClick(item)}
										className={`px-4 py-3 rounded-lg cursor-pointer transition-all duration-200 ${
											selectedSpecialty === item
												? "bg-red-600 text-white font-medium"
												: "bg-gray-100 text-gray-700 hover:bg-gray-200"
										}`}>
										{item}
									</div>
								))}
							</div>
						</div>
					</div>

					{/* Right Content - Doctor Cards */}
					<div className="lg:w-3/4">
						{filterDoc.length > 0 ? (
							<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
								{filterDoc.map((doctor) => (
									<div
										key={doctor._id}
										// onClick={() => navigate(`/appointment/${doctor._id}`)}
										className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 cursor-pointer group">
										{/* Doctor Image */}
										<div className="p-6 pb-4">
											<div className="flex justify-center">
												<div className="w-24 h-24 rounded-full overflow-hidden border-4 border-gray-200 group-hover:border-red-500 transition-all duration-300">
													<img
														src={doctor.image}
														alt={doctor.name}
														className="w-full h-full object-cover"
														onError={(e) => {
															e.target.src =
																"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23e5e7eb'/%3E%3Ccircle cx='50' cy='35' r='15' fill='%23d1d5db'/%3E%3Cpath d='M20 80 Q50 60 80 80' stroke='%23d1d5db' stroke-width='8' fill='none'/%3E%3C/svg%3E";
														}}
													/>
												</div>
											</div>
										</div>

										{/* Doctor Info */}
										<div className="px-6 pb-6">
											<h3 className="text-lg font-bold text-gray-900 text-center mb-2">
												{doctor.name}
											</h3>
											<p className="text-sm text-gray-600 text-center mb-2">
												{doctor.degrees}
											</p>
											{doctor.specialInterest && (
												<p className="text-xs text-gray-500 text-center mb-3 italic">
													{doctor.specialInterest}
												</p>
											)}
											<p className="text-sm text-gray-700 text-center mb-4 font-medium">
												{doctor.designation}
											</p>

											{/* Book Appointment Button */}
											<a
												href="tel:+917003571264"
												className="w-full block text-center bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 hover:scale-105 transition-all duration-200 font-medium transform">
												Book an Appointment &gt;
											</a>
										</div>
									</div>
								))}
							</div>
						) : (
							<div className="flex flex-col items-center justify-center h-64">
								<div className="text-center">
									<div className="text-6xl mb-4">👨‍⚕️</div>
									<h3 className="text-xl font-semibold text-gray-700 mb-2">
										No Doctors Found
									</h3>
									<p className="text-gray-500">
										No doctors available for the selected specialty.
									</p>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Doctors;
