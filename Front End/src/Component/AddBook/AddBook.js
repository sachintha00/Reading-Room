import React, { Component } from "react";
import { Modal, Button, Row, Col, Form } from "react-bootstrap";

export default class componentName extends Component {
	constructor(props) {
		super(props);
	}

	handleSubmit(event) {
		event.preventDefault();

		fetch("http://localhost:8082/book-service/book", {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				bookName: event.target.bookName.value,
				isbn: event.target.isbn.value,
				bookType: event.target.bookType.value,
				medium: event.target.medium.value,
				authorName: event.target.authorName.value,
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
								<Form.Group as={Col} controlId="formGridSuppId">
									<Form.Control as="select">
										<option value="1">1</option>
										<option value="1">1</option>
										<option value="1">1</option>
										<option value="1">1</option>
									</Form.Control>
								</Form.Group>
								<Form.Group as={Col} controlId="formGridName">
									<Form.Control
										type="text"
										placeholder="Book Title"
										name="bookName"
									/>
								</Form.Group>
							</Row>
							<Row className="mb-3">
								<Form.Group as={Col} controlId="formGridType">
									<Form.Control as="select">
										<option value="1">1</option>
										<option value="1">1</option>
										<option value="1">1</option>
										<option value="1">1</option>
									</Form.Control>
								</Form.Group>
								<Form.Group as={Col} controlId="formGridMedium">
									<Form.Control as="select">
										<option value="1">1</option>
										<option value="1">1</option>
										<option value="1">1</option>
										<option value="1">1</option>
									</Form.Control>
								</Form.Group>
							</Row>
							<Row className="mb-3">
								<Form.Group as={Col} controlId="formGridAuthor">
									<Form.Control
										type="text"
										placeholder="Author Name"
										name="authorName"
									/>
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
