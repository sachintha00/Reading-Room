import styled from "styled-components";

export const Login = styled.section`
	// background: yellow;
	display: flex;
	flex-direction: column;
`;
export const Input = styled.input`
	width: 300px;
	border: none;
	border-bottom: 1px solid #707070;
	margin-top: 40px;
	padding: 10px 0;
	:focus {
		border: none;
		outline: none;
		border-bottom: 1px solid #231f20;
	}
`;
export const LoginForm = styled.form`
	margin: 0 auto;
	// background: red;
	display: flex;
	flex-direction: column;
	width: 300px;
`;
export const LoginButton = styled.button`
	width: 300px;
	border: none;
	text-transform: uppercase;
	color: #ffff;
	background: #231f20;
	padding: 15px 0;
	border-radius: 6px;
	margin-top: 50px;
	margin-bottom: 100px;
`;
export const Logo = styled.h1`
	text-transform: uppercase;
	color: #231f20;
	font-weight: bolder;
	text-align: center;
	margin: 70px 0 20px 0;
`;
export const Description = styled.p`
	color: #a7a7a7;
	text-align: center;
	font-style: italic;
	width: 400px;
	margin: 0 auto;
`;
export const CreateAccountBox = styled.div`
	display: flex;
	width: 350px;
	margin: 30px auto 30px auto;
`;
export const NormalText = styled.h6`
	margin-right: 10px;
	margin-top: 5px;
`;
export const Register = styled.a`
	font-weight: bold;
	font-size: 1.2rem;
	color: #231f20;
	cursor: pointer;
	:hover {
		color: #333333;
	}
`;
export const ErrorMessage = styled.div`
	background: #ff5555;
	padding: 15px;
	text-align: center;
	color: #ffff;
`;
