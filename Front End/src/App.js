import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import LoginPage from "./Component/Login/LoginPage";
import { Dashboard } from "./Component/dashboard/dashboard";

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
