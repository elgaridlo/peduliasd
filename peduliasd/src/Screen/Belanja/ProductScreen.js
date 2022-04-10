import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'

const ProductScreen = () => {
	const [readMore, setReadMore] = useState(false)


	useEffect(() => {
		if (readMore) {

		}
	}, [readMore])
	return (
		<>
			<section className="wrapper bg-light">
				<div className="container pt-10 pt-md-10 pb-16 pb-md-18">
					{/* <div className="row gy-10 gy-sm-13 gx-lg-3 mb-16 mb-md-18 align-items-center"> */}
					<Row className="gy-10 gy-sm-13 gx-lg-3 mb-16 mb-md-18 align-items-center">
						<Col lg={5} className="position-relative">
							{/* <div className="col-md-8 col-lg-4 position-relative"> */}
							<div className="shape bg-dot primary rellax w-17 h-21" data-rellax-speed="1" style={{ top: '-2rem', left: '-1.9rem' }}></div>
							<div className="shape rounded bg-soft-primary rellax d-md-block" data-rellax-speed="0" style={{ bottom: '-1.8rem', right: '-1.5rem', width: '85%', height: '90%' }}></div>
							<figure className="rounded"><img src="/assets/img/photos/about7.jpg" srcSet="/assets/img/photos/about7@2x.jpg 2x" alt="" /></figure>
							{/* </div> */}
						</Col>
						<Col className="offset-lg-1">
							{/* <div className="col-lg-6 col-xl-4 offset-lg-1"> */}
							<h2 className="fs-16 text-uppercase text-line text-primary mb-3">How It Works?</h2>
							<h3 className="display-4 mb-7">Kaos FAP 01 (Winter)</h3>
							<div className="d-flex flex-row mb-6">
								<div className="text-justify">
									<h4 className="mb-1">Deskripsi :</h4>
									<p className="mb-0">Perpaduan warna royal blue dengan disain digital yang digambar langsung oleh Individu Autistik. Cerita dalam gambar ini adalah tentang petualangan 3 kakak-beradik di serial Little Angle ke angkasa.</p>
									<p className="mb-0">Perpaduan warna royal blue dengan disain digital yang digambar langsung oleh Individu Autistik. Cerita dalam gambar ini adalah tentang petualangan 3 kakak-beradik di serial Little Angle ke angkasa.</p>
									{/* <p className="mb-0">Perpaduan warna royal blue dengan disain digital yang digambar langsung oleh Individu Autistik. Cerita dalam gambar ini adalah tentang petualangan 3 kakak-beradik di serial Little Angle ke angkasa.</p>
									<p className="mb-0">Perpaduan warna royal blue dengan disain digital yang digambar langsung oleh Individu Autistik. Cerita dalam gambar ini adalah tentang petualangan 3 kakak-beradik di serial Little Angle ke angkasa.</p>
									<p className="mb-0">Perpaduan warna royal blue dengan disain digital yang digambar langsung oleh Individu Autistik. Cerita dalam gambar ini adalah tentang petualangan 3 kakak-beradik di serial Little Angle ke angkasa.</p> */}
								</div>
							</div>
							<button className="btn btn-primary" style={{ display: 'inline-block' }}>Beli</button>
							{/* </div> */}
						</Col>
					</Row>
				</div>
			</section>
		</>
	)
}

export default ProductScreen