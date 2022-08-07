import React from 'react'
import "react-multi-carousel/lib/styles.css";
import OurTeam from './OurTeam';

const AboutUsScreen = () => {
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

            <OurTeam/>
        </>

    )
}

export default AboutUsScreen
