import React, { Component } from "react";
import {
	TitleSection,
	Title,
	Description,
	TableSection,
} from "../../../Styles/CommonStyle";
import { Button, ButtonToolbar } from "react-bootstrap";
import AddSupplier from "../../AddSupplier/AddSupplier";
import EditSupplier from "../../EditSupplier/EditSupplier";

export default class componentName extends Component {
	constructor(props) {
		super(props);
		this.state = {
			supp: [],
			addSupplierShow: false,
			updatesupperShow: false,
			searchSupplier: "",
		};
	}

	componentDidMount() {
		this.refreshList();
	}
	componentDidUpdate() {
		this.refreshList();
	}

	refreshList() {
		fetch("http://localhost:8082/suppler-service/suppliers")
			.then((response) => response.json())
			.then((data) => {
				this.setState({ supp: data });
			});
	}

	deleteSuppler(suppId) {
		if (window.confirm("are you shure")) {
			fetch(`http://localhost:8082/suppler-service/supplier/${suppId}`, {
				method: "DELETE",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
				},
			});
		}
	}
	render() {
		const { supp, supplierId, name, nic, mobileNumber, description } =
			this.state;
		const searchItem = this.state.searchSupplier;
		let addsupperClose = () => this.setState({ addsupperShow: false });
		let updatesupperClose = () => this.setState({ updatesupperShow: false });
		return (
			<>
				<TitleSection>
					<Title>SUPPLIER SECTION</Title>
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
								<input
									type="text"
									class="form-control"
									placeholder="Search"
									onChange={(e) =>
										this.setState({ searchSupplier: e.target.value })
									}
								/>
							</div>
							<div class="col-2">
								<ButtonToolbar>
									<Button
										onClick={() => this.setState({ addsupperShow: true })}
									>
										Add Supplier
									</Button>
									<AddSupplier
										show={this.state.addsupperShow}
										onHide={addsupperClose}
									/>
								</ButtonToolbar>
							</div>
						</div>
					</form>

					<div style={{ height: "400px", width: "1050px", overflowX: "auto" }}>
						<table class="table">
							<thead>
								<tr>
									<th scope="col">Supplier ID</th>
									<th scope="col">Name</th>
									<th scope="col">NIC</th>
									<th scope="col">Mobile Number</th>
									<th scope="col">Description</th>
									<th scope="col">Options</th>
								</tr>
							</thead>
							<tbody>
								{supp
									.filter((supp) => {
										if (searchItem === "") {
											return supp;
										} else if (
											supp.name.toLowerCase().includes(searchItem.toLowerCase())
										) {
											return supp;
										}
									})
									.map((supp) => (
										<tr>
											<td>{supp.supplierId}</td>
											<td>{supp.name}</td>
											<td>{supp.nic}</td>
											<td>{supp.mobileNumber}</td>
											<td>{supp.description}</td>
											<td>
												<ButtonToolbar>
													<Button
														className="mr-2"
														variant="info"
														onClick={() =>
															this.setState({
																updateSupplierShow: true,
																supplierId: supp.supplierId,
																name: supp.name,
																nic: supp.nic,
																mobileNumber: supp.mobileNumber,
																description: supp.description,
															})
														}
													>
														Edit
													</Button>
													<Button
														className="mr-2"
														variant="danger"
														onClick={() => this.deleteSuppler(supp.supplierId)}
													>
														Delete
													</Button>
													<EditSupplier
														show={this.state.updatesupperShow}
														onHide={updatesupperClose}
														supplierId={supplierId}
														name={name}
														nic={nic}
														mobileNumber={mobileNumber}
														description={description}
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
