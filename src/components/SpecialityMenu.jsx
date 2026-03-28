import { useNavigate } from "react-router-dom";
import { dummyDoctors } from "../utils/contactInfo.js";

const SpecialityMenu = () => {
	const navigate = useNavigate();

	const specialityData = Array.from(
		new Map(
			dummyDoctors.map((doc) => [
				doc.speciality,
				{ speciality: doc.speciality, image: doc.iconImage },
			])
		).values()
	).filter((item) => item.image);

	// Count doctors per speciality
	const doctorCount = (speciality) =>
		dummyDoctors.filter((d) => d.speciality === speciality).length;

	return (
		<section className="py-14 sm:py-20" id="speciality">
			<div className="text-center mb-10 sm:mb-14">
				<span className="text-primary text-sm font-semibold tracking-widest uppercase">
					Departments
				</span>
				<h2 className="section-heading mt-2">Find by Speciality</h2>
				<p className="section-subtext mt-3">
					Browse through our departments and schedule your appointment hassle-free.
				</p>
			</div>

			<div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-5 max-w-4xl mx-auto">
				{specialityData.map((item, index) => (
					<div
						key={index}
						onClick={() => {
							scrollTo(0, 0);
							navigate("/doctors", { state: { specialty: item.speciality } });
						}}
						className="flex flex-col items-center gap-2 sm:gap-3 cursor-pointer group p-3 sm:p-5 rounded-2xl hover:bg-primary-light transition-all duration-300">
						<div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-primary-light group-hover:bg-white flex items-center justify-center group-hover:scale-110 group-hover:shadow-soft transition-all duration-300">
							<img
								className="w-8 sm:w-10"
								src={item.image}
								alt={item.speciality}
							/>
						</div>
						<div className="text-center">
							<span className="text-xs sm:text-sm font-semibold text-gray-700 group-hover:text-primary transition-colors leading-tight block">
								{item.speciality}
							</span>
							<span className="text-[10px] sm:text-xs text-gray-400 mt-0.5 block">
								{doctorCount(item.speciality)} {doctorCount(item.speciality) === 1 ? "Doctor" : "Doctors"}
							</span>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default SpecialityMenu;
