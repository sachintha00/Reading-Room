import "./App.css";

import axios from "axios";
import base_url from "./Api/BootApi";
import { useState } from "react";

function App() {
	var err = "";
	const [newCourse, courseMethod] = useState([]);
	const [tempcourse, setTempCourse] = useState([]);
	const handleForm = (e) => {
		// console.log(newCourse);
		// postDataSend(newCourse);
		const temp = getCourse();
		tempcourse.map((data) => {
			return data.title === temp.title ? (err = "fdgsdgfdsgfsdg") : (err = "");
		});
		e.preventDefault();
	};

	const getCourse = () => {
		axios.get(`${base_url}/courses`).then(
			(Response) => {
				console.log(Response.data);
				return courseMethod(Response.data);
			},
			(error) => {
				console.log(error);
			}
		);
	};

	// const postDataSend = (newCourse) => {
	// 	axios.post(`${base_url}/courses`, newCourse).then(
	// 		(Response) => {
	// 			console.log(Response);
	// 			console.log("Success");
	// 		},
	// 		(error) => {
	// 			console.log(error);
	// 			console.log("error");
	// 		}
	// 	);
	// };

	return (
		<div className="App">
			<button onClick={getCourse}>Load Data</button>
			<h1>{err}</h1>
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
						courseMethod({ ...setTempCourse, coursId: e.target.value });
					}}
				/>
				<input
					type="text"
					name="cTitel"
					id=""
					placeholder="Course Title"
					onChange={(e) => {
						courseMethod({ ...setTempCourse, title: e.target.value });
					}}
				/>
				<input
					type="text"
					name="cDescription"
					id=""
					placeholder="Course Description"
					onChange={(e) => {
						courseMethod({ ...setTempCourse, description: e.target.value });
					}}
				/>

				<button type="submit">Add Course</button>
			</form>
		</div>
	);
}

export default App;
