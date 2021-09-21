import axios from "axios";

export const userLogin = (authRequest) => {
	return axios({
		method: "POST",
		url: "http://localhost:8083/login",
		data: authRequest,
	});
};
