import React, { useEffect, useState } from 'react'
import { Alert } from 'react-bootstrap'

import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../actions/authActions'
import Loader from '../../utils/Components/Loader'

const LoginScreen = ({ location, history }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { loading, error, userInfo } = userLogin

  // const redirect = location.search ? location.search.split('=')[1]: '/'

  useEffect(() => {
    if (userInfo) {
      history.push('/')
    }
  }, [userInfo])

  const loginButton = (e) => {
    e.preventDefault()
    dispatch(login(email, password))
  }

  return (
    <>
      <section className="wrapper bg-light">
        <div className="container py-14 py-md-16 text-center">
          <div className="row">
            <div className="col-md-9 col-lg-7 col-xl-7 mx-auto text-center">
              <h3 className="mb-4">Login to Sandbox</h3>
              <form className="text-start mb-3" onSubmit={loginButton}>
                <div className="form-floating mb-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                {loading ? (
                  <Loader />
                ) : (
                  <button className="btn btn-primary rounded-pill btn-login w-100 mb-2">
                    Log In
                  </button>)
                }
                {error && (
                  <Alert variant='danger' show={error? true: false} >{`${error}`}</Alert>
                )}

              </form>
              <p className="mb-1"><a href="/" className="hover">Forgot Password?</a></p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default LoginScreen
