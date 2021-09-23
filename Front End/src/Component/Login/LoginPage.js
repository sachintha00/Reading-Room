import react, { useState } from "react";
import { connect } from "react-redux";
import {
	authenticate,
	authFailure,
	authSuccess,
} from "../../redux/authActions";
import "./loginpage.css";
import { userLogin } from "../../Service/authenticationService";
import {
	Input,
	Login,
	LoginForm,
	LoginButton,
	Logo,
	Description,
	CreateAccountBox,
	NormalText,
	ErrorMessage,
} from "../../Styles/LoginComponent";
import { HR } from "../../Styles/GlobalComponent";
import CopyRight from "../CopyRight/CopyRight";
// import { Alert, Spinner } from "react-bootstrap";

const LoginPage = ({ loading, error, ...props }) => {
	const [values, setValues] = useState({
		userName: "",
		password: "",
	});

	const handleSubmit = (evt) => {
		evt.preventDefault();
		props.authenticate();

		userLogin(values)
			.then((response) => {
				console.log("response", response);
				if (response.status === 200) {
					props.setUser(response.data);
					props.history.push("/dashboard");
				} else {
					props.loginFailure("Something Wrong!Please Try Again");
				}
			})
			.catch((err) => {
				if (err && err.response) {
					switch (err.response.status) {
						case 401:
							console.log("401 status");
							props.loginFailure("Authentication Failed.Bad Credentials");
							break;
						default:
							props.loginFailure("Something Wrong!Please Try Again");
					}
				} else {
					props.loginFailure("Something Wrong!Please Try Again");
				}
			});
		//console.log("Loading again",loading);
	};

	const handleChange = (e) => {
		e.persist();
		setValues((values) => ({
			...values,
			[e.target.name]: e.target.value,
		}));
	};

	console.log("Loading ", loading);

	return (
		<>
			<Login>
				<Logo>zell master</Logo>
				<Description>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
					laborum dolorum explicabo id animi ex vero?
				</Description>
				<CreateAccountBox>
					<NormalText>Sing in to Zell Master or</NormalText>
				</CreateAccountBox>
				<LoginForm onSubmit={handleSubmit} noValidate={false}>
					{error && (
						<ErrorMessage>
							{/* {error} */}
							Incorrect username or password !!
						</ErrorMessage>
					)}

					<Input
						id="username"
						type="text"
						minLength={5}
						value={values.userName}
						onChange={handleChange}
						name="userName"
						placeholder="Username"
					/>
					<Input
						id="password"
						type="password"
						minLength={8}
						value={values.password}
						onChange={handleChange}
						name="password"
						placeholder="Password"
					/>

					<LoginButton type="submit" className="">
						Login
					</LoginButton>
				</LoginForm>
			</Login>
			<div style={{ position: "fixed", bottom: "10px", width: "100%" }}>
				<HR />
				<CopyRight />
			</div>
		</>
	);
};

const mapStateToProps = ({ auth }) => {
	console.log("state ", auth);
	return {
		loading: auth.loading,
		error: auth.error,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		authenticate: () => dispatch(authenticate()),
		setUser: (data) => dispatch(authSuccess(data)),
		loginFailure: (message) => dispatch(authFailure(message)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
