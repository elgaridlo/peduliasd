import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { deleteEduProgramAction, eduListProgramAction } from '../../actions/eduProgramAction'
import Loader from '../../utils/Components/Loader'
import Message from '../../utils/Components/Message'

const EducationProgramScreen = () => {

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
                                <div style={{ paddingTop: '30px' }}>
                                    <Loader />
                                </div>
                            ) : error ? (
                                <Message variant='danger'>{error}</Message>
                            ) :
                                listEduProgram && listEduProgram.map((item) => (
                                    <div key={item._id} className="project item col-md-6 col-xl-4 product">
                                        <figure className="lift rounded mb-6">
                                            {userInfo ?
                                                userInfo.user.role === 'admin' ? (
                                                    <LinkContainer to={`/program-edukasi/${item._id}`}>
                                                        <img src={item.image} alt="" />
                                                    </LinkContainer>
                                                ) : (
                                                    <img src={item.image} alt="" />
                                                ) : (
                                                    <img src={item.image} alt="" />
                                                )}
                                            {userInfo && userInfo.user.role === 'admin' && (
                                                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                                                    <button className="btn btn-outline-primary ">Edit {' '}</button> {' '}
                                                    <button className="btn btn-outline-danger" onClick={() => deleteHandler(item._id)}>Delete</button>
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

            <section className="wrapper bg-light">
                <div className="container py-14 py-md-16">
                    <div className="row gx-lg-8 gx-xl-12 gy-10 gy-lg-0">
                        <div className="col-lg-4 mt-lg-2">
                            <h2 className="display-4 mb-3">Our Journal</h2>
                            <p className="lead fs-lg mb-6 pe-xxl-5">Here are the latest news from our blog that got the most attention.</p>
                            <a href="#" className="btn btn-soft-primary rounded-pill">View All News</a>
                        </div>
                        <div className="col-lg-8">
                            <div className="carousel owl-carousel blog grid-view" data-margin="30" data-dots="true" data-autoplay="false" data-autoplay-timeout="5000" data-responsive='{"0":{"items": "1"}, "768":{"items": "2"}, "992":{"items": "2"}, "1200":{"items": "2"}}'>
                                <div className="item">
                                    <article>
                                        <figure className="overlay overlay1 hover-scale rounded mb-5"><a href="#"> <img src="./assets/img/photos/b4.jpg" alt="" /></a>
                                            <figcaption>
                                                <h5 className="from-top mb-0">Read More</h5>
                                            </figcaption>
                                        </figure>
                                        <div className="post-header">
                                            <div className="post-category text-line">
                                                <a href="#" className="hover" rel="category">Coding</a>
                                            </div>
                                            <h2 className="post-title h3 mt-1 mb-3"><a className="link-dark" href="./blog-post.html">Ligula tristique quis risus</a></h2>
                                        </div>
                                        <div className="post-footer">
                                            <ul className="post-meta mb-0">
                                                <li className="post-date"><i className="uil uil-calendar-alt"></i><span>14 Apr 2021</span></li>
                                                <li className="post-comments"><a href="#"><i className="uil uil-comment"></i>4</a></li>
                                            </ul>
                                        </div>
                                    </article>
                                </div>
                                <div className="item">
                                    <article>
                                        <figure className="overlay overlay1 hover-scale rounded mb-5"><a href="#"> <img src="./assets/img/photos/b5.jpg" alt="" /></a>
                                            <figcaption>
                                                <h5 className="from-top mb-0">Read More</h5>
                                            </figcaption>
                                        </figure>
                                        <div className="post-header">
                                            <div className="post-category text-line">
                                                <a href="#" className="hover" rel="category">Workspace</a>
                                            </div>
                                            <h2 className="post-title h3 mt-1 mb-3"><a className="link-dark" href="./blog-post.html">Nullam id dolor elit id nibh</a></h2>
                                        </div>
                                        <div className="post-footer">
                                            <ul className="post-meta mb-0">
                                                <li className="post-date"><i className="uil uil-calendar-alt"></i><span>29 Mar 2021</span></li>
                                                <li className="post-comments"><a href="#"><i className="uil uil-comment"></i>3</a></li>
                                            </ul>
                                        </div>
                                    </article>
                                </div>
                                <div className="item">
                                    <article>
                                        <figure className="overlay overlay1 hover-scale rounded mb-5"><a href="#"> <img src="./assets/img/photos/b6.jpg" alt="" /></a>
                                            <figcaption>
                                                <h5 className="from-top mb-0">Read More</h5>
                                            </figcaption>
                                        </figure>
                                        <div className="post-header">
                                            <div className="post-category text-line">
                                                <a href="#" className="hover" rel="category">Meeting</a>
                                            </div>
                                            <h2 className="post-title h3 mt-1 mb-3"><a className="link-dark" href="./blog-post.html">Ultricies fusce porta elit</a></h2>
                                        </div>
                                        <div className="post-footer">
                                            <ul className="post-meta mb-0">
                                                <li className="post-date"><i className="uil uil-calendar-alt"></i><span>26 Feb 2021</span></li>
                                                <li className="post-comments"><a href="#"><i className="uil uil-comment"></i>6</a></li>
                                            </ul>
                                        </div>
                                    </article>
                                </div>
                                <div className="item">
                                    <article>
                                        <figure className="overlay overlay1 hover-scale rounded mb-5"><a href="#"> <img src="./assets/img/photos/b7.jpg" alt="" /></a>
                                            <figcaption>
                                                <h5 className="from-top mb-0">Read More</h5>
                                            </figcaption>
                                        </figure>
                                        <div className="post-header">
                                            <div className="post-category text-line">
                                                <a href="#" className="hover" rel="category">Business Tips</a>
                                            </div>
                                            <h2 className="post-title h3 mt-1 mb-3"><a className="link-dark" href="./blog-post.html">Morbi leo risus porta eget</a></h2>
                                        </div>
                                        <div className="post-footer">
                                            <ul className="post-meta mb-0">
                                                <li className="post-date"><i className="uil uil-calendar-alt"></i><span>7 Jan 2021</span></li>
                                                <li className="post-comments"><a href="#"><i className="uil uil-comment"></i>2</a></li>
                                            </ul>
                                        </div>
                                    </article>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>

    )
}

export default EducationProgramScreen
