import React from 'react'
import Carousel from "react-multi-carousel";
import { memberSocialMedia } from '../../model/MemberSocialMedia';


const OurTeam = () => {
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
                    <Carousel responsive={responsive} showDots={true} autoPlaySpeed={1000}>
                        <div className="item">
                            <div className="item-inner">
                                <div className="card">
                                    <div className="card-body">
                                        <img className="rounded-circle w-15 mb-4" src="/assets/img/gambar/team/isti.png" srcSet="/assets/img/gambar/team/isti.png" alt="" />
                                        <h4 className="mb-1">Isti Anindya</h4>
                                        <div className="meta mb-2">Founder</div>
                                        {/* <p className="mb-2">Biologi, FBio UGM (07) ; Ilmu Kedokteran Dasar dan Biomedis, FK-KMK UGM (14)</p> */}
                                        <nav className="nav social mb-0">
                                            <a href={memberSocialMedia.isti.instagram} target="_blank"><i className="uil uil-instagram"></i></a>
                                            <a href="#"><i class="uil uil-envelope"></i></a>
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
                                        <div className="meta mb-2">Co - Founder</div>
                                        {/* <p className="mb-2">Akuntansi, FEB UNPAD (07) </p> */}
                                        <nav className="nav social mb-0">
                                            <a href={memberSocialMedia.santi.instagram} target="_blank"><i className="uil uil-instagram"></i></a>
                                            <a href="#"><i class="uil uil-envelope"></i></a>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="item-inner">
                                <div className="card">
                                    <div className="card-body">
                                        <img className="rounded-circle w-15 mb-4" src="/assets/img/gambar/team/elga.png" srcSet="/assets/img/gambar/team/elga.png" alt="" />
                                        <h4 className="mb-1">Elga Ridlo Sinatriya</h4>
                                        <div className="meta mb-2">Web Developer</div>
                                        {/* <p className="mb-2">Fermentum massa justo sit amet risus morbi leo.</p> */}
                                        <nav className="nav social mb-0">
                                            <a href={memberSocialMedia.elga.instagram} target="_blank"><i className="uil uil-instagram"></i></a>
                                            <a href="#"><i class="uil uil-envelope"></i></a>
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
                                        <div className="meta mb-2">Web Developer</div>
                                        {/* <p className="mb-2">Elektronika dan Instrumentasi, FMIPA UGM (13)</p> */}
                                        <nav className="nav social mb-0">
                                            <a href={memberSocialMedia.habil.instagram} target="_blank"><i className="uil uil-instagram"></i></a>
                                            <a href="#"><i class="uil uil-envelope"></i></a>
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
                                        <div className="meta mb-2">Illustrator</div>
                                        {/* <p className="mb-2">Biologi, FMIPA UNILA (09) ; Ilmu Kedokteran Dasar dan Biomedis, FK-KMK UGM (14)</p> */}
                                        <nav className="nav social mb-0">
                                            <a href={memberSocialMedia.tia.instagram} target="_blank"><i className="uil uil-instagram"></i></a>
                                            <a href="#"><i class="uil uil-envelope"></i></a>
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
                                        <div className="meta mb-2">Contributor</div>
                                        {/* <p className="mb-2">Teknik Kimia, FT ITB (15)</p> */}
                                        <nav className="nav social mb-0">
                                            <a href={memberSocialMedia.sarah.instagram} target="_blank"><i className="uil uil-instagram"></i></a>
                                            <a href="#"><i class="uil uil-envelope"></i></a>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Carousel>
                </div>
            </div>
        </section>
    )
}

export default OurTeam