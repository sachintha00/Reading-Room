import React, { Component } from "react";
import {
	DashBoardSection,
	Reactangle,
} from "../../Styles/DashBoardStyleComponent";

export default class componentName extends Component {
	render() {
		return (
			<>
				<DashBoardSection>
					<h2>Pro Sidebar</h2>
					<hr />
					<div style={{ display: "flex" }}>
						<Reactangle></Reactangle>
						<Reactangle></Reactangle>
						<Reactangle></Reactangle>
						<Reactangle></Reactangle>
					</div>
				</DashBoardSection>
			</>
		);
	}
}
