import react, { useState } from "react";
import { connect } from "react-redux";
import {
	authenticate,
	authFailure,
	authSuccess,
} from "../../redux/authActions";
import "./loginpage.css";
import { userLogin } from "../../Service/authenticationService";
import LoginImage from "../../images/signin-image.jpg";
import { ErrorMessage } from "../../Styles/LoginComponent";

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
			<section className="sign-in">
				<div className="container">
					<div
						className="sec-container"
						style={{ position: "relative", top: "-20px" }}
					>
						<div className="signin-content">
							<div className="signin-image">
								<figure>
									<img src={LoginImage} alt="sing up image" />
								</figure>
							</div>

							<div className="signin-form">
								<h2 className="form-title">
									<div style={{ position: "relative", marginBottom: "20px" }}>
										<span
											style={{
												color: "#025B9A",
												fontWeight: "bold",
												fontFamily: "sans-serif",
											}}
										>
											Reading
										</span>
										<span
											style={{
												color: "#216CC8",
												fontWeight: "bold",
												fontFamily: "sans-serif",
											}}
										>
											Room
										</span>
									</div>
									<p
										style={{
											color: "#5F6D8C",
											fontFamily: "sans-serif",
											width: "500px",
											marginBottom: "40px",
										}}
									>
										Lorem, ipsum dolor sit amet consectetur adipisicing elit.
										Impedit consectetur nihil blanditiis nulla qui, similique
									</p>
									<span style={{ fontSize: "1.5rem", paddingBottom: "30px" }}>
										Sing In
									</span>
								</h2>
								{error && (
									<ErrorMessage>
										{error}
										Incorrect username or password !!
									</ErrorMessage>
								)}
								<form
									onSubmit={handleSubmit}
									noValidate={false}
									className="register-form"
									id="login-form"
								>
									<div className="form-group">
										<label for="your_name">
											<i className="zmdi zmdi-account material-icons-name"></i>
										</label>
										<input
											id="username"
											type="text"
											minLength={5}
											value={values.userName}
											onChange={handleChange}
											name="userName"
											placeholder="Username"
										/>
									</div>
									<div className="form-group">
										<label for="your_pass">
											<i className="zmdi zmdi-lock"></i>
										</label>
										<input
											id="password"
											type="password"
											minLength={8}
											value={values.password}
											onChange={handleChange}
											name="password"
											placeholder="Password"
										/>
									</div>
									<div className="form-group">
										<input
											type="checkbox"
											name="remember-me"
											id="remember-me"
											className="agree-term"
										/>
										<label for="remember-me" className="label-agree-term">
											<span>
												<span></span>
											</span>
											Remember me
										</label>
									</div>
									<div className="form-group form-button">
										<input
											type="submit"
											name="signin"
											id="signin"
											class="form-submit"
											value="Log in"
										/>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</section>
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
