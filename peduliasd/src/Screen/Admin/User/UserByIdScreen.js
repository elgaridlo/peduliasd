import React, { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { userByIdAction } from '../../../actions/userAction'
import AlertStyle from '../../../utils/Components/Alert'
import { AlertEnum } from '../../../utils/Enums/AlertEnum'


const UserByIdScreen = ({ location, history, match }) => {

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin


    const userById = useSelector((state) => state.userById)
    const {error, data } = userById

    const dispatch = useDispatch()

    useEffect(() => {
        
        if (!userInfo || userInfo.user.role !== 'admin') {
            history.push('/')
        }
        dispatch(userByIdAction(match.params.id))
    }, [history, userInfo])
    
    return (
        <>
                <section className="wrapper bg-light">
                    <div className="container py-14 py-md-16">
                        <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
                            <div className="col-lg-7 order-lg-2">
                                <figure><img className="w-auto" src="../../assets/img/concept/concept2.png" srcSet="../../assets/img/concept/concept2@2x.png 2x" alt="" /></figure>
                            </div>
                            <div className="col-lg-5">
                            {error && (
                                <AlertStyle variant= 'danger' icons= {AlertEnum.DANGER} show={true}>{error}</AlertStyle>
                            )}
                            {data && ( <>
                                <h2 className="fs-15 text-uppercase text-line text-primary mb-3">{data.fullname ? data.fullname: 'Unknown'}</h2>
                                <h3 className="display-5 mb-7">Program edukasi yang sudah kamu ikuti dan belum kamu ikuti</h3>
                                <div className="accordion accordion-wrapper" id="accordionExample">
                                    <div className="card plain accordion-item">
                                        <div className="card-header" id="headingOne">
                                            <button className="accordion-button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"> Workshop </button>
                                        </div>
                                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                            <div className="card-body">
                                                <div className="row gy-3">
                                                    <div className="col-xl-12">
                                                        <ul className="icon-list bullet-bg bullet-soft-leaf mb-0">
                                                        {
                                                            data && data.programEducation.map(item => (
                                                                <div key={item._id}>
                                                                {item.workshops.workshopType === 'workshopClass' ? (
                                                                    <li className="my-3"><span><i className={`uil ${item.join ? 'uil-check': 'uil-times'}`}></i></span><span>{item.workshops.description}</span></li>

                                                                ): (<></>)}
                                                                </div>
                                                            )
                                                            )
                                                        }
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card plain accordion-item">
                                        <div className="card-header" id="headingTwo">
                                            <button className="collapsed" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"> Zoominar Class </button>
                                        </div>
                                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                        <div className="card-body">
                                                <div className="row gy-3">
                                                    <div className="col-xl-12">
                                                        <ul className="icon-list bullet-bg bullet-soft-leaf mb-0">
                                                        {
                                                            data && data.programEducation.map(item => (
                                                                <div key={item._id}>
                                                                {item.workshops.workshopType === 'virtualClass' ? (
                                                                    <li className="my-3"><span><i className={`uil ${item.join ? 'uil-check': 'uil-times'}`}></i></span><span>{item.workshops.description}</span></li>

                                                                ): (<></>)}
                                                                </div>
                                                            )
                                                            )
                                                        }
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card plain accordion-item">
                                        <div className="card-header" id="headingThree">
                                            <button className="collapsed" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"> Virtual Class </button>
                                        </div>
                                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div className="card-body">
                                                <div className="row gy-3">
                                                    <div className="col-xl-12">
                                                        <ul className="icon-list bullet-bg bullet-soft-leaf mb-0">
                                                        {
                                                            data && data.programEducation.map(item => (
                                                                <div key={item._id}>
                                                                {item.workshops.workshopType === 'zoominarClass' ? (
                                                                    <li className="my-3"><span><i className={`uil ${item.join ? 'uil-check': 'uil-times'}`}></i></span><span>{item.workshops.description}</span></li>

                                                                ): (<></>)}
                                                                </div>
                                                            )
                                                            )
                                                        }
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                            )}
                            </div>
                        </div>
                    </div>
                </section>

        </>
    )
}

export default UserByIdScreen
