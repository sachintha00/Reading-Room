import "./App.css";

import axios from "axios";
import base_url from "./Api/BootApi";
import { useState } from "react";

function App() {
	const getCourse = () => {
		axios.get(`${base_url}/courses`).then(
			(Response) => {
				console.log(Response.data);
			},
			(error) => {
				console.log(error);
			}
		);
	};

	const postDataSend=(newCourse)=>{
		axios.post(`${base_url}/courses`)
	}

	const [newCourse, courseMethod] = useState({});
	const handleForm = (e) => {
		console.log(newCourse);
		e.preventDefault();
	};
	return (
		<div className="App">
			<button onClick={getCourse}>Load Data</button>

			<form onSubmit={handleForm}>
				<input
					type="text"
					name="cId"
					id=""
					placeholder="Course ID"
					onChange={(e) => {
						courseMethod({ ...newCourse, id: e.target.value });
					}}
				/>
				<input
					type="text"
					name="cTitel"
					id=""
					placeholder="Course Title"
					onChange={(e) => {
						courseMethod({ ...newCourse, title: e.target.value });
					}}
				/>
				<input
					type="text"
					name="cDescription"
					id=""
					placeholder="Course Description"
					onChange={(e) => {
						courseMethod({ ...newCourse, description: e.target.value });
					}}
				/>

				<button type="submit">Add Course</button>
			</form>
		</div>
	);
}

export default App;
