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
import DashBoardDesign from "../DashBoardDesign/DashBoardDesign";
import IssueBook from "../Pages/IssueBook/IssueBook";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import "./DashBoardStyle.css";
import { MenuRectBack, MenuIcon } from "../../Styles/DashBoardStyleComponent";
import BooksImage from "../../images/books2.png";
import MembersImage from "../../images/members2.png";
import SupplierImage from "../../images/suppliers2.png";
import IssueBookImage from "../../images/issuebook2.png";
import DashBoardImage from "../../images/dash.png";
import SigOutImage from "../../images/logout.png";

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
					{/*
					<Button style={{ marginTop: "5px" }} onClick={() => logOut()}>
						Logout
					</Button> */}

					<div className="page-wrapper chiller-theme toggled">
						<a id="show-sidebar" className="btn btn-sm btn-dark" href="#">
							<i className="fas fa-bars"></i>
						</a>
						<nav id="sidebar" className="sidebar-wrapper">
							<div className="sidebar-content">
								<br />
								<div className="sidebar-brand">
									<a href="#" style={{ fontSize: "1.7rem" }}>
										Reading Room
									</a>
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
										<span
											className="user-name"
											style={{ textTransform: "capitalize" }}
										>
											{data.firstName}
											<strong style={{ textTransform: "capitalize" }}>
												{data.lastName}
											</strong>
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
									<br />
									<ul>
										<li className="header-menu">
											<span>General</span>
										</li>
										<li className="sidebar-dropdown">
											<Link to="/dashboard" style={{ display: "flex" }}>
												<MenuRectBack>
													<MenuIcon src={DashBoardImage} />
												</MenuRectBack>
												<span>Dashboard</span>
											</Link>
										</li>
										<li className="sidebar-dropdown">
											<Link to="/book" style={{ display: "flex" }}>
												<MenuRectBack>
													<MenuIcon src={BooksImage} />
												</MenuRectBack>
												<span>Book</span>
											</Link>
										</li>
										<li className="sidebar-dropdown">
											<Link to="/member" style={{ display: "flex" }}>
												<MenuRectBack>
													<MenuIcon src={MembersImage} />
												</MenuRectBack>
												<span>Members</span>
											</Link>
										</li>
										<li className="sidebar-dropdown">
											<Link to="/issue-return-book" style={{ display: "flex" }}>
												<MenuRectBack>
													<MenuIcon src={IssueBookImage} />
												</MenuRectBack>
												<span>MemberBook</span>
											</Link>
										</li>
										<li className="sidebar-dropdown">
											<Link to="/supplier" style={{ display: "flex" }}>
												<MenuRectBack>
													<MenuIcon src={SupplierImage} />
												</MenuRectBack>
												<span>Suppler</span>
											</Link>
										</li>
										<br />
										<li className="header-menu">
											<span>Other</span>
										</li>
										<li className="sidebar-dropdown" onClick={() => logOut()}>
											<Link to="" style={{ display: "flex" }}>
												<MenuRectBack>
													<MenuIcon src={SigOutImage} />
												</MenuRectBack>
												<span>Sign Out</span>
											</Link>
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
						<Route exact path="/dashboard">
							<DashBoardDesign name={data.firstName} />
						</Route>
						<Route exact path="/book" component={Book} />
						<Route exact path="/member" component={Member} />
						<Route exact path="/issue-return-book" component={IssueBook} />
						<Route exact path="/supplier" component={Suppliers} />
					</Change>
				</Switch>
			</BrowserRouter>
		</>
	);
};

export default Dashboard;
