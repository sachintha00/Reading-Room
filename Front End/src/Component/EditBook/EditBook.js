import React, { Component } from "react";
import { Modal, Button, Row, Col, Form } from "react-bootstrap";
import { toast } from "react-toastify";

export default class componentName extends Component {
	constructor(props) {
		super(props);
		this.state = {
			supp: [],
		};
	}
	componentDidMount() {
		this.refreshList();
	}
	componentDidUpdate() {
		this.refreshList();
	}

	refreshList() {
		fetch("http://localhost:8082/suppler-service/suppliers")
			.then((response) => response.json())
			.then((data) => {
				this.setState({ supp: data });
			});
	}
	handleSubmit(event) {
		event.preventDefault();

		fetch("http://localhost:8082/book-service/book", {
			method: "PUT",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				bookId: event.target.bookId.value,
				bookName: event.target.bookName.value,
				bookType: event.target.bookType.value,
				medium: event.target.medium.value,
				authorName: event.target.authorName.value,
				isbn: event.target.isbn.value,
				supplierId: event.target.supplierId.value,
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
						<b>UPDATE BOOK</b>
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<h6>Supllier ID</h6>
					<div className="Container">
						<Form onSubmit={this.handleSubmit}>
							<Row className="mb-3">
								<Form.Group as={Col} controlId="formGridSuppId">
									<Form.Control
										as="select"
										name="supplierId"
										defaultValue={this.props.supplierId}
									>
										<option defaultValue="Choose...">
											SELECT SUPPLIER ID...
										</option>
										{this.state.supp.map((supp) => (
											<option value={supp.supplierId}>{supp.name}</option>
										))}
									</Form.Control>
								</Form.Group>
							</Row>
							<Row className="mb-3">
								<Form.Group as={Col} controlId="formGridBookId">
									<h6>Book ID</h6>
									<Form.Control
										type="text"
										placeholder="Book ID"
										name="bookId"
										disabled
										defaultValue={this.props.bookId}
									/>
								</Form.Group>
								<Form.Group as={Col} controlId="formGridName">
									<h6>Book Name</h6>
									<Form.Control
										type="text"
										placeholder="Book Title"
										name="bookName"
										defaultValue={this.props.bookName}
									/>
								</Form.Group>
							</Row>
							<Row className="mb-3">
								<Form.Group as={Col} controlId="formGridType">
									<h6>Book Type</h6>
									<Form.Control
										as="select"
										name="bookType"
										defaultValue={this.props.bookType}
									>
										<option value="">Select Book Type...</option>
										<option value="Short story">Short story</option>
										<option value="Thriller">Thriller</option>
										<option value="Science fiction">Science fiction</option>
										<option value="Mystery">Mystery</option>
										<option value="Graphic novel">Graphic novel</option>
										<option value="Historical fiction">
											Historical fiction
										</option>
									</Form.Control>
								</Form.Group>
								<Form.Group as={Col} controlId="formGridMedium">
									<h6>Book Medium</h6>
									<Form.Control
										as="select"
										name="medium"
										defaultValue={this.props.medium}
									>
										<option value="">Select Medium...</option>
										<option value="English">English</option>
										<option value="Sinhala">Sinhala</option>
										<option value="Tamil">Tamil</option>
									</Form.Control>
								</Form.Group>
							</Row>
							<Row className="mb-3">
								<Form.Group as={Col} controlId="formGridAuthor">
									<h6>Author</h6>
									<Form.Control
										type="text"
										placeholder="Author Name"
										name="authorName"
										defaultValue={this.props.authorName}
									/>
								</Form.Group>
								<Form.Group as={Col} controlId="formGridIsbn">
									<h6>ISBN NO:</h6>
									<Form.Control
										type="text"
										placeholder="ISBN"
										name="isbn"
										defaultValue={this.props.isbn}
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
