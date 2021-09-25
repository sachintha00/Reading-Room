import React, { Component } from "react";
import {
	TitleSection,
	Title,
	Description,
	TableSection,
} from "../../../Styles/CommonStyle";
import { Button, ButtonToolbar } from "react-bootstrap";
import AddMember from "../../AddMember/AddMember";
import EditMember from "../../EditMember/EditMember";

export default class componentName extends Component {
	constructor(props) {
		super(props);
		this.state = { memb: [], addMemberShow: false, updateMemberShow: false };
	}

	componentDidMount() {
		this.refreshList();
	}
	componentDidUpdate() {
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

	deleteMember(membId) {
		if (window.confirm("are you shure")) {
			fetch("http://localhost:8081/member/" + membId, {
				method: "DELETE",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
				},
			});
		}
	}

	render() {
		const {
			memb,
			memberId,
			memberName,
			memberNic,
			memberAddress,
			memberMobile,
			memberGmail,
		} = this.state;
		let addMemberClose = () => this.setState({ addMemberShow: false });
		let updateMemberClose = () => this.setState({ updateMemberShow: false });
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

					<div style={{ height: "400px", width: "1050px", overflowX: "auto" }}>
						<table class="table">
							<thead>
								<tr>
									<th scope="col">Member ID</th>
									<th scope="col">Name</th>
									<th scope="col">NIC</th>
									<th scope="col">Address</th>
									<th scope="col">Mobile Number</th>
									<th scope="col">Mobile Number</th>
									<th scope="col">Options</th>
								</tr>
							</thead>
							<tbody>
								{memb.map((memb) => (
									<tr>
										<td>{memb.memberId}</td>
										<td>{memb.memberName}</td>
										<td>{memb.memberNic}</td>
										<td>{memb.memberAddress}</td>
										<td>{memb.memberMobile}</td>
										<td>{memb.memberGmail}</td>
										<td>
											<ButtonToolbar>
												<Button
													className="mr-2"
													variant="info"
													onClick={() =>
														this.setState({
															updateMemberShow: true,
															memberId: memb.memberId,
															memberName: memb.memberName,
															memberNic: memb.memberNic,
															memberAddress: memb.memberAddress,
															memberMobile: memb.memberMobile,
															memberGmail: memb.memberGmail,
														})
													}
												>
													Edit
												</Button>
												<Button
													className="mr-2"
													variant="danger"
													onClick={() => this.deleteMember(memb.memberId)}
												>
													Delete
												</Button>
												<EditMember
													show={this.state.updateMemberShow}
													onHide={updateMemberClose}
													memberId={memberId}
													memberName={memberName}
													memberNic={memberNic}
													memberAddress={memberAddress}
													memberMobile={memberMobile}
													memberGmail={memberGmail}
												/>
											</ButtonToolbar>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</TableSection>
			</>
		);
	}
}
