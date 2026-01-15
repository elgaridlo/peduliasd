import React from 'react'

const FPAScreen = () => {
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
                            <h2 className="display-5 mb-3"><span className="fst-italic">Festival Peduli Autisme (FPA)</span></h2>
                            <p className="mb-6 text-justify">
                                Festival Peduli Autisme (FPA) adalah rangkaian kegiatan edukasi publik yang diselenggarakan dalam rangka Bulan Peduli Autisme, baik secara daring maupun luring.
                            </p>
                            <p className="mb-6 text-justify">
                                FPA berfungsi sebagai ruang edukasi kolektif yang mempertemukan orang tua, individu autistik, profesional, pendidik, dan masyarakat umum. Seluruh kegiatan festival dirancang untuk meningkatkan pemahaman autisme melalui pendekatan yang berbasis sains, inklusif, dan mudah diterapkan dalam kehidupan sehari-hari.
                            </p>
                            <p className="mb-6 text-justify">
                                Pilar Utama FPA mencakup empat aspek utama:
                            </p>
                            <div className="row gy-3 gx-xl-8">
                                <div className="col-xl-12">
                                    <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                                        <li><span><i>1</i></span><span className="fw-bolder">Tata laksana autisme berbasis bukti – pendekatan ilmiah dalam penanganan dan pendampingan individu autistik</span></li>
                                        <li className="mt-3"><span><i>2</i></span><span className="fw-bolder">Kemandirian individu autistik – membangun keterampilan hidup dan sosial untuk meningkatkan kualitas hidup</span></li>
                                        <li className="mt-3"><span><i>3</i></span><span className="fw-bolder">Kesehatan fisik dan mental – menempatkan kesehatan sebagai fondasi utama tumbuh kembang individu autistik</span></li>
                                        <li className="mt-3"><span><i>4</i></span><span className="fw-bolder">Pencapaian akademik dan non-akademik – mendukung pengembangan potensi individu autistik secara menyeluruh</span></li>
                                    </ul>
                                </div>
                            </div>
                            <p className="mt-6 text-justify">
                                FPA juga berperan sebagai instrumen advokasi publik untuk mengurangi stigma dan mendorong pengambilan keputusan berbasis ilmu pengetahuan.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default FPAScreen