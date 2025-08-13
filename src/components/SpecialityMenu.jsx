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
		<div
			className="flex flex-col items-center gap-4 py-16 text-gray-800"
			id="speciality">
			<h1 className="text-3xl font-medium">Find by Speciality</h1>
			<p className="sm:w-1/3 text-center text-sm">
				Simple browse through our extensive list of trusted doctors, schedule
				your appointment hassle-free.
			</p>

			<div className="flex sm:justify-center gap-4 pt-5 w-full overflow-scroll">
				{specialityData.map((item, index) => (
					<div
						key={index}
						onClick={() => {
							scrollTo(0, 0);
							navigate("/doctors", { state: { specialty: item.speciality } });
						}}
						className="flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500">
						<img
							className="w-16 sm:w-24 mb-2"
							src={item.image}
							alt={item.speciality}
						/>
						<p>{item.speciality}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default SpecialityMenu;
