import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoginPage from "./Component/Login/LoginPage";
import Dashboard from "./Component/SideMenu/SideMenu";
import ChangeSection from "./Component/ChangeSection/ChangeSection";

function App() {
	return (
		<>
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={LoginPage} />
					{/* <Route exact path="/dashboard" component={Dashboard} />
					<Route exact path="/dashboard" component={ChangeSection} /> */}
					<Route path="/dashboard" component={Dashboard}>
						{/* <Dashboard /> */}
						<ChangeSection />
					</Route>
				</Switch>
			</BrowserRouter>
		</>
	);
}

export default App;
