import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { createArticleAction } from '../../../actions/articleAction'
import { createProductAction } from '../../../actions/productAction'
import RTE from '../../../utils/Summernote/Rte'

const CreateShop = () => {
    const [product_name, setProduct_name] = useState('')
    const [creator, setCreator] = useState('')
    const [webLink, setWebLink] = useState('')
    const [, setImage] = useState('')
    const [, setUploading] = useState(false)
    const [imageData, setImageData] = useState(null)
    const [description, setDescription] = useState('')
    const [err, setErr] = useState('')

    const dispatch = useDispatch()

    useEffect(() => {
    }, [description])

    const addHandler = (input) => {
        setDescription(input)
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
            setErr(error)
            setUploading(false)
        }
    }
    const onSubmitHandler = async (e) => {
        e.preventDefault()
        try {
            const formData = new FormData()
            const config = {
                headers: {
                    'Description-Type': 'multipart/form-data'
                }
            }
            formData.append('image', imageData)
            const { data } = await axios.post('/api/upload/product', formData, config)
            const payload = {
                product_name, photo: data, description, creator, webLink
            }
            dispatch(createProductAction(payload))

        } catch (error) {
            console.error(error)
            setErr(error)
        }
    }

    return (
        <>
            <section className="wrapper">
                <div className="container py-14 py-md-16">
                    <div>
                        <h2 className="fs-15 text-uppercase text-line text-primary text-center mb-3">Buat Produk</h2>
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
                                                        required
                                                        value={product_name}
                                                        onChange={(e) => setProduct_name(e.target.value)} />
                                                    <label htmlFor="form_name">Nama Produk *</label>
                                                    <div className="valid-feedback">
                                                        Looks good!
                                                    </div>
                                                    <div className="invalid-feedback">
                                                        Tolong beri nama produk.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row gx-4">
                                            <div className="col-md-12">
                                                <div className="form-floating mb-4">
                                                    <input id="form_name"
                                                        type="text"
                                                        name="creator"
                                                        className="form-control"
                                                        required
                                                        value={creator}
                                                        onChange={(e) => setCreator(e.target.value)} />
                                                    <label htmlFor="form_name">Nama Creator *</label>
                                                    <div className="valid-feedback">
                                                        Looks good!
                                                    </div>
                                                    <div className="invalid-feedback">
                                                        Tolong beri nama creator.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row gx-4">
                                            <div className="col-md-12">
                                                <div className="form-floating mb-4">
                                                    <input id="form_name"
                                                        type="text"
                                                        name="webLink"
                                                        className="form-control"
                                                        required
                                                        value={webLink}
                                                        onChange={(e) => setWebLink(e.target.value)} />
                                                    <label htmlFor="form_name">Link Web *</label>
                                                    <div className="valid-feedback">
                                                        Looks good!
                                                    </div>
                                                    <div className="invalid-feedback">
                                                        Tolong beri link web.
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
                                                        required
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
                                                        <h4 className="card-product_name">Summernote Editor</h4>
                                                    </div>
                                                    <div className="card-body">
                                                        <div className="summernote">
                                                            <RTE dataSummernote={addHandler} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row gx-4 pt-3">
                                            <div className="col-12">
                                                <input type="submit" className="btn btn-primary rounded-pill btn-send mb-3" value="Buat Artikel" />
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

export default CreateShop