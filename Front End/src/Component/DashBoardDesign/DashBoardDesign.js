import React, { Component } from "react";
import {
	DashBoardSection,
	Reactangle,
	UIReactangle,
	WorkReactangle,
	LittleSquare,
	Square,
	UiImage,
	CompImage,
	RectTextArea,
	RectTopic,
	RectCount,
	UIheaderText,
	UIdesignName,
	UIdesignDesc,
	WorTopic,
	WorkdesignDesc,
} from "../../Styles/DashBoardStyleComponent";
import Reading from "../../images/reading.png";
import BooksImage from "../../images/books.png";
import MembersImage from "../../images/members.png";
import SupplierImage from "../../images/supplier.png";
import IssueBookImage from "../../images/issueBook.png";
import "./DashBoardDesignStyle.css";

export default class componentName extends Component {
	constructor(props) {
		super(props);
		this.state = {
			memb: [],
			books: [],
			issueBook: [],
			supp: [],
		};
	}

	componentDidMount() {
		this.refreshList();
	}

	refreshList() {
		fetch("http://localhost:8081/members")
			.then((response) => response.json())
			.then((data) => {
				this.setState({ memb: data });
			});
		fetch("http://localhost:8082/book-service/books")
			.then((response) => response.json())
			.then((data) => {
				this.setState({ books: data });
			});
		fetch("http://localhost:8084/book-member/member-books")
			.then((response) => response.json())
			.then((data) => {
				this.setState({ issueBook: data });
			});
		fetch("http://localhost:8082/suppler-service/suppliers")
			.then((response) => response.json())
			.then((data) => {
				this.setState({ supp: data });
			});
	}
	render() {
		return (
			<>
				<DashBoardSection>
					<h1
						style={{
							color: "#344767",
							// textTransform: "uppercase",
							fontWeight: "500",
						}}
					>
						Hi! Welcome{" "}
						<span
							style={{
								textTransform: "capitalize",
								color: "#025B9A",
								fontWeight: "bolder",
							}}
						>
							{this.props.name}
						</span>
					</h1>
					<p style={{ color: "#67748E", fontWeight: "400" }}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, fuga
						facere recusandae soluta incidunt ab doloremque explicabo enim nihil
						iste totam culpa dicta. Eligendi inventore maxime odio autem
						recusandae explicabo.
					</p>
					<hr />
					<br />
					<br />
					<div style={{ display: "flex" }}>
						<Reactangle>
							<RectTextArea>
								<RectTopic>All Books</RectTopic>
								<RectCount>{this.state.books.length}</RectCount>
							</RectTextArea>
							<LittleSquare>
								<CompImage src={BooksImage} />
							</LittleSquare>
						</Reactangle>
						<Reactangle>
							<RectTextArea>
								<RectTopic>All Members</RectTopic>
								<RectCount>{this.state.memb.length}</RectCount>
							</RectTextArea>
							<LittleSquare>
								<CompImage src={MembersImage} />
							</LittleSquare>
						</Reactangle>
						<Reactangle>
							<RectTextArea>
								<RectTopic>All Issue Books</RectTopic>
								<RectCount>{this.state.issueBook.length}</RectCount>
							</RectTextArea>
							<LittleSquare>
								<CompImage src={IssueBookImage} />
							</LittleSquare>
						</Reactangle>
						<Reactangle>
							<RectTextArea>
								<RectTopic>All Suppliers</RectTopic>
								<RectCount>{this.state.supp.length}</RectCount>
							</RectTextArea>
							<LittleSquare>
								<CompImage src={SupplierImage} />
							</LittleSquare>
						</Reactangle>
					</div>
					<div style={{ display: "flex" }}>
						<UIReactangle>
							<RectTextArea style={{ marginTop: "30px" }}>
								<UIheaderText>Built by Sachintha</UIheaderText>
								<UIdesignName>Reading Room</UIdesignName>
								<UIdesignDesc style={{ width: "300px" }}>
									From colors, cards, typography to complex elements, you will
									find the full documentation.
								</UIdesignDesc>
							</RectTextArea>
							<Square>
								<UiImage src={Reading} />
							</Square>
						</UIReactangle>
						<WorkReactangle>
							<div id="workRectCover">
								<RectTextArea style={{ padding: "30px", marginTop: "15px" }}>
									<WorTopic style={{ width: "300px", paddingBottom: "10px" }}>
										sachintha madhawa
									</WorTopic>
									<WorkdesignDesc style={{ width: "300px" }}>
										Wealth creation is an evolutionarily recent positive-sum
										game. It is all about who take the opportunity first.
									</WorkdesignDesc>
								</RectTextArea>
							</div>
						</WorkReactangle>
					</div>
				</DashBoardSection>
			</>
		);
	}
}
