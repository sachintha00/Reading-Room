import React, { Component } from "react";
import {
	CopyRightSection,
	Name,
	AllrightReserved,
} from "../../Styles/CopyRightComponent";

export default class componentName extends Component {
	render() {
		return (
			<CopyRightSection>
				<Name>ⓒ 2021 Sachintha madhawa </Name>
				<AllrightReserved> | All Right Reserved</AllrightReserved>
			</CopyRightSection>
		);
	}
}
