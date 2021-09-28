import React, { Component } from "react";
import { Modal, Button, Row, Col, Form } from "react-bootstrap";
import axios from "axios";

export default class componentName extends Component {
	constructor(props) {
		super(props);
		this.state = {
			supp: [],
			book: {
				bookName: "aaa",
				isbn: "AAAAA",
				bookType: "sssss",
				medium: "sssss",
				authorName: "ssssss",
			},
			supplier1: {
				supplierId: 5,
				name: "Chathu ",
				nic: "20001536377",
				mobileNumber: "0788538399",
				description: "nothing",
				books: [
					{
						bookName: "Hath pana",
						bookType: "Novel",
						medium: "Sinhala",
						isbn: "ISBN00010",
						authorName: "Martin Wikramasingha",
					},
					{
						bookName: "Hath pana",
						bookType: "Novel",
						medium: "Sinhala",
						isbn: "ISBN0001",
						authorName: "Martin Wikramasingha",
					},
				],
			},
			supplier2: [],
		};
		this.handleSubmit = this.handleSubmit.bind(this);
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
		// alert(JSON.stringify(this.state.supp));
		this.state.supp.map((supplier) => {
			if (supplier.supplierId == event.target.supplierId.value) {
				axios
					.put(
						`http://localhost:8082/suppler-service/supplier`,
						this.state.supplier1
					)
					.then(
						(Response) => {
							console.log(Response);
							alert("Success");
						},
						(error) => {
							console.log(error);
							console.log("error");
						}
					);
			}
			alert(JSON.stringify(this.state.supplier2));
		});

		// axios
		// 	.put(
		// 		`http://localhost:8082/suppler-service/supplier`,
		// 		this.state.supplier2
		// 	)
		// 	.then(
		// 		(Response) => {
		// 			console.log(Response);
		// 			alert("Success");
		// 		},
		// 		(error) => {
		// 			console.log(error);
		// 			console.log("error");
		// 		}
		// 	);
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
									<Form.Control as="select" name="supplierId">
										<option defaultValue="Choose...">
											SELECT SUPPLIER ID...
										</option>
										{this.state.supp.map((supp) => (
											<option value={supp.supplierId}>{supp.name}</option>
										))}
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
									<Form.Control as="select" name="bookType">
										<option value="1">1</option>
										<option value="1">1</option>
										<option value="1">1</option>
										<option value="1">1</option>
									</Form.Control>
								</Form.Group>
								<Form.Group as={Col} controlId="formGridMedium">
									<Form.Control as="select" name="medium">
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
