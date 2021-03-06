import React, { Component } from "react";
import {
	TitleSection,
	Title,
	Description,
	TableSection,
} from "../../../Styles/CommonStyle";
import { Button, ButtonToolbar } from "react-bootstrap";
import AddIssueBook from "../../AddIssueBook/AddIssueBook";
import EditIssueBook from "../../EditIssueBook/EditIssueBook";

export default class componentName extends Component {
	constructor(props) {
		super(props);
		this.state = {
			books: [],
			addBookShow: false,
			updateBookShow: false,
			searchTitle: "",
		};
	}
	componentDidMount() {
		this.refreshList();
	}
	componentDidUpdate() {
		this.refreshList();
	}

	refreshList() {
		fetch("http://localhost:8084/book-member/member-books")
			.then((response) => response.json())
			.then((data) => {
				this.setState({ books: data });
			});
	}

	deleteIssueBook(bookMemberId) {
		if (window.confirm("are you shure")) {
			fetch(`http://localhost:8084/book-member/member-books/${bookMemberId}`, {
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
			books,
			bookId,
			memberId,
			issueDate,
			returnDate,
			bookName,
			bookMemberId,
		} = this.state;
		const searchItem = this.state.searchTitle;
		let addBookClose = () => this.setState({ addBookShow: false });
		let updateBookClose = () => this.setState({ updateBookShow: false });
		return (
			<>
				<TitleSection>
					<Title>BOOK ISSUE-RETURN SECTION</Title>
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
								<input
									type="text"
									class="form-control"
									placeholder="Search"
									onChange={(e) =>
										this.setState({ searchTitle: e.target.value })
									}
								/>
							</div>
							<div class="col-2">
								<ButtonToolbar>
									<Button onClick={() => this.setState({ addBookShow: true })}>
										Add Issue Book
									</Button>
									<AddIssueBook
										show={this.state.addBookShow}
										onHide={addBookClose}
									/>
								</ButtonToolbar>
							</div>
						</div>
					</form>

					<div style={{ height: "400px", width: "1050px", overflowX: "auto" }}>
						<table class="table">
							<thead>
								<tr>
									<th scope="col">Book ID</th>
									<th scope="col">Member ID</th>
									<th scope="col">Book Name</th>
									<th scope="col">Member Name</th>
									<th scope="col">Issue Date</th>
									<th scope="col">Return Date</th>
									<th scope="col">Options</th>
								</tr>
							</thead>
							<tbody>
								{books
									.filter((issueBook) => {
										if (searchItem === "") {
											return issueBook;
										} else if (
											issueBook.bookName
												.toLowerCase()
												.includes(searchItem.toLowerCase())
										) {
											return issueBook;
										}
									})
									.map((issueBook) => (
										<tr>
											<td>{issueBook.bookId}</td>
											<td>{issueBook.memberId}</td>
											<td>{issueBook.bookName}</td>
											<td>{issueBook.memberName}</td>
											<td>{issueBook.issueDate}</td>
											<td>{issueBook.returnDate}</td>
											<td>
												<ButtonToolbar>
													<Button
														className="mr-2"
														variant="info"
														onClick={() =>
															this.setState({
																updateBookShow: true,
																bookId: issueBook.bookId,
																memberId: issueBook.memberId,
																bookName: issueBook.bookName,
																memberName: issueBook.memberName,
																issueDate: issueBook.issueDate,
																returnDate: issueBook.returnDate,
																bookMemberId: issueBook.bookMemberId,
															})
														}
													>
														Edit
													</Button>
													<Button
														className="mr-2"
														variant="danger"
														onClick={() =>
															this.deleteIssueBook(issueBook.bookMemberId)
														}
													>
														Delete
													</Button>
													<EditIssueBook
														show={this.state.updateBookShow}
														onHide={updateBookClose}
														bookId={bookId}
														memberId={memberId}
														bookName={bookName}
														issueDate={issueDate}
														returnDate={returnDate}
														bookMemberId={bookMemberId}
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
