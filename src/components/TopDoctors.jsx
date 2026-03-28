import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { dummyDoctors, contactInfo } from "../utils/contactInfo.js";

const TopDoctors = () => {
	const { getDoctorsData } = useContext(AppContext);
	const navigate = useNavigate();

	useEffect(() => {
		getDoctorsData();
	}, []);

	const featuredDoctors = dummyDoctors.slice(0, 8);

	return (
		<section className="py-14 sm:py-20 bg-surface rounded-3xl px-4 sm:px-8">
			<div className="text-center mb-10 sm:mb-14">
				<span className="text-primary text-sm font-semibold tracking-widest uppercase">
					Our Team
				</span>
				<h2 className="section-heading mt-2">Meet Our Doctors</h2>
				<p className="section-subtext mt-3">
					Experienced specialists dedicated to providing the best care for you and your family.
				</p>
			</div>

			<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 max-w-5xl mx-auto">
				{featuredDoctors.map((doctor) => (
					<div
						key={doctor._id}
						onClick={() => {
							window.location.href = `tel:${contactInfo.phoneNumbers.generalLine[0]}`;
						}}
						className="bg-white rounded-2xl p-4 sm:p-5 text-center group cursor-pointer hover:-translate-y-1 hover:shadow-card transition-all duration-300 border border-gray-100">
						{/* Avatar */}
						<div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full overflow-hidden ring-3 ring-primary-light group-hover:ring-primary/20 transition-all duration-300 mb-3 sm:mb-4">
							<img
								src={doctor.image}
								alt={doctor.name}
								className="w-full h-full object-cover"
								onError={(e) => {
									e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23e5e7eb'/%3E%3Ccircle cx='50' cy='35' r='15' fill='%23d1d5db'/%3E%3Cpath d='M20 80 Q50 60 80 80' stroke='%23d1d5db' stroke-width='8' fill='none'/%3E%3C/svg%3E";
								}}
							/>
						</div>

						{/* Info */}
						<h3 className="text-sm sm:text-base font-bold text-gray-900 leading-tight">
							{doctor.name}
						</h3>
						<p className="text-xs sm:text-sm text-primary font-medium mt-1">
							{doctor.designation}
						</p>
						<p className="text-[10px] sm:text-xs text-gray-400 mt-1 line-clamp-1">
							{doctor.degrees}
						</p>

						{/* Timing */}
						<div className="mt-3 pt-3 border-t border-gray-100">
							<p className="text-[10px] sm:text-xs text-gray-500 leading-relaxed line-clamp-2">
								{doctor.timing}
							</p>
						</div>
					</div>
				))}
			</div>

			<div className="text-center mt-10 sm:mt-12">
				<button
					onClick={() => {
						navigate("/doctors");
						scrollTo(0, 0);
					}}
					className="btn-outline text-sm px-10 py-3">
					View All Doctors
				</button>
			</div>
		</section>
	);
};

export default TopDoctors;
