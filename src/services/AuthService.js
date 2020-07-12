export class AuthService {
    static authorize = (username, password) => {
        const user = (username !== undefined) ? username : '';
        const pass = (password !== undefined) ? password : '';
        fetch('http://localhost:8081/v1/api/auth/persist', {
            method: 'POST',
            body: JSON.stringify({username: user, password: pass}),
            headers:{
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        }).then(res => {
            return true;
        })
          .catch(error => {
              console.error('Error:', error);
              return false;
          })
    };
}