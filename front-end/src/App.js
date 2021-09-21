import "./App.css";

import { userLogin } from "./Api/BootApi";
import { useState } from "react";

function App() {
	const [values, setValues] = useState({
		userName: "",
		password: "",
	});

	const handleSubmit = (evt) => {
		evt.preventDefault();
		// props.authenticate();

		userLogin(values)
			.then((response) => {
				console.log("succeess");
			})
			.catch((err) => {
				console.log("succeess");
			});
		//console.log("Loading again",loading);
	};

	const handleChange = (e) => {
		e.persist();
		setValues((values) => ({
			...values,
			[e.target.name]: e.target.value,
		}));
	};

	return (
		<div className="card-body">
			<h4 className="card-title">Login</h4>

			<form onSubmit={handleSubmit} noValidate={false}>
				<div className="">
					<label htmlFor="email">User Name</label>
					<input
						id="username"
						type="text"
						// minLength={5}
						value={values.userName}
						onChange={handleChange}
						name="userName"
					/>
				</div>

				<div className="">
					<label htmlFor="email">Password</label>
					<input
						id="password"
						type="password"
						// minLength={8}
						value={values.password}
						onChange={handleChange}
						name="password"
					/>
				</div>

				<div className="">
					<button type="submit" className="">
						Login
					</button>
				</div>
			</form>
			{/* {error && (
				<div className="">
					{error}
					password waradi
				</div>
			)} */}
		</div>
	);
}

export default App;
