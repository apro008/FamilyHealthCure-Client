import React from "react";
import { assets } from "../assets/assets_frontend/assets";

const About = () => {
	return (
		<div>
			<div className="text-center text-2xl pt-10 text-gray-500">
				<p>
					ABOUT <span className="text-primary font-medium">US</span>
				</p>
			</div>

			<div className="my-10 flex flex-col md:flex-row gap-12">
				<img
					className="w-full md:max-w-[360px]"
					src={assets.about_image}
					alt="Family Health Care Diagnostics Center"
				/>
				<div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600">
					<p>
						Family Health Care is a premier diagnostics center in Kolkata,
						dedicated to providing comprehensive diagnostic services and
						consultations with multiple specialized doctors under one roof.
						Located at 455, Boral Main Road, Kolkata-700154, we offer both
						appointment-based and walk-in consultations for your convenience.
					</p>
					<p>
						Our state-of-the-art facility provides advanced pathology services,
						including blood and urine sample collection at our center or your
						home, ensuring accurate and timely results. Patients can easily book
						appointments online or visit us directly to consult with our expert
						doctors across various specialties.
					</p>
					<p>
						Contact us at{" "}
						<a
							href="tel:+917003571264"
							className="text-primary hover:underline">
							+91 7003571264
						</a>{" "}
						or{" "}
						<a
							href="mailto:familyhealthcare60@gmail.com"
							className="text-primary hover:underline">
							familyhealthcare60@gmail.com
						</a>{" "}
						to schedule your visit or home collection service. Our user-friendly
						platform simplifies the process, making healthcare accessible and
						stress-free.
					</p>
					<b className="text-gray-800">Our Vision</b>
					<p>
						Our vision is to redefine diagnostic healthcare by offering a
						seamless, patient-centric experience. We aim to bridge the gap
						between patients and quality diagnostics through advanced
						technology, expert medical professionals, and convenient services
						like home sample collection. At Family Health Care, we strive to
						deliver precise, timely, and compassionate care to empower healthier
						lives.
					</p>
				</div>
			</div>

			<div className="text-xl my-4">
				<p>
					WHY <span className="text-primary font-semibold">CHOOSE US</span>
				</p>
			</div>

			<div className="flex flex-col md:flex-row mb-20">
				<div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
					<b>Comprehensive Diagnostics</b>
					<p>
						Access advanced pathology services, including blood and urine tests,
						conducted with cutting-edge technology by experienced professionals
						for accurate results.
					</p>
				</div>
				<div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
					<b>Flexible Consultations</b>
					<p>
						Book appointments with specialized doctors or walk in at your
						convenience to receive expert care tailored to your needs.
					</p>
				</div>
				<div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
					<b>Home Collection Services</b>
					<p>
						Enjoy the convenience of blood and urine sample collection from your
						home, ensuring a hassle-free and safe diagnostic experience.
					</p>
				</div>
			</div>
		</div>
	);
};

export default About;
