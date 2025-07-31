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
