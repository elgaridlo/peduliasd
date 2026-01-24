/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { memberSocialMedia } from '../../model/MemberSocialMedia';


const OurTeam = () => {
    
    return (
        <section className="wrapper bg-light">
            <div className="container py-14 py-md-16">
                <div className="row mb-3">
                    <div className="col-md-10 col-xl-9 col-xxl-7 mx-auto text-center">
                        <img src="./assets/img/icons/team.svg" className="svg-inject icon-svg icon-svg-md mb-4" alt="" />
                        <h2 className="display-4 mb-3 px-lg-14">Meet Our Team</h2>
                    </div>
                </div>
                <div className="position-relative">
                    <div className="shape rounded-circle bg-soft-yellow rellax w-16 h-16" data-rellax-speed="1" style={{ bottom: '0.5rem', right: '-1.7rem' }}></div>
                    <div className="shape rounded-circle bg-line red rellax w-16 h-16" data-rellax-speed="1" style={{ top: '0.5rem', left: '-1.7rem' }}></div>
                    <div className="row g-4">
                        <div className="col-md-6 col-lg-4">
                            <div className="card h-100">
                                <div className="card-body text-center">
                                    <img className="rounded-circle w-17 mb-4" src="/assets/img/new/Isti.png" srcSet="/assets/img/new/Isti.png" alt="" />
                                    <nav className="nav social justify-content-center mb-3">
                                        <a href={memberSocialMedia.isti.instagram} target="_blank" rel="noreferrer"><i className="uil uil-instagram"></i></a>
                                        <a href={`mailto:`+ memberSocialMedia.isti.email}><i className="uil uil-envelope"></i></a>
                                        <a href="https://www.linkedin.com/in/isti-anindya-a2b71a154/"><i className="uil uil-linkedin"></i></a>
                                    </nav>
                                    <h4 className="mb-1">Dr. Isti Anindya, S.Si., M.Sc</h4>
                                    <div className="meta mb-2">Founder & Chief Executive Officer (CEO)</div>
                                    <p className="mb-2 text-muted">Memimpin visi, arah strategis, dan tata kelola perusahaan. Berbasis latar belakang biomedik dan pengalaman lived experience sebagai orang tua individu autistik, CEO memastikan setiap keputusan Peduli ASD berlandaskan sains, etika, dan dampak sosial berkelanjutan.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="card h-100">
                                <div className="card-body text-center">
                                    <img className="rounded-circle w-17 mb-4" src="/assets/img/new/Santi.png" srcSet="/assets/img/new/Santi.png" alt="" />
                                    <nav className="nav social justify-content-center mb-3">
                                        <a href={memberSocialMedia.santi.instagram} target="_blank" rel="noreferrer"><i className="uil uil-instagram"></i></a>
                                        <a href={`mailto:`+ memberSocialMedia.santi.email}><i className="uil uil-envelope"></i></a>
                                    </nav>
                                    <h4 className="mb-1">Nur Endah Santi, S.E</h4>
                                    <div className="meta mb-2">Chief Financial & Administration Officer (CFAO)</div>
                                    <p className="mb-2 text-muted">Bertanggung jawab atas pengelolaan keuangan, administrasi, dan kepatuhan. CFAO memastikan transparansi, akuntabilitas serta keberlanjutan finansial perusahaan.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="card h-100">
                                <div className="card-body text-center">
                                    <img className="rounded-circle w-17 mb-4" src="/assets/img/new/Navilla.png" srcSet="/assets/img/new/Navilla.png" alt="" />
                                    <nav className="nav social justify-content-center mb-3">
                                        <a href={memberSocialMedia.novika.instagram} target="_blank" rel="noreferrer"><i className="uil uil-instagram"></i></a>
                                        <a href={`mailto:`+ memberSocialMedia.novika.email}><i className="uil uil-envelope"></i></a>
                                        <a href="https://www.linkedin.com/in/nandiass/"><i className="uil uil-linkedin"></i></a>
                                    </nav>
                                    <h4 className="mb-1">Ns. Nandia Septiyorini, S.Kep., M.Sc</h4>
                                    <div className="meta mb-2">Chief Research & Clinical Officer (CRCO)</div>
                                    <p className="mb-2 text-muted">Memimpin arah riset dan validasi ilmiah seluruh produk dan layanan. CRCO mengoordinasikan Pusat Studi IARC untuk memastikan integritas ilmiah, etika riset, dan relevansi klinis dalam setiap inovasi.</p>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="card h-100">
                                <div className="card-body text-center">
                                    <img className="rounded-circle w-17 mb-4" src="/assets/img/new/Tia.png" srcSet="/assets/img/new/Tia.png" alt="" />
                                    <nav className="nav social justify-content-center mb-3">
                                        <a href={memberSocialMedia.tia.instagram} target="_blank" rel="noreferrer"><i className="uil uil-instagram"></i></a>
                                        <a href={`mailto:`+ memberSocialMedia.tia.email}><i className="uil uil-envelope"></i></a>
                                        <a href="https://www.linkedin.com/in/tia-wida-ekaputri-hz-b4b885231/"><i className="uil uil-linkedin"></i></a>
                                    </nav>
                                    <h4 className="mb-1">Tia Wida Ekaputri HZ, S.Si., M.Sc</h4>
                                    <div className="meta mb-2">Chief Product Officer (CPO)</div>
                                    <p className="mb-2 text-muted">Mengembangkan produk edukasi dan pengalaman belajar yang inklusif. CPO menerjemahkan riset dan kebutuhan pengguna menjadi program dan kurikulum yang aplikatif serta berdampak.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="card h-100">
                                <div className="card-body text-center">
                                    <img className="rounded-circle w-17 mb-4" src="/assets/img/new/Missyarah.png" srcSet="/assets/img/new/Missyarah.png" alt="" />
                                    <nav className="nav social justify-content-center mb-3">
                                        <a href={memberSocialMedia.missyarah.instagram} target="_blank" rel="noreferrer"><i className="uil uil-instagram"></i></a>
                                        <a href={`mailto:`+ memberSocialMedia.missyarah.email}><i className="uil uil-envelope"></i></a>
                                    </nav>
                                    <h4 className="mb-1">Missyarah, S.Kom</h4>
                                    <div className="meta mb-2">Community & Engagement</div>
                                    <p className="mb-2 text-muted">Mengelola hubungan dengan komunitas orang tua, sekolah, mitra, dan publik. Menjalankan program engagement, edukasi publik, dan pengumpulan insight untuk pengembangan layanan.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="card h-100">
                                <div className="card-body text-center">
                                    <img className="rounded-circle w-17 mb-4" src="/assets/img/new/Habil.png" srcSet="/assets/img/new/Habil.png" alt="" />
                                    <nav className="nav social justify-content-center mb-3">
                                        <a href={memberSocialMedia.nandia.instagram} target="_blank" rel="noreferrer"><i className="uil uil-instagram"></i></a>
                                        <a href={`mailto:`+ memberSocialMedia.nandia.email}><i className="uil uil-envelope"></i></a>
                                    </nav>
                                    <h4 className="mb-1">Isfan Azhabil, S.Si</h4>
                                    <div className="meta mb-2">Business Development</div>
                                    <p className="mb-2 text-muted">Mengembangkan peluang kerja sama dan bisnis strategis; mengoordinasikan implementasi kemitraan; serta memastikan peluang bisnis berjalan efektif dan berkelanjutan.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="card h-100">
                                <div className="card-body text-center">
                                    <img className="rounded-circle w-17 mb-4" src="/assets/img/new/Elga.png" srcSet="/assets/img/new/Elga.png" alt="" />
                                    <nav className="nav social justify-content-center mb-3">
                                        <a href={memberSocialMedia.elga.instagram} target="_blank" rel="noreferrer"><i className="uil uil-instagram"></i></a>
                                        <a href={`mailto:`+ memberSocialMedia.elga.email}><i className="uil uil-envelope"></i></a>
                                    </nav>
                                    <h4 className="mb-1">Elga Ridlo Sinatriya, S.Si</h4>
                                    <div className="meta mb-2">Chief Technology Officer (CTO)</div>
                                    <p className="mb-2 text-muted">Memimpin pengembangan dan keberlanjutan teknologi perusahaan. CTO memastikan sistem digital—termasuk aplikasi dan platform—aman, skalabel, dan ramah neurodiversitas.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="card h-100">
                                <div className="card-body text-center">
                                    <img className="rounded-circle w-17 mb-4" src="/assets/img/new/Royyan.png" srcSet="/assets/img/new/Royyan.png" alt="" />
                                    <nav className="nav social justify-content-center mb-3">
                                        <a href="#"><i className="uil uil-instagram"></i></a>
                                        <a href="#"><i className="uil uil-envelope"></i></a>
                                    </nav>
                                    <h4 className="mb-1">Muhammad Royyan</h4>
                                    <div className="meta mb-2">Frontend Developer</div>
                                    <p className="mb-2 text-muted">Mengembangkan antarmuka aplikasi dan website yang responsif dan mudah digunakan. Berfokus pada pengalaman pengguna yang nyaman dan aksesibel.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="card h-100">
                                <div className="card-body text-center">
                                    <img className="rounded-circle w-17 mb-4" src="/assets/img/new/Herofi.png" srcSet="/assets/img/new/Herofi.png" alt="" />
                                    <nav className="nav social justify-content-center mb-3">
                                        <a href="#"><i className="uil uil-instagram"></i></a>
                                        <a href="#"><i className="uil uil-envelope"></i></a>
                                    </nav>
                                    <h4 className="mb-1">Herofi Azhar, S.Si</h4>
                                    <div className="meta mb-2">Chief Operating Officer (COO)</div>
                                    <p className="mb-2 text-muted">Mengelola operasional harian, koordinasi lintas divisi, dan implementasi strategi perusahaan. COO memastikan seluruh program berjalan efisien, tepat waktu, dan selaras dengan standar kualitas Peduli ASD.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="card h-100">
                                <div className="card-body text-center">
                                    <img className="rounded-circle w-17 mb-4" src="/assets/img/new/Fateh.png" srcSet="/assets/img/new/Fateh.png" alt="" />
                                    <nav className="nav social justify-content-center mb-3">
                                        <a href="#"><i className="uil uil-instagram"></i></a>
                                        <a href="#"><i className="uil uil-envelope"></i></a>
                                    </nav>
                                    <h4 className="mb-1">Muhammad Alfateh Ajjauzi</h4>
                                    <div className="meta mb-2">UX & Learning Experience</div>
                                    <p className="mb-2 text-muted">Merancang alur pembelajaran dan pengalaman pengguna yang ramah neurodiversitas. Menggunakan pendekatan user-centered berbasis data dan umpan balik pengguna.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="card h-100">
                                <div className="card-body text-center">
                                    <img className="rounded-circle w-17 mb-4" src="/assets/img/new/Navilla.png" srcSet="/assets/img/new/Navilla.png" alt="" />
                                    <nav className="nav social justify-content-center mb-3">
                                        <a href="#"><i className="uil uil-instagram"></i></a>
                                        <a href="#"><i className="uil uil-envelope"></i></a>
                                    </nav>
                                    <h4 className="mb-1">Navilla Khairun Nisa</h4>
                                    <div className="meta mb-2">Administration & Compliance</div>
                                    <p className="mb-2 text-muted">Mengelola dokumen legal, perizinan, dan arsip perusahaan. Memastikan kepatuhan SOP dan dukungan administratif lintas divisi.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurTeam