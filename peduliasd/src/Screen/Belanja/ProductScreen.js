import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getProductByIdAction } from '../../actions/productAction'
import { socialMedia } from '../../model/SocialMediaModel'

const ProductScreen = ({match}) => {
	const [readMore, setReadMore] = useState(false)

	const detailProduct = useSelector(state => state.detailProduct)
	const {error, loading, detail} = detailProduct
	
	const dispatch = useDispatch()
	useEffect(() => {
		if(!detail) {
			dispatch(getProductByIdAction(match.params.id))
		}
	}, [])
	return (
		<>
			<section className="wrapper bg-light">
				<div className="container pt-10 pt-md-10 pb-16 pb-md-18">
					{/* <div className="row gy-10 gy-sm-13 gx-lg-3 mb-16 mb-md-18 align-items-center"> */}
					{
						detail && (
							<Row className="gy-10 gy-sm-13 gx-lg-3 mb-16 mb-md-18 align-items-center">
								<Col lg={5} className="position-relative">
									{/* <div className="col-md-8 col-lg-4 position-relative"> */}
									<div className="shape bg-dot primary rellax w-17 h-21" data-rellax-speed="1" style={{ top: '-2rem', left: '-1.9rem' }}></div>
									<div className="shape rounded bg-soft-primary rellax d-md-block" data-rellax-speed="0" style={{ bottom: '-1.8rem', right: '-1.5rem', width: '85%', height: '90%' }}></div>
									<figure className="rounded"><img src={detail.photo} srcSet={detail.photo} alt="" /></figure>
									{/* </div> */}
								</Col>
								<Col className="offset-lg-1">
									{/* <div className="col-lg-6 col-xl-4 offset-lg-1"> */}
									<h2 className="fs-16 text-uppercase text-line text-primary mb-3">{detail.creator}</h2>
									<h3 className="display-4 mb-7">Kaos FAP 01 (Winter)</h3>
									<div className="d-flex flex-row mb-6">
										<div className="text-justify">
											<h4 className="mb-1">Deskripsi :</h4>
											<div dangerouslySetInnerHTML={{__html: detail.description}}>
											</div>
										</div>
									</div>
									<a className="btn btn-primary" href={socialMedia.whatsappShopAdmin} target="_blank" style={{ display: 'inline-block' }}>Beli WA</a>{'  '}
									<a className="btn btn-warning" href={`https://${detail.webLink}`} target="_blank" style={{ display: 'inline-block' }} rel="noopener noreferrer external">Beli E-commerce</a>
									{/* </div> */}
								</Col>
							</Row>
						)
					}
				</div>
			</section>
		</>
	)
}

export default ProductScreen