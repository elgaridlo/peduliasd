import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { eduListProgramAction } from '../../actions/eduProgramAction'
import Loader from '../../utils/Components/Loader'
import Message from '../../utils/Components/Message'

const EducationProgramScreen = () => {

    const dispatch = useDispatch()

    const userLogin = useSelector((state) => state.userLogin)
    const {userInfo} = userLogin

    const eduListProgram = useSelector((state) => state.eduListProgram)
    const { loading, error, listEduProgram } = eduListProgram

    useEffect(() => {
        dispatch(eduListProgramAction())
    },[])

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
                        </div>
                    </div>

                    <div className="grid grid-view projects-masonry">
                        <div className="row gx-md-8 gy-10 gy-md-13 isotope">
                            {loading ? (
                                <div style={{paddingTop: '30px'}}>
                                    <Loader/>
                                </div>
                            ) : error ? (
                                <Message variant='danger'>{error}</Message>
                            ): 
                                listEduProgram && listEduProgram.map((item) => (
                                    <div key={item._id} className="project item col-md-6 col-xl-4 product">
                                        <figure className="lift rounded mb-6">
                                                {userInfo ? 
                                                userInfo.user.role === 'admin' ? (
                                                    <LinkContainer to={`/program-edukasi/${item._id}`}>
                                                        <img src={item.image} alt="" />
                                                    </LinkContainer>
                                                ): (
                                                    <img src={item.image} alt="" />
                                                ): (
                                                    <img src={item.image} alt="" />
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
