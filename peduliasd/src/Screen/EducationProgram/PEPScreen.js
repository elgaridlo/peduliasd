import React from 'react'

const PEPScreen = () => {
    return (
        <>
            <section className="wrapper bg-light">
                <div className="container py-14 py-md-16">
                    <div className="row gx-lg-8 gx-xl-12 gy-10 mb-4 align-items-center">
                        <div className="col-lg-6 position-relative order-lg-2">
                            <div className="shape bg-dot primary rellax w-16 h-20" data-rellax-speed="1" style={{ top: '3rem', left: '5.5rem' }}></div>
                            <div className="overlap-grid overlap-grid-2">
                                <div className="item">
                                    <figure className="rounded shadow"><img src="./assets/img/photos/about2.jpg" srcSet="/assets/img/photos/about2@2x.jpg 2x" alt=""></img></figure>
                                </div>
                                <div className="item">
                                    <figure className="rounded shadow"><img src="./assets/img/photos/about3.jpg" srcSet="/assets/img/photos/about3@2x.jpg 2x" alt=""></img></figure>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <img src="./assets/img/icons/megaphone.svg" className="svg-inject icon-svg icon-svg-md mb-4" alt="" />
                            <h2 className="display-5 mb-3">Parents Education Programme</h2>
                            <p className="mb-6 text-justify">
                                Program edukasi intensif seputar Autism Spectrum Disorder (ASD) yang berlangsung selama 1 semester (6 bulan). Peserta dibatasi maksimal 10 orang per semester
                                dan akan berjalan ketika peserta di atas 5 orang. Peserta berasal dari orangtua individu autistik dan orang-orang yang berada dalam lingkungan yang bersentuhan
                                langsung dengan individu ASD, seperti : guru, terapis, pengasuh, keluarga, dan lainnya. Awal semester perdana berjalan per tanggal 1 Juli 2022 dan berakhir Desember 2022.
                                Adapun materi kelas akan diberikan setiap akhir pekan (120 menit per pertemuan) dengan penjabaran materi sebagai berikut :
                            </p>
                            <div className="row gy-3 gx-xl-8">
                                <div className="col-xl-12">
                                    <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                                        <li><span><i>1</i></span><span className="fw-bolder">Materi Pengantar tentang Autism Spectrum Diorder (1 kali pertemuan)</span></li>
                                        <li className="mt-3"><span><i>2</i></span><span className="fw-bolder">Materi Kemandirian Anak Autistik (6 kali Pertemuan)</span></li>
                                        <ul className="unordered-list bullet-primary" style={{ paddingLeft: '1rem' }}>
                                            <li>Kemandirian : Daily Living Skill (Dasar) 2 kali pertemuan</li>
                                            <li>Kemandirian : Daily Living Skill (Lanjutan) 2 kali pertemuan</li>
                                            <li>Workshop Stimulasi Skill Kemandirian Anak Autistik 2 kali pertemuan</li>
                                        </ul>
                                    </ul>
                                </div>
                                <div className="col-xl-12">
                                    <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                                        <li><span><i>3</i></span><span className="fw-bolder">Materi Persiapan Sekolah Anak Autistik (4 kali pertemuan)</span></li>
                                        <ul className="unordered-list bullet-primary" style={{ paddingLeft: '1rem' }}>
                                            <li>Persiapan Sekolah Anak Autistik  1 kali pertemuan</li>
                                            <li>Workshop Mengajarkan Anak Autistik Calistung 3 kali pertemuan</li>
                                        </ul>
                                        <li className="mt-3"><span><i>4</i></span><span className="fw-bolder">Materi Kesehatan Anak Autistik (7 kali pertemuan)</span></li>
                                        <ul className="unordered-list bullet-primary" style={{ paddingLeft: '1rem' }}>
                                            <li>Masalah Kesehatan Individu Autistik 1 kali pertemuan</li>
                                            <li>Persiapan Pubertas Anak Autistik 2 kali pertemuan </li>
                                            <li>Workshop Mengajarkan Pubertas Anak Autistik 2 kali pertemuan</li>
                                            <li>Kesehatan Psikis Anak Autistik 1 kali pertemuan</li>
                                            <li>Workshop Mengajarkan Anak Memahami Jenis-jenis Emosi 1 kali pertemuan</li>
                                        </ul>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row gx-lg-8 gx-xl-12 gy-10 mb-14 align-items-center">
                        <p className="mb-6 text-justify">
                            Total pertemuan sebanyak 18 pertemuan selama 6 bulan dengan durasi pertemuan 3-4 kali per bulan. Jadwal intensi kelas 
                            dapat berubah sesuai kesepakatan peserta. Program ini hanya dibuka 1 kelas (maksimal 10 peserta) setiap bulannya dengan 
                            biaya sebesar Rp. 1.000.000,- yang dibayarkan di awal semester. Adapun fasilitas Program Kelas Edukasi ini berupa sertifikat, 
                            materi edukasi, rekaman zoom meeting setiap pertemuan, dan ilmu serta tambahan skill yang bermanfaat dalam mendampingi anak autistik. 
                            Program ini diisi oleh peneliti seputar ASD, terapis, psikolog klinis anak, dan tenaga kesehatan lainnya yang ahli di bidangnya masing-masing.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PEPScreen