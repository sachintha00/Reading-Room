import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import LoginPage from "./Component/Login/LoginPage";
import { Dashboard } from "./Component/dashboard/dashboard";
import TopBar from "./Component/TopBar/TopBar";

function App() {
	return (
		<>
			<TopBar />
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
