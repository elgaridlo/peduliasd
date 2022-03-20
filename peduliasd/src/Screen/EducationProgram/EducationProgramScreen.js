import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { deleteEduProgramAction, eduListProgramAction } from '../../actions/eduProgramAction'
import Loader from '../../utils/Components/Loader'
import Message from '../../utils/Components/Message'

const EducationProgramScreen = ({ history, match }) => {
    const [showAdmin, setShowAdmin] = useState(false)

    const dispatch = useDispatch()

    const deleteEduProgram = useSelector((state) => state.deleteEduProgram)
    const { success } = deleteEduProgram

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    const eduListProgram = useSelector((state) => state.eduListProgram)
    const { loading, error, listEduProgram } = eduListProgram

    useEffect(() => {
        dispatch(eduListProgramAction())
        console.log('cek')
    }, [dispatch, success])

    const deleteHandler = (id) => {
        // console.log('logggin = ', id)
        dispatch(deleteEduProgramAction(id))
    }

    const adminViewHandler = (check) => {
        setShowAdmin(check)
    }

    const editHandler = (id) => {
        console.log('history = ', match)
        history.push(`${match.path}/${id}`)
    }
    return (
        <>
            <section className="wrapper bg-light">
                <div className="container py-14 py-md-17">
                    <div className="row mb-8 text-center">
                        <div className="col-lg-9 col-xl-8 col-xxl-7 mx-auto">
                            <h2 className="fs-16 text-uppercase text-primary mb-3">
                                Program Edukasi Peduli ASD
                            </h2>
                            <h3 className="display-4">
                                Isi descripsi terserah .. Check out some of our awesome projects with creative ideas and
                                great design.
                            </h3>

                            <div className="shape bg-dot primary rellax w-16 h-18" data-rellax-speed="1" style={{ top: '2rem', right: '-2.4rem' }}></div>
                            <div className="shape rounded-circle bg-line red rellax w-18 h-18 d-none d-lg-block" data-rellax-speed="1" style={{ bottom: '0.5rem', left: '-2.5rem' }}></div>
                            {
                                userInfo && userInfo.user.role === 'admin' && (
                                    <div className="pricing-switcher-wrapper switcher">
                                        {showAdmin ? (
                                            <button className="btn btn-warning" onClick={() => adminViewHandler(!showAdmin)}>Member View</button>
                                        ) : (
                                            <button className="btn btn-primary" onClick={() => adminViewHandler(!showAdmin)}>Admin View</button>
                                        )}
                                    </div>
                                )
                            }
                        </div>
                    </div>

                    <div className="grid grid-view projects-masonry">
                        <div className="row gx-md-8 gy-10 gy-md-13 isotope" ref={element => {
                            if (element) element.style.setProperty('height', 'auto', 'important');
                        }}>
                            {loading ? (
                                <div style={{ paddingTop: '30px' }}>
                                    <Loader />
                                </div>
                            ) : error ? (
                                <Message variant='danger'>{error}</Message>
                            ) :
                                listEduProgram && listEduProgram.map((item) => (
                                    <div key={item._id} className="project item col-md-6 col-xl-4 product">
                                        <figure className="lift rounded mb-6">
                                            <img src={item.image} alt="" />


                                            {userInfo && userInfo.user.role === 'admin' && showAdmin ? (
                                                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                                                    {/* <button className="btn btn-outline-primary" onClick={() => editHandler(item._id)}>Edit {' '}</button> {' '} */}
                                                    <button className="btn btn-outline-danger" onClick={() => deleteHandler(item._id)}>Delete</button>
                                                </div>
                                            ) : (
                                                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                                                    <a href={`https://wa.me/6282242633375?text=Saya%20tertarik%20untuk%20mengikuti%20${item.workshopType.description}`}
                                                        target="_blank" className="btn btn-outline-success">Contact Us</a>
                                                </div>
                                            )}
                                        </figure>
                                        <div className="project-details d-flex justify-content-center flex-column">
                                            <div className="post-header">
                                                <div className="post-category mb-2 text-yellow">
                                                    {item.workshopType.description}
                                                </div>
                                                <h2 className="post-title h3">{item.title}</h2>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}

export default EducationProgramScreen
