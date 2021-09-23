import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
// import { useDispatch } from "react-redux";
import styled from "styled-components";
import { fetchUserData } from "../../Service/authenticationService";
import { Change } from "../../Styles/ChangingSecStyle";

const MainWrapper = styled.div`
	padding-top: 40px;
`;

const ChangeSection = (props) => {
	// const dispatch = useDispatch();
	// const [loading, setLoading] = useState(false);
	// const [data, setData] = useState({});

	// React.useEffect(() => {
	// 	fetchUserData()
	// 		.then((response) => {
	// 			setData(response.data);
	// 		})
	// 		.catch((e) => {
	// 			localStorage.clear();
	// 			props.history.push("/");
	// 		});
	// }, []);

	// const logOut = () => {
	// 	localStorage.clear();
	// 	props.history.push("/");
	// };

	return (
		<>
			<Change>
				<div>sachintha</div>
			</Change>
		</>
	);
};

export default ChangeSection;
