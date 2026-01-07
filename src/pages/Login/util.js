const API_URL = import.meta.env.VITE_API_URL;
const login = async (data) => {
    const payload = {
        name: data.name,
        email: data.email,
        password: data.password,
    }
    let res = await fetch(`${API_URL}auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    });
    return res.json();
}

const register = async (data) => {
    const payload = {
        name: data.name,
        email: data.email,
        password: data.password,
    }
    let res = await fetch(`${API_URL}auth/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    });
    return res.json();
}

export { login, register };
