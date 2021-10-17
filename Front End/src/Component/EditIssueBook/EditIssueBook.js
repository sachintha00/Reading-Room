import React, { Component } from "react";
import { Modal, Button, Row, Col, Form } from "react-bootstrap";

export default class componentName extends Component {
	constructor(props) {
		super(props);
		this.state = {
			book: [],
			memb: [],
			findBookName: "",
			findMemberName: "",
		};

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidMount() {
		this.refreshList();
	}
	// componentDidUpdate() {
	// 	this.refreshList();
	// }

	refreshList() {
		fetch("http://localhost:8082/book-service/books")
			.then((response) => response.json())
			.then((data) => {
				this.setState({ book: data });
			});
		fetch("http://localhost:8081/members")
			.then((response) => response.json())
			.then((data) => {
				this.setState({ memb: data });
			});
	}

	findBookName = (event) => {
		this.state.book.map((data) => {
			if (JSON.stringify(data.bookId) === event.target.value) {
				fetch(`http://localhost:8082/book-service/book/${event.target.value}`)
					.then((response) => response.json())
					.then((data) => {
						this.setState({ findBookName: data.bookName });
					});
			}
		});
	};
	findMemberName = (event) => {
		this.state.memb.map((data) => {
			if (JSON.stringify(data.memberId) === event.target.value) {
				fetch(`http://localhost:8081/member/${event.target.value}`)
					.then((response) => response.json())
					.then((data) => {
						this.setState({ findMemberName: data.memberName });
					});
			}
		});
	};
	handleSubmit(event) {
		event.preventDefault();

		fetch("http://localhost:8084/book-member/member-book", {
			method: "PUT",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				bookMemberId: this.props.bookMemberId,
				bookId: event.target.bookId.value,
				memberId: event.target.memberId.value,
				bookName: event.target.bookName.value,
				memberName: event.target.memberName.value,
				issueDate: event.target.issueDate.value,
				returnDate: event.target.returnDate.value,
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
						<b>UPDATE ISSUE DETAILS</b>
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<div className="Container">
						<Form onSubmit={this.handleSubmit}>
							<Row className="mb-3">
								<Form.Group as={Col} controlId="formGridbookId">
									<h6>Book ID</h6>
									<Form.Control
										type="text"
										placeholder="Enter Book ID"
										name="bookId"
										defaultValue={this.props.bookId}
										onChange={this.findBookName}
									/>
								</Form.Group>
								<Form.Group as={Col} controlId="formGridName">
									<h6>Book Name</h6>
									<Form.Control
										type="text"
										placeholder="Book Title"
										name="bookName"
										defaultValue={this.props.bookName}
										value={this.state.findBookName}
										disabled
									/>
								</Form.Group>
							</Row>
							<Row className="mb-3">
								<Form.Group as={Col} controlId="formGridmemberId">
									<h6>Member ID</h6>
									<Form.Control
										type="text"
										placeholder="Enter Member ID"
										name="memberId"
										defaultValue={this.props.memberId}
										onChange={this.findMemberName}
									/>
								</Form.Group>
								<Form.Group as={Col} controlId="formGridMemberName">
									<h6>Member Name</h6>
									<Form.Control
										type="text"
										placeholder="Member Name"
										name="memberName"
										value={this.state.findMemberName}
										disabled
									/>
								</Form.Group>
							</Row>
							<Row className="mb-3">
								<Form.Group as={Col} controlId="formGridIssueDate">
									<h6>Issue Date</h6>
									<Form.Control
										type="text"
										name="issueDate"
										defaultValue={this.props.issueDate}
										disabled
									/>
								</Form.Group>
								<Form.Group as={Col} controlId="formGridReturnDate">
									<h6>Return Date</h6>
									<Form.Control
										type="date"
										placeholder="Return Date"
										name="returnDate"
										defaultValue={this.props.returnDate}
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
