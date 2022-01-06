import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { eduCreateProgramAction } from '../../../actions/eduProgramAction'
import { addUser, removeUserNewData } from '../../../actions/userAction'
import { createWorkshopAction, listWorkshopction } from '../../../actions/workshopAction'

const AddWorkshop = ({ history }) => {
    const [description, setDescription] = useState('')
    const [workshopType, setWorkshopType] = useState('')
    const [pdfLink, setPdfLink] = useState('')
  

    const workshopNew = useSelector((state) => state.workshopNew)
    const { loading, error, newWorkshop } = workshopNew

    const dispatch = useDispatch()

    useEffect(() => {
        // if (newWorkshop && success.status === 'Success') {
        //     dispatch(removeUserNewData())
        //     history.push('/user-list')
        // }
    }, [newWorkshop])

    const onSubmitHandler = async (e) => {
        e.preventDefault()

        const data = {
            description, workshopType, pdfLink
        }

        dispatch(createWorkshopAction(data))
    }

    return (
        <>
            <section className="wrapper">
                <div className="container py-14 py-md-16">
                    <div>
                        <h2 className="fs-15 text-uppercase text-line text-primary text-center mb-3">Buat Kategori Workshop</h2>
                    </div>
                    <div className="row">
                        <div className="col-xl-10 mx-auto">
                            <div className="row gy-10 gx-lg-8 gx-xl-12">
                                <div className="col-lg-12">
                                    <form className="contact-form" onSubmit={onSubmitHandler}>
                                        <div className="messages"></div>

                                        <div className="col-md-12">
                                            <div className="form-floating mb-4">
                                                <div className="form-select-wrapper">
                                                    <select className="form-select" onChange={(e) => setWorkshopType(e.target.value)} required>
                                                        <option defaultValue>Pilih Kategori *</option>
                                                        <option value="workshopClass">Kelas Workshop</option>
                                                        <option value="virtualClass">Kelas Virtual</option>
                                                        <option value="zoominarClass">Kelas Zoominar</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="row gx-4">
                                            <div className="col-md-12">
                                                <div className="form-floating mb-4">
                                                    <input id="form_name"
                                                        type="text"
                                                        name="name"
                                                        className="form-control"
                                                        placeholder="Kemandirian Anak"
                                                        required
                                                        value={description}
                                                        onChange={(e) => setDescription(e.target.value)} />
                                                    <label htmlFor="form_name">Deskripsi *</label>
                                                    <div className="valid-feedback">
                                                        Looks good!
                                                    </div>
                                                    <div className="invalid-feedback">
                                                        Tolong beri deskripsi.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="row gx-4">
                                            <div className="col-md-12">
                                                <div className="form-floating mb-4">
                                                    <input id="form_name"
                                                        type="text"
                                                        name="name"
                                                        className="form-control"
                                                        placeholder="Kemandirian Anak"
                                                        required
                                                        value={pdfLink}
                                                        onChange={(e) => setPdfLink(e.target.value)} />
                                                    <label htmlFor="form_name">PDF Link *</label>
                                                    <div className="valid-feedback">
                                                        Looks good!
                                                    </div>
                                                    <div className="invalid-feedback">
                                                        Tolong beri link PDF.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
 
                                        <div className="col-12">
                                            <input type="submit" className="btn btn-primary rounded-pill btn-send mb-3" value="Buat Kelas Baru" />
                                            <p className="text-muted"><strong>*</strong> These fields are required.</p>
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

export default AddWorkshop
