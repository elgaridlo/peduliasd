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
                                    Membantu mewujudkan tumbuhnya kelompok orangtua/keluarga individu ASD yang mampu mengedukasi diri dan lingkungannya guna berjuang bersama melawan stigma negatif masyarakat.
                                </li>
                                <li>
                                    Mewujudkan masyarakat inklusif yang menerima utuh individu ASD dan keluarganya serta senantiasa mendukung mereka agar dapat terlibat dalam peran sosial di Indonesia.
                                </li>
                            </ol>
                        </div>
                        <div className="col-lg-6 text-justify">
                            <h2 className="display-6 mb-3">Misi</h2>
                            <ol>
                                <li>
                                    Memfasilitasi orangtua untuk mendapatkan edukasi ilmiah dengan penyampaian dan bahasa yang mudah dipahami.
                                </li>
                                <li>
                                    Menyediakan layanan edukasi yang senantiasa melibatkan ahli yang sesuai dengan keahliannya dan memiliki lisensi untuk memberikan edukasi guna menjaga agar informasi yang mereka sampaikan dapat dipertanggungjawabkan kebenarannya.
                                </li>
                                <li>
                                    Membentuk gerakan masyarakat inklusif peduli ASD agar dapat perlahan menghapuskan stigma negatif terhadap individu autistik dan keluarganya.
                                </li>
                                <li>
                                    Mendorong orangtua/keluarga individu autistik untuk berani menyuarakan aspirasinya dan bangga mengakui bahwa mereka adalah lapisan terdepan yang bersiap membantu individu autistik untuk bertumbuh.
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>

            <OurTeam />
        </>
    )
}

export default VisiMisiScreen