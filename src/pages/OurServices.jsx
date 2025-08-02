import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const OurServices = () => {
	const [activeSection, setActiveSection] = useState("pathology");

	const toggleSection = (section) => {
		setActiveSection(section === "pathology" ? "outpatient" : "pathology");
	};

	return (
		<div className="min-h-screen flex flex-col bg-gray-50">
			{/* Main Content */}
			<div className="flex-grow max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
				<h1 className="text-3xl font-bold text-gray-800 mb-6">Our Services</h1>
				<p className="text-gray-600 leading-6 mb-8">
					At Family health care., we provide a comprehensive range of medical
					services to meet your healthcare needs, from advanced diagnostic
					testing to specialized outpatient care. Explore our offerings below.
				</p>

				{/* Pathology Section */}
				<section className="mb-4">
					<button
						className="w-full flex justify-between items-center py-3 px-4 bg-primary text-white rounded-lg focus:outline-none"
						onClick={() => toggleSection("pathology")}>
						<h2 className="text-xl font-semibold">Pathology</h2>
						<svg
							className={`w-5 h-5 transition-transform ${
								activeSection === "pathology" ? "rotate-180" : ""
							}`}
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M19 9l-7 7-7-7"
							/>
						</svg>
					</button>
					{activeSection === "pathology" && (
						<div className="p-4 bg-white rounded-lg shadow-sm mt-2">
							<ul className="space-y-4 text-gray-600">
								<li>
									<span className="font-semibold">01. Blood Collection</span>
									<p className="mt-1 leading-6">
										Collection of blood is done by experienced and qualified
										Phlebotomists using Vacutainers.
									</p>
								</li>
								<li>
									<span className="font-semibold">02. Biochemistry</span>
									<p className="mt-1 leading-6">
										Fully Automated Biochemistry Analyzer. Stand-alone
										Electrolyte Analyser.
									</p>
								</li>
								<li>
									<span className="font-semibold">03. Haematology</span>
									<p className="mt-1 leading-6">
										Fully Automated Blood cell counter, 5 part differential.
										Complete Blood Count.
									</p>
								</li>
								<li>
									<span className="font-semibold">04. Immunology</span>
									<p className="mt-1 leading-6">
										State-of-the-art fully auto analyser from industry leader
										Beckman Coulter.
									</p>
								</li>
								<li>
									<span className="font-semibold">05. Serology</span>
									<p className="mt-1 leading-6">
										Fully Automated Elisa Plate Reader with Washer.
									</p>
								</li>
								<li>
									<span className="font-semibold">06. Clinical Pathology</span>
									<p className="mt-1 leading-6">
										Microscopic Examination of all Body Fluids.
									</p>
								</li>
								<li>
									<span className="font-semibold">
										07. How are the samples taken care of?
									</span>
									<p className="mt-1 leading-6">
										All tests are carried out after running quality controls on
										each machine. Quality controls are checked by senior staff.
										Tests are carried out only after the controls are proper.
									</p>
								</li>
							</ul>
						</div>
					)}
				</section>

				{/* Outpatient Department Section */}
				<section className="mb-4">
					<button
						className="w-full flex justify-between items-center py-3 px-4 bg-primary text-white rounded-lg focus:outline-none"
						onClick={() => toggleSection("outpatient")}>
						<h2 className="text-xl font-semibold">Outpatient Department</h2>
						<svg
							className={`w-5 h-5 transition-transform ${
								activeSection === "outpatient" ? "rotate-180" : ""
							}`}
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M19 9l-7 7-7-7"
							/>
						</svg>
					</button>
					{activeSection === "outpatient" && (
						<div className="p-4 bg-white rounded-lg shadow-sm mt-2">
							<p className="text-gray-600 leading-6 mb-4">
								Family Health Care has a renowned OPD facility/polyclinic
								dedicated to providing comprehensive and top-notch healthcare
								services. Situated in the heart of the city, it has been serving
								the community for over the last decade, earning a reputation for
								excellence in medical care. The clinic boasts a team of highly
								skilled and compassionate medical professionals who are
								committed to ensuring the well-being of their patients.
							</p>
							<h3 className="text-lg font-semibold text-gray-700 mb-2">
								Facilities and Services
							</h3>
							<ul className="list-disc list-inside text-gray-600 leading-6 mb-4">
								<li>
									<span className="font-medium">General Medicine:</span>{" "}
									Providing primary healthcare services and managing various
									illnesses, from common ailments to chronic conditions.
								</li>
								<li>
									<span className="font-medium">Specialist Consultations:</span>{" "}
									Offering expert consultations with specialists in various
									fields such as cardiology, dermatology, gynecology,
									orthopedics, and more.
								</li>
								<li>
									<span className="font-medium">Diagnostic Imaging:</span>{" "}
									Utilizing advanced imaging techniques like X-rays and
									ultrasound for accurate and early detection of medical issues.
								</li>
								<li>
									<span className="font-medium">Laboratory Services:</span>{" "}
									Equipped with a well-equipped laboratory to conduct various
									diagnostic tests and screenings for prompt and precise
									results.
								</li>
								<li>
									<span className="font-medium">
										Vaccination and Immunization:
									</span>{" "}
									Providing vaccinations for adults and children, protecting
									them against preventable diseases.
								</li>
								<li>
									<span className="font-medium">Health Check-ups:</span>{" "}
									Offering comprehensive health check-up packages to assess
									overall health and detect potential health problems early on.
								</li>
								<li>
									<span className="font-medium">Physiotherapy:</span> Offering
									rehabilitation and physiotherapy services to aid in recovery
									from injuries and improve mobility.
								</li>
							</ul>
							<h3 className="text-lg font-semibold text-gray-700 mb-2">
								Medical Team
							</h3>
							<p className="text-gray-600 leading-6 mb-4">
								The success of Family Health Care can be attributed to its
								dedicated and experienced medical professionals. The team
								comprises highly qualified doctors, surgeons, nurses, and
								support staff who work collaboratively to deliver personalized
								and compassionate care to every patient. Each medical
								practitioner is handpicked for their expertise and commitment to
								upholding Family Health Care’s mission of providing exceptional
								healthcare services.
							</p>
							<h3 className="text-lg font-semibold text-gray-700 mb-2">
								Patient-Centric Approach
							</h3>
							<p className="text-gray-600 leading-6 mb-4">
								One of the clinic’s distinguishing factors is its
								patient-centric approach. Family Health Care places a strong
								emphasis on patient satisfaction and comfort throughout their
								medical journey. The staff ensures that patients are treated
								with empathy, respect, and dignity, fostering a healing and
								supportive environment. Moreover, the medical professionals take
								the time to listen to patients’ concerns, thoroughly explain
								diagnoses and treatment options, and encourage active
								participation in their healthcare decisions.
							</p>
							<h3 className="text-lg font-semibold text-gray-700 mb-2">
								Community Involvement
							</h3>
							<p className="text-gray-600 leading-6">
								Family Health Care actively participates in community health
								programs and health education initiatives. They conduct
								awareness campaigns, health screenings, and educational seminars
								to promote preventive healthcare measures and early detection of
								diseases within the community.
							</p>
						</div>
					)}
				</section>
			</div>
		</div>
	);
};

export default OurServices;
