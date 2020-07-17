export class AuthService {

    static authorize(username, password) {
        const user = (username !== undefined) ? username : '';
        const pass = (password !== undefined) ? password : '';
        return fetch('http://localhost:8081/v1/api/auth', {
            method: 'POST',
            body: JSON.stringify({username: user, password: pass}),
            headers:{
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Authorization failed');
                }
            });

    }

    static logout() {
        return fetch('http://localhost:8081/v1/api/auth', {
            method: 'DELETE',
            credentials: 'include'
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Logout failed');
                }
            });

    }
}