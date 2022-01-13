import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getEduProgramByIdAction } from '../../../actions/eduProgramAction'
import { listWorkshopction } from '../../../actions/workshopAction'
import AlertStyle from '../../../utils/Components/Alert'
import { AlertEnum } from '../../../utils/Enums/AlertEnum'

const EduProgramByIdScreen = ({ match }) => {

    const eduProgramDetail = useSelector((state) => state.eduProgramDetail)
    const {eduDetail} = eduProgramDetail

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getEduProgramByIdAction(match.params.id))
    }, [match, dispatch])

    return (
        <>
            <section className="wrapper">
                <section className="wrapper bg-light">
                    <div className="container py-14 py-md-16">
                        <div className="row gx-md-8 gx-xl-12 gy-10 align-items-center">
                            <div className="col-md-8 col-lg-6 offset-lg-0 col-xl-5 offset-xl-1 position-relative">
                                <div className="shape bg-dot primary rellax w-17 h-21" data-rellax-speed="1" style={{top: '-2rem', left: '-1.4rem'}}></div>
                                <figure className="rounded"><img src={eduDetail ? eduDetail.image : ''} srcSet={eduDetail ? eduDetail.image : ''} alt=""/></figure>
                            </div>
                            <div className="col-lg-6">
                                <img src="/assets/img/icons/shield.svg" className="svg-inject icon-svg text-primary" alt="" />
                                <h4 className="display-5 mb-8">Only Saw by Admin</h4>
                                <div className="d-flex flex-row">
                                    <div>
                                        <h5 className="mb-1">Judul</h5>
                                        <p>{eduDetail ? eduDetail.title : ''}</p>
                                    </div>
                                </div>
                                <div className="d-flex flex-row">
                                    <div>
                                        <h5 className="mb-1">Kategori Program</h5>
                                        <p>{eduDetail ? eduDetail.workshopType.description : ''}</p>
                                    </div>
                                </div>
                                <div className="d-flex flex-row">
                                    <div>
                                        <div className="icon text-primary fs-28 me-6 mt-n1"> <i className="uil uil-envelope"></i> </div>
                                    </div>
                                    <div>
                                        <h5 className="mb-1">E-mail</h5>
                                        <p className="mb-0"><a href="mailto:sandbox@email.com" className="link-body">sandbox@email.com</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>

        </>
    )
}

export default EduProgramByIdScreen
