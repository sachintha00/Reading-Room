import "./App.css";

import axios from "axios";
import base_url from "./Api/BootApi";
import { useState } from "react";

function App() {
	const [newCourse, courseMethod] = useState([]);
	const handleForm = (e) => {
		console.log(newCourse);
		postDataSend(newCourse);
		e.preventDefault();
	};

	const getCourse = () => {
		axios.get(`${base_url}/courses`).then(
			(Response) => {
				console.log(Response.data);
				courseMethod(newCourse.concat(Response.data));
			},
			(error) => {
				console.log(error);
			}
		);
	};

	const postDataSend = (newCourse) => {
		axios.post(`${base_url}/courses`, newCourse).then(
			(Response) => {
				console.log(Response);
				console.log("Success");
			},
			(error) => {
				console.log(error);
				console.log("error");
			}
		);
	};

	return (
		<div className="App">
			<button onClick={getCourse}>Load Data</button>

			<div>
				{newCourse.length > 0
					? newCourse.map((info) => {
							return <h1>{info.title}</h1>;
					  })
					: ""}
			</div>

			<form onSubmit={handleForm}>
				<input
					type="text"
					name="cId"
					id=""
					placeholder="Course ID"
					onChange={(e) => {
						courseMethod({ ...newCourse, coursId: e.target.value });
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
