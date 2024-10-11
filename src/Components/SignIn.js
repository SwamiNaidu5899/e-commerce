import React from 'react';

const SignIn = () => {
    return (
        <div className="login-container">
            <div className="login-image">
                <img src="https://t3.ftcdn.net/jpg/06/32/90/44/360_F_632904407_iPLi90WdjZ0oKAeRiL98gEIeHIUtzWae.jpg" alt="Login" />
            </div>
            <div className="login-form">
                <h2>Login</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" placeholder="Enter your email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" placeholder="Enter your password" required />
                    </div>
                    <button type="submit" className="btn-login">Login</button>
                </form>
            </div>
        </div>
    );
};

export default SignIn;
