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

	return (
		<section className="py-16 sm:py-20 animate-fade-in" id="speciality">
			<div className="text-center mb-10">
				<h2 className="section-heading">Find by Speciality</h2>
				<p className="section-subtext mt-3">
					Browse through our extensive list of trusted doctors and schedule your appointment hassle-free.
				</p>
			</div>

			<div className="flex justify-start sm:justify-center gap-4 sm:gap-6 overflow-x-auto pb-4 px-2 -mx-2">
				{specialityData.map((item, index) => (
					<div
						key={index}
						onClick={() => {
							scrollTo(0, 0);
							navigate("/doctors", { state: { specialty: item.speciality } });
						}}
						className="flex flex-col items-center gap-3 cursor-pointer flex-shrink-0 group">
						<div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-primary-light flex items-center justify-center group-hover:bg-primary/10 group-hover:scale-110 group-hover:shadow-glow transition-all duration-300">
							<img
								className="w-10 sm:w-12"
								src={item.image}
								alt={item.speciality}
							/>
						</div>
						<span className="text-xs sm:text-sm font-medium text-gray-600 group-hover:text-primary transition-colors text-center max-w-[80px] sm:max-w-[100px]">
							{item.speciality}
						</span>
					</div>
				))}
			</div>
		</section>
	);
};

export default SpecialityMenu;
