import axios from "axios";

const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit",
    SIGNUP_URL = URL + "/auth/sign-up",
    LOGIN_URL = URL + "/auth/login";

export function register(newUser) {
    const promise = axios.post(SIGNUP_URL, newUser);
    return promise;
}

export function login(userLogin) {
    const promise = axios.post(LOGIN_URL, userLogin);
    return promise;
}


// piratinhque.estica@driven.com.br
// carne