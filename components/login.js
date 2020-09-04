import { useState } from 'react';
import { URL_LINK} from '../globals/index';

const login = (props) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    const handleSubmit = async () => {
        try {
            let response = await fetch(`${URL_LINK}/auth/login`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify({
                    username: username,
                    password: password
                })
            });
            let data = await response.json();
            if(data.Message === 'UDNE'){
                setError(true);
            }else if(data.Message === 'GOOD'){
                props.setLoggin();
            }
        } catch (err) {
            console.error(err);
        }
    }
    return (
        <div className="login">
            {error ? <div className="error-block">Credentials Dont Match!</div> : null}
            <label htmlFor="uname"><b>Username</b></label>
            <input type="text" placeholder="Enter Username" name="uname" required onChange={e => { setUsername(e.target.value) }} />

            <label htmlFor="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" required onChange={e => { setPassword(e.target.value) }} />

            <button type="submit" onClick={handleSubmit}>Login</button>
        </div>
    )
}

export default login