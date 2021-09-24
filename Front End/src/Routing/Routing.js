import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../Component/Pages/HomePage/Home.js";

const Routing = () => {
	return (
		<>
			<BrowserRouter>
				<Switch>
					
					{/* <Route exact path="/dashboard" component={Dashboard} /> */}
				</Switch>
			</BrowserRouter>
			{/* <div>sachintha</div> */}
		</>
	);
};

export default Routing;
