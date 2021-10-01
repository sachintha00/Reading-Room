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
} from "../../Styles/DashBoardStyleComponent";
import Reading from "../../images/reading.png";
import BooksImage from "../../images/books.png";
import MembersImage from "../../images/members.png";
import SupplierImage from "../../images/supplier.png";
import IssueBookImage from "../../images/issueBook.png";

export default class componentName extends Component {
	render() {
		return (
			<>
				<DashBoardSection>
					<h2>Reading Room</h2>
					<hr />
					<div style={{ display: "flex" }}>
						<Reactangle>
							<RectTextArea>
								<RectTopic>All Books</RectTopic>
								<RectCount>1200</RectCount>
							</RectTextArea>
							<LittleSquare>
								<CompImage src={BooksImage} />
							</LittleSquare>
						</Reactangle>
						<Reactangle>
							<RectTextArea>
								<RectTopic>All Members</RectTopic>
								<RectCount>1200</RectCount>
							</RectTextArea>
							<LittleSquare>
								<CompImage src={MembersImage} />
							</LittleSquare>
						</Reactangle>
						<Reactangle>
							<RectTextArea>
								<RectTopic>All Issue Books</RectTopic>
								<RectCount>1200</RectCount>
							</RectTextArea>
							<LittleSquare>
								<CompImage src={IssueBookImage} />
							</LittleSquare>
						</Reactangle>
						<Reactangle>
							<RectTextArea>
								<RectTopic>All Suppliers</RectTopic>
								<RectCount>1200</RectCount>
							</RectTextArea>
							<LittleSquare>
								<CompImage src={SupplierImage} />
							</LittleSquare>
						</Reactangle>
					</div>
					<div style={{ display: "flex" }}>
						<UIReactangle>
							<RectTextArea>
								<UIheaderText>Built by developers</UIheaderText>
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
						<WorkReactangle></WorkReactangle>
					</div>
				</DashBoardSection>
			</>
		);
	}
}
