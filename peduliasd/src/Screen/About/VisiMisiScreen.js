import React from 'react'
import "react-multi-carousel/lib/styles.css";
import OurTeam from './OurTeam';


const VisiMisiScreen = () => {
    return (
        <>
            <section className="wrapper bg-light">
                <div className="container py-14 py-md-16">
                    <div className="row mb-5">
                        <div className="col-md-10 col-xl-8 col-xxl-7 mx-auto text-center">
                            <img src="/assets/img/icons/list.svg" className="svg-inject icon-svg icon-svg-md mb-4" alt="" />
                            <h2 className="display-4 mb-4 px-lg-14">Visi dan Misi Kami</h2>
                            <p className="lead fs-lg pe-lg-5">Sebagai pengingat bagi tim untuk bergerak sesuai spirit yang dibangun di awal berdirinya platform edukasi ini, Peduli ASD memiliki visi dan misi sebagai berikut:</p>
                            </div>

                    </div>

                    <div className="row gx-lg-8 gx-xl-12 gy-10 ">
                        <div className="col-lg-6 text-justify">
                            <h2 className="display-6 mb-3">Visi</h2>
                            <ol>
                                <li>
                                    Menjadi platform edukasi berbasis sains dan ilmu pengetahuan yang memiliki landasan ilmiah yang kuat.
                                </li>
                                <li>
                                    Membantu mewujudkan tumbuhnya kelompok orang tua dan keluarga individu autistik yang mampu mengedukasi diri dan lingkungannya untuk berjuang bersama melawan stigma negatif.
                                </li>
                                <li>
                                    Mewujudkan masyarakat inklusif yang menerima individu autistik secara utuh dan senantiasa mendukung keterlibatan mereka dalam peran sosial di Indonesia.
                                </li>
                            </ol>
                        </div>
                        <div className="col-lg-6 text-justify">
                            <h2 className="display-6 mb-3">Misi</h2>
                            <ol>
                                <li>
                                    Memfasilitasi orang tua dan keluarga individu autistik untuk memperoleh edukasi ilmiah dengan penyampaian dan bahasa yang mudah dipahami.
                                </li>
                                <li>
                                    Menyediakan layanan edukasi yang melibatkan para ahli sesuai bidang keahliannya serta memiliki lisensi profesional, guna menjaga akurasi dan akuntabilitas informasi.
                                </li>
                                <li>
                                    Membentuk gerakan masyarakat inklusif yang peduli terhadap ASD untuk secara bertahap menghapus stigma negatif terhadap individu autistik dan keluarganya.
                                </li>
                                <li>
                                    Mendorong orang tua dan keluarga individu autistik untuk berani menyuarakan aspirasi serta bangga menjadi garda terdepan dalam mendukung tumbuh kembang individu autistik.
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>

            <section className="wrapper bg-light">
                <div className="container py-14 py-md-16">
                    <div className="row mb-5">
                        <div className="col-md-10 col-xl-8 col-xxl-7 mx-auto text-center">
                            <h2 className="display-4 mb-4 px-lg-14">Nilai Peduli ASD</h2>
                        </div>
                    </div>

                    <div className="row gx-lg-6 gy-6">
                        <div className="col-md-6 col-lg-3">
                            <div className="card card-body text-center h-100 d-flex flex-column">
                                <div className="icon btn btn-circle btn-lg btn-soft-primary disabled mx-auto mb-4">
                                    <i className="uil uil-star"></i>
                                </div>
                                <h3 className="fs-22">Empati</h3>
                                <p className="mb-0">Peduli ASD berkomitmen untuk memahami secara mendalam tantangan emosional, sosial, dan praktis yang dihadapi keluarga dengan anak autistik.</p>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-3">
                            <div className="card card-body text-center h-100 d-flex flex-column">
                                <div className="icon btn btn-circle btn-lg btn-soft-primary disabled mx-auto mb-4">
                                    <i className="uil uil-star"></i>
                                </div>
                                <h3 className="fs-22">Inklusivitas</h3>
                                <p className="mb-0">Peduli ASD mendorong penerimaan terhadap keberagaman serta penghargaan terhadap setiap individu autistik sebagai manusia yang utuh.</p>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-3">
                            <div className="card card-body text-center h-100 d-flex flex-column">
                                <div className="icon btn btn-circle btn-lg btn-soft-primary disabled mx-auto mb-4">
                                    <i className="uil uil-star"></i>
                                </div>
                                <h3 className="fs-22">Berbasis Sains</h3>
                                <p className="mb-0">Seluruh edukasi, konten, dan produk Peduli ASD disusun berdasarkan riset ilmiah, bukti empiris, dan sumber terpercaya.</p>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-3">
                            <div className="card card-body text-center h-100 d-flex flex-column">
                                <div className="icon btn btn-circle btn-lg btn-soft-primary disabled mx-auto mb-4">
                                    <i className="uil uil-star"></i>
                                </div>
                                <h3 className="fs-22">Keberlanjutan</h3>
                                <p className="mb-0">Peduli ASD berupaya terus berkembang secara berkelanjutan untuk memberikan dampak positif jangka panjang bagi individu autistik, keluarga, dan masyarakat.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <OurTeam />
        </>
    )
}

export default VisiMisiScreen