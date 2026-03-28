import React, { useState } from "react";
import SEO from "../components/SEO";

const OurServices = () => {
	const [activeSection, setActiveSection] = useState("pathology");

	const toggleSection = (section) => {
		setActiveSection(activeSection === section ? null : section);
	};

	return (
		<div className="py-8 sm:py-12 animate-fade-in">
			<SEO
				title="Our Services"
				path="/our-services"
				description="Family Health Care services: advanced pathology (blood collection, biochemistry, haematology, immunology, serology), outpatient department with specialist consultations, diagnostic imaging, vaccinations, health checkups and physiotherapy."
				keywords="pathology services Kolkata, blood test Kolkata, OPD Kolkata, diagnostic services Boral, health checkup packages, vaccination Kolkata"
			/>
			<div className="max-w-3xl mx-auto">
				<div className="mb-10">
					<h1 className="section-heading">Our Services</h1>
					<p className="text-gray-500 mt-3 leading-relaxed">
						At Family Health Care, we provide a comprehensive range of medical
						services to meet your healthcare needs, from advanced diagnostic
						testing to specialized outpatient care.
					</p>
				</div>

				{/* Pathology Section */}
				<section className="mb-3">
					<button
						className={`w-full flex justify-between items-center py-4 px-6 rounded-xl font-semibold text-left transition-all duration-200 ${
							activeSection === "pathology"
								? "bg-primary text-white shadow-glow"
								: "bg-surface text-gray-800 hover:bg-surface-dark"
						}`}
						onClick={() => toggleSection("pathology")}>
						<span className="text-lg">Pathology</span>
						<svg
							className={`w-5 h-5 transition-transform duration-300 ${
								activeSection === "pathology" ? "rotate-180" : ""
							}`}
							fill="none"
							stroke="currentColor"
							strokeWidth="2.5"
							viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
						</svg>
					</button>
					{activeSection === "pathology" && (
						<div className="card mt-2 p-6 animate-slide-down">
							<div className="space-y-5">
								{[
									{ num: "01", title: "Blood Collection", desc: "Collection of blood is done by experienced and qualified Phlebotomists using Vacutainers." },
									{ num: "02", title: "Biochemistry", desc: "Fully Automated Biochemistry Analyzer. Stand-alone Electrolyte Analyser." },
									{ num: "03", title: "Haematology", desc: "Fully Automated Blood cell counter, 5 part differential. Complete Blood Count." },
									{ num: "04", title: "Immunology", desc: "State-of-the-art fully auto analyser from industry leader Beckman Coulter." },
									{ num: "05", title: "Serology", desc: "Fully Automated Elisa Plate Reader with Washer." },
									{ num: "06", title: "Clinical Pathology", desc: "Microscopic Examination of all Body Fluids." },
									{ num: "07", title: "Quality Assurance", desc: "All tests are carried out after running quality controls on each machine. Quality controls are checked by senior staff. Tests are carried out only after the controls are proper." },
								].map((item) => (
									<div key={item.num} className="flex gap-4">
										<span className="text-xs font-bold text-primary bg-primary-light w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
											{item.num}
										</span>
										<div>
											<h4 className="font-semibold text-gray-900 text-sm">{item.title}</h4>
											<p className="text-gray-500 text-sm mt-0.5 leading-relaxed">{item.desc}</p>
										</div>
									</div>
								))}
							</div>
						</div>
					)}
				</section>

				{/* Outpatient Section */}
				<section className="mb-3">
					<button
						className={`w-full flex justify-between items-center py-4 px-6 rounded-xl font-semibold text-left transition-all duration-200 ${
							activeSection === "outpatient"
								? "bg-primary text-white shadow-glow"
								: "bg-surface text-gray-800 hover:bg-surface-dark"
						}`}
						onClick={() => toggleSection("outpatient")}>
						<span className="text-lg">Outpatient Department</span>
						<svg
							className={`w-5 h-5 transition-transform duration-300 ${
								activeSection === "outpatient" ? "rotate-180" : ""
							}`}
							fill="none"
							stroke="currentColor"
							strokeWidth="2.5"
							viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
						</svg>
					</button>
					{activeSection === "outpatient" && (
						<div className="card mt-2 p-6 animate-slide-down">
							<p className="text-gray-600 leading-relaxed mb-6 text-sm">
								Family Health Care has a renowned OPD facility/polyclinic
								dedicated to providing comprehensive and top-notch healthcare
								services. Situated in the heart of the city, it has been serving
								the community for over the last decade, earning a reputation for
								excellence in medical care.
							</p>

							<h3 className="text-base font-bold text-gray-900 mb-3">Facilities & Services</h3>
							<div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
								{[
									{ label: "General Medicine", desc: "Primary healthcare services and chronic condition management" },
									{ label: "Specialist Consultations", desc: "Expert consultations in cardiology, dermatology, gynecology, and more" },
									{ label: "Diagnostic Imaging", desc: "Advanced X-rays and ultrasound imaging" },
									{ label: "Laboratory Services", desc: "Comprehensive diagnostic tests and screenings" },
									{ label: "Vaccination", desc: "Immunization for adults and children" },
									{ label: "Health Check-ups", desc: "Comprehensive health assessment packages" },
									{ label: "Physiotherapy", desc: "Rehabilitation and mobility improvement services" },
								].map((item, i) => (
									<div key={i} className="p-3 bg-surface rounded-xl">
										<h4 className="font-semibold text-gray-800 text-sm">{item.label}</h4>
										<p className="text-gray-500 text-xs mt-0.5">{item.desc}</p>
									</div>
								))}
							</div>

							<div className="space-y-5">
								<div>
									<h3 className="text-base font-bold text-gray-900 mb-2">Medical Team</h3>
									<p className="text-gray-600 text-sm leading-relaxed">
										Our team comprises highly qualified doctors, surgeons, nurses, and
										support staff who work collaboratively to deliver personalized
										and compassionate care to every patient.
									</p>
								</div>
								<div>
									<h3 className="text-base font-bold text-gray-900 mb-2">Patient-Centric Approach</h3>
									<p className="text-gray-600 text-sm leading-relaxed">
										We place a strong emphasis on patient satisfaction and comfort.
										Our professionals listen to concerns, explain diagnoses thoroughly,
										and encourage active participation in healthcare decisions.
									</p>
								</div>
								<div>
									<h3 className="text-base font-bold text-gray-900 mb-2">Community Involvement</h3>
									<p className="text-gray-600 text-sm leading-relaxed">
										We actively participate in community health programs, awareness
										campaigns, health screenings, and educational seminars to promote
										preventive healthcare measures.
									</p>
								</div>
							</div>
						</div>
					)}
				</section>
			</div>
		</div>
	);
};

export default OurServices;
