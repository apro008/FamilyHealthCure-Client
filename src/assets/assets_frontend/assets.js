import appointment_img from "./appointment_img.png";
import header_img from "./header_img.png";
import group_profiles from "./group_profiles.png";
import profile_pic from "./profile_pic.png";
import contact_image from "./contact_image.png";
import about_image from "./about_image.png";
import logo from "./logo.svg";
import logo_new from "./logo_new.png";
import logo_new2 from "./logo_new2.png";
//Banner
import banner1 from "./banner/banner1.jpeg";
import banner2 from "./banner/banner2.jpeg";

import dropdown_icon from "./dropdown_icon.svg";
import menu_icon from "./menu_icon.svg";
import cross_icon from "./cross_icon.png";
import chats_icon from "./chats_icon.svg";
import verified_icon from "./verified_icon.svg";
import arrow_icon from "./arrow_icon.svg";
import info_icon from "./info_icon.svg";
import upload_icon from "./upload_icon.png";
import stripe_logo from "./stripe_logo.png";
import razorpay_logo from "./razorpay_logo.png";
import doc1 from "./doc1.png";
import doc2 from "./doc2.png";
import doc3 from "./doc3.png";
import doc4 from "./doc4.png";
import doc5 from "./doc5.png";
import doc6 from "./doc6.png";
import doc7 from "./doc7.png";
import doc8 from "./doc8.png";
import doc9 from "./doc9.png";
import doc10 from "./doc10.png";
import doc11 from "./doc11.png";
import doc12 from "./doc12.png";
import doc13 from "./doc13.png";
import doc14 from "./doc14.png";
import doc15 from "./doc15.png";
import icon2 from "./Picture1.jpg";
import Dermatologist from "./Dermatologist.svg";
import Gastroenterologist from "./Gastroenterologist.svg";
import General_physician from "./General_physician.svg";
import Gynecologist from "./Gynecologist.svg";
import Neurologist from "./Neurologist.svg";
import Pediatricians from "./Pediatricians.svg";
import search_icon from "./search_icon.svg";

export const assets = {
	search_icon,
	appointment_img,
	header_img,
	group_profiles,
	logo,
	chats_icon,
	verified_icon,
	info_icon,
	profile_pic,
	arrow_icon,
	contact_image,
	about_image,
	menu_icon,
	cross_icon,
	dropdown_icon,
	upload_icon,
	stripe_logo,
	razorpay_logo,
	icon2,
	logo_new,
	logo_new2,
	banner1,
	banner2,
	doc7,
	doc1,
};

export const specialityData = [
	//   { speciality: 'Allergist', image: defaultImage },
	//   { speciality: 'Anesthesiologist', image: defaultImage },
	//   { speciality: 'Andrologist', image: defaultImage },
	//   { speciality: 'Cardiologist', image: defaultImage },
	//   { speciality: 'Dentist', image: defaultImage },
	{ speciality: "Dermatologist", image: Dermatologist },
	//   { speciality: 'Endocrinologist', image: defaultImage },
	//   { speciality: 'ENT Specialist', image: defaultImage },
	//   { speciality: 'Family Medicine', image: defaultImage },
	{ speciality: "Gastroenterologist", image: Gastroenterologist },
	{ speciality: "General physician", image: General_physician },
	//   { speciality: 'General Surgeon', image: defaultImage },
	//   { speciality: 'Geriatrician', image: defaultImage },
	{ speciality: "Gynecologist", image: Gynecologist },
	//   { speciality: 'Hematologist', image: defaultImage },
	//   { speciality: 'Hepatologist', image: defaultImage },
	//   { speciality: 'Immunologist', image: defaultImage },
	//   { speciality: 'Internal Medicine', image: defaultImage },
	//   { speciality: 'Neonatologist', image: defaultImage },
	//   { speciality: 'Nephrologist', image: defaultImage },
	{ speciality: "Neurologist", image: Neurologist },
	//   { speciality: 'Neurosurgeon', image: defaultImage },
	//   { speciality: 'Obstetrician', image: defaultImage },
	//   { speciality: 'Oncologist', image: defaultImage },
	//   { speciality: 'Ophthalmologist', image: defaultImage },
	//   { speciality: 'Orthopedic Surgeon', image: defaultImage },
	//   { speciality: 'Pathologist', image: defaultImage },
	//   { speciality: 'Pediatrician', image: defaultImage },
	{ speciality: "Pediatricians", image: Pediatricians }, // Keep only one if duplicate
	//   { speciality: 'Physiotherapist', image: defaultImage },
	//   { speciality: 'Plastic Surgeon', image: defaultImage },
	//   { speciality: 'Psychiatrist', image: defaultImage },
	//   { speciality: 'Pulmonologist', image: defaultImage },
	//   { speciality: 'Radiologist', image: defaultImage },
	//   { speciality: 'Rheumatologist', image: defaultImage },
	//   { speciality: 'Sexologist', image: defaultImage },
	//   { speciality: 'Urologist', image: defaultImage },
];

export const doctors = [
	{
		_id: "doc1",
		name: "Dr. Richard James",
		image: doc1,
		speciality: "General physician",
		degree: "MBBS",
		experience: "4 Years",
		about:
			"Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
		fees: 50,
		address: {
			line1: "17th Cross, Richmond",
			line2: "Circle, Ring Road, London",
		},
	},
	{
		_id: "doc2",
		name: "Dr. Emily Larson",
		image: doc2,
		speciality: "Gynecologist",
		degree: "MBBS",
		experience: "3 Years",
		about:
			"Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
		fees: 60,
		address: {
			line1: "27th Cross, Richmond",
			line2: "Circle, Ring Road, London",
		},
	},
	{
		_id: "doc3",
		name: "Dr. Sarah Patel",
		image: doc3,
		speciality: "Dermatologist",
		degree: "MBBS",
		experience: "1 Years",
		about:
			"Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
		fees: 30,
		address: {
			line1: "37th Cross, Richmond",
			line2: "Circle, Ring Road, London",
		},
	},
	{
		_id: "doc4",
		name: "Dr. Christopher Lee",
		image: doc4,
		speciality: "Pediatricians",
		degree: "MBBS",
		experience: "2 Years",
		about:
			"Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
		fees: 40,
		address: {
			line1: "47th Cross, Richmond",
			line2: "Circle, Ring Road, London",
		},
	},
	{
		_id: "doc5",
		name: "Dr. Jennifer Garcia",
		image: doc5,
		speciality: "Neurologist",
		degree: "MBBS",
		experience: "4 Years",
		about:
			"Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
		fees: 50,
		address: {
			line1: "57th Cross, Richmond",
			line2: "Circle, Ring Road, London",
		},
	},
	{
		_id: "doc6",
		name: "Dr. Andrew Williams",
		image: doc6,
		speciality: "Neurologist",
		degree: "MBBS",
		experience: "4 Years",
		about:
			"Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
		fees: 50,
		address: {
			line1: "57th Cross, Richmond",
			line2: "Circle, Ring Road, London",
		},
	},
	{
		_id: "doc7",
		name: "Dr. Christopher Davis",
		image: doc7,
		speciality: "General physician",
		degree: "MBBS",
		experience: "4 Years",
		about:
			"Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
		fees: 50,
		address: {
			line1: "17th Cross, Richmond",
			line2: "Circle, Ring Road, London",
		},
	},
	{
		_id: "doc8",
		name: "Dr. Timothy White",
		image: doc8,
		speciality: "Gynecologist",
		degree: "MBBS",
		experience: "3 Years",
		about:
			"Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
		fees: 60,
		address: {
			line1: "27th Cross, Richmond",
			line2: "Circle, Ring Road, London",
		},
	},
	{
		_id: "doc9",
		name: "Dr. Ava Mitchell",
		image: doc9,
		speciality: "Dermatologist",
		degree: "MBBS",
		experience: "1 Years",
		about:
			"Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
		fees: 30,
		address: {
			line1: "37th Cross, Richmond",
			line2: "Circle, Ring Road, London",
		},
	},
	{
		_id: "doc10",
		name: "Dr. Jeffrey King",
		image: doc10,
		speciality: "Pediatricians",
		degree: "MBBS",
		experience: "2 Years",
		about:
			"Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
		fees: 40,
		address: {
			line1: "47th Cross, Richmond",
			line2: "Circle, Ring Road, London",
		},
	},
	{
		_id: "doc11",
		name: "Dr. Zoe Kelly",
		image: doc11,
		speciality: "Neurologist",
		degree: "MBBS",
		experience: "4 Years",
		about:
			"Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
		fees: 50,
		address: {
			line1: "57th Cross, Richmond",
			line2: "Circle, Ring Road, London",
		},
	},
	{
		_id: "doc12",
		name: "Dr. Patrick Harris",
		image: doc12,
		speciality: "Neurologist",
		degree: "MBBS",
		experience: "4 Years",
		about:
			"Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
		fees: 50,
		address: {
			line1: "57th Cross, Richmond",
			line2: "Circle, Ring Road, London",
		},
	},
	{
		_id: "doc13",
		name: "Dr. Chloe Evans",
		image: doc13,
		speciality: "General physician",
		degree: "MBBS",
		experience: "4 Years",
		about:
			"Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
		fees: 50,
		address: {
			line1: "17th Cross, Richmond",
			line2: "Circle, Ring Road, London",
		},
	},
	{
		_id: "doc14",
		name: "Dr. Ryan Martinez",
		image: doc14,
		speciality: "Gynecologist",
		degree: "MBBS",
		experience: "3 Years",
		about:
			"Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
		fees: 60,
		address: {
			line1: "27th Cross, Richmond",
			line2: "Circle, Ring Road, London",
		},
	},
	{
		_id: "doc15",
		name: "Dr. Amelia Hill",
		image: doc15,
		speciality: "Dermatologist",
		degree: "MBBS",
		experience: "1 Years",
		about:
			"Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
		fees: 30,
		address: {
			line1: "37th Cross, Richmond",
			line2: "Circle, Ring Road, London",
		},
	},
];
