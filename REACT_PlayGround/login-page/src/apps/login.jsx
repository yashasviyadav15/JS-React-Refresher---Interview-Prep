import { useState } from 'react';

function Login() {
    const [formdata, setformdata] = useState({
        password: '',
        email: ''
    })
    const handlechnage = (e) => {
        console.log("clicked on change", e)
        const { name, value } = e.target
        setformdata({ ...formdata, [name]: value })
    }
    const handleSubmit = (e) => {
        console.log("clicked on submit", formdata)
    }
    return (
        <div
        className='logincont'
        // className="login-container"
        >
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div
                // className='form-group'
                >
                    <label>Email:</label>
                    <input
                        type='email'
                        name='email'
                        value={formdata.email}
                        onChange={handlechnage}
                        required={true}
                    >
                    </input>
                </div>
                <div
                // className='form-group'
                >
                    <label>
                        Password:
                    </label>
                    <input
                        type="password"
                        name="password"
                        value={formdata.password}
                        onChange={handlechnage}
                        required
                    >
                    </input>
                </div>
                <button type="submit">
                    Login
                </button>
            </form>
        </div>
    );
}

export default Login;
