import { assets } from "../assets/assets_frontend/assets.js";

// Contact Information Data
export const contactInfo = {
	phoneNumbers: {
		generalLine: ["+91 7003571264", "+91 9073927701", "033 24272405"],
	},
	openingHours: {
		weekdays: {
			days: "MON - SAT",
			time: "7:30 AM - 8:30 PM",
		},
		sunday: {
			days: "SUN",
			time: "8:00 AM - 4:00 PM",
		},
	},
	certification: {
		logo: "NABL",
		subText: "M(EL)T",
		label: "LABS",
		certNumber: "NABL-M(EL)T-02669",
	},
};

export const email = `${"familyhealthcare60@gmail.com"}
${"familyhealthcarekolkata@gmail.com"}`;

export const address = "455, Boral Main Road, kolkata-700154";

// Helper functions for formatting
export const formatPhoneNumber = (phone) => {
	return phone.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");
};

export const getFormattedHours = () => {
	return `${contactInfo.openingHours.weekdays.days}: ${contactInfo.openingHours.weekdays.time}`;
};

export const getSundayHours = () => {
	return `${contactInfo.openingHours.sunday.days}: ${contactInfo.openingHours.sunday.time}`;
};

export const dummyDoctors = [
	{
		_id: "1",
		name: "Dr. Surendra Shah",
		degrees: "MBBS Emergency Medicine, RSSDI, NH, BMBHRC",
		designation: "General Physician",
		speciality: "General Physician",
		image: assets.maleDoc,
		iconImage: assets.General_physician,
		available: true,
		specialInterest: "",
		timing: "Saturday & Sunday (Evening 6:00 PM - 8:30 PM)",
	},
	{
		_id: "2",
		name: "Dr. Bejoy Bikram Banerjee",
		degrees: "MBBS",
		designation: "General Physician",
		speciality: "General Physician",
		image: assets.drBejoyBikramBanerjee,
		iconImage: assets.General_physician,
		available: true,
		specialInterest: "",
		timing: "Monday & Thursday (Evening 6:00 PM - 8:00 PM)",
	},
	{
		_id: "3",
		name: "Dr. Debanjan Garai",
		degrees: "MBBS, MD, Certificate in Diabetology",
		designation: "Consultant Physician & Diabetologist",
		speciality: "Diabetology",
		image: assets.drDebanjanGarai,
		iconImage: assets.General_physician, // No diabetology icon provided, using General Physician as fallback
		available: true,
		specialInterest: "",
		timing: "Tuesday & Friday (Evening 6:00 PM - 8:00 PM)",
	},
	{
		_id: "4",
		name: "Dr. Isita Tripathy",
		degrees: "MBBS, MD (Paediatrics)",
		designation: "Child Specialist",
		speciality: "Pediatrics",
		image: assets.drIsitaTripathy,
		iconImage: assets.General_physician,
		available: true,
		specialInterest: "",
		timing: "Monday & Friday (Evening 6:00 PM - 8:00 PM)",
	},
	{
		_id: "5",
		name: "Dr. Mousumi Das",
		degrees: "MBBS, MD (Paediatrics), PGPN (Boston), MRCPCH (UK)",
		designation: "Child Specialist",
		speciality: "Pediatrics",
		image: assets.drMousumiDas,
		iconImage: assets.Pediatricians,
		available: true,
		specialInterest: "",
		timing: "Tuesday & Thursday (Evening 6:00 PM - 8:00 PM)",
	},
	{
		_id: "6",
		name: "Dr. Subha Shankar Banerjee",
		degrees:
			"MBBS(WBUHS), DGO-DNB (Gynecology and Obstetrics), CCEBDM (Diabetes)",
		designation: "General Physician & Consultant Obstetrician and Gynecologist",
		speciality: "Gynecology",
		image: assets.drSubhaShankarBanerjee,
		iconImage: assets.Gynecologist,
		available: true,
		specialInterest: "",
		timing: "Monday (By Appointment) & Thursday (Evening 6:00 PM - 8:00 PM)",
	},
	{
		_id: "7",
		name: "Dr. Pallabi Das",
		degrees: "MBBS, MS (Gynecology and Obstetrics)",
		designation: "Gynecologist",
		speciality: "Gynecology",
		image: assets.drPallabiDas,
		iconImage: assets.Gynecologist,
		available: true,
		specialInterest: "",
		timing: "Wednesday (Evening 6:00 PM - 8:00 PM)",
	},
	{
		_id: "8",
		name: "Dr. Ayon Sain",
		degrees: "MBBS, D.Ortho, MCH Ortho, MS Ortho",
		designation: "Orthopedic",
		speciality: "Orthopedics",
		image: assets.drAyonSain,
		iconImage: assets.General_physician, // No Orthopedics icon provided
		available: true,
		specialInterest: "",
		timing: "Wednesday to Saturday (Evening 6:00 PM - 8:00 PM)",
	},
	{
		_id: "9",
		name: "Dr. Shreeni Chatterjee",
		degrees: "MBBS, MD (Dermatologist)",
		designation: "Dermatologist",
		speciality: "Dermatology",
		image: assets.femaleDoc,
		iconImage: assets.Dermatologist,
		available: true,
		specialInterest: "",
		timing: "By Appointment",
	},
	{
		_id: "10",
		name: "Dr. Suman Ganguly",
		degrees: "MBBS, MD (Cardiology), PDT",
		designation: "Cardiologist",
		speciality: "Cardiology",
		image: assets.maleDoc,
		iconImage: assets.General_physician, // No Cardiology icon provided
		available: true,
		specialInterest: "",
		timing:
			"Tuesday (Morning 9:30 AM - 11:30 AM) & Friday (Evening 6:00 PM - 8:00 PM)",
	},
	{
		_id: "11",
		name: "Dr. Somnath Deb",
		degrees: "MBBS, MD, PGDCC, CCEBDM",
		designation: "Cardiologist",
		speciality: "Cardiology",
		image: assets.maleDoc,
		iconImage: assets.General_physician, // No Cardiology icon provided
		available: true,
		specialInterest: "",
		timing: "Wednesday & Saturday Evening",
	},
	{
		_id: "12",
		name: "Dr. Sumit Saha",
		degrees: "MBBS(Cal), DPH, AIIPH(Cal)",
		designation: "General Physician & Neuro Medicine",
		speciality: "Neurology",
		image: assets.maleDoc,
		iconImage: assets.Neurologist,
		available: true,
		specialInterest: "",
		timing: "Sunday Morning 10:00 AM",
	},
	{
		_id: "13",
		name: "Dr. Joydeep Biswas",
		degrees: "MBBS, DNB (General Medicine), DNB (Neurology)",
		designation: "Neurologist",
		speciality: "Neurology",
		image: assets.drJoydeepBiswas,
		iconImage: assets.Neurologist,
		available: true,
		specialInterest: "",
		timing: "By Appointment",
	},
	{
		_id: "14",
		name: "Dr. Nachiketa Ghosh",
		degrees: "MBBS (Hons), FPH, MS (ENT)",
		designation: "ENT Specialist",
		speciality: "ENT",
		image: assets.maleDoc,
		iconImage: assets.General_physician, // No ENT icon provided
		available: true,
		specialInterest: "",
		timing: "Monday (Morning 8:00 AM - 8:30 AM)",
	},
	{
		_id: "15",
		name: "Dr. Saurav Basu",
		degrees: "MBBS, DLO, MRSM",
		designation: "ENT Specialist",
		speciality: "ENT",
		image: assets.maleDoc,
		iconImage: assets.General_physician, // No ENT icon provided
		available: true,
		specialInterest: "",
		timing: "By Appointment",
	},
];
