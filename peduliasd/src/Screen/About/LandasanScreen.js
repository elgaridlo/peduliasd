import React from 'react'

const LandasanScreen = () => {
    return (
        <>
            <section
                className="wrapper bg-gray"
                style={{ backgroundImage: '/assets/img/gambar/landasan_berdiri.png' }}
            >
                <figure
                    className="position-absoute"
                    style={{ bottom: '0', left: '0', zIndex: '2' }}
                >
                    <img src="/assets/img/gambar/landasan_berdiri.jpg" alt="" />
                </figure>
            </section>

            <section className="wrapper bg-light angled upper-end lower-end">
                <div className="container py-14 py-md-16">
                    <div className="row gx-lg-8 gx-xl-12 gy-10 mb-14 mb-md-17 align-items-center">
                        <div className="col-xl-6 mx-auto">
                            <h1 className="display-1 mb-4">Landasan Berdiri</h1>
                            {/* <p className="lead fs-lg mb-0">A company turning ideas into beautiful things.</p> */}
                        </div>
                        <div className="col-lg-12">
                            <img
                                src="./assets/img/icons/megaphone.svg"
                                className="svg-inject icon-svg icon-svg-md mb-4"
                                alt=""
                            />
                            <p className="mb-6" style={{ textAlign: 'justify' }}>
                                &emsp;&ensp;Peduli ASD berdiri atas kesadaran akan besarnya kebutuhan keluarga individu autistik terhadap informasi yang valid, berbasis sains, dan dapat dipercaya. Di tengah maraknya informasi yang tidak terverifikasi dan sering kali saling bertentangan, banyak orang tua merasa bingung, cemas, dan tidak memiliki pegangan yang jelas dalam mendampingi anak autistik.
                            </p>
                            <p className="mb-6" style={{ textAlign: 'justify' }}>
                                &emsp;&ensp;Peduli ASD berawal pada 30 April 2020 sebagai platform edukasi digital yang berfokus pada penyebaran informasi ilmiah seputar Autism Spectrum Disorder (ASD). Pada fase awal, Peduli ASD hadir sebagai ruang belajar bersama yang terbuka, dengan tujuan membantu orang tua dan masyarakat memahami autisme secara lebih utuh dan manusiawi.
                            </p>
                            <p className="mb-6" style={{ textAlign: 'justify' }}>
                                &emsp;&ensp;Seiring waktu, kebutuhan akan edukasi yang lebih terstruktur, berkelanjutan, dan akuntabel semakin nyata. Hal ini mendorong Peduli ASD untuk bertransformasi secara kelembagaan dan beroperasi secara resmi sebagai PT Peduli Autisme Indonesia pada tanggal 17 Februari 2025. Transformasi ini dilakukan agar Peduli ASD dapat menjalankan perannya secara profesional, memiliki tata kelola yang jelas, serta mampu mengembangkan layanan, riset, dan teknologi secara berkelanjutan.
                            </p>
                            <p className="mb-6" style={{ textAlign: 'justify' }}>
                                &emsp;&ensp;Landasan berdirinya Peduli ASD adalah keyakinan bahwa individu autistik adalah manusia yang utuh, dengan hak untuk tumbuh, belajar, berkomunikasi, dan berperan dalam masyarakat. Oleh karena itu, setiap langkah Peduli ASD dibangun di atas nilai empati, ilmu pengetahuan, dan komitmen untuk mengurangi stigma serta memperluas akses edukasi yang berkualitas.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default LandasanScreen
