import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/authActions";

const Modal = ({props, history, show}) => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)
    const { loading, error, userInfo } = userLogin

    if(!show) return null
    // const redirect = location.search ? location.search.split('=')[1]: '/'
    
    
    const loginButton = (e) => {
        e.preventDefault()
        dispatch(login(username, password))
        // document.getElementById("modal-03").classList.remove("show");
    }
    return (
        <div className={`modal fade ${show ? 'show': ''}`}>
            <div className="modal-dialog modal-dialog-centered modal-sm">
                <div className="modal-content text-center">
                    <div className="modal-body">
                        <button
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                        <h3 className="mb-4">Login to Sandbox</h3>
                        <form className="text-start mb-3" onSubmit={loginButton}>
                            <div className="form-floating mb-4">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                                <label htmlFor="loginEmail">Username</label>
                            </div>
                            <div className="form-floating mb-4">
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <label htmlFor="loginPassword">Password</label>
                            </div>
                            <button className="btn btn-primary rounded-pill btn-login w-100 mb-2">
                                Log In
                            </button>
                        </form>

                        <p className="mb-1">
                            <a href="/" className="hover">
                                Forgot Password?
                            </a>
                        </p>
                        <p className="mb-0">
                            Don't have an account?{' '}
                            <a href="/" className="hover">
                                Sign up
                            </a>
                        </p>
                        <div className="divider-icon my-4">or</div>
                        <nav className="nav social justify-content-center text-center">
                            <a href="/" className="btn btn-circle btn-sm btn-google">
                                <i className="uil uil-google"></i>
                            </a>
                            <a href="/" className="btn btn-circle btn-sm btn-facebook-f">
                                <i className="uil uil-facebook-f"></i>
                            </a>
                            <a href="/" className="btn btn-circle btn-sm btn-twitter">
                                <i className="uil uil-twitter"></i>
                            </a>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal