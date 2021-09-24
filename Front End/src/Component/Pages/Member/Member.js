import React from "react";
import {
	TitleSection,
	Title,
	Description,
	TableSection,
} from "../../../Styles/CommonStyle";

function Member() {
	return (
		<>
			<TitleSection>
				<Title>MEMBER SECTION</Title>
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
					</div>
				</form>

				<table class="table">
					<thead>
						<tr>
							<th scope="col">#</th>
							<th scope="col">First</th>
							<th scope="col">Last</th>
							<th scope="col">Handle</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th scope="row">1</th>
							<td>Mark</td>
							<td>Otto</td>
							<td>@mdo</td>
						</tr>
						<tr>
							<th scope="row">2</th>
							<td>Jacob</td>
							<td>Thornton</td>
							<td>@fat</td>
						</tr>
						<tr>
							<th scope="row">3</th>
							<td>Larry</td>
							<td>the Bird</td>
							<td>@twitter</td>
						</tr>
					</tbody>
				</table>
			</TableSection>
		</>
	);
}

export default Member;
