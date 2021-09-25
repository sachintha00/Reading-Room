import React, { Component } from "react";
import {
	TitleSection,
	Title,
	Description,
	TableSection,
} from "../../../Styles/CommonStyle";
import { Button, ButtonToolbar } from "react-bootstrap";
import AddBook from "../../AddBook/AddBook";

export default class componentName extends Component {
	constructor(props) {
		super(props);
		this.state = { memb: [], addMemberShow: false, updateMemberShow: false };
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
				this.setState({ memb: data });
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
			memb,
			memberId,
			memberName,
			memberNic,
			memberAddress,
			memberMobile,
			memberGmail,
		} = this.state;
		let addMemberClose = () => this.setState({ addMemberShow: false });
		let updateMemberClose = () => this.setState({ updateMemberShow: false });
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
									<Button
										onClick={() => this.setState({ addMemberShow: true })}
									>
										Add Member
									</Button>
									<AddBook
										show={this.state.addMemberShow}
										onHide={addMemberClose}
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
								{memb.map((memb) => (
									<tr>
										<td>{memb.bookId}</td>
										<td>{memb.isbn}</td>
										<td>{memb.bookName}</td>
										<td>{memb.bookType}</td>
										<td>{memb.medium}</td>
										<td>{memb.authorName}</td>
										<td>
											<ButtonToolbar>
												<Button
													className="mr-2"
													variant="info"
													onClick={() =>
														this.setState({
															updateMemberShow: true,
															bookId: memb.bookId,
															isbn: memb.isbn,
															bookName: memb.bookName,
															bookType: memb.bookType,
															medium: memb.medium,
															authorName: memb.authorName,
														})
													}
												>
													Edit
												</Button>
												<Button
													className="mr-2"
													variant="danger"
													onClick={() => this.deleteBook(memb.bookId)}
												>
													Delete
												</Button>
												{/* <EditMember
											show={this.state.updateMemberShow}
											onHide={updateMemberClose}
											memberId={memberId}
											memberName={memberName}
											memberNic={memberNic}
											memberAddress={memberAddress}
											memberMobile={memberMobile}
											memberGmail={memberGmail}
										/> */}
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
