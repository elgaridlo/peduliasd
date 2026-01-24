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
                <figure className="position-absoute" style={{ bottom: "0", left: "0", zIndex: "2", width: "100%" }}><img src="./assets/img/new/peduliasd.webp" alt="" style={{ maxHeight: "700px", objectFit: "cover", width: "100%", height: "200px" }} /></figure>
            </section>

            <section className="wrapper bg-light angled upper-end lower-end">
                <div className="container py-6 py-md-6">
                    <div className="row gx-lg-8 gx-xl-12 gy-10 mb-14 mb-md-17 align-items-center">
                        
                        <div className="col-lg-12">
                            <img src="./assets/img/icons/megaphone.svg" className="svg-inject icon-svg icon-svg-md mb-4" alt="" />
                            
                            <p className="mb-6" style={{ textAlign: 'justify' }}>
                                &emsp;&ensp;Peduli ASD adalah Autism EdTech berbasis sains yang berkomitmen mendukung individu autistik dan keluarganya melalui edukasi, riset, teknologi, dan advokasi yang inklusif. Peduli ASD bermula pada 30 April 2020, bertepatan dengan Bulan Peduli Autisme Sedunia. Pada fase awal, Peduli ASD hadir sebagai platform edukasi digital tanpa badan hukum, yang berfokus pada penyediaan informasi berbasis ilmu pengetahuan mengenai Autism Spectrum Disorder (ASD) bagi orang tua dan masyarakat.
                            </p>
                            <p className="mb-6" style={{ textAlign: 'justify' }}>
                                &emsp;&ensp;Seiring waktu, kebutuhan akan edukasi yang lebih terstruktur, akuntabel, dan berkelanjutan semakin meningkat. Peduli ASD berkembang dari media informasi satu arah menjadi platform edukasi dua arah yang melibatkan orang tua, profesional, dan ahli lintas disiplin. Perkembangan ini mendorong Peduli ASD untuk melakukan transformasi kelembagaan agar mampu memberikan dampak yang lebih luas dan terukur.
                            </p>
                            <h3 className="display-6 mb-3">Transformasi Menjadi Badan Hukum</h3>
                            <p className="mb-6" style={{ textAlign: 'justify' }}>
                                &emsp;&ensp;Sebagai bentuk komitmen terhadap profesionalisme, tata kelola yang baik, dan keberlanjutan jangka panjang, Peduli ASD secara resmi bertransformasi menjadi badan hukum dan beroperasi sebagai PT Peduli Autisme Indonesia. Transformasi ini menandai perubahan penting: dari gerakan edukasi informal menjadi organisasi profesional berbadan hukum, dari aktivitas berbasis relawan menjadi sistem layanan yang terstruktur dan akuntabel, serta dari platform edukasi digital menjadi ekosistem Autism EdTech berbasis sains. Sebagai PT, Peduli ASD kini menjalankan kegiatan usaha secara legal, transparan, dan bertanggung jawab, termasuk pengembangan produk teknologi, layanan edukasi, riset, serta kerja sama dengan berbagai institusi dan mitra strategis.
                            </p>
                            <h3 className="display-6 mb-3">Siapa Kami Hari Ini</h3>
                            <p className="mb-6" style={{ textAlign: 'justify' }}>
                                &emsp;&ensp;Saat ini, Peduli ASD mengelola berbagai program dan layanan yang saling terintegrasi, antara lain: Parent Education Program (PEP) untuk pemberdayaan orang tua, SWARA App, aplikasi komunikasi berbasis Augmentative and Alternative Communication (AAC), Autism Telehealth Services, Festival Peduli Autisme (FPA) sebagai ruang edukasi publik dan advokasi, serta Pusat Studi IARC (Indonesia Autism Research Center) sebagai landasan riset dan pengembangan ilmu pengetahuan. Seluruh produk dan layanan Peduli ASD dikembangkan dengan pendekatan berbasis sains, empatik, dan inklusif, serta mengedepankan kebutuhan nyata individu autistik dan keluarganya di Indonesia.
                            </p>
                            <h3 className="display-6 mb-3">Komitmen Kami</h3>
                            <p className="mb-6" style={{ textAlign: 'justify' }}>
                                &emsp;&ensp;Peduli ASD percaya bahwa individu autistik adalah manusia yang utuh, bermartabat, dan memiliki hak untuk tumbuh, belajar, serta berperan aktif dalam masyarakat. Melalui transformasi menjadi PT, kami menegaskan komitmen untuk: menghadirkan edukasi yang valid dan dapat dipertanggungjawabkan secara ilmiah, membangun sistem layanan yang profesional dan berkelanjutan, serta berkontribusi nyata dalam upaya mengurangi stigma dan membangun masyarakat yang inklusif. Peduli ASD hadir bukan hanya sebagai platform, tetapi sebagai mitra perjalanan bagi individu autistik, keluarga, dan lingkungan yang membersamai mereka.
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
