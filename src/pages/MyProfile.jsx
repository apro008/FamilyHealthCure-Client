import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets_frontend/assets";
import axios from "axios";
import toast from "react-hot-toast";
import SEO from "../components/SEO";

const MyProfile = () => {
	const { userData, setUserData, backendUrl, token, getUserProfileData } =
		useContext(AppContext);
	const [isEdit, setIsEdit] = useState(false);
	const [image, setImage] = useState(false);

	const updateUserProfileData = async () => {
		// toast.loading("Profile updating...");
		// try {
		//   const formData = new FormData();
		//   formData.append("name", userData.name);
		//   formData.append("phone", userData.phone);
		//   formData.append("address", JSON.stringify(userData.address || {}));
		//   formData.append("gender", userData.gender);
		//   formData.append("dob", userData.dob);
		//   if (image) {
		//     formData.append("image", image);
		//   }
		//   const { data } = await axios.post(`${backendUrl}/api/user/update-profile`, formData, { headers: { token } });
		//   toast.dismiss();
		//   if (data.success) {
		//     toast.success(data.message);
		//     await getUserProfileData();
		//     setIsEdit(false);
		//     setImage(false);
		//   } else {
		//     toast.error(data.message);
		//   }
		// } catch (error) {
		//   console.error(error);
		//   toast.dismiss();
		//   toast.error(error.response?.data?.message || error.message);
		// }
	};

	const handleInputChange = (field, value) => {
		setUserData((prev) => ({ ...prev, [field]: value }));
	};

	const handleAddressChange = (line, value) => {
		setUserData((prev) => ({
			...prev,
			address: { ...prev.address, [line]: value },
		}));
	};

	return (
		userData && (
			<div className="py-8 animate-fade-in max-w-xl">
				<SEO title="My Profile" path="/my-profile" description="Manage your Family Health Care profile, contact information, and personal details." />
				<h1 className="section-heading mb-8">My Profile</h1>

				<div className="card p-6 sm:p-8">
					{/* Avatar + Name */}
					<div className="flex items-center gap-5 mb-6 pb-6 border-b border-gray-100">
						{isEdit ? (
							<label htmlFor="image" className="cursor-pointer group">
								<div className="relative">
									<img
										className="w-20 h-20 rounded-2xl object-cover ring-2 ring-gray-100 group-hover:ring-primary/30 transition-all"
										src={image ? URL.createObjectURL(image) : userData.image}
										alt=""
									/>
									<div className="absolute inset-0 rounded-2xl bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
										<svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
											<path strokeLinecap="round" strokeLinejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
										</svg>
									</div>
								</div>
								<input onChange={(e) => setImage(e.target.files[0])} type="file" id="image" hidden />
							</label>
						) : (
							<img
								src={userData.image}
								alt="profile"
								className="w-20 h-20 rounded-2xl object-cover ring-2 ring-gray-100"
							/>
						)}

						<div className="flex-1">
							{isEdit ? (
								<input
									type="text"
									className="input-modern text-lg font-semibold"
									value={userData.name}
									onChange={(e) => handleInputChange("name", e.target.value)}
								/>
							) : (
								<h2 className="text-xl font-bold text-gray-900">{userData.name}</h2>
							)}
						</div>
					</div>

					{/* Contact */}
					<div className="mb-6">
						<h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
							Contact Information
						</h3>
						<div className="space-y-4">
							<div>
								<label className="text-sm font-medium text-gray-500">Email</label>
								<p className="text-primary text-sm mt-0.5">{userData.email}</p>
							</div>
							<div>
								<label className="text-sm font-medium text-gray-500">Phone</label>
								{isEdit ? (
									<input
										type="text"
										className="input-modern mt-1"
										value={userData.phone}
										onChange={(e) => handleInputChange("phone", e.target.value)}
									/>
								) : (
									<p className="text-primary text-sm mt-0.5">{userData.phone}</p>
								)}
							</div>
							<div>
								<label className="text-sm font-medium text-gray-500">Address</label>
								{isEdit ? (
									<div className="flex flex-col gap-2 mt-1">
										<input
											type="text"
											className="input-modern"
											value={userData.address.line1}
											onChange={(e) => handleAddressChange("line1", e.target.value)}
										/>
										<input
											type="text"
											className="input-modern"
											value={userData.address.line2}
											onChange={(e) => handleAddressChange("line2", e.target.value)}
										/>
									</div>
								) : (
									<p className="text-sm text-gray-700 mt-0.5">
										{userData.address.line1}<br />{userData.address.line2}
									</p>
								)}
							</div>
						</div>
					</div>

					{/* Basic Info */}
					<div className="mb-6">
						<h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
							Basic Information
						</h3>
						<div className="grid grid-cols-2 gap-4">
							<div>
								<label className="text-sm font-medium text-gray-500">Gender</label>
								{isEdit ? (
									<select
										className="input-modern mt-1"
										value={userData.gender}
										onChange={(e) => handleInputChange("gender", e.target.value)}>
										<option value="Male">Male</option>
										<option value="Female">Female</option>
										<option value="Other">Other</option>
									</select>
								) : (
									<p className="text-sm text-gray-700 mt-0.5">{userData.gender}</p>
								)}
							</div>
							<div>
								<label className="text-sm font-medium text-gray-500">Birthday</label>
								{isEdit ? (
									<input
										type="date"
										className="input-modern mt-1"
										value={userData.dob}
										onChange={(e) => handleInputChange("dob", e.target.value)}
									/>
								) : (
									<p className="text-sm text-gray-700 mt-0.5">{userData.dob}</p>
								)}
							</div>
						</div>
					</div>

					{/* Action */}
					<button
						className={isEdit ? "btn-primary w-full" : "btn-outline w-full"}
						onClick={isEdit ? updateUserProfileData : () => { setIsEdit(true); scrollTo(0, 0); }}>
						{isEdit ? "Save Information" : "Edit Profile"}
					</button>
				</div>
			</div>
		)
	);
};

export default MyProfile;
