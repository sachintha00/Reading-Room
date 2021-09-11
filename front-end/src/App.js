import "./App.css";

import axios from "axios";
import base_url from "./Api/BootApi";

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
	return (
		<div className="App">
			<button onClick={getCourse}>Load Data</button>
		</div>
	);
}

export default App;
