import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userListAction } from '../../actions/userAction'
import CreateArticle from './Article/CreateArticle'
import AddEduProgram from './EduProgram/AddEduProgram'
import ListEduProgramScreen from './EduProgram/ListEduProgramScreen'
import CreateShop from './Shop/CreateShop'
import AddWorkshop from './Workshop/AddWorkshop'
import CASDIFormArticle from '../CASDI/Article/FormCasdiArticleScreen'

const AdminScreen = () => {
    const userList = useSelector((state) => state.userList)
    const { userlist } = userList

    const dispatch = useDispatch()

    useEffect(() => {
        if (!userlist) {
            dispatch(userListAction())
        }
    }, [userlist])
    return (
        <>
            <section className="wrapper bg-soft-primary">
                <div className="container py-14 pt-md-17 pb-md-19">
                    <div className="row gx-lg-8 gx-xl-12 gy-10 gy-lg-0 align-items-center">
                        <div className="col-lg-4">
                            <h2 className="fs-16 text-uppercase text-primary mb-3">
                                ADMIN ONLY
                            </h2>
                            <h3 className="display-4 mb-3 pe-xxl-15">
                                DASHBOARD
                            </h3>
                        </div>

                    </div>
                </div>
            </section>

            <section className="wrapper bg-light">
                <div className="container pt-16 pt-md-17">
                    <div className="grid mb-14 mb-md-17">
                        <div className=" gt-6 mt-n19 mt-md-n22" ref={element => {
                            if (element) element.style.setProperty('height', 'auto', 'important');
                        }}>
                            <div>
                                <ul className="nav nav-tabs nav-pills">
                                    <li className="nav-item">
                                        <a className="nav-link active" data-bs-toggle="tab" href="#tab1-1">
                                            <i className="uil uil-file-plus-alt pe-1"></i>
                                            <span>Program Edukasi</span>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-bs-toggle="tab" href="#tab1-2">
                                            <i className="uil uil-file-plus-alt pe-1"></i>
                                            <span>Kategori Workshop</span>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-bs-toggle="tab" href="#tab1-3">
                                            <i className="uil uil-file-plus-alt pe-1"></i>
                                            <span>Artikel</span>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-bs-toggle="tab" href="#tab1-4">
                                            <i className="uil uil-file-plus-alt pe-1"></i>
                                            <span>List Program Edukasi</span>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-bs-toggle="tab" href="#tab1-5">
                                            <i className="uil uil-file-plus-alt pe-1"></i>
                                            <span>CASDI Artikel</span>
                                        </a>
                                    </li>
                                    {/* <li className="nav-item">
                                        <a className="nav-link" data-bs-toggle="tab" href="#tab1-5">
                                            <i className="uil uil-file-plus-alt pe-1"></i>
                                            <span>List Kategori Workshop</span>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-bs-toggle="tab" href="#tab1-6">
                                            <i className="uil uil-file-plus-alt pe-1"></i>
                                            <span>List Artikel</span>
                                        </a>
                                    </li> */}
                                </ul>
                                <div className="tab-content">
                                    <div className="tab-pane fade show active" id="tab1-1">
                                        <AddEduProgram />
                                    </div>
                                    <div className="tab-pane fade" id="tab1-2">
                                        <AddWorkshop />
                                    </div>
                                    <div className="tab-pane fade" id="tab1-3">
                                        <CreateArticle />
                                    </div>
                                    <div className="tab-pane fade" id="tab1-4">
                                        <CreateShop />
                                    </div>
                                    <div className="tab-pane fade" id="tab1-5">
                                        <CASDIFormArticle />
                                    </div>
                                    {/* <div className="tab-pane fade" id="tab1-5">
                                        <CreateArticle />
                                    </div>
                                    <div className="tab-pane fade" id="tab1-6">
                                        <CreateArticle />
                                    </div> */}
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </>
    )
}

export default AdminScreen
