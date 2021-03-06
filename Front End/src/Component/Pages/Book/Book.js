import React, { Component } from "react";
import {
	TitleSection,
	Title,
	Description,
	TableSection,
} from "../../../Styles/CommonStyle";
import { Button, ButtonToolbar } from "react-bootstrap";
import AddBook from "../../AddBook/AddBook";
import EditBook from "../../EditBook/EditBook";
import "../../../GlobalStyle/GlobalStyle.css";
import { toast } from "react-toastify";

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
		fetch("http://localhost:8082/book-service/books")
			.then((response) => response.json())
			.then((data) => {
				this.setState({ books: data });
			});
	}

	deleteBook(bookId) {
		if (window.confirm("are you shure")) {
			fetch(`http://localhost:8082/book-service/book/${bookId}`, {
				method: "DELETE",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
				},
			});
			toast.success("Success Notification !", {
				position: toast.POSITION.TOP_RIGHT,
			});
		}
	}

	render() {
		const {
			books,
			bookId,
			bookName,
			bookType,
			medium,
			authorName,
			bookserGmail,
			supplierId,
			isbn,
		} = this.state;
		const searchItem = this.state.searchTitle;
		let addBookClose = () => this.setState({ addBookShow: false });
		let updateBookClose = () => this.setState({ updateBookShow: false });
		return (
			<>
				<TitleSection>
					<Title>BOOK SECTION</Title>
					<Description>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut alias
						amet, totam cumque reiciendis iste illo quidem consectetur nisi
						praesentium?Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Totam cum nulla recusandae unde sint voluptate nisi aut. Fugiat
					</Description>
				</TitleSection>
				<TableSection>
					<form className="mb-5">
						<div className="form-row">
							<div className="col-5">
								<input
									type="text"
									className="form-control"
									placeholder="Search"
									onChange={(e) =>
										this.setState({ searchTitle: e.target.value })
									}
								/>
							</div>
							<div class="col-2">
								<ButtonToolbar>
									<Button
										onClick={() => this.setState({ addBookShow: true })}
										className="addButton"
									>
										ADD BOOK
									</Button>
									<AddBook
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
									<th scope="col">ISBN</th>
									<th scope="col">Book Title</th>
									<th scope="col">Book Type</th>
									<th scope="col">Medium</th>
									<th scope="col">Auther Name</th>
									<th scope="col">Options</th>
								</tr>
							</thead>
							<tbody>
								{books
									.filter((book) => {
										if (searchItem === "") {
											return books;
										} else if (
											book.bookName
												.toLowerCase()
												.includes(searchItem.toLowerCase())
										) {
											return books;
										}
									})
									.map((book) => (
										<tr>
											<td>{book.bookId}</td>
											<td>{book.isbn}</td>
											<td>{book.bookName}</td>
											<td>{book.bookType}</td>
											<td>{book.medium}</td>
											<td>{book.authorName}</td>
											<td>
												<ButtonToolbar>
													<Button
														className="mr-2"
														variant="info"
														onClick={() =>
															this.setState({
																updateBookShow: true,
																bookId: book.bookId,
																isbn: book.isbn,
																bookName: book.bookName,
																bookType: book.bookType,
																medium: book.medium,
																authorName: book.authorName,
																supplierId: book.supplierId,
															})
														}
													>
														Edit
													</Button>
													<Button
														className="mr-2"
														variant="danger"
														onClick={() => this.deleteBook(book.bookId)}
													>
														Delete
													</Button>
													<EditBook
														show={this.state.updateBookShow}
														onHide={updateBookClose}
														bookId={bookId}
														bookName={bookName}
														bookType={bookType}
														medium={medium}
														authorName={authorName}
														bookserGmail={bookserGmail}
														supplierId={supplierId}
														isbn={isbn}
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
