import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { eduCreateProgramAction, getEduProgramByIdAction } from '../../../actions/eduProgramAction'
import { listWorkshopction } from '../../../actions/workshopAction'
import AlertStyle from '../../../utils/Components/Alert'
import { AlertEnum } from '../../../utils/Enums/AlertEnum'

const EduProgramByIdScreen = ({ match }) => {

    const [title, setTitle] = useState('')
    const [workshopType, setWorkshopType] = useState('')
    const [image, setImage] = useState('')
    const [uploading, setUploading] = useState(false)
    const [imageData, setImageData] = useState(null)
    const [alertShow, setAlertShow] = useState()
  
    const newEduProgram = useSelector((state) => state.newEduProgram)
    const { loading, error, newEduProgram: newData } = newEduProgram

    const workshopList = useSelector((state) => state.workshopList)
    const { loading: loadingEdu, error: errorEdu, listWorkshopProgram } = workshopList

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(listWorkshopction())
    },[])


    const eduProgramDetail = useSelector((state) => state.eduProgramDetail)
    const {eduDetail} = eduProgramDetail

    useEffect(() => {
        dispatch(getEduProgramByIdAction(match.params.id))
        if(eduDetail) {
            setTitle(eduDetail.title)
        }
    }, [match, dispatch])

    const uploadHandler = async(e) => {
        setUploading(true)
        
        try {
            const file = e.target.files[0]
            setImageData(file)
            setImage(file.name)
            setUploading(false)
        } catch (error) {
            console.error(error)
            setUploading(false)
        }
        console.log('image = ', image)
        console.log('imageData - ', imageData)
    } 
    const onSubmitHandler = async (e) => {
        e.preventDefault()
        try {
            const formData = new FormData()
            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
            formData.append('image', imageData)
            const {data} = await axios.post('/api/upload/eduProgram', formData, config)
            console.log('data = ', data)
            const payload = {
                workshopType, title, image: data
            }
            dispatch(eduCreateProgramAction(payload))
            
          } catch (error) {
            console.error(error)
          }
    }

    return (
        <>
            <section className="wrapper">
                {/* <section className="wrapper bg-light">
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
                </section> */}

                <div className="container py-14 py-md-16">
                    <div>
                        <h2 className="fs-15 text-uppercase text-line text-primary text-center mb-3">Buat Program Edukasi</h2>
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
                                                    <select className="form-select" onChange={(e) => setWorkshopType(e.target.value)}>                                                        
                                                        {listWorkshopProgram && listWorkshopProgram.map((item) => (
                                                            <option key={item._id} value={item._id}>{item.description}</option>
                                                        ))}
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
                                                        placeholder="Jane"
                                                        required
                                                        value={title}
                                                        onChange={(e) => setTitle(e.target.value)} />
                                                    <label htmlFor="form_name">Judul *</label>
                                                    <div className="valid-feedback">
                                                        Looks good!
                                                    </div>
                                                    <div className="invalid-feedback">
                                                        Tolong beri judul.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
 
                                        <div className="row gx-4">
                                            <div className="col-md-12">
                                                <div className="form-floating mb-4">
                                                    <input id="form_name"
                                                        type="file"
                                                        name="name"
                                                        className="form-control"
                                                        accept="image/png, image/jpg, image/jpeg"
                                                        // value={image}
                                                        onChange={uploadHandler}
                                                        required
                                                    />
                                                    <p className="text-muted"><strong>*</strong> Masukkan ukuran gambar 1080 x 1080 dan ukuran tidak lebih dari 1MB.</p>
                                                    <div className="valid-feedback">
                                                        Looks good!
                                                    </div>
                                                    <div className="invalid-feedback">
                                                        Tolong sediakan gambar untuk diupload.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <input type="submit" className="btn btn-primary rounded-pill btn-send mb-3" value="Buat Baru" />
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

export default EduProgramByIdScreen
