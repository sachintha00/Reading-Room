import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { fetchUserData } from "../../Service/authenticationService";
import { SideBarSec, List, ListItem, Item } from "../../Styles/SideBarStyle";
import { Change } from "../../Styles/ChangingSecStyle";
import Book from "../Pages/Book/Book";
import Member from "../Pages/Member/Member";
import Suppliers from "../Pages/SupplierPage/Suppliers";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import "./DashBoardStyle.css";

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
					{/* <List>
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
					</Button> */}

					{/* <nav class="main-menu">
						<ul>
							<li>
								<a href="http://justinfarrow.com">
									<i class="fa fa-home fa-2x"></i>
									<span class="nav-text">Dashboard</span>
								</a>
							</li>
							<li class="has-subnav">
								<a href="#">
									<i class="fa fa-laptop fa-2x"></i>
									<span class="nav-text">Stars Components</span>
								</a>
							</li>
							<li class="has-subnav">
								<a href="#">
									<i class="fa fa-list fa-2x"></i>
									<span class="nav-text">Forms</span>
								</a>
							</li>
							<li class="has-subnav">
								<a href="#">
									<i class="fa fa-folder-open fa-2x"></i>
									<span class="nav-text">Pages</span>
								</a>
							</li>
							<li>
								<a href="#">
									<i class="fa fa-bar-chart-o fa-2x"></i>
									<span class="nav-text">Graphs and Statistics</span>
								</a>
							</li>
							<li>
								<a href="#">
									<i class="fa fa-font fa-2x"></i>
									<span class="nav-text">Quotes</span>
								</a>
							</li>
							<li>
								<a href="#">
									<i class="fa fa-table fa-2x"></i>
									<span class="nav-text">Tables</span>
								</a>
							</li>
							<li>
								<a href="#">
									<i class="fa fa-map-marker fa-2x"></i>
									<span class="nav-text">Maps</span>
								</a>
							</li>
							<li>
								<a href="#">
									<i class="fa fa-info fa-2x"></i>
									<span class="nav-text">Documentation</span>
								</a>
							</li>
						</ul>

						<ul class="logout">
							<li>
								<a href="#">
									<i class="fa fa-power-off fa-2x"></i>
									<span class="nav-text">Logout</span>
								</a>
							</li>
						</ul>
					</nav> */}
					<div class="page-wrapper chiller-theme toggled">
						<a id="show-sidebar" class="btn btn-sm btn-dark" href="#">
							<i class="fas fa-bars"></i>
						</a>
						<nav id="sidebar" class="sidebar-wrapper">
							<div class="sidebar-content">
								<div class="sidebar-brand">
									<a href="#">pro sidebar</a>
									<div id="close-sidebar">
										<i class="fas fa-times"></i>
									</div>
								</div>
								<div class="sidebar-header">
									<div class="user-pic">
										<img
											class="img-responsive img-rounded"
											src="https://raw.githubusercontent.com/azouaoui-med/pro-sidebar-template/gh-pages/src/img/user.jpg"
											alt="User picture"
										/>
									</div>
									<div class="user-info">
										<span class="user-name">
											Jhon
											<strong>Smith</strong>
										</span>
										<span class="user-role">Administrator</span>
										<span class="user-status">
											<i class="fa fa-circle"></i>
											<span>Online</span>
										</span>
									</div>
								</div>
								{/* <!-- sidebar-header  --> */}
								<div class="sidebar-menu">
									<ul>
										<li class="header-menu">
											<span>General</span>
										</li>
										<li class="sidebar-dropdown">
											<a href="#">
												<i class="fa fa-tachometer-alt"></i>
												<span>Dashboard</span>
											</a>
										</li>
										<li class="sidebar-dropdown">
											<a href="#">
												<i class="fa fa-shopping-cart"></i>
												<span>E-commerce</span>
											</a>
										</li>
										<li class="sidebar-dropdown">
											<a href="#">
												<i class="far fa-gem"></i>
												<span>Components</span>
											</a>
										</li>
										<li class="sidebar-dropdown">
											<a href="#">
												<i class="fa fa-chart-line"></i>
												<span>Charts</span>
											</a>
										</li>
										<li class="sidebar-dropdown">
											<a href="#">
												<i class="fa fa-globe"></i>
												<span>Maps</span>
											</a>
										</li>
										
									</ul>
								</div>
								{/* <!-- sidebar-menu  --> */}
							</div>
						</nav>
					</div>
					{/* <!-- page-wrapper --> */}
				</SideBarSec>
				<Switch>
					<Change>
						<Route exact path="/book" component={Book} />
						<Route exact path="/member" component={Member} />
						<Route exact path="/dashboard" component={Suppliers} />
					</Change>
				</Switch>
			</BrowserRouter>
		</>
	);
};

export default Dashboard;
