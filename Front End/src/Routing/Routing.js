import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../Component/Pages/HomePage/Home.js";
import Dashboard from "./Component/DashBoard/DashBoard";
import ChangeSection from "./Component/ChangeSection/ChangeSection";

function Routing() {
	return (
		<>
			<BrowserRouter>
				<Switch>
					<Route exact path="/home" component={Home} />
					<Route exact path="/dashboard" component={Dashboard} />
				</Switch>
			</BrowserRouter>
		</>
	);
}

export default Routing;
