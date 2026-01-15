import React from 'react'

const SWARAScreen = () => {
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
                            <h2 className="display-5 mb-3"><span className="fst-italic">SWARA App – Sistem Wicara Alternatif dan Representasi Autisme</span></h2>
                            <p className="mb-6 text-justify">
                                SWARA App adalah produk teknologi Peduli ASD berupa aplikasi komunikasi berbasis Augmentative and Alternative Communication (AAC) jenis Speech Generating Device (SGD) yang dirancang untuk membantu individu autistik dalam mengekspresikan kebutuhan, emosi, dan pesan sosial.
                            </p>
                            <p className="mb-6 text-justify">
                                SWARA dikembangkan dengan metode Komunikasi Kontekstual Berbasis Satuan Bahasa (KKB-SB), yang memanfaatkan kata, frasa, dan klausa berbasis konteks aktivitas sehari-hari. Pendekatan ini bertujuan menciptakan komunikasi yang lebih cepat, fungsional, dan minim kebingungan visual, khususnya bagi individu dengan kebutuhan komunikasi kompleks.
                            </p>
                            <p className="mb-6 text-justify">
                                Peran Strategis SWARA App mencakup:
                            </p>
                            <div className="row gy-3 gx-xl-8">
                                <div className="col-xl-12">
                                    <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                                        <li><span><i>1</i></span><span className="fw-bolder">Mendukung individu autistik dengan kemampuan verbal minimal hingga menengah</span></li>
                                        <li className="mt-3"><span><i>2</i></span><span className="fw-bolder">Membantu orang tua, pendidik, dan klinisi dalam memfasilitasi komunikasi</span></li>
                                        <li className="mt-3"><span><i>3</i></span><span className="fw-bolder">Menjadi jembatan komunikasi antara individu autistik dan lingkungan sosialnya</span></li>
                                    </ul>
                                </div>
                            <p className="mt-6 text-justify">
                                SWARA App merupakan bagian penting dari strategi Peduli ASD dalam mengintegrasikan teknologi, edukasi, dan praktik berbasis bukti.
                            </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SWARAScreen