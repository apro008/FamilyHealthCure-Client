import { assets } from "../assets/assets_frontend/assets";
import { contactInfo } from "../utils/contactInfo.js";

const Banner = () => {
	return (
		<div className="relative my-14 sm:my-20 overflow-hidden rounded-2xl sm:rounded-3xl">
			<div className="relative w-full aspect-[16/9] sm:aspect-[12/5]">
				<img
					src={assets.banner1}
					alt="Family Health Care"
					className="w-full h-full object-cover"
				/>
				{/* Overlay */}
				<div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/60 to-primary/30">
					<div className="flex flex-col justify-center h-full px-6 sm:px-12 lg:px-16 max-w-2xl">
						<h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight mb-3 sm:mb-4">
							Book Your Appointment Today
						</h2>
						<p className="text-white/85 text-sm sm:text-base mb-5 sm:mb-7 leading-relaxed">
							Consult with 15+ specialist doctors. NABL certified diagnostics lab with home sample collection available.
						</p>
						<div className="flex flex-wrap gap-3">
							<a
								href={`tel:${contactInfo.phoneNumbers.generalLine[0]}`}
								className="inline-flex items-center gap-2 bg-white text-primary px-6 sm:px-8 py-3 rounded-xl font-semibold text-sm sm:text-base hover:shadow-elevated transition-all duration-300">
								<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h2.28a2 2 0 011.94 1.515l.516 2.064a2 2 0 01-.45 1.947l-1.27 1.27a16.001 16.001 0 006.586 6.586l1.27-1.27a2 2 0 011.947-.45l2.064.516A2 2 0 0121 18.72V21a2 2 0 01-2 2h-1C9.163 23 1 14.837 1 5V4a2 2 0 012-2z" />
								</svg>
								Call Now
							</a>
							<a
								href={`tel:${contactInfo.phoneNumbers.generalLine[0]}`}
								className="inline-flex items-center gap-2 border-2 border-white/50 text-white px-6 sm:px-8 py-3 rounded-xl font-medium text-sm sm:text-base hover:bg-white/10 transition-all duration-300">
								Home Collection
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;
