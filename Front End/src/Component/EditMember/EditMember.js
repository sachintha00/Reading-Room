import React, { Component } from "react";
import { Modal, Button, Row, Col, Form } from "react-bootstrap";

export default class componentName extends Component {
	handleSubmit(event) {
		event.preventDefault();

		fetch("http://localhost:8081/member", {
			method: "PUT",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				memberName: event.target.memberName.value,
				memberNic: event.target.memberNic.value,
				memberAddress: event.target.memberAddress.value,
				memberMobile: event.target.memberMobile.value,
				memberGmail: event.target.memberGmail.value,
			}),
		})
			.then((res) => res.json())
			.then(
				(result) => {
					alert("Success");
				},
				(error) => {
					alert("kelawila");
				}
			);
	}
	render() {
		return <div> textInComponent </div>;
	}
}
