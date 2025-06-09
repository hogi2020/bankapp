import axios from "axios";
import type { RegisterForm } from "../types/userTypes.ts";

export const registerUser = async (form: RegisterForm) => {
    axios.post('/api/user/register', {
        name: form.name,
        email: form.email,
        password: form.password,
    })
    .then(response => console.log(response.data))
    .catch(error => console.log(error));
}