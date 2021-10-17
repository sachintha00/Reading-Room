import React, { Component } from "react";
import { Modal, Button, Row, Col, Form } from "react-bootstrap";

export default class componentName extends Component {
	constructor(props) {
		super(props);
		// this.state = {
		// 	memberName: "",
		// 	memberNic: "",
		// 	memberAddress: "",
		// 	memberMobile: "",
		// 	memberGmail: "",
		// };
	}

	handleSubmit(event) {
		event.preventDefault();

		fetch("http://localhost:8081/member", {
			method: "PUT",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				memberId: event.target.memberId.value,
				memberName: event.target.memberName.value,
				memberNic: event.target.memberNic.value,
				memberAddress: event.target.memberAddress.value,
				memberMobile: event.target.memberMobile.value,
				memberGmail: event.target.memberGmail.value,
			}),
		})
			.then((res) => res.json())
			.then(
				(result) => {
					alert("Success");
				},
				(error) => {
					alert("Error");
				}
			);
	}
	render() {
		return (
			<Modal
				{...this.props}
				size="lg"
				aria-labelledby="contained-modal-title-vcenter"
				centered
			>
				<Modal.Header closeButton>
					<Modal.Title id="contained-modal-title-vcenter">
						<b>UPDATE MEMBER</b>
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<h6>Member ID</h6>
					<div className="Container">
						<Form onSubmit={this.handleSubmit}>
							<Row className="mb-3">
								<Form.Group as={Col} controlId="formGridId">
									<Form.Control
										type="text"
										name="memberId"
										disabled
										defaultValue={this.props.memberId}
										// value={this.state.memberName}
									/>
								</Form.Group>
							</Row>

							<Row className="mb-3">
								<Form.Group as={Col} controlId="formGridName">
									<h6>Member Name</h6>
									<Form.Control
										type="text"
										placeholder="Name"
										name="memberName"
										defaultValue={this.props.memberName}
										// value={this.state.memberName}
									/>
								</Form.Group>

								<Form.Group as={Col} controlId="formGridNic">
									<h6>Member NIC</h6>
									<Form.Control
										type="text"
										placeholder="NIC"
										name="memberNic"
										defaultValue={this.props.memberNic}
										// value={this.state.memberNic}
									/>
								</Form.Group>
							</Row>
							<Row className="mb-3">
								<Form.Group as={Col} controlId="formGridAddress">
									<h6>Member Address</h6>
									<Form.Control
										type="text"
										placeholder="Adress"
										name="memberAddress"
										defaultValue={this.props.memberAddress}
										// value={this.state.memberAddress}
									/>
								</Form.Group>
							</Row>
							<Row className="mb-3">
								<Form.Group as={Col} controlId="formGridMobile">
									<h6>Member Mobile</h6>
									<Form.Control
										type="text"
										placeholder="Mobile Number"
										name="memberMobile"
										defaultValue={this.props.memberMobile}
										// value={this.state.memberMobile}
									/>
								</Form.Group>

								<Form.Group as={Col} controlId="formGridEmail">
									<h6>Member Email</h6>
									<Form.Control
										type="email"
										placeholder="Email"
										name="memberGmail"
										defaultValue={this.props.memberGmail}
										// value={this.state.memberGmail}
									/>
								</Form.Group>
							</Row>
							<Row className="mb-3">
								<Form.Group as={Col} controlId="formGridSubmit">
									<Button variant="primary" type="submit">
										Submit
									</Button>
								</Form.Group>
							</Row>
						</Form>
					</div>
				</Modal.Body>
				<Modal.Footer>
					<Button onClick={this.props.onHide}>Close</Button>
				</Modal.Footer>
			</Modal>
		);
	}
}
