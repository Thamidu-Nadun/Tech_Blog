const API_URL = import.meta.env.VITE_API_URL;
const login = async (data) => {
    const payload = {
        name: data.name,
        email: data.email,
        password: data.password,
    }
    let res = await fetch(`${API_URL}auth/login`, {
        method: 'POST',
        credentials: 'include',
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

const me = async () => {
    let res = await fetch(`${API_URL}auth/me`, {
        method: 'GET',
        credentials: 'include',
    });
    if (res.status === 401) {
        return null;
    }
    return res.json();
}

export { login, register, me };
