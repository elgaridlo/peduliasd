import React from 'react'

const ASDTeleHealthScreen = () => {
    return (
        <>
            <section className="wrapper bg-light">
                <div className="container py-14 py-md-16">
                    <div className="row gx-lg-8 gx-xl-12 gy-10 mb-4 align-items-center">
                        {/* <div className="col-lg-6 position-relative order-lg-2">
                    <div
                        className="shape bg-dot primary rellax w-16 h-20"
                        data-rellax-speed="1"
                        style={{ top: '3rem', left: '5.5rem' }}
                    ></div>
                    <div className="overlap-grid overlap-grid-2">
                        <div className="item">
                            <figure className="rounded shadow">
                                <img
                                    src="/assets/img/photos/about2.png"
                                    srcSet="/assets/img/photos/about2.png"
                                    alt=""
                                ></img>
                            </figure>
                        </div>
                        <div className="item">
                            <figure className="rounded shadow">
                                <img
                                    src="/assets/img/photos/about3.png"
                                    srcSet="/assets/img/photos/about3.png"
                                    alt=""
                                ></img>
                            </figure>
                        </div>
                    </div>
                </div> */}
                        <div className="col-lg-10">
                            <img
                                src="./assets/img/icons/megaphone.svg"
                                className="svg-inject icon-svg icon-svg-md mb-4"
                                alt=""
                            />
                            <h2 className="display-5 mb-3">ASD Telehealth</h2>
                            <p className="mb-6 text-justify">
                                Sebuah layanan telehealth dan konsultasi jarak jauh yang
                                menghubungkan professional dengan keluarga individu autistik.
                                Profesional yang kami sediakan di sini terdiri dari terapis
                                okupasi, terapis wicara, orthopedagog, psikolog klinik anak yang
                                sering bersinggungan dengan klien ASD, serta dokter dan tenaga
                                medis lainnya yang memiliki kompetensi dalam ruang lingkup ASD.
                                Layanan ini akan menghubungkan orangtua, pengasuh, keluarga, dan
                                orang-orang yang bersinggungan langsung dengan individu ASD
                                dengan ahli untuk dapat melakukan konseling jarak jauh. Program
                                dalam layanan ini bukan untuk menegakkan diagnosis atau
                                melakukan terapi jarak jauh, namun lebih ke deteksi dini, saran
                                medis, dan konsultasi.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ASDTeleHealthScreen
