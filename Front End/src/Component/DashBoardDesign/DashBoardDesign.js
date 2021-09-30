import React, { Component } from "react";
import {
	DashBoardSection,
	Reactangle,
	UIReactangle,
	WorkReactangle,
	LittleSquare,
} from "../../Styles/DashBoardStyleComponent";

export default class componentName extends Component {
	render() {
		return (
			<>
				<DashBoardSection>
					<h2>Pro Sidebar</h2>
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
						<UIReactangle></UIReactangle>
						<WorkReactangle></WorkReactangle>
					</div>
				</DashBoardSection>
			</>
		);
	}
}
