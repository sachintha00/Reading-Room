import React, { Component } from "react";
import {
	DashBoardSection,
	Reactangle,
	UIReactangle,
	WorkReactangle,
	LittleSquare,
	Square,
	UiImage,
} from "../../Styles/DashBoardStyleComponent";
import Reading from '../../images/reading.png'

export default class componentName extends Component {
	render() {
		return (
			<>
				<DashBoardSection>
					<h2>Reading Room</h2>
					<hr />
					<div style={{ display: "flex" }}>
						<Reactangle>
							<LittleSquare></LittleSquare>
						</Reactangle>
						<Reactangle>
							<LittleSquare></LittleSquare>
						</Reactangle>
						<Reactangle>
							<LittleSquare></LittleSquare>
						</Reactangle>
						<Reactangle>
							<LittleSquare></LittleSquare>
						</Reactangle>
					</div>
					<div style={{ display: "flex" }}>
						<UIReactangle>
							<Square><UiImage src={Reading}/></Square>
						</UIReactangle>
						<WorkReactangle></WorkReactangle>
					</div>
				</DashBoardSection>
			</>
		);
	}
}
