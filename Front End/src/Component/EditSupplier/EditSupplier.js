import React, { Component } from "react";
import { Modal, Button, Row, Col, Form } from "react-bootstrap";

export default class componentName extends Component {
	constructor(props) {
		super(props);
	}

	handleSubmit(event) {
		event.preventDefault();

		fetch("http://localhost:8082/suppler-service/supplier", {
			method: "PUT",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				supplierId: event.target.supplierId.value,
				name: event.target.name.value,
				nic: event.target.nic.value,
				mobileNumber: event.target.mobileNumber.value,
				description: event.target.description.value,
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
								<Form.Group as={Col} controlId="formGridId">
									<Form.Control
										type="text"
										name="supplierId"
										disabled
										defaultValue={this.props.supplierId}
										// value={this.state.memberName}
									/>
								</Form.Group>
							</Row>

							<Row className="mb-3">
								<Form.Group as={Col} controlId="formGridName">
									<Form.Control
										type="text"
										placeholder="Name"
										name="name"
										defaultValue={this.props.name}
										// value={this.state.memberName}
									/>
								</Form.Group>

								<Form.Group as={Col} controlId="formGridNic">
									<Form.Control
										type="text"
										placeholder="NIC"
										name="nic"
										defaultValue={this.props.nic}
										// value={this.state.memberNic}
									/>
								</Form.Group>
							</Row>
							<Row className="mb-3">
								<Form.Group as={Col} controlId="formGridMobile">
									<Form.Control
										type="text"
										placeholder="Mobile Number"
										name="mobileNumber"
										defaultValue={this.props.mobileNumber}
										// value={this.state.memberMobile}
									/>
								</Form.Group>

								<Form.Group as={Col} controlId="formGridEmail">
									<Form.Control
										type="text"
										placeholder="Description"
										name="description"
										defaultValue={this.props.description}
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
