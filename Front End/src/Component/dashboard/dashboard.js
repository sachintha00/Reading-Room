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

					<div className="page-wrapper chiller-theme toggled">
						<a id="show-sidebar" className="btn btn-sm btn-dark" href="#">
							<i className="fas fa-bars"></i>
						</a>
						<nav id="sidebar" className="sidebar-wrapper">
							<div className="sidebar-content">
								<div className="sidebar-brand">
									<a href="#">pro sidebar</a>
									<div id="close-sidebar">
										<i className="fas fa-times"></i>
									</div>
								</div>
								<div className="sidebar-header">
									<div className="user-pic">
										<img
											className="img-responsive img-rounded"
											src="https://raw.githubusercontent.com/azouaoui-med/pro-sidebar-template/gh-pages/src/img/user.jpg"
											alt="User picture"
										/>
									</div>
									<div className="user-info">
										<span className="user-name">
											Jhon
											<strong>Smith</strong>
										</span>
										<span className="user-role">Administrator</span>
										<span className="user-status">
											<i className="fa fa-circle"></i>
											<span>Online</span>
										</span>
									</div>
								</div>
								{/* <!-- sidebar-header  --> */}
								<div className="sidebar-menu">
									<ul>
										<li className="header-menu">
											<span>General</span>
										</li>
										<li className="sidebar-dropdown">
											<a href="#">
												<i className="fa fa-tachometer-alt"></i>
												<span>Dashboard</span>
											</a>
										</li>
										<li className="sidebar-dropdown">
											<Link to="/book">
												<i className="fa fa-shopping-cart"></i>
												<span>Book</span>
											</Link>
										</li>
										<li className="sidebar-dropdown">
											<Link to="/member">
												<i className="far fa-gem"></i>
												<span>Members</span>
											</Link>
										</li>
										<li className="sidebar-dropdown">
											<a href="#">
												<i className="fa fa-chart-line"></i>
												<span>Charts</span>
											</a>
										</li>
										<li className="sidebar-dropdown">
											<a href="#">
												<i className="fa fa-globe"></i>
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
