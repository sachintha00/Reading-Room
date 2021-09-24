import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoginPage from "./Component/Login/LoginPage";
import Dashboard from "./Component/DashBoard/DashBoard";
import Routing from "./Routing/Routing";
import ChangeSection from "./Component/ChangeSection/ChangeSection";
import Home from "./Component/Pages/HomePage/Home.js";

function App() {
	return (
		<>
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={LoginPage} />
					<Route exact path="/dashboard" component={Dashboard} />
					<Route exact path="/dashboard/home" component={Home} />
				</Switch>
			</BrowserRouter>
			<Routing />
		</>
	);
}

export default App;
