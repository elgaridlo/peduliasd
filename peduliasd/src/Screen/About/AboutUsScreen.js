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
                <div className="container py-6 py-md-6">
                    <div className="row gx-lg-8 gx-xl-12 gy-10 mb-14 mb-md-17 align-items-center">
                        
                        <div className="col-lg-12">
                            <img src="./assets/img/icons/megaphone.svg" className="svg-inject icon-svg icon-svg-md mb-4" alt="" />
                            <h2 className="display-4 mb-3">Siapa Kami?</h2>
                            <p className="mb-6" style={{ textAlign: 'justify' }}>
                                &emsp;&ensp;Autism Spectrum Disorder (ASD) adalah diagnosis resmi yang dikeluarkan oleh APA pada tahun 2013 yang memiliki kriteria-kriteria khusus untuk mengelompokkan anak-anak dengan gangguan autistik ke dalam satu payung yang sama. Sebelum istilah ASD diperbaharui, masyarakat masih menggunakan istilah autisme atau autis pada anak-anak yang memiliki gangguan perkembangan dan memenuhi kriteria khas autistik. Setelah istilah ini digunakan lebih dari 8 tahun, masyarakat mulai menggunakan “ASD” sebagai penyebutan yang umum terhadap anak-anak yang terdiagnosis dan tumbuh dengan kondisi autistik. Namun, tidak semua lapisan masyarakat memahami terkait pergantian istilah ASD. Sehingga dengan istilah “autis” stigma terhadap kelompok dengan kondisi ASD masih sangat sering ditemui di dunia. Penggunaan istilah yang tepat dan edukasi secara ilmiah kepada masyakarat tentu dapat menjadi salah satu cara untuk mengurangi stigma masyarakat yang dapat menurunkan kualitas kehidupan keluarga yang mengasuh anak dengan kondisi autistik.
                            </p>
                            <p className="mb-6" style={{ textAlign: 'justify' }}>
                                &emsp;&ensp;Banyaknya beredar informasi yang kurang ilmiah atau tergolong pseudoscience  di internet terkait ASD membuat orang-orang yang bersentuhan erat dengan individu ASD mengalami kebingungan saat memilih informasi mana yang layak dipercaya. Sebagian besar saran yang diberikan kadang bertolak belakang dengan ilmu pengetahuan yang telah ada. Hal inilah yang mendorong Isti Anindya (CEO Peduli ASD) membentuk platform edukasi Peduli ASD. Selain berperan sebagi CEO, beliau juga merupakan ibu dari anak autistik bernama Fayyaza yang tahun ini berusia 9 tahun. Berlatar belakang pendidikan di bidang biologi dan ilmu kedokteran dasar, beliau yang juga berprofesi sebagai seorang dosen ilmu biomedis di Universitas Indonesia Maju menjawab keresahannya terkait informasi seputar ASD yang seringkali tidak ilmiah dan memiliki landasan ilmu pengetahuan yang kuat melalui peduli ASD. Bagi beliau memberikan informasi yang valid dengan sumber yang dapat dipercaya serta tidak merekayasa informasi untuk membuat bingung para orangtua anak autistik adalah semangat yang pada akhirnya membawa peduli ASD berjalan baik sejauh ini.
                            </p>
                            <p className="mb-6" style={{ textAlign: 'justify' }}>
                                &emsp;&ensp;Ide menciptakan Peduli ASD sebagai sarana edukasi tercetus pada tanggal 30 April 2020 yang mana tepat diakhir bulan peduli Autisme yang dirayakan seluruh dunia. Awalnya platform ini diciptakan sebagai media satu arah yang menyimpan informasi seputar ASD. Perlahan lambat laun berubah menjadi media edukasi dua arah karena foundernya mencoba menyembatani orangtua dengan orang-orang yang dapat memberikan informasi yang memiliki landasan ilmiah yang baik. Meskipun platform ini sempat tidak aktif setengah tahun di awal tahun 2021, peduli ASD kembali bangkit dengan wajah baru di bulan Juli 2021 sebagai platform edukasi berbayar yang menyediakan layanan edukasi yang melibatkan orangtua anak ASD. Besar harapannya peduli ASD dapat terus bertumbuh menjadi platform edukasi yang dapat memberikan informasi berimbang dan dapat dipertanggung jawabkan kebenarannya. Selain itu, semoga keberadaan peduli ASD juga dapat mendorong orangtua anak ASD untuk tumbuh dan belajar bersama yang mana akan menjadi bekal untuk mereka menemani anak spesial yang sangat membutuhkan pertolongan keluarga dan orangtuanya.
                            </p>

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

export default AboutUsScreen
