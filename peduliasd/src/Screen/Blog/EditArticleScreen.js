import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createArticleAction, getArticleByIdAction, updateArticleAction } from '../../actions/articleAction'
import AlertStyle from '../../utils/Components/Alert'
import { AlertEnum } from '../../utils/Enums/AlertEnum'
import RTE from '../../utils/Summernote/Rte'

const EditArticleScreen = ({ history, match }) => {
    const [title, setTitle] = useState('')
    const [image, setImage] = useState('')
    const [, setUploading] = useState(false)
    const [imageData, setImageData] = useState(null)
    const [content, setContent] = useState('')

    const dispatch = useDispatch()

    const articleDetail = useSelector((state) => state.articleDetail)
    const {loading, error, detail} = articleDetail

    const updateArticle = useSelector((state) => state.updateArticle)
    const {loading: loadingArticleUpdate, error: errorArticleUpdate, data: updateData} = updateArticle

    useEffect(() => {
        dispatch(getArticleByIdAction(match.params.id))
    }, [])

    useEffect(() => {
        if(detail) {
            setTitle(detail.title)
            setContent(detail.content)
            setImage(detail.poster)
        }
    }, [detail])

    const addHandler = (input) => {
        setContent(input)
    }

    const uploadHandler = async (e) => {
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
    }
    const onSubmitHandler = async (e) => {
        e.preventDefault()
        let payload = {}
        try {

            if (imageData) {
                const formData = new FormData()
                const config = {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }
                formData.append('image', imageData)
                const { data } = await axios.post('/api/upload/article', formData, config)
                payload = {
                    title, poster: data, content
                }
            } else {
                payload = {
                    title, content
                }
            }
            dispatch(updateArticleAction(match.params.id,payload))
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <>
            <section className="wrapper">
                <div className="container py-14 py-md-16">
                    {error && (
                        <AlertStyle variant='danger' icons={AlertEnum.DANGER} show={true}>{errorArticleUpdate}</AlertStyle>
                    )}
                    {updateData && (
                        <AlertStyle variant='success' icons={AlertEnum.SUCCESS} show={true}>Artikel berhasil diperbarui!</AlertStyle>
                    )}
                    <div>
                        <h2 className="fs-15 text-uppercase text-line text-primary text-center mb-3">Ubah Artikel</h2>
                    </div>
                    <div className="row">
                        <div className="col-xl-10 mx-auto">
                            <div className="row gy-10 gx-lg-8 gx-xl-12">
                                <div className="col-lg-12">
                                    <form className="contact-form" onSubmit={onSubmitHandler}>

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
                                                        onChange={uploadHandler}
                                                    />
                                                    <div className="valid-feedback">
                                                        Looks good!
                                                    </div>
                                                    <div className="invalid-feedback">
                                                        Tolong sediakan gambar untuk diupload.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row gx-4">
                                            <div className="col-xl-12 col-xxl-12">
                                                <div className="card">
                                                    <div className="card-header">
                                                        <h4 className="card-title">Summernote Editor</h4>
                                                    </div>
                                                    <div className="card-body">
                                                        <div className="summernote">
                                                            <RTE dataSummernote={addHandler} input={content} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row gx-4 pt-3">
                                            <div className="col-12">
                                                <input type="submit" className="btn btn-primary rounded-pill btn-send mb-3" value="Ubah Artikel" />
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

export default EditArticleScreen
