import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updatePasswordByIdAction } from '../../../actions/authActions'
import { updateUserAction, userByIdAction } from '../../../actions/userAction'
import AlertStyle from '../../../utils/Components/Alert'
import { AlertEnum } from '../../../utils/Enums/AlertEnum'
import Loader from '../../../utils/Components/Loader'
import KidsForm from '../../../component/form/KidsForm'

const EditUserScreen = ({ history, match }) => {
    const id = match.params.id
    const [fullname, setFullname] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [currentPassword, setCurrentPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [objCheckBox, setObjCheckBox] = useState([])

    const [numberTab, setNumberTab] = useState('1')

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo} = userLogin

    const userById = useSelector((state) => state.userById)
    const { error, data, auth } = userById

    // const authById = useSelector((state) => state.authById)
    // const { loading: authLoading, error: authError } = authById

    const updatePassword = useSelector((state) => state.updatePassword)
    const { loading: updateLoading, error: uppdateError, update } = updatePassword

    const updateUser = useSelector((state) => state.updateUser)
    const { loading: updateUserLoading, error: updateUserError, data: updateData } = updateUser

    const dispatch = useDispatch()

    useEffect(() => {
        if (userInfo) {
            dispatch(userByIdAction(id))
        } else {
            history.push('/login')
        }
    }, [id])

    useEffect(() => {
        if (data && auth) {
            setEmail(auth.email)
            setFullname(data.fullname)
            setPhone(data.phone)
            setAddress(data.address)
            setObjCheckBox(data.programEducation)
        }

    }, [data])

    const onSubmitHandler = (e) => {
        e.preventDefault()
        const dataForm = {
            fullname: fullname.toLowerCase(),
            phone,
            address
        }
        dispatch(updateUserAction(id, dataForm))
    }

    const updatePasswordHandler = () => {
        const body = {
            password: currentPassword,
            updatePassword: newPassword,
            passwordConfirm: confirmPassword
        }

        dispatch(updatePasswordByIdAction(id, body))
    }

    const showPasswordHandler = () => {
        setShowPassword(!showPassword)
    }

    const changeCheckbox = async (e) => {
        const id = e.id

        // This is for updating checkbox 
        setObjCheckBox(objCheckBox.map((item) => {
            if (id === item.id) {
                item.join = !item.join
            }
            return item
        }))
    }

    const updateEduProgramHandler = () => {
        dispatch(updateUserAction(id, { programEducation: objCheckBox }))
    }

    const onKidFormHandler = (data) => {
        dispatch(updateUserAction(id, { kid: data }))
    }

    return (
        <>
            <section className="wrapper bg-light">
                <div className="container py-14 py-md-16">
                    {error && (
                        <AlertStyle variant='danger' icons={AlertEnum.DANGER} show={true}>{error}</AlertStyle>
                    )}
                    <div className="row">
                        <ul className="nav nav-tabs nav-pills">
                            <li className="nav-item">
                                <button className={`nav-link ${ numberTab === '1' ? 'active': ''}`} onClick={() => setNumberTab('1')}>
                                    <i className="uil uil-phone-volume pe-1"></i>
                                    <span>Data Diri</span>
                                </button>
                            </li>
                            <li className="nav-item">
                                <button className={`nav-link ${ numberTab === '2' ? 'active': ''}`} onClick={() => setNumberTab('2')}>
                                    <i className="uil uil-phone-volume pe-1"></i>
                                    <span>Data Anak</span>
                                </button>
                            </li>
                            <li className="nav-item">
                                <button className={`nav-link ${ numberTab === '3' ? 'active': ''}`}  onClick={() => setNumberTab('3')}>
                                    <i className="uil uil-shield-exclamation pe-1"></i>
                                    <span>Password</span>
                                </button>
                            </li>
                            <li className="nav-item">
                                <button className={`nav-link ${ numberTab === '4' ? 'active': ''}`}  onClick={() => setNumberTab('4')}>
                                    <i className="uil uil-laptop-cloud pe-1"></i>
                                    <span>Edukasi Program</span>
                                </button>
                            </li>
                        </ul>

                        <div className="tab-content">
                            <div className={`tab-pane fade ${numberTab === '1' ? 'show active': ''}`} id="tab1">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="col-xl-10 mx-auto">
                                            <div className="row gy-10 gx-lg-8 gx-xl-12">
                                                <div className="col-lg-12">
                                                    {updateUserError && (
                                                        <AlertStyle variant='danger' icons={AlertEnum.DANGER} show={true}>{updateUserError}</AlertStyle>
                                                    )}
                                                    {updateData && (
                                                        <AlertStyle variant='success' icons={AlertEnum.SUCCESS} show={true}>Berhasil diubah!</AlertStyle>
                                                    )}
                                                    <form className="contact-form" onSubmit={onSubmitHandler}>
                                                        <div className="messages"></div>
                                                        <h2 className="fs-15 text-uppercase text-line text-primary mb-3">Data diri</h2>
                                                        <div className="row gx-4">
                                                            <div className="col-md-12">
                                                                <div className="form-floating mb-4">
                                                                    <input id="form_name"
                                                                        type="text"
                                                                        name="name"
                                                                        className="form-control"
                                                                        placeholder="Jane"
                                                                        required
                                                                        value={fullname}
                                                                        onChange={(e) => setFullname(e.target.value)} />
                                                                    <label htmlFor="form_name">Fullname *</label>
                                                                </div>
                                                            </div>

                                                            {/* We dont need to change the email, because we dont have validation to the email */}
                                                            <div className="col-md-6">
                                                                <div className="form-floating mb-4">
                                                                    <input id="form_email"
                                                                        type="email"
                                                                        name="email"
                                                                        className="form-control"
                                                                        required
                                                                        value={email}
                                                                        readOnly
                                                                        onChange={(e) => setEmail(e.target.value)} />
                                                                    <label htmlFor="form_email">Email *</label>
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
                                                                        onChange={(e) => setPhone(e.target.value)} />
                                                                    <label htmlFor="form_phone">Phone Number *</label>
                                                                </div>
                                                            </div>

                                                            <div className="col-12">
                                                                <div className="form-floating mb-4">
                                                                    <textarea id="form_message"
                                                                        name="message"
                                                                        className="form-control"
                                                                        placeholder="Address"
                                                                        style={{ height: "150px" }}
                                                                        required
                                                                        value={address}
                                                                        onChange={(e) => setAddress(e.target.value)}></textarea>
                                                                    <label htmlFor="form_message">Address *</label>
                                                                </div>
                                                            </div>

                                                            <div className="col-12">
                                                                {updateUserLoading ? (<Loader />) : (
                                                                    <input type="submit" className="btn btn-primary btn-send mb-3" value="Ubah Data" />
                                                                )}
                                                                <p className="text-muted"><strong>*</strong> These fields are required.</p>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`tab-pane fade ${numberTab === '2' ? 'show active': ''}`} id="tab2">
                                {data && (
                                    <KidsForm _name={data.kid.name}
                                        _birthDate={data.kid.birthDate}
                                        _condition={data.kid.condition}
                                        _description={data.kid.description}
                                        _firstTherapy={data.kid.firstTherapy}
                                        _level={data.kid.level}
                                        _therapyPlace={data.kid.therapyPlace}
                                        onKidFormHandler={onKidFormHandler}
                                    />
                                )}
                            </div>
                            <div className={`tab-pane fade ${numberTab === '3' ? 'show active': ''}`} id="tab3">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="col-xl-10 mx-auto">
                                            <div className="row gy-10 gx-lg-8 gx-xl-12">
                                                <div className="col-lg-12">
                                                    {uppdateError && (
                                                        <AlertStyle variant='danger' icons={AlertEnum.DANGER} show={true}>{uppdateError}</AlertStyle>
                                                    )}
                                                    {update && update.status && (
                                                        <AlertStyle variant='success' icons={AlertEnum.SUCCESS} show={true}>Password berhasil diubah!</AlertStyle>
                                                    )}
                                                    <form className="contact-form">
                                                        <div className="messages"></div>
                                                        <h2 className="fs-15 text-uppercase text-line text-primary mb-3">Ubah Password</h2>
                                                        <div className="row gx-4">
                                                            <div className="col-md-12">
                                                                <div className="form-floating mb-4">
                                                                    <input id="currentPassword"
                                                                        type={showPassword ? "text" : "password"}
                                                                        name="currentPassword"
                                                                        className="form-control"
                                                                        placeholder="Jane"
                                                                        required
                                                                        value={currentPassword}
                                                                        onChange={(e) => setCurrentPassword(e.target.value)} />
                                                                    <label htmlFor="currentPassword">Password Sekarang *</label>
                                                                </div>
                                                            </div>

                                                            <div className="col-md-6">
                                                                <div className="form-floating mb-4">
                                                                    <input id="newPassword"
                                                                        type={showPassword ? "text" : "password"}
                                                                        name="newPassword"
                                                                        className="form-control"
                                                                        required
                                                                        placeholder="Jane"
                                                                        value={newPassword}
                                                                        onChange={(e) => setNewPassword(e.target.value)} />
                                                                    <label htmlFor="newPassword">Password Baru *</label>
                                                                </div>
                                                            </div>

                                                            <div className="col-md-6">
                                                                <div className="form-floating mb-4">
                                                                    <input id="confirmPassword"
                                                                        type={showPassword ? "text" : "password"}
                                                                        name="confirmPassword"
                                                                        className="form-control"
                                                                        required
                                                                        placeholder="Jane"
                                                                        value={confirmPassword}
                                                                        onChange={(e) => setConfirmPassword(e.target.value)} />
                                                                    <label htmlFor="confirmPassword">Konfirmasi Password Baru *</label>
                                                                </div>
                                                            </div>
                                                            <div className="col-12">
                                                                <div className="form-check mb-4">
                                                                    <input className="form-check-input" type="checkbox" value={showPassword} onChange={() => showPasswordHandler()} id="flexCheckDefault"></input>
                                                                    <label className="form-check-label"> Show Password </label>
                                                                </div>
                                                            </div>

                                                            <div className="col-12">
                                                                {updateLoading ? (<Loader />) : (
                                                                    <button type="button" className="btn btn-primary btn-send mb-3" onClick={() => updatePasswordHandler()} > Ubah Password </button>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`tab-pane fade ${numberTab === '4' ? 'show active': ''}`} id="tab4">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="col-xl-10 mx-auto">
                                            <div className="row gy-10 gx-lg-8 gx-xl-12">
                                                <div className="col-lg-12">
                                                    {updateUserError && (
                                                        <AlertStyle variant='danger' icons={AlertEnum.DANGER} show={true}>{updateUserError}</AlertStyle>
                                                    )}
                                                    {updateUser && updateData && (
                                                        <AlertStyle variant='success' icons={AlertEnum.SUCCESS} show={true}>Program Edukasi berhasil diperbarui!</AlertStyle>
                                                    )}
                                                    <form className="contact-form">
                                                        <div className="messages"></div>
                                                        <h2 className="fs-15 text-uppercase text-line text-primary mb-3">Program Edukasi</h2>
                                                        <div className="row gx-4">
                                                            {objCheckBox && objCheckBox.map((item, index) => (
                                                                <div key={index} className="col-12">
                                                                    <div className="form-check mb-4">
                                                                        <input className="form-check-input" id={item.id} type="checkbox" name={item.id} value={item.join} checked={item.join} onChange={(e) => changeCheckbox(e.target)} ></input>
                                                                        <label className="form-check-label"> {item.workshops.description} </label>
                                                                    </div>
                                                                </div>
                                                            ))}

                                                            <div className="col-12">
                                                                {updateUserLoading ? (<Loader />) : (
                                                                    <button type="button" className="btn btn-primary btn-send mb-3" onClick={() => updateEduProgramHandler()} > Simpan </button>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default EditUserScreen
