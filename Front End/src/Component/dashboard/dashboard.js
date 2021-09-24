import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { fetchUserData } from "../../Service/authenticationService";
import { SideBarSec, List, ListItem, Item } from "../../Styles/SideBarStyle";
import Home from "../Pages/HomePage/Home";
import { Change } from "../../Styles/ChangingSecStyle";
import Book from "../Pages/Book/Book";
import Member from "../Pages/Member/Member";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

const MainWrapper = styled.div`
	padding-top: 40px;
`;

const Dashboard = (props) => {
	const dispatch = useDispatch();
	const [loading, setLoading] = useState(false);
	const [data, setData] = useState({});

	React.useEffect(() => {
		fetchUserData()
			.then((response) => {
				setData(response.data);
			})
			.catch((e) => {
				localStorage.clear();
				props.history.push("/");
			});
	}, []);

	const logOut = () => {
		localStorage.clear();
		props.history.push("/");
	};

	return (
		// <Container>
		// 	<MainWrapper>
		// 		<h4>Hello {data && `${data.firstName} ${data.lastName}`}</h4>
		// 		<br></br>
		// 		{data &&
		// 			data.roles &&
		// 			data.roles.filter((value) => value.roleCode === "ADMIN").length >
		// 				0 && <Button type="variant">Add User</Button>}
		// 		<br></br>

		// 		<Button style={{ marginTop: "5px" }} onClick={() => logOut()}>
		// 			Logout
		// 		</Button>
		// 	</MainWrapper>
		// </Container>
		<>
			<BrowserRouter>
				<SideBarSec>
					<List>
						<ListItem>
							<Link to="/dashboard">Home</Link>
						</ListItem>
						<ListItem>
							<Link to="/book">BOOKS</Link>
						</ListItem>
						<ListItem>
							<Link to="/member">MEMBERS</Link>
						</ListItem>
					</List>
					<Button style={{ marginTop: "5px" }} onClick={() => logOut()}>
						Logout
					</Button>
				</SideBarSec>
				<Change>
					<Switch>
						<Route exact path="/dashboard" component={Home} />
						<Route exact path="/book" component={Book} />
						<Route exact path="/member" component={Member} />
					</Switch>
				</Change>
			</BrowserRouter>
		</>
	);
};

export default Dashboard;
