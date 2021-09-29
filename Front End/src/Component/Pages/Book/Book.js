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

export default class componentName extends Component {
	constructor(props) {
		super(props);
		this.state = { books: [], addBookShow: false, updateBookShow: false };
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
		} = this.state;
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
						<div class="form-row">
							<div class="col-5">
								<input type="text" class="form-control" placeholder="Search" />
							</div>
							<div class="col-2">
								<ButtonToolbar>
									<Button onClick={() => this.setState({ addBookShow: true })}>
										Add bookser
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
								{books.map((books) => (
									<tr>
										<td>{books.bookId}</td>
										<td>{books.isbn}</td>
										<td>{books.bookName}</td>
										<td>{books.bookType}</td>
										<td>{books.medium}</td>
										<td>{books.authorName}</td>
										<td>
											<ButtonToolbar>
												<Button
													className="mr-2"
													variant="info"
													onClick={() =>
														this.setState({
															updateBookShow: true,
															bookId: books.bookId,
															isbn: books.isbn,
															bookName: books.bookName,
															bookType: books.bookType,
															medium: books.medium,
															authorName: books.authorName,
															supplierId: books.supplierId,
														})
													}
												>
													Edit
												</Button>
												<Button
													className="mr-2"
													variant="danger"
													onClick={() => this.deleteBook(books.bookId)}
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
