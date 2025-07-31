import { assets } from "../assets/assets_frontend/assets.js";

// Contact Information Data
export const contactInfo = {
	phoneNumbers: {
		generalLine: ["+919073927700", "+919073927701", "03324272405"],
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
		name: "DR. AVIK ROY",
		degrees: "M.D. (BIOCHEMISTRY)",
		designation: "CONSULTANT BIOCHEMIST",
		speciality: "BIOCHEMISTRY",
		image: assets.doc1,
		available: true,
		specialInterest: "",
	},
	{
		_id: "2",
		name: "DR. P.MAJUMDER",
		degrees: "MBBS, DNB",
		designation: "CONSULTANT PATHOLOGIST",
		speciality: "PATHOLOGY",
		image: assets.doc7,
		available: true,
		specialInterest: "",
	},
	{
		_id: "3",
		name: "DR. RUPAM SIL",
		degrees: "DLO, MS(Anatomy)",
		designation: "CONSULTANT HEAD & NECK SURGEON",
		speciality: "ENT SPECIALIST",
		image: assets.doc7,
		available: true,
		specialInterest:
			"Microsurgery of Ear, Nose & Throat, Head & Neck Sugery, Endoscopic Sinus Surgey",
	},
	{
		_id: "4",
		name: "DR. SRINKA MUKHERJEE",
		degrees: "MBBS,MS (Obs and Gynae), NB (Obs and Gynae)",
		designation: "NB (OBS AND GYNAE)",
		speciality: "GYNAECOLOGIST & OBSTETRICIAN",
		image: assets.doc7,
		available: true,
		specialInterest: "",
	},
	{
		_id: "5",
		name: "DR. ARCOJIT GHOSH",
		degrees: "MBBS, DA, M.D. CCEBDM(Diabetes)",
		designation: "CONSULTANT PHYSICIAN",
		speciality: "GENERAL PHYSICIAN",
		image: assets.doc7,
		available: true,
		specialInterest: "DIABETES AND THYROID DISORDERS",
	},
	{
		_id: "6",
		name: "DR. NILADRI SAHA",
		degrees: "MBBS, MD",
		designation: "SENIOR RADIOLOGIST",
		speciality: "RADIOLOGY",
		image: assets.doc7,
		available: true,
		specialInterest: "",
	},
	{
		_id: "7",
		name: "DR. RAHUL KUMAR",
		degrees: "MBBS, MD (PEDIATRICS)",
		designation: "PEDIATRICIAN",
		speciality: "PAEDIATRICS",
		image: assets.doc7,
		available: true,
		specialInterest: "Child Care & Development",
	},
	{
		_id: "8",
		name: "DR. PRIYA SHARMA",
		degrees: "MBBS, MD (GASTROENTEROLOGY)",
		designation: "GASTROENTEROLOGIST",
		speciality: "GASTROENTEROLOGIST",
		image: assets.doc7,
		available: true,
		specialInterest: "Digestive Disorders & Endoscopy",
	},
	{
		_id: "9",
		name: "DR. AMIT PATEL",
		degrees: "MBBS, MS (ORTHOPEDICS)",
		designation: "ORTHOPEDIC SURGEON",
		speciality: "ORTHOPAEDICS",
		image: assets.doc7,
		available: true,
		specialInterest: "Joint Replacement & Sports Medicine",
	},
	{
		_id: "10",
		name: "DR. SNEHA VERMA",
		degrees: "MBBS, MD (CARDIOLOGY)",
		designation: "CARDIOLOGIST",
		speciality: "CARDIOLOGY",
		image: assets.doc7,
		available: true,
		specialInterest: "Interventional Cardiology",
	},
];
