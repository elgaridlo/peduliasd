import React from 'react'

const IARCScreen = () => {
    return (
        <>
            <section className="wrapper bg-light">
                <div className="container py-14 py-md-16">
                    <div className="row gx-lg-8 gx-xl-12 gy-10 mb-4 align-items-center">
                        <div className="col-lg-6 position-relative order-lg-2">
                            <div className="shape bg-dot primary rellax w-16 h-20" data-rellax-speed="1" style={{ top: '3rem', left: '5.5rem' }}></div>
                            <div className="overlap-grid overlap-grid-2">
                                <div className="item">
                                    <figure className="rounded shadow"><img src="/assets/img/photos/about2.png" srcSet="/assets/img/photos/about2.png" alt="" /></figure>
                                </div>
                                <div className="item">
                                    <figure className="rounded shadow"><img src="/assets/img/photos/about3.png" srcSet="/assets/img/photos/about3.png" alt="" /></figure>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <img src="./assets/img/icons/megaphone.svg" className="svg-inject icon-svg icon-svg-md mb-4" alt="" />
                            <h2 className="display-5 mb-3"><span className="fst-italic">Indonesia Autism Research Center (IARC)</span></h2>
                            <p className="mb-6 text-justify">
                                Indonesia Autism Research Center (IARC) adalah pusat studi dan riset autisme yang menjadi fondasi ilmiah seluruh program Peduli ASD.
                            </p>
                            <p className="mb-6 text-justify">
                                IARC berfokus pada penelitian multidisipliner yang mencakup aspek biomedis, perilaku, pendidikan, dan teknologi kesehatan. Pusat studi ini hadir untuk menjembatani kesenjangan antara riset ilmiah dan kebutuhan nyata di lapangan, serta memastikan bahwa seluruh produk dan layanan Peduli ASD memiliki dasar ilmiah yang valid dan etis.
                            </p>
                            <p className="mb-6 text-justify">
                                Peran Strategis IARC mencakup:
                            </p>
                            <div className="row gy-3 gx-xl-8">
                                <div className="col-xl-12">
                                    <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                                        <li><span><i>1</i></span><span className="fw-bolder">Menjadi rujukan ilmiah terpercaya terkait riset autisme di Indonesia</span></li>
                                        <li className="mt-3"><span><i>2</i></span><span className="fw-bolder">Mengembangkan basis data riset nasional</span></li>
                                        <li className="mt-3"><span><i>3</i></span><span className="fw-bolder">Mendukung inovasi produk dan layanan berbasis bukti</span></li>
                                        <li className="mt-3"><span><i>4</i></span><span className="fw-bolder">Meningkatkan kapasitas profesional melalui pelatihan dan publikasi ilmiah</span></li>
                                    </ul>
                                </div>
                            <p className="mt-6 text-justify">
                                Proyek Perdana IARC: <a href="https://peduliasd.id/casdi" target="_blank" rel="noopener noreferrer">https://peduliasd.id/casdi</a>
                            </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default IARCScreen