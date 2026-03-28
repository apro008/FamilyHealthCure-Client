import React from "react";
import SEO from "../components/SEO";
import Header from "../components/Header";
import SpecialityMenu from "../components/SpecialityMenu";
import TopDoctors from "../components/TopDoctors";
import Banner from "../components/Banner";

const Home = () => {
	return (
		<div>
			<SEO
				path="/"
				description="Family Health Care - Premier diagnostics center in Kolkata. Book appointments with 15+ specialist doctors. Pathology services, home sample collection. 455, Boral Main Road, Kolkata-700154. Call +91 7003571264."
				keywords="Family Health Care Kolkata, diagnostics center, doctor appointment Kolkata, pathology lab, home sample collection, blood test Kolkata, health checkup"
			/>
			<Header />
			<SpecialityMenu />
			<TopDoctors />
			<Banner />
		</div>
	);
};

export default Home;
