import React from 'react'

const AboutUsScreen = () => {

    return (
        <>

            <section className="wrapper bg-gray">
                <div className="container pt-10 pt-md-14 text-center">
                    <div className="row">
                        <div className="col-xl-6 mx-auto">
                            <h1 className="display-1 mb-4">PEDULI ASD adalah xxxxxxxxxxxx</h1>
                            <p className="lead fs-lg mb-0">A company turning ideas into beautiful things.</p>
                        </div>

                    </div>

                </div>
                <figure className="position-absoute" style={{bottom: "0", left:"0", zIndex:"2"}}><img src="./assets/img/photos/bg12.jpg" alt="" /></figure>
            </section>

            <section className="wrapper bg-light angled upper-end lower-end">
                <div className="container py-14 py-md-16">
                    <div className="row gx-lg-8 gx-xl-12 gy-10 mb-14 mb-md-17 align-items-center">
                        <div className="col-lg-6 position-relative order-lg-2">
                            <div className="shape bg-dot primary rellax w-16 h-20" data-rellax-speed="1" style={{top: "3rem",left:"5.5rem"}}></div>
                            <div className="overlap-grid overlap-grid-2">
                                <div className="item">
                                    <figure className="rounded shadow"><img src="./assets/img/photos/about2.jpg" srcSet="./assets/img/photos/about2@2x.jpg 2x" alt=""></img></figure>
                                </div>
                                <div className="item">
                                    <figure className="rounded shadow"><img src="./assets/img/photos/about3.jpg" srcSet="./assets/img/photos/about3@2x.jpg 2x" alt=""></img></figure>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <img src="./assets/img/icons/megaphone.svg" className="svg-inject icon-svg icon-svg-md mb-4" alt="" />
                            <h2 className="display-4 mb-3">Who Are We?</h2>
                            <p className="lead fs-lg">We are a digital and branding company that believes in the power of creative strategy and along with great design.</p>
                            <p className="mb-6">Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</p>
                            <div className="row gy-3 gx-xl-8">
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

                            </div>

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

            <section className="wrapper bg-soft-primary">
                <div className="container pt-16 pb-14 pb-md-0">
                    <div className="row gx-lg-8 gx-xl-0 align-items-center">
                        <div className="col-md-5 col-lg-4 offset-lg-1 d-none d-md-flex position-relative">
                            <div className="shape rounded-circle bg-pale-primary rellax w-21 h-21" data-rellax-speed="1" style={{top:"7rem", left:"1rem"}}></div>
                            <figure><img src="./assets/img/photos/co1.png" srcSet="./assets/img/photos/co1@2x.png 2x" alt="" /></figure>
                        </div>

                        <div className="col-md-7 col-lg-6 col-xl-6 col-xxl-5 offset-xl-1">
                            <div className="basic-slider owl-carousel dots-start gap-small mt-6" data-margin="30">
                                <div className="item">
                                    <blockquote className="icon fs-lg">
                                        <p>“Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum ligula porta felis euismod semper. Cras justo odio consectetur nulla dapibus curabitur blandit.”</p>
                                        <div className="blockquote-details">
                                            <div className="info ps-0">
                                                <h5 className="mb-1">Coriss Ambady</h5>
                                                <p className="mb-0">Financial Analyst</p>
                                            </div>
                                        </div>
                                    </blockquote>
                                </div>

                                <div className="item">
                                    <blockquote className="icon fs-lg">
                                        <p>“Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum ligula porta felis euismod semper. Cras justo odio consectetur adipiscing dapibus curabitur blandit.”</p>
                                        <div className="blockquote-details">
                                            <div className="info ps-0">
                                                <h5 className="mb-1">Cory Zamora</h5>
                                                <p className="mb-0">Marketing Specialist</p>
                                            </div>
                                        </div>
                                    </blockquote>
                                </div>

                                <div className="item">
                                    <blockquote className="icon fs-lg">
                                        <p>“Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum ligula porta felis euismod semper. Cras justo odio consectetur adipiscing dapibus curabitur blandit.”</p>
                                        <div className="blockquote-details">
                                            <div className="info ps-0">
                                                <h5 className="mb-1">Nikolas Brooten</h5>
                                                <p className="mb-0">Sales Manager</p>
                                            </div>
                                        </div>
                                    </blockquote>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            <section className="wrapper bg-light">
                <div className="container py-14 py-md-16">
                    <div className="row mb-3">
                        <div className="col-md-10 col-xl-9 col-xxl-7 mx-auto text-center">
                            <img src="./assets/img/icons/team.svg" className="svg-inject icon-svg icon-svg-md mb-4" alt="" />
                            <h2 className="display-4 mb-3 px-lg-14">Save your time and money by choosing our professional team.</h2>
                        </div>

                    </div>

                    <div className="position-relative">
                        <div className="shape rounded-circle bg-soft-yellow rellax w-16 h-16" data-rellax-speed="1" style={{bottom:"0.5rem", right:"-1.7rem"}}></div>
                        <div className="shape rounded-circle bg-line red rellax w-16 h-16" data-rellax-speed="1" style={{top:"0.5rem", left:"-1.7rem"}}></div>
                        <div className="carousel owl-carousel gap-small" data-margin="0" data-dots="true" data-autoplay="false" data-autoplay-timeout="5000" data-responsive='{"0":{"items": "1"}, "768":{"items": "2"}, "992":{"items": "3"}, "1400":{"items": "4"}}'>
                            <div className="item">
                                <div className="item-inner">
                                    <div className="card">
                                        <div className="card-body">
                                            <img className="rounded-circle w-15 mb-4" src="./assets/img/avatars/te1.jpg" srcSet="./assets/img/avatars/te1@2x.jpg 2x" alt="" />
                                            <h4 className="mb-1">Coriss Ambady</h4>
                                            <div className="meta mb-2">Financial Analyst</div>
                                            <p className="mb-2">Fermentum massa justo sit amet risus morbi leo.</p>
                                            <nav className="nav social mb-0">
                                                <a href="/"><i className="uil uil-twitter"></i></a>
                                                <a href="/"><i className="uil uil-facebook-f"></i></a>
                                                <a href="/"><i className="uil uil-dribbble"></i></a>
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
                                            <h4 className="mb-1">Cory Zamora</h4>
                                            <div className="meta mb-2">Marketing Specialist</div>
                                            <p className="mb-2">Fermentum massa justo sit amet risus morbi leo.</p>
                                            <nav className="nav social mb-0">
                                                <a href="/"><i className="uil uil-twitter"></i></a>
                                                <a href="/"><i className="uil uil-facebook-f"></i></a>
                                                <a href="/"><i className="uil uil-dribbble"></i></a>
                                            </nav>

                                        </div>

                                    </div>

                                </div>

                            </div>

                            <div className="item">
                                <div className="item-inner">
                                    <div className="card">
                                        <div className="card-body">
                                            <img className="rounded-circle w-15 mb-4" src="./assets/img/avatars/te3.jpg" srcSet="./assets/img/avatars/te3@2x.jpg 2x" alt="" />
                                            <h4 className="mb-1">Nikolas Brooten</h4>
                                            <div className="meta mb-2">Sales Manager</div>
                                            <p className="mb-2">Fermentum massa justo sit amet risus morbi leo.</p>
                                            <nav className="nav social mb-0">
                                                <a href="/"><i className="uil uil-twitter"></i></a>
                                                <a href="/"><i className="uil uil-facebook-f"></i></a>
                                                <a href="/"><i className="uil uil-dribbble"></i></a>
                                            </nav>

                                        </div>

                                    </div>

                                </div>

                            </div>

                            <div className="item">
                                <div className="item-inner">
                                    <div className="card">
                                        <div className="card-body">
                                            <img className="rounded-circle w-15 mb-4" src="./assets/img/avatars/te4.jpg" srcSet="./assets/img/avatars/te4@2x.jpg 2x" alt="" />
                                            <h4 className="mb-1">Jackie Sanders</h4>
                                            <div className="meta mb-2">Investment Planner</div>
                                            <p className="mb-2">Fermentum massa justo sit amet risus morbi leo.</p>
                                            <nav className="nav social mb-0">
                                                <a href="/"><i className="uil uil-twitter"></i></a>
                                                <a href="/"><i className="uil uil-facebook-f"></i></a>
                                                <a href="/"><i className="uil uil-dribbble"></i></a>
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
                                            <h4 className="mb-1">Laura Widerski</h4>
                                            <div className="meta mb-2">Sales Specialist</div>
                                            <p className="mb-2">Fermentum massa justo sit amet risus morbi leo.</p>
                                            <nav className="nav social mb-0">
                                                <a href="/"><i className="uil uil-twitter"></i></a>
                                                <a href="/"><i className="uil uil-facebook-f"></i></a>
                                                <a href="/"><i className="uil uil-dribbble"></i></a>
                                            </nav>

                                        </div>

                                    </div>

                                </div>

                            </div>

                            <div className="item">
                                <div className="item-inner">
                                    <div className="card">
                                        <div className="card-body">
                                            <img className="rounded-circle w-15 mb-4" src="./assets/img/avatars/te6.jpg" srcSet="./assets/img/avatars/te6@2x.jpg 2x" alt="" />
                                            <h4 className="mb-1">Tina Geller</h4>
                                            <div className="meta mb-2">Financial Analyst</div>
                                            <p className="mb-2">Fermentum massa justo sit amet risus morbi leo.</p>
                                            <nav className="nav social mb-0">
                                                <a href="/"><i className="uil uil-twitter"></i></a>
                                                <a href="/"><i className="uil uil-facebook-f"></i></a>
                                                <a href="/"><i className="uil uil-dribbble"></i></a>
                                            </nav>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            <section className="wrapper bg-soft-primary">
                <div className="container py-14 py-md-16">
                    <div className="row mb-10">
                        <div className="col-xl-10 mx-auto">
                            <div className="row align-items-center counter-wrapper gy-6 text-center">
                                <div className="col-md-3">
                                    <img src="./assets/img/icons/check.svg" className="svg-inject icon-svg icon-svg-lg text-primary mb-3" alt="" />
                                    <h3 className="counter">7518</h3>
                                    <p>Completed Projects</p>
                                </div>

                                <div className="col-md-3">
                                    <img src="./assets/img/icons/user.svg" className="svg-inject icon-svg icon-svg-lg text-primary mb-3" alt="" />
                                    <h3 className="counter">3472</h3>
                                    <p>Satisfied Customers</p>
                                </div>

                                <div className="col-md-3">
                                    <img src="./assets/img/icons/briefcase-2.svg" className="svg-inject icon-svg icon-svg-lg text-primary mb-3" alt="" />
                                    <h3 className="counter">2184</h3>
                                    <p>Expert Employees</p>
                                </div>

                                <div className="col-md-3">
                                    <img src="./assets/img/icons/award-2.svg" className="svg-inject icon-svg icon-svg-lg text-primary mb-3" alt="" />
                                    <h3 className="counter">4523</h3>
                                    <p>Awards Won</p>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            <section className="wrapper bg-light angled upper-end lower-end">
                <div className="container pt-18 pb-14 pt-md-19 pb-md-16">
                    <div className="row gx-md-8 gx-xl-12 gy-10 align-items-center">
                        <div className="col-md-8 col-lg-6 offset-lg-0 col-xl-5 offset-xl-1 position-relative">
                            <div className="shape bg-dot primary rellax w-17 h-21" data-rellax-speed="1" style={{top:"-2rem", left:"-1.4rem"}}></div>
                            <figure className="rounded"><img src="./assets/img/photos/about4.jpg" srcSet="./assets/img/photos/about4@2x.jpg 2x" alt="" /></figure>
                        </div>

                        <div className="col-lg-6">
                            <img src="./assets/img/icons/telemarketer.svg" className="svg-inject icon-svg icon-svg-md mb-4" alt="" />
                            <h2 className="display-4 mb-8">Convinced yet? Let's make something great together.</h2>
                            <div className="d-flex flex-row">
                                <div>
                                    <div className="icon text-primary fs-28 me-6 mt-n1"> <i className="uil uil-location-pin-alt"></i> </div>
                                </div>
                                <div>
                                    <h5 className="mb-1">Address</h5>
                                    <address>Moonshine St.14/05 Light City, <br className="d-none d-md-block" />London, United Kingdom</address>
                                </div>
                            </div>
                            <div className="d-flex flex-row">
                                <div>
                                    <div className="icon text-primary fs-28 me-6 mt-n1"> <i className="uil uil-phone-volume"></i> </div>
                                </div>
                                <div>
                                    <h5 className="mb-1">Phone</h5>
                                    <p>00 (123) 456 78 90</p>
                                </div>
                            </div>
                            <div className="d-flex flex-row">
                                <div>
                                    <div className="icon text-primary fs-28 me-6 mt-n1"> <i className="uil uil-envelope"></i> </div>
                                </div>
                                <div>
                                    <h5 className="mb-1">E-mail</h5>
                                    <p className="mb-0"><a href="mailto:sandbox@email.com" className="link-body">sandbox@email.com</a></p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </section>

            <footer className="bg-dark text-inverse">
                <div className="container py-13 py-md-15">
                    <div className="row gy-6 gy-lg-0">
                        <div className="col-md-4 col-lg-3">
                            <div className="widget">
                                <img className="mb-4" src="/assets/img/logo-light.png" srcSet="/assets/img/logo-light@2x.png 2x" alt="" />
                                <p className="mb-4">© 2021 Sandbox.<br className="d-none d-lg-block" />All rights reserved.</p>
                                <nav className="nav social social-white">
                                    <a href="/"><i className="uil uil-twitter"></i></a>
                                    <a href="/"><i className="uil uil-facebook-f"></i></a>
                                    <a href="/"><i className="uil uil-dribbble"></i></a>
                                    <a href="/"><i className="uil uil-instagram"></i></a>
                                    <a href="/"><i className="uil uil-youtube"></i></a>
                                </nav>

                            </div>

                        </div>

                        <div className="col-md-4 col-lg-3">
                            <div className="widget">
                                <h4 className="widget-title text-white mb-3">Get in Touch</h4>
                                <address className="pe-xl-15 pe-xxl-17">Moonshine St. 14/05 Light City, London, United Kingdom</address>
                                <a href="mailto:#">info@email.com</a><br /> +00 (123) 456 78 90
                            </div>

                        </div>

                        <div className="col-md-4 col-lg-3">
                            <div className="widget">
                                <h4 className="widget-title text-white mb-3">Learn More</h4>
                                <ul className="list-unstyled  mb-0">
                                    <li><a href="/">About Us</a></li>
                                    <li><a href="/">Our Story</a></li>
                                    <li><a href="/">Projects</a></li>
                                    <li><a href="/">Terms of Use</a></li>
                                    <li><a href="/">Privacy Policy</a></li>
                                </ul>
                            </div>

                        </div>

                        <div className="col-md-12 col-lg-3">
                            <div className="widget">
                                <h4 className="widget-title text-white mb-3">Our Newsletter</h4>
                                <p className="mb-5">Subscribe to our newsletter to get our news & deals delivered to you.</p>
                                <div className="newsletter-wrapper">

                                    <div id="mc_embed_signup2">
                                        <form action="https://elemisfreebies.us20.list-manage.com/subscribe/post?u=aa4947f70a475ce162057838d&amp;id=b49ef47a9a" method="post" id="mc-embedded-subscribe-form2" name="mc-embedded-subscribe-form" className="validate dark-fields" target="_blank" noValidate>
                                            <div id="mc_embed_signup_scroll2"></div>
                                        </form>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </footer>
            <div className="progress-wrap">
                <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
                    <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
                </svg>
            </div>
        
        </>

    )
}

export default AboutUsScreen
