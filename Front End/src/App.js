import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoginPage from "./Component/Login/LoginPage";
import Dashboard from "./Component/DashBoard/DashBoard";
import Routing from "./Routing/Routing";
import ChangeSection from "./Component/ChangeSection/ChangeSection";

function App() {
	return (
		<>
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={LoginPage} />
					<Route exact path="/dashboard" component={Dashboard} />
				</Switch>
			</BrowserRouter>
			<Routing />
		</>
	);
}

export default App;
