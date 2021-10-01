import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoginPage from "./Component/Login/LoginPage";
import Dashboard from "./Component/DashBoard/dashboard";

function App() {
	return (
		<>
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={LoginPage} />
					<Route exact path="/dashboard" component={Dashboard} />
				</Switch>
			</BrowserRouter>
		</>
	);
}

export default App;
