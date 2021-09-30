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

		fetch("http://localhost:8082/book-service/book", {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				// bookName: event.target.bookName.value,
				// bookType: event.target.bookType.value,
				// medium: event.target.medium.value,
				// authorName: event.target.authorName.value,
				// isbn: event.target.isbn.value,
				// booklierId: event.target.booklierId.value,
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
		const { book, findBookId } = this.state;
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
								<Form.Group as={Col} controlId="formGridbookId">
									<Form.Control
										type="text"
										placeholder="Enter Book ID"
										name="bookId"
										onChange={this.findBookName}
									/>
								</Form.Group>
								<Form.Group as={Col} controlId="formGridName">
									<Form.Control
										type="text"
										placeholder="Book Title"
										name="bookName"
										value={this.state.findBookName}
										disabled
									/>
								</Form.Group>
							</Row>
							<Row className="mb-3">
								<Form.Group as={Col} controlId="formGridmemberId">
									<Form.Control
										type="text"
										placeholder="Enter Member ID"
										name="memberId"
										onChange={this.findMemberName}
									/>
								</Form.Group>
								<Form.Group as={Col} controlId="formGridMemberName">
									<Form.Control
										type="text"
										placeholder="Book Title"
										name="memberName"
										value={this.state.findMemberName}
										disabled
									/>
								</Form.Group>
							</Row>
							<Row className="mb-3">
								<Form.Group as={Col} controlId="formGridReturnDate">
									<Form.Control
										type="text"
										placeholder="Return Date"
										name="returnDate"
										value={new Date().getDate()}
									/>
								</Form.Group>
								<Form.Group as={Col} controlId="formGridReturnDate">
									<Form.Control
										type="date"
										placeholder="Return Date"
										name="returnDate"
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
