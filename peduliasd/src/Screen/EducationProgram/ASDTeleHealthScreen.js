import React from 'react'
import { socialMedia } from '../../model/SocialMediaModel'

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
                                ASD Telehealth Services (ATS) adalah layanan konsultasi dan pendampingan jarak jauh bagi individu autistik dan keluarganya dengan memanfaatkan teknologi digital.
                                Program ini dikembangkan untuk memperluas akses layanan autisme, terutama bagi keluarga yang menghadapi keterbatasan geografis, waktu, atau sumber daya. Melalui media daring, ATS menyediakan edukasi, diskusi, serta pendampingan terstruktur yang dapat dilakukan secara fleksibel dan berkelanjutan.
                            </p>
                            <p className="mb-6 text-justify">
                                <strong>Tujuan ASD Telehealth Services:</strong>
                                <ul className="mt-2">
                                    <li>Memastikan keluarga di berbagai daerah dapat memperoleh akses edukasi dan pendampingan.</li>
                                    <li>Membantu orang tua memahami kebutuhan anak dan strategi penanganan awal.</li>
                                    <li>Menjaga kesinambungan layanan saat layanan tatap muka tidak memungkinkan.</li>
                                </ul>
                            </p>
                            <p className="mb-6 text-justify">
                                ATS menempatkan orang tua sebagai fasilitator utama, dengan dukungan profesional yang terarah dan bertanggung jawab.
                            </p>
                            <a href={socialMedia.telehealthAccess} target="_blank" className="btn btn-primary rounded-pill mx-1 mb-2 mb-md-0" >Akses Layanan</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ASDTeleHealthScreen
