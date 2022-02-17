import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const AboutUsScreen = () => {
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

            <section className="wrapper bg-gray">
                <div className="container pt-10 pt-md-14 text-center">
                    <div className="row">
                        <div className="col-xl-6 mx-auto">
                            <h1 className="display-1 mb-4">PEDULI ASD</h1>
                            {/* <p className="lead fs-lg mb-0">A company turning ideas into beautiful things.</p> */}
                        </div>

                    </div>

                </div>
                {/* <img src="/assets/img/gambar/landasan_berdiri.png" alt="" /> */}
                <figure className="position-absoute" style={{ bottom: "0", left: "0", zIndex: "2" }}><img src="./assets/img/photos/bg12.jpg" alt="" /></figure>
            </section>

            <section className="wrapper bg-light angled upper-end lower-end">
                <div className="container py-14 py-md-16">
                    <div className="row gx-lg-8 gx-xl-12 gy-10 mb-14 mb-md-17 align-items-center">
                        {/* <div className="col-lg-6 position-relative order-lg-2">
                            <div className="shape bg-dot primary rellax w-16 h-20" data-rellax-speed="1" style={{top: "3rem",left:"5.5rem"}}></div>
                            <div className="overlap-grid overlap-grid-2">
                                <div className="item">
                                    <figure className="rounded shadow"><img src="./assets/img/photos/about2.jpg" srcSet="./assets/img/photos/about2@2x.jpg 2x" alt=""></img></figure>
                                </div>
                                <div className="item">
                                    <figure className="rounded shadow"><img src="./assets/img/photos/about3.jpg" srcSet="./assets/img/photos/about3@2x.jpg 2x" alt=""></img></figure>
                                </div>
                            </div>
                        </div> */}

                        <div className="col-lg-12">
                            <img src="./assets/img/icons/megaphone.svg" className="svg-inject icon-svg icon-svg-md mb-4" alt="" />
                            <h2 className="display-4 mb-3">Who Are We?</h2>
                            <p className="lead fs-lg">We are a digital and branding company that believes in the power of creative strategy and along with great design.</p>
                            <p className="mb-6" style={{ textAlign: 'justify' }}>
                                &emsp;&ensp;Autism Spectrum Disorder (ASD) adalah diagnosis resmi yang dikeluarkan oleh APA pada tahun 2013 yang memiliki kriteria-kriteria khusus untuk mengelompokkan anak-anak dengan gangguan autistik ke dalam satu payung yang sama. Sebelum istilah ASD diperbaharui, masyarakat masih menggunakan istilah autisme atau autis pada anak-anak yang memiliki gangguan perkembangan dan memenuhi kriteria khas autistik. Setelah istilah ini digunakan lebih dari 8 tahun, masyarakat mulai menggunakan “ASD” sebagai penyebutan yang umum terhadap anak-anak yang terdiagnosis dan tumbuh dengan kondisi autistik. Namun, tidak semua lapisan masyarakat memahami terkait pergantian istilah ASD. Sehingga dengan istilah “autis” stigma terhadap kelompok dengan kondisi ASD masih sangat sering ditemui di dunia. Penggunaan istilah yang tepat dan edukasi secara ilmiah kepada masyakarat tentu dapat menjadi salah satu cara untuk mengurangi stigma masyarakat yang dapat menurunkan kualitas kehidupan keluarga yang mengasuh anak dengan kondisi autistik.
                            </p>
                            <p className="mb-6" style={{ textAlign: 'justify' }}>
                                &emsp;&ensp;Banyaknya beredar informasi yang kurang ilmiah atau tergolong pseudoscience  di internet terkait ASD membuat orang-orang yang bersentuhan erat dengan individu ASD mengalami kebingungan saat memilih informasi mana yang layak dipercaya. Sebagian besar saran yang diberikan kadang bertolak belakang dengan ilmu pengetahuan yang telah ada. Hal inilah yang mendorong Isti Anindya (CEO Peduli ASD) membentuk platform edukasi Peduli ASD. Selain berperan sebagi CEO, beliau juga merupakan ibu dari anak autistik bernama Fayyaza yang tahun ini berusia 9 tahun. Berlatar belakang pendidikan di bidang biologi dan ilmu kedokteran dasar, beliau yang juga berprofesi sebagai seorang dosen ilmu biomedis di Universitas Indonesia Maju menjawab keresahannya terkait informasi seputar ASD yang seringkali tidak ilmiah dan memiliki landasan ilmu pengetahuan yang kuat melalui peduli ASD. Bagi beliau memberikan informasi yang valid dengan sumber yang dapat dipercaya serta tidak merekayasa informasi untuk membuat bingung para orangtua anak autistik adalah semangat yang pada akhirnya membawa peduli ASD berjalan baik sejauh ini.
                            </p>
                            <p className="mb-6" style={{ textAlign: 'justify' }}>
                                &emsp;&ensp;Ide menciptakan Peduli ASD sebagai sarana edukasi tercetus pada tanggal 30 April 2020 yang mana tepat diakhir bulan peduli Autisme yang dirayakan seluruh dunia. Awalnya platform ini diciptakan sebagai media satu arah yang menyimpan informasi seputar ASD. Perlahan lambat laun berubah menjadi media edukasi dua arah karena foundernya mencoba menyembatani orangtua dengan orang-orang yang dapat memberikan informasi yang memiliki landasan ilmiah yang baik. Meskipun platform ini sempat tidak aktif setengah tahun di awal tahun 2021, peduli ASD kembali bangkit dengan wajah baru di bulan Juli 2021 sebagai platform edukasi berbayar yang menyediakan layanan edukasi yang melibatkan orangtua anak ASD. Besar harapannya peduli ASD dapat terus bertumbuh menjadi platform edukasi yang dapat memberikan informasi berimbang dan dapat dipertanggung jawabkan kebenarannya. Selain itu, semoga keberadaan peduli ASD juga dapat mendorong orangtua anak ASD untuk tumbuh dan belajar bersama yang mana akan menjadi bekal untuk mereka menemani anak spesial yang sangat membutuhkan pertolongan keluarga dan orangtuanya
                            </p>
                            {/* <div className="row gy-3 gx-xl-8">
                                <div className="col-xl-6">
                                    <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                                        <li><span><i className="uil uil-check"></i></span><span>Aenean eu leo quam ornare curabitur blandit tempus.</span></li>
                                        <li className="mt-3"><span><i className="uil uil-check"></i></span><span>Nullam quis risus eget urna mollis ornare donec elit.</span></li>
                                    </ul>
                                </div>

                                <div className="col-xl-6">
                                    <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                                        <li><span><i className="uil uil-check"></i></span><span>Etiam porta sem malesuada magna mollis euismod.</span></li>
                                        <li className="mt-3"><span><i className="uil uil-check"></i></span><span>Fermentum massa vivamus faucibus amet euismod.</span></li>
                                    </ul>
                                </div>

                            </div> */}

                        </div>

                    </div>

                    <div className="row mb-5">
                        <div className="col-md-10 col-xl-8 col-xxl-7 mx-auto text-center">
                            <img src="./assets/img/icons/list.svg" className="svg-inject icon-svg icon-svg-md mb-4" alt="" />
                            <h2 className="display-4 mb-4 px-lg-14">Here are 3 working steps to organize our business projects.</h2>
                        </div>

                    </div>

                    <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
                        <div className="col-lg-6 order-lg-2">
                            <div className="card me-lg-6">
                                <div className="card-body p-6">
                                    <div className="d-flex flex-row">
                                        <div>
                                            <span className="icon btn btn-circle btn-lg btn-soft-primary disabled me-4"><span className="number">01</span></span>
                                        </div>
                                        <div>
                                            <h4 className="mb-1">Collect Ideas</h4>
                                            <p className="mb-0">Nulla vitae elit libero pharetra augue dapibus.</p>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="card ms-lg-13 mt-6">
                                <div className="card-body p-6">
                                    <div className="d-flex flex-row">
                                        <div>
                                            <span className="icon btn btn-circle btn-lg btn-soft-primary disabled me-4"><span className="number">02</span></span>
                                        </div>
                                        <div>
                                            <h4 className="mb-1">Data Analysis</h4>
                                            <p className="mb-0">Vivamus sagittis lacus vel augue laoreet.</p>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="card mx-lg-6 mt-6">
                                <div className="card-body p-6">
                                    <div className="d-flex flex-row">
                                        <div>
                                            <span className="icon btn btn-circle btn-lg btn-soft-primary disabled me-4"><span className="number">03</span></span>
                                        </div>
                                        <div>
                                            <h4 className="mb-1">Finalize Product</h4>
                                            <p className="mb-0">Cras mattis consectetur purus sit amet.</p>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>

                        <div className="col-lg-6">
                            <h2 className="display-6 mb-3">How It Works?</h2>
                            <p className="lead fs-lg pe-lg-5">Find out everything you need to know and more about how we create our business process models.</p>
                            <p>Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Nullam quis risus eget urna mollis ornare.</p>
                            <p className="mb-6">Nullam id dolor id nibh ultricies vehicula ut id elit. Vestibulum id ligula porta felis euismod semper. Aenean lacinia bibendum nulla sed consectetur. Sed posuere consectetur est at lobortis. Vestibulum id ligula porta felis.</p>
                            <a href="/" className="btn btn-primary rounded-pill mb-0">Learn More</a>
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
                                            <img className="rounded-circle w-15 mb-4" src="./assets/img/avatars/te2.jpg" srcSet="./assets/img/avatars/te2@2x.jpg 2x" alt="" />
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
                                            <img className="rounded-circle w-15 mb-4" src="/assets/img/gambar/team/profile-team.png" srcSet="/assets/img/gambar/team/profile-team.png" alt="" />
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
                                            <img className="rounded-circle w-15 mb-4" src="./assets/img/avatars/te5.jpg" srcSet="./assets/img/avatars/te5@2x.jpg 2x" alt="" />
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

export default AboutUsScreen
