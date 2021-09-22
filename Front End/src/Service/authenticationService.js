import React from "react";
import axios from "axios";

const getToken = () => {
	return localStorage.getItem("USER_KEY");
};

export const userLogin = (authRequest) => {
	return axios({
		method: "POST",
		url: "http://localhost:8081/api/v1/auth/login",
		data: authRequest,
	});
};

export const fetchUserData = (authRequest) => {
	return axios({
		method: "GET",
		url: `${
			process.env.hostUrl || "http://localhost:8081"
		}/api/v1/auth/userinfo`,
		headers: {
			Authorization: "Bearer " + getToken(),
		},
	});
};