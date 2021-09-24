import React, { Component } from "react";
import {
	TitleSection,
	Title,
	Description,
	TableSection,
} from "../../../Styles/CommonStyle";
import { Button, ButtonToolbar } from "react-bootstrap";
import AddMember from "../../AddMember/AddMember";
import BaseUrl from "../../../Service/MemberService";
import { useState } from "react";

export default class componentName extends Component {
	constructor(props) {
		super(props);
		this.state = { memb: [], addMemberShow: false };
	}

	componentDidMount() {
		this.refreshList();
	}

	refreshList() {
		fetch("http://localhost:8081/members")
			.then((response) => response.json())
			.then((data) => {
				this.setState({ memb: data });
			});
		// this.setState({
		// 	memb: [
		// 		{ member_id: 1, member_address: "matara" },
		// 		{ member_id: 2, member_address: "matara" },
		// 	],
		// });
	}

	render() {
		const { memb } = this.state;
		let addMemberClose = () => this.setState({ addMemberShow: false });
		return (
			<>
				<TitleSection>
					<Title>MEMBER SECTION</Title>
					<Description>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut alias
						amet, totam cumque reiciendis iste illo quidem consectetur nisi
						praesentium?Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Totam cum nulla recusandae unde sint voluptate nisi aut. Fugiat
					</Description>
				</TitleSection>
				<TableSection>
					<form className="mb-5">
						<div class="form-row">
							<div class="col-5">
								<input type="text" class="form-control" placeholder="Search" />
							</div>
							<div class="col-2">
								{/* <input
									type="Button"
									value="Add Member"
									class="form-control"
									placeholder="Search"
									onClick={() => this.setState({ addMemberShow: true })}
								/> */}
								<ButtonToolbar>
									<Button
										onClick={() => this.setState({ addMemberShow: true })}
									>
										Add Member
									</Button>
									<AddMember
										show={this.state.addMemberShow}
										onHide={addMemberClose}
									/>
								</ButtonToolbar>
							</div>
						</div>
					</form>

					<table class="table">
						<thead>
							<tr>
								<th scope="col">Name</th>
								<th scope="col">NIC</th>
								<th scope="col">Address</th>
								<th scope="col">Mobile Number</th>
								<th scope="col">Gmail</th>
							</tr>
						</thead>
						<tbody>
							{memb.map((memb) => (
								<tr>
									<td>{memb.memberName}</td>
									<td>{memb.memberNic}</td>
									<td>{memb.memberAddress}</td>
									<td>{memb.memberMobile}</td>
									<td>{memb.memberGmail}</td>
								</tr>
							))}
						</tbody>
					</table>
				</TableSection>
			</>
		);
	}
}
