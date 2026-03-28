import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AppContext } from "../context/AppContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import SEO from "../components/SEO";

const Login = () => {
	const { backendUrl, token, setToken } = useContext(AppContext);
	const navigate = useNavigate();
	const [state, setState] = useState("Sign Up");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [name, setName] = useState("");
	const [phone, setPhone] = useState("");

	const onSubmitHandler = async (event) => {
		// event.preventDefault();
		// toast.loading(`${state === 'Sign Up' ? 'User signing...' : 'User logging...'}`)
		// try {
		//   if (state === 'Sign Up') {
		//     const { data } = await axios.post(`${backendUrl}/api/user/register`, { name, phone, email, password })
		//     if (data.success) {
		//       localStorage.setItem('token', data.token)
		//       setToken(data.token)
		//       toast.dismiss()
		//       toast.success('Successfully registered')
		//     } else {
		//       toast.dismiss()
		//       toast.error(data.message)
		//     }
		//   } else {
		//     const { data } = await axios.post(`${backendUrl}/api/user/login`, { email, password })
		//     if (data.success) {
		//       localStorage.setItem('token', data.token)
		//       setToken(data.token)
		//       toast.dismiss()
		//       toast.success('Login successfully')
		//     } else {
		//       toast.dismiss()
		//       toast.error(data.message)
		//     }
		//   }
		// } catch (error) {
		//   toast.dismiss()
		//   toast.error(error.message)
		// }
	};

	useEffect(() => {
		if (token) {
			navigate("/");
		}
	}, [token]);

	return (
		<div className="min-h-[80vh] flex items-center justify-center py-12">
			<SEO
				title="Login"
				path="/login"
				description="Login or create an account at Family Health Care to book doctor appointments and manage your health records online."
			/>
			<form
				onSubmit={onSubmitHandler}
				className="w-full max-w-md animate-fade-in">
				<div className="card p-8 sm:p-10">
					{/* Header */}
					<div className="text-center mb-8">
						<div className="w-14 h-14 bg-primary-light rounded-2xl flex items-center justify-center mx-auto mb-4">
							<svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
							</svg>
						</div>
						<h1 className="text-2xl font-bold text-gray-900">
							{state === "Sign Up" ? "Create Account" : "Welcome Back"}
						</h1>
						<p className="text-gray-500 text-sm mt-1">
							{state === "Sign Up" ? "Sign up to book appointments" : "Login to your account"}
						</p>
					</div>

					<div className="space-y-4">
						{state === "Sign Up" && (
							<>
								<div>
									<label className="block text-sm font-medium text-gray-700 mb-1.5">
										Full Name
									</label>
									<input
										className="input-modern"
										type="text"
										placeholder="John Doe"
										onChange={(e) => setName(e.target.value)}
										value={name}
										required
									/>
								</div>
								<div>
									<label className="block text-sm font-medium text-gray-700 mb-1.5">
										Phone
									</label>
									<input
										className="input-modern"
										type="number"
										placeholder="+91 XXXXX XXXXX"
										onChange={(e) => setPhone(e.target.value)}
										value={phone}
										required
									/>
								</div>
							</>
						)}

						<div>
							<label className="block text-sm font-medium text-gray-700 mb-1.5">
								Email
							</label>
							<input
								className="input-modern"
								type="email"
								placeholder="you@example.com"
								onChange={(e) => setEmail(e.target.value)}
								value={email}
								required
							/>
						</div>
						<div>
							<label className="block text-sm font-medium text-gray-700 mb-1.5">
								Password
							</label>
							<input
								className="input-modern"
								type="password"
								placeholder="Enter your password"
								onChange={(e) => setPassword(e.target.value)}
								value={password}
								required
							/>
						</div>
					</div>

					<button
						type="submit"
						className="btn-primary w-full mt-6 py-3">
						{state === "Sign Up" ? "Create Account" : "Sign In"}
					</button>

					<p className="text-center text-sm text-gray-500 mt-6">
						{state === "Sign Up" ? (
							<>
								Already have an account?{" "}
								<button
									type="button"
									onClick={() => setState("Login")}
									className="text-primary font-medium hover:underline">
									Sign in
								</button>
							</>
						) : (
							<>
								Don't have an account?{" "}
								<button
									type="button"
									onClick={() => setState("Sign Up")}
									className="text-primary font-medium hover:underline">
									Create one
								</button>
							</>
						)}
					</p>
				</div>
			</form>
		</div>
	);
};

export default Login;
