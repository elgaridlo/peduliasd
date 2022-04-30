import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const VisiMisiScreen = () => {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };
    return (
        <>
            <section className="wrapper bg-light">
                <div className="container py-14 py-md-16">
                    <div className="row mb-5">
                        <div className="col-md-10 col-xl-8 col-xxl-7 mx-auto text-center">
                            <img src="/assets/img/icons/list.svg" className="svg-inject icon-svg icon-svg-md mb-4" alt="" />
                            <h2 className="display-4 mb-4 px-lg-14">Visi dan Misi Kami.</h2>
                            <p className="lead fs-lg pe-lg-5">Sebagai pengingat bagi tim untuk bergerak sesuai spirit yang dibangun di awal berdirinya platform edukasi ini, Peduli ASD memiliki visi dan misi sebagai berikut:</p>
                            </div>

                    </div>

                    <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
                        <div className="col-lg-6 text-justify">
                            <h2 className="display-6 mb-3">Visi</h2>
                            <ol>
                                <li>
                                    Menjadi platform edukasi berbasis sains dan ilmu pengetahuan yang memiliki landasan ilmiah yang kuat.
                                </li>
                                <li>
                                    Membantu mewujudkan tumbuhnya kelompok orangtua/keluarga anak ASD yang mampu mengedukasi diri dan lingkungannya guna berjuang bersama melawan stigma negatif masyarakat.
                                </li>
                                <li>
                                    Mewujudkan masyarakat inklusif yang menerima utuh individu ASD dan keluarganya dan senantiasa mendukung mereka agar dapat terlibat dalam peran sosial di Indonesia.
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
                                    Menyediakan layanan edukasi yang senantiasa melibatkan ahli yang sesuai dengan keahliannya dan memiliki lisensi untuk memberikan edukasi guna menjaga agar informasi yang mereka sampaikan dapat dipertanggung jawabkan kebenarannya.
                                </li>
                                <li>
                                    Membentuk gerakan masyarakat inklusif peduli ASD agar dapat perlahan menghapuskan stigma negatif terhadap individu autistik dan keluarganya.
                                </li>
                                <li>
                                    Mendorong orangtua/keluarga anak autistik untuk berani menyuarakan aspirasinya dan bangga mengakui bahwa mereka adalah lapisan terdepan yang bersiap membantu individu autistik untuk bertumbuh.
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>
            <section className="wrapper bg-light">
                <div className="container py-14 py-md-16">
                    <div className="row mb-3">
                        <div className="col-md-10 col-xl-9 col-xxl-7 mx-auto text-center">
                            <img src="./assets/img/icons/team.svg" className="svg-inject icon-svg icon-svg-md mb-4" alt="" />
                            <h2 className="display-4 mb-3 px-lg-14">Meet Our Team.</h2>
                        </div>
                    </div>
                    <div className="position-relative">
                        <div className="shape rounded-circle bg-soft-yellow rellax w-16 h-16" data-rellax-speed="1" style={{bottom: '0.5rem', right:'-1.7rem'}}></div>
                        <div className="shape rounded-circle bg-line red rellax w-16 h-16" data-rellax-speed="1" style={{top: '0.5rem', left: '-1.7rem'}}></div>
                        <Carousel responsive={responsive} showDots={true} autoPlaySpeed={1000}>
                        <div className="item">
                                <div className="item-inner">
                                    <div className="card">
                                        <div className="card-body">
                                            <img className="rounded-circle w-15 mb-4" src="/assets/img/gambar/team/isti.png" srcSet="/assets/img/gambar/team/isti.png" alt="" />
                                            <h4 className="mb-1">Isti Anindya</h4>
                                            <div className="meta mb-2">CEO (Chief Executive Officer)</div>
                                            {/* <p className="mb-2">Biologi, FBio UGM (07) ; Ilmu Kedokteran Dasar dan Biomedis, FK-KMK UGM (14)</p> */}
                                            <nav className="nav social mb-0">
                                                <a href="#"><i className="uil uil-twitter"></i></a>
                                                <a href="#"><i className="uil uil-facebook-f"></i></a>
                                                <a href="#"><i className="uil uil-dribbble"></i></a>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="item-inner">
                                    <div className="card">
                                        <div className="card-body">
                                            <img className="rounded-circle w-15 mb-4" src="/assets/img/gambar/team/santi.png" srcSet="/assets/img/gambar/team/santi.png" alt="" />
                                            <h4 className="mb-1">Nur Endah Santi</h4>
                                            <div className="meta mb-2">CFO (Chief Financial Officer)</div>
                                            {/* <p className="mb-2">Akuntansi, FEB UNPAD (07) </p> */}
                                            <nav className="nav social mb-0">
                                                <a href="#"><i className="uil uil-twitter"></i></a>
                                                <a href="#"><i className="uil uil-facebook-f"></i></a>
                                                <a href="#"><i className="uil uil-dribbble"></i></a>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="item-inner">
                                    <div className="card">
                                        <div className="card-body">
                                            <img className="rounded-circle w-15 mb-4" src="/assets/img/gambar/team/profile-team.png" srcSet="/assets/img/gambar/team/profile-team.png" alt="" />
                                            <h4 className="mb-1">Elga Ridlo Sinatriya</h4>
                                            <div className="meta mb-2">CTO (Chief Technology Officer)</div>
                                            {/* <p className="mb-2">Fermentum massa justo sit amet risus morbi leo.</p> */}
                                            <nav className="nav social mb-0">
                                                <a href="#"><i className="uil uil-twitter"></i></a>
                                                <a href="#"><i className="uil uil-facebook-f"></i></a>
                                                <a href="#"><i className="uil uil-dribbble"></i></a>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="item-inner">
                                    <div className="card">
                                        <div className="card-body">
                                            <img className="rounded-circle w-15 mb-4" src="/assets/img/gambar/team/habil.png" srcSet="/assets/img/gambar/team/habil.png" alt="" />
                                            <h4 className="mb-1">Isfan Azhabil</h4>
                                            <div className="meta mb-2">CIO (Chief Information Officer)</div>
                                            {/* <p className="mb-2">Elektronika dan Instrumentasi, FMIPA UGM (13)</p> */}
                                            <nav className="nav social mb-0">
                                                <a href="#"><i className="uil uil-twitter"></i></a>
                                                <a href="#"><i className="uil uil-facebook-f"></i></a>
                                                <a href="#"><i className="uil uil-dribbble"></i></a>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="item-inner">
                                    <div className="card">
                                        <div className="card-body">
                                            <img className="rounded-circle w-15 mb-4" src="/assets/img/gambar/team/tia.png" srcSet="/assets/img/gambar/team/tia.png" alt="" />
                                            <h4 className="mb-1">Tia Wida Ekaputri HZ</h4>
                                            <div className="meta mb-2">CCO (Chief Communications Officer)</div>
                                            {/* <p className="mb-2">Biologi, FMIPA UNILA (09) ; Ilmu Kedokteran Dasar dan Biomedis, FK-KMK UGM (14)</p> */}
                                            <nav className="nav social mb-0">
                                                <a href="#"><i className="uil uil-twitter"></i></a>
                                                <a href="#"><i className="uil uil-facebook-f"></i></a>
                                                <a href="#"><i className="uil uil-dribbble"></i></a>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="item-inner">
                                    <div className="card">
                                        <div className="card-body">
                                            <img className="rounded-circle w-15 mb-4" src="/assets/img/gambar/team/sarah.png" srcSet="/assets/img/gambar/team/sarah.png" alt="" />
                                            <h4 className="mb-1">Sarah Balqis</h4>
                                            <div className="meta mb-2">CMO (Chief Marketing Officer)</div>
                                            {/* <p className="mb-2">Teknik Kimia, FT ITB (15)</p> */}
                                            <nav className="nav social mb-0">
                                                <a href="#"><i className="uil uil-twitter"></i></a>
                                                <a href="#"><i className="uil uil-facebook-f"></i></a>
                                                <a href="#"><i className="uil uil-dribbble"></i></a>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </section>
        </>
    )
}

export default VisiMisiScreen