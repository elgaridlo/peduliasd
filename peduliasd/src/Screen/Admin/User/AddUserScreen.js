import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addUser, removeUserNewData } from '../../../actions/userAction'

const AddUserScreen = ({history}) => {
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [password, setPassword] = useState('')

    const addNewUser = useSelector((state) => state.addNewUser)
    const { loading, error , success} = addNewUser

    const dispatch = useDispatch()

    useEffect(() => {
        if(success && success.status === 'Success') {
            dispatch(removeUserNewData())
            history.push('/user-list')
        }
        setPassword(`${(firstname+lastname).trim().slice(0,4)}1234`)
    },[firstname, lastname, success])
    
    const onSubmitHandler = (e) => {
        e.preventDefault()

        const data = {
            email,
            password,
            passwordConfirm: password,
            userdetail: {
                fullname: `${firstname} ${lastname}`,
                phone,
                address
            }
        }
        dispatch(addUser(data))
    }

    return (
        <>
            <section className="wrapper bg-light">
                <div className="container py-14 py-md-16">
                    <div className="row">
                        <div className="col-xl-10 mx-auto">
                            <div className="row gy-10 gx-lg-8 gx-xl-12">
                                <div className="col-lg-12">
                                    <form className="contact-form" onSubmit={onSubmitHandler}>
                                        <div className="messages"></div>
                                        <div className="row gx-4">
                                            <div className="col-md-6">
                                                <div className="form-floating mb-4">
                                                    <input id="form_name" 
                                                        type="text" 
                                                        name="name" 
                                                        className="form-control" 
                                                        placeholder="Jane" 
                                                        required 
                                                        value={firstname}
                                                        onChange={(e) => setFirstname(e.target.value)}/>
                                                    <label htmlFor="form_name">First Name *</label>
                                                    <div className="valid-feedback">
                                                        Looks good!
                                                    </div>
                                                    <div className="invalid-feedback">
                                                        Please enter your first name.
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="form-floating mb-4">
                                                    <input id="form_lastname" 
                                                        type="text" 
                                                        name="surname" 
                                                        className="form-control" 
                                                        placeholder="Doe" 
                                                        required 
                                                        value={lastname}
                                                        onChange={(e) => setLastname(e.target.value)}/>
                                                    <label htmlFor="form_lastname">Last Name *</label>
                                                    <div className="valid-feedback">
                                                        Looks good!
                                                    </div>
                                                    <div className="invalid-feedback">
                                                        Please enter your last name.
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="form-floating mb-4">
                                                    <input id="form_email" 
                                                        type="email" 
                                                        name="email" 
                                                        className="form-control"                                                     
                                                        required 
                                                        value={email}
                                                        onChange={(e) => setEmail(e.target.value)}/>
                                                    <label htmlFor="form_email">Email *</label>
                                                    <div className="valid-feedback">
                                                        Looks good!
                                                    </div>
                                                    <div className="invalid-feedback">
                                                        Please provide a valid email address.
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="form-floating mb-4">
                                                    <input id="form_phone" 
                                                        type="number" 
                                                        name="phone" 
                                                        className="form-control" 
                                                        placeholder="082111xxxxxx" 
                                                        required 
                                                        value={phone}
                                                        onChange={(e) => setPhone(e.target.value)}/>
                                                    <label htmlFor="form_phone">Phone Number *</label>
                                                    <div className="valid-feedback">
                                                        Looks good!
                                                    </div>
                                                    <div className="invalid-feedback">
                                                        Please provide a Phone Number.
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-12">
                                                <div className="form-floating mb-4">
                                                    <textarea id="form_message" 
                                                        name="message" 
                                                        className="form-control" 
                                                        placeholder="Address" 
                                                        style={{height: "150px"}} 
                                                        required
                                                        value={address}
                                                        onChange={(e) => setAddress(e.target.value)}></textarea>
                                                    <label htmlFor="form_message">Address *</label>
                                                    <div className="valid-feedback">
                                                        Looks good!
                                                    </div>
                                                    <div className="invalid-feedback">
                                                        Please enter your messsage.
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-12">
                                                <div className="form-check mb-4">
                                                    <label className="form-check-label" htmlFor="invalidCheck">
                                                        The password will be generated automaticaly to be {password}.
                                                    </label>
                                                </div>
                                            </div>

                                            <div className="col-12">
                                                <input type="submit" className="btn btn-primary rounded-pill btn-send mb-3" value="Send message" />
                                                <p className="text-muted"><strong>*</strong> These fields are required.</p>
                                            </div>

                                        </div>

                                    </form>

                                </div>
                            </div>

                        </div>

                    </div>

                </div>

            </section>

        </>
    )
}

export default AddUserScreen
