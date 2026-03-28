import SEO from "../components/SEO";
import Header from "../components/Header";
import SpecialityMenu from "../components/SpecialityMenu";
import TopDoctors from "../components/TopDoctors";
import Banner from "../components/Banner";
import { contactInfo } from "../utils/contactInfo.js";

const stats = [
	{ value: "15+", label: "Specialist Doctors" },
	{ value: "NABL", label: "Certified Lab" },
	{ value: "7 Days", label: "Open All Week" },
	{ value: "Home", label: "Sample Collection" },
];

const Home = () => {
	return (
		<div>
			<SEO
				path="/"
				description="Family Health Care - Premier diagnostics center in Kolkata. Book appointments with 15+ specialist doctors. Pathology services, home sample collection. 455, Boral Main Road, Kolkata-700154. Call +91 7003571264."
				keywords="Family Health Care Kolkata, diagnostics center, doctor appointment Kolkata, pathology lab, home sample collection, blood test Kolkata, health checkup"
			/>

			{/* Hero Banner */}
			<Header />

			{/* Stats Bar */}
			<div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-5 -mt-6 sm:-mt-8 relative z-10 px-2 sm:px-4">
				{stats.map((stat, i) => (
					<div
						key={i}
						className="bg-white rounded-xl sm:rounded-2xl shadow-card px-4 py-4 sm:py-5 text-center border border-gray-100">
						<p className="text-xl sm:text-2xl font-bold text-primary">{stat.value}</p>
						<p className="text-xs sm:text-sm text-gray-500 mt-0.5">{stat.label}</p>
					</div>
				))}
			</div>

			{/* Specialities */}
			<SpecialityMenu />

			{/* Doctors */}
			<TopDoctors />

			{/* CTA Banner */}
			<Banner />
		</div>
	);
};

export default Home;
