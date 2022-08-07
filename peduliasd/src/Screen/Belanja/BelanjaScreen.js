import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listProductAction } from '../../actions/productAction'

const BelanjaScreen = () => {
    const dispatch = useDispatch()

    const products = useSelector(state => state.products)
    const {error, loading, listProduct} = products

    useEffect(() => {
        if(!listProduct) {
            dispatch(listProductAction())    
        }
    },[listProduct])
    return (
        <>
            <div className="content-wrapper">
                {/* <section className="wrapper bg-light">
                    <div className="container py-14 py-md-17">
                        <div className="row mb-8 text-center">
                            <div className="col-lg-9 col-xl-8 col-xxl-7 mx-auto">
                                <h2 className="fs-16 text-uppercase text-primary mb-3">
                                    Belanja belum didevelop
                                </h2>
                            </div>
                        </div>
                    </div>
                </section> */}
                <section className="wrapper bg-light">
                    <div className="container py-14 py-md-16">
                        <div className="grid grid-view projects-masonry">
                            <div className="isotope-filter filter mb-10">
                                <p>Karya anak autistik:</p>
                            </div>
                            <div className="row gx-md-10 gy-10 gy-md-13">
                                {listProduct && listProduct.map(item => (
                                    <div key={item._id} className="project item col-md-6 workshop">
                                        <figure className="lift rounded mb-6"><a href={`/product/${item._id}`}> <img src={item.photo} alt="" /></a></figure>
                                        <div className="project-details d-flex justify-content-center flex-column">
                                            <div className="post-header">
                                                <div className="post-category text-line mb-3 text-leaf">Ayya</div>
                                                <h3 className="post-title">{item.product_name}</h3>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>

    )
}

export default BelanjaScreen
