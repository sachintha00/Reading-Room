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

		fetch("http://localhost:8082/suppler-service/supplier", {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
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
					alert("kelawila");
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
						Modal heading
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<h4>Centered Modal</h4>
					<div className="Container">
						<Form onSubmit={this.handleSubmit}>
							<Row className="mb-3">
								<Form.Group as={Col} controlId="formGridName">
									<Form.Control
										type="text"
										placeholder="Name"
										name="memberName"
										// value={this.state.memberName}
									/>
								</Form.Group>

								<Form.Group as={Col} controlId="formGridNic">
									<Form.Control
										type="text"
										placeholder="NIC"
										name="memberNic"
										// value={this.state.memberNic}
									/>
								</Form.Group>
							</Row>
							<Row className="mb-3">
								<Form.Group as={Col} controlId="formGridAddress">
									<Form.Control
										type="text"
										placeholder="Adress"
										name="memberAddress"
										// value={this.state.memberAddress}
									/>
								</Form.Group>
							</Row>
							<Row className="mb-3">
								<Form.Group as={Col} controlId="formGridMobile">
									<Form.Control
										type="text"
										placeholder="Mobile Number"
										name="memberMobile"
										// value={this.state.memberMobile}
									/>
								</Form.Group>

								<Form.Group as={Col} controlId="formGridEmail">
									<Form.Control
										type="email"
										placeholder="Email"
										name="memberGmail"
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
