import React from 'react'

const PEPScreen = () => {
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
                            <h2 className="display-5 mb-3"><span className="fst-italic">Parent Education Program (PEP)</span></h2>
                            <p className="mb-6 text-justify">
                                Parent Education Program (PEP) adalah program edukasi terstruktur bagi orang tua dan keluarga individu autistik yang bertujuan meningkatkan kapasitas pengetahuan dan keterampilan orang tua dalam membersamai anak autistik secara tepat dan berdaya.
                            </p>
                            <p className="mb-6 text-justify">
                                PEP dikembangkan dengan pendekatan berbasis sains dan melibatkan tenaga profesional lintas disiplin sesuai keahlian masing-masing. Program ini dirancang untuk menjawab kebutuhan nyata orang tua dalam menghadapi tantangan sehari-hari, sekaligus melindungi mereka dari misinformasi dan praktik yang tidak berbasis bukti.
                            </p>
                            <p className="mb-6 text-justify">
                                Fokus Utama PEP mencakup tiga aspek utama:
                            </p>
                            <div className="row gy-3 gx-xl-8">
                                <div className="col-xl-12">
                                    <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                                        <li><span><i>1</i></span><span className="fw-bolder">Kemandirian Anak – membangun keterampilan hidup sehari-hari sesuai tahapan perkembangan</span></li>
                                        <li className="mt-3"><span><i>2</i></span><span className="fw-bolder">Persiapan Sekolah – membantu orang tua memahami kesiapan akademik, gaya belajar, dan kebutuhan anak di lingkungan pendidikan</span></li>
                                        <li className="mt-3"><span><i>3</i></span><span className="fw-bolder">Kesehatan Fisik dan Mental – menempatkan kesehatan sebagai fondasi utama tumbuh kembang anak dan kesejahteraan keluarga</span></li>
                                    </ul>
                                </div>
                            </div>
                            <p className="mt-6 text-justify">
                                Program ini juga berfungsi sebagai ruang dukungan {' '} 
                <span className="fst-italic">(support system)</span> {' '} bagi orang tua agar merasa tidak sendiri, lebih percaya diri, dan bangga membersamai individu autistik.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PEPScreen