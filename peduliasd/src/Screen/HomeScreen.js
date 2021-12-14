import React, { useEffect } from 'react'

const HomeScreen = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '../assets/js/theme.js';
    script.async = true;
    document.body.appendChild(script);
  return () => {
      document.body.removeChild(script);
    }
  }, []);
  return (
    <>
        <section className="wrapper bg-soft-primary">
          <div className="container pt-10 pt-md-14 pb-14 pb-md-0">
            <div className="row gx-md-8 gx-lg-12 gy-3 gy-lg-0 mb-13">
              <div className="col-lg-6">
                <h1 className="display-1 fs-66 lh-xs mb-0">
                  We bring rapid solutions for your business.
                </h1>
              </div>

              <div className="col-lg-6">
                <p className="lead fs-25 my-3">
                  We are an award winning branding design agency that strongly
                  believes in the power of creative ideas.
                </p>
                <a href="/" className="more hover">
                  Learn More
                </a>
              </div>
            </div>

            <div className="position-relative">
              <div
                className="shape bg-dot primary rellax w-17 h-21"
                data-rellax-speed="1"
                style={{ top: '-2.5rem', right: '-2.7rem' }}
              ></div>
              <figure className="rounded mb-md-n20">
                <img
                  src="./assets/img/photos/about18.jpg"
                  srcSet="./assets/img/photos/about18@2x.jpg 2x"
                  alt=""
                />
              </figure>
            </div>
          </div>
        </section>

        <section className="wrapper bg-light">
          <div className="container pt-14 pt-md-23 pb-14 pb-md-17">
            <div className="row mb-8 text-center">
              <div className="col-lg-8 col-xl-7 mx-auto">
                <h2 className="fs-16 text-uppercase text-primary mb-3">
                  What We Do
                </h2>
                <h3 className="display-4">
                  We make your spending stress-free for you to have the perfect
                  control.
                </h3>
              </div>
            </div>

            <div className="row gx-lg-8 gx-xl-12 gy-10 mb-14 mb-md-17 align-items-center">
              <div className="col-lg-6 position-relative">
                <div
                  className="shape bg-dot primary rellax w-17 h-18"
                  data-rellax-speed="1"
                  style={{ bottom: '-2rem', left: '-0.7rem' }}
                ></div>
                <figure className="rounded mb-0">
                  <img
                    src="./assets/img/photos/se3.jpg"
                    srcSet="./assets/img/photos/se3@2x.jpg 2x"
                    alt=""
                  />
                </figure>
              </div>

              <div className="col-lg-6">
                <h3 className="display-6 mb-4">Package Design</h3>
                <p className="mb-5">
                  Cum sociis natoque penatibus et magnis dis parturient montes,
                  nascetur ridiculus mus. Cras justo odio, dapibus ac facilisis
                  in, egestas eget quam. Praesent commodo cursus magna, vel
                  scelerisque nisl consectetur et. Maecenas faucibus mollis
                  interdum. Maecenas sed diam eget risus varius.
                </p>
                <div className="row gy-3">
                  <div className="col-xl-6">
                    <ul className="icon-list bullet-bg bullet-soft-leaf mb-0">
                      <li>
                        <span>
                          <i className="uil uil-check"></i>
                        </span>
                        <span>
                          Aenean quam ornare curabitur blandit consectetur.
                        </span>
                      </li>
                      <li className="mt-3">
                        <span>
                          <i className="uil uil-check"></i>
                        </span>
                        <span>
                          Nullam quis risus eget urna mollis ornare aenean leo.
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="col-xl-6">
                    <ul className="icon-list bullet-bg bullet-soft-leaf mb-0">
                      <li>
                        <span>
                          <i className="uil uil-check"></i>
                        </span>
                        <span>
                          Etiam porta euismod malesuada mollis nisl ornare sem.
                        </span>
                      </li>
                      <li className="mt-3">
                        <span>
                          <i className="uil uil-check"></i>
                        </span>
                        <span>
                          Vivamus sagittis lacus augue rutrum maecenas.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                <a
                  href="/"
                  className="btn btn-soft-leaf rounded-pill mt-6 mb-0"
                >
                  More Details
                </a>
              </div>
            </div>

            <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
              <div className="col-lg-6 order-lg-2 position-relative">
                <div
                  className="shape rounded-circle bg-soft-primary rellax w-18 h-18"
                  data-rellax-speed="1"
                  style={{ bottom: '-2.5rem', right: '-1.5rem' }}
                ></div>
                <figure className="rounded mb-0">
                  <img
                    src="./assets/img/photos/se4.jpg"
                    srcSet="./assets/img/photos/se4@2x.jpg 2x"
                    alt=""
                  />
                </figure>
              </div>

              <div className="col-lg-6">
                <h3 className="display-6 mb-4">Corporate Design</h3>
                <p className="mb-5">
                  Cum sociis natoque penatibus et magnis dis parturient montes,
                  nascetur ridiculus mus. Cras justo odio, dapibus ac facilisis
                  in, egestas eget quam. Praesent commodo cursus magna, vel
                  scelerisque nisl consectetur et.
                </p>
                <div className="row gy-3">
                  <div className="col-xl-6">
                    <ul className="icon-list bullet-bg bullet-soft-leaf mb-0">
                      <li>
                        <span>
                          <i className="uil uil-check"></i>
                        </span>
                        <span>
                          Aenean quam ornare curabitur blandit consectetur.
                        </span>
                      </li>
                      <li className="mt-3">
                        <span>
                          <i className="uil uil-check"></i>
                        </span>
                        <span>
                          Nullam quis risus eget urna mollis ornare aenean leo.
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="col-xl-6">
                    <ul className="icon-list bullet-bg bullet-soft-leaf mb-0">
                      <li>
                        <span>
                          <i className="uil uil-check"></i>
                        </span>
                        <span>
                          Etiam porta euismod malesuada mollis nisl ornare sem.
                        </span>
                      </li>
                      <li className="mt-3">
                        <span>
                          <i className="uil uil-check"></i>
                        </span>
                        <span>
                          Vivamus sagittis lacus augue rutrum maecenas.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                <a
                  href="/"
                  className="btn btn-soft-leaf rounded-pill mt-6 mb-0"
                >
                  More Details
                </a>
              </div>
            </div>
          </div>
        </section>

        <section
          className="wrapper image-wrapper bg-image bg-overlay"
          data-image-src="./assets/img/photos/bg10.jpg"
        >
          <div className="container py-18">
            <div className="row text-center">
              <div className="col-lg-11 col-xl-10 col-xxl-8 mx-auto">
                <h2 className="fs-16 text-uppercase text-white mb-3">
                  Join Our Community
                </h2>
                <h3 className="display-4 mb-6 text-white px-lg-5 px-xxl-0">
                  We are trusted by over 5000+ clients. Join them by using our
                  services and grow your business.
                </h3>
                <a
                  href="/"
                  className="btn btn-white rounded-pill mb-0 text-nowrap"
                >
                  Join Us
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="wrapper bg-light">
          <div className="container py-14 py-md-17">
            <div className="row mb-8 text-center">
              <div className="col-lg-9 col-xl-8 col-xxl-7 mx-auto">
                <h2 className="fs-16 text-uppercase text-primary mb-3">
                  Our Projects
                </h2>
                <h3 className="display-4">
                  Check out some of our awesome projects with creative ideas and
                  great design.
                </h3>
              </div>
            </div>

            <div className="grid grid-view projects-masonry">
              <div className="row gx-md-8 gy-10 gy-md-13 isotope">
                <div className="project item col-md-6 col-xl-4 product">
                  <figure className="lift rounded mb-6">
                    <a href="./single-project.html">
                      {' '}
                      <img src="./assets/img/photos/pd1.jpg" alt="" />
                    </a>
                  </figure>
                  <div className="project-details d-flex justify-content-center flex-column">
                    <div className="post-header">
                      <div className="post-category mb-2 text-yellow">
                        Coffee
                      </div>
                      <h2 className="post-title h3">Cras Fermentum Sem</h2>
                    </div>
                  </div>
                </div>

                <div className="project item col-md-6 col-xl-4 workshop">
                  <figure className="lift rounded mb-6">
                    <a href="./single-project2.html">
                      {' '}
                      <img src="./assets/img/photos/pd2.jpg" alt="" />
                    </a>
                  </figure>
                  <div className="project-details d-flex justify-content-center flex-column">
                    <div className="post-header">
                      <div className="post-category mb-2 text-red">
                        Stationary
                      </div>
                      <h2 className="post-title h3">Mollis Ipsum Mattis</h2>
                    </div>
                  </div>
                </div>

                <div className="project item col-md-6 col-xl-4 still-life">
                  <figure className="lift rounded mb-6">
                    <a href="./single-project3.html">
                      {' '}
                      <img src="./assets/img/photos/pd3.jpg" alt="" />
                    </a>
                  </figure>
                  <div className="project-details d-flex justify-content-center flex-column">
                    <div className="post-header">
                      <div className="post-category mb-2 text-orange">
                        Branding
                      </div>
                      <h2 className="post-title h3">Ipsum Ultricies Cursus</h2>
                    </div>
                  </div>
                </div>

                <div className="project item col-md-6 col-xl-4 product">
                  <figure className="lift rounded mb-6">
                    <a href="./single-project2.html">
                      {' '}
                      <img src="./assets/img/photos/pd4.jpg" alt="" />
                    </a>
                  </figure>
                  <div className="project-details d-flex justify-content-center flex-column">
                    <div className="post-header">
                      <div className="post-category mb-2 text-purple">
                        Product
                      </div>
                      <h2 className="post-title h3">
                        Inceptos Euismod Egestas
                      </h2>
                    </div>
                  </div>
                </div>

                <div className="project item col-md-6 col-xl-4 product">
                  <figure className="lift rounded mb-6">
                    <a href="./single-project.html">
                      {' '}
                      <img src="./assets/img/photos/pd5.jpg" alt="" />
                    </a>
                  </figure>
                  <div className="project-details d-flex justify-content-center flex-column">
                    <div className="post-header">
                      <div className="post-category mb-2 text-leaf">Print</div>
                      <h2 className="post-title h3">
                        Sollicitudin Ornare Porta
                      </h2>
                    </div>
                  </div>
                </div>

                <div className="project item col-md-6 col-xl-4 workshop">
                  <figure className="lift rounded mb-6">
                    <a href="./single-project3.html">
                      {' '}
                      <img src="./assets/img/photos/pd6.jpg" alt="" />
                    </a>
                  </figure>
                  <div className="project-details d-flex justify-content-center flex-column">
                    <div className="post-header">
                      <div className="post-category mb-2 text-aqua">
                        Workshop
                      </div>
                      <h2 className="post-title h3">Ipsum Mollis Vulputate</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="wrapper bg-soft-primary">
          <div className="container py-14 pt-md-17 pb-md-19">
            <div className="row gx-lg-8 gx-xl-12 gy-10 gy-lg-0 align-items-center">
              <div className="col-lg-4">
                <h2 className="fs-16 text-uppercase text-primary mb-3">
                  Company Facts
                </h2>
                <h3 className="display-4 mb-3 pe-xxl-15">
                  We are proud of our projects
                </h3>
              </div>

              <div className="col-lg-8 mt-lg-2">
                <div className="row align-items-center counter-wrapper gy-6 text-center">
                  <div className="col-md-4">
                    <h3 className="counter counter-lg">1000+</h3>
                    <p>Completed Projects</p>
                  </div>

                  <div className="col-md-4">
                    <h3 className="counter counter-lg">500+</h3>
                    <p>Happy Clients</p>
                  </div>

                  <div className="col-md-4">
                    <h3 className="counter counter-lg">150+</h3>
                    <p>Awards Won</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="wrapper bg-light">
          <div className="container py-16 py-md-17">
            <div className="grid mb-14 mb-md-17">
              <div className="row isotope gy-6 mt-n19 mt-md-n22">
                <div className="item col-md-6 col-xl-3">
                  <div className="card shadow-lg">
                    <div className="card-body">
                      <span className="ratings five mb-3"></span>
                      <blockquote className="icon mb-0">
                        <p>
                          “Vivamus sagittis lacus vel augue laoreet rutrum
                          faucibus dolor auctor. Vestibulum id ligula porta.
                          Cras mattis consectetur.”
                        </p>
                        <div className="blockquote-details">
                          <div className="info ps-0">
                            <h5 className="mb-1">Coriss Ambady</h5>
                            <p className="mb-0">Financial Analyst</p>
                          </div>
                        </div>
                      </blockquote>
                    </div>
                  </div>
                </div>

                <div className="item col-md-6 col-xl-3">
                  <div className="card shadow-lg">
                    <div className="card-body">
                      <span className="ratings five mb-3"></span>
                      <blockquote className="icon mb-0">
                        <p>
                          “Fusce dapibus, tellus ac cursus tortor mauris
                          condimentum fermentum massa justo sit amet purus
                          fermentum.”
                        </p>
                        <div className="blockquote-details">
                          <div className="info ps-0">
                            <h5 className="mb-1">Cory Zamora</h5>
                            <p className="mb-0">Marketing Specialist</p>
                          </div>
                        </div>
                      </blockquote>
                    </div>
                  </div>
                </div>

                <div className="item col-md-6 col-xl-3">
                  <div className="card shadow-lg">
                    <div className="card-body">
                      <span className="ratings five mb-3"></span>
                      <blockquote className="icon mb-0">
                        <p>
                          “Curabitur blandit tempus porttitor. Vivamus sagittis
                          lacus vel augue laoreet rutrum faucibus dolor eu
                          rutrum. Nulla vitae libero.”
                        </p>
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

                <div className="item col-md-6 col-xl-3">
                  <div className="card shadow-lg">
                    <div className="card-body">
                      <span className="ratings five mb-3"></span>
                      <blockquote className="icon mb-0">
                        <p>
                          “Etiam adipiscing tincidunt elit convallis felis
                          suscipit ut. Phasellus rhoncus eu tincidunt auctor
                          nullam rutrum.”
                        </p>
                        <div className="blockquote-details">
                          <div className="info ps-0">
                            <h5 className="mb-1">Coriss Ambady</h5>
                            <p className="mb-0">Financial Analyst</p>
                          </div>
                        </div>
                      </blockquote>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row mb-8 text-center">
              <div className="col-lg-8 col-xl-7 col-xxl-6 mx-auto">
                <h2 className="fs-16 text-uppercase text-primary mb-3">
                  Company Strategy
                </h2>
                <h3 className="display-4">
                  Just sit and relax while we take care of your business needs.
                </h3>
              </div>
              {/*  */}
            </div>
            {/*  */}
            <div className="row gx-lg-8 gx-xl-12 gy-10 mb-14 mb-md-17 align-items-center">
              <div className="col-lg-6 position-relative">
                <div
                  className="shape bg-dot leaf rellax w-17 h-18"
                  data-rellax-speed="1"
                  style={{ bottom: '-2rem', left: '-0.7rem' }}
                ></div>
                <figure className="rounded">
                  <img
                    src="./assets/img/photos/about20.jpg"
                    srcSet="./assets/img/photos/about20@2x.jpg 2x"
                    alt=""
                  />
                </figure>
              </div>
              {/*  */}
              <div className="col-lg-6 col-xxl-5">
                <h3 className="display-6 mb-7">Our Working Process</h3>
                <div className="d-flex flex-row mb-5">
                  <div>
                    <span className="icon btn btn-circle btn-soft-primary disabled me-5">
                      <span className="number fs-18">1</span>
                    </span>
                  </div>
                  <div>
                    <h4 className="mb-1">Collect Ideas</h4>
                    <p className="mb-0">
                      Nulla vitae elit libero pharetra augue dapibus. Praesent
                      commodo cursus. Sed posuere consectetur.
                    </p>
                  </div>
                </div>
                <div className="d-flex flex-row mb-5">
                  <div>
                    <span className="icon btn btn-circle btn-soft-primary disabled me-5">
                      <span className="number fs-18">2</span>
                    </span>
                  </div>
                  <div>
                    <h4 className="mb-1">Data Analysis</h4>
                    <p className="mb-0">
                      Vivamus sagittis lacus vel augue laoreet. Etiam porta sem
                      malesuada magna est at lobortis nulla auctor.
                    </p>
                  </div>
                </div>
                <div className="d-flex flex-row">
                  <div>
                    <span className="icon btn btn-circle btn-soft-primary disabled me-5">
                      <span className="number fs-18">3</span>
                    </span>
                  </div>
                  <div>
                    <h4 className="mb-1">Finalize Product</h4>
                    <p className="mb-0">
                      Cras mattis consectetur purus sit amet. Aenean lacinia
                      bibendum nulla sed. Donec ullamcorper metus.
                    </p>
                  </div>
                </div>
              </div>
              {/*  */}
            </div>
            {/*  */}
            <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
              <div className="col-lg-6 order-lg-2 position-relative">
                <div
                  className="shape rounded-circle bg-line leaf rellax w-18 h-18"
                  data-rellax-speed="1"
                  style={{ bottom: '-2.5rem', right: '-1.5rem' }}
                ></div>
                <figure className="rounded">
                  <img
                    src="./assets/img/photos/about19.jpg"
                    srcSet="./assets/img/photos/about19@2x.jpg 2x"
                    alt=""
                  />
                </figure>
              </div>
              {/*  */}
              <div className="col-lg-6">
                <h3 className="display-6 mb-4">Why Choose Us?</h3>
                <p className="mb-5">
                  Cum sociis natoque penatibus et magnis dis parturient montes,
                  nascetur ridiculus mus. Cras justo odio, dapibus ac facilisis
                  in, egestas eget quam. Praesent commodo cursus magna, vel
                  scelerisque nisl consectetur et. Maecenas faucibus mollis
                  interdum. Maecenas sed diam eget risus varius.
                </p>
                <div className="row gy-3">
                  <div className="col-xl-6">
                    <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                      <li>
                        <span>
                          <i className="uil uil-check"></i>
                        </span>
                        <span>
                          Aenean quam ornare curabitur blandit consectetur.
                        </span>
                      </li>
                      <li className="mt-3">
                        <span>
                          <i className="uil uil-check"></i>
                        </span>
                        <span>
                          Nullam quis risus eget urna mollis ornare aenean leo.
                        </span>
                      </li>
                    </ul>
                  </div>
                  {/*  */}
                  <div className="col-xl-6">
                    <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                      <li>
                        <span>
                          <i className="uil uil-check"></i>
                        </span>
                        <span>
                          Etiam porta euismod malesuada mollis nisl ornare sem.
                        </span>
                      </li>
                      <li className="mt-3">
                        <span>
                          <i className="uil uil-check"></i>
                        </span>
                        <span>
                          Vivamus sagittis lacus augue rutrum maecenas.
                        </span>
                      </li>
                    </ul>
                  </div>
                  {/*  */}
                </div>
                {/*  */}
                <a
                  href="/"
                  className="btn btn-soft-primary rounded-pill mt-6 mb-0"
                >
                  More Details
                </a>
              </div>
              {/*  */}
            </div>
            {/*  */}
          </div>
          {/*  */}
        </section>
    
      <footer className="bg-navy text-inverse">
        <div className="container py-13 py-md-15">
          <div className="d-lg-flex flex-row align-items-lg-center">
            <h3 className="display-4 mb-6 mb-lg-0 pe-lg-20 pe-xl-22 pe-xxl-25 text-white">
              Join our community by using our services and grow your business.
            </h3>
            <a
              href="/"
              className="btn btn-primary rounded-pill mb-0 text-nowrap"
            >
              Try It For Free
            </a>
          </div>

          <hr className="mt-11 mb-12" />
          <div className="row gy-6 gy-lg-0">
            <div className="col-md-4 col-lg-3">
              <div className="widget">
                <img
                  className="mb-4"
                  src="./assets/img/logo-light.png"
                  srcSet="./assets/img/logo-light@2x.png 2x"
                  alt=""
                />
                <p className="mb-4">
                  © 2021 Sandbox. <br className="d-none d-lg-block" />
                  All rights reserved.
                </p>
                <nav className="nav social social-white">
                  <a href="/">
                    <i className="uil uil-twitter"></i>
                  </a>
                  <a href="/">
                    <i className="uil uil-facebook-f"></i>
                  </a>
                  <a href="/">
                    <i className="uil uil-dribbble"></i>
                  </a>
                  <a href="/">
                    <i className="uil uil-instagram"></i>
                  </a>
                  <a href="/">
                    <i className="uil uil-youtube"></i>
                  </a>
                </nav>
                {/* <!-- /.social --> */}
              </div>
              {/* <!-- /.widget --> */}
            </div>
            {/*  */}
            <div className="col-md-4 col-lg-3">
              <div className="widget">
                <h4 className="widget-title text-white mb-3">Get in Touch</h4>
                <address className="pe-xl-15 pe-xxl-17">
                  Moonshine St. 14/05 Light City, London, United Kingdom
                </address>
                <a href="mailto:/">info@email.com</a>
                <br /> +00 (123) 456 78 90
              </div>
              {/* <!-- /.widget --> */}
            </div>
            {/*  */}
            <div className="col-md-4 col-lg-3">
              <div className="widget">
                <h4 className="widget-title text-white mb-3">Learn More</h4>
                <ul className="list-unstyled  mb-0">
                  <li>
                    <a href="/">About Us</a>
                  </li>
                  <li>
                    <a href="/">Our Story</a>
                  </li>
                  <li>
                    <a href="/">Projects</a>
                  </li>
                  <li>
                    <a href="/">Terms of Use</a>
                  </li>
                  <li>
                    <a href="/">Privacy Policy</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-12 col-lg-3">
              <div className="widget">
                <h4 className="widget-title text-white mb-3">Our Newsletter</h4>
                <p className="mb-5">
                  Subscribe to our newsletter to get our news & deals delivered
                  to you.
                </p>
                <div className="newsletter-wrapper">
                  <div id="mc_embed_signup2">
                    <form
                      action="https://elemisfreebies.us20.list-manage.com/subscribe/post?u=aa4947f70a475ce162057838d&amp;id=b49ef47a9a"
                      method="post"
                      id="mc-embedded-subscribe-form2"
                      name="mc-embedded-subscribe-form"
                      className="validate dark-fields"
                      target="_blank"
                      noValidate
                    >
                      <div id="mc_embed_signup_scroll2">
                        <div className="mc-field-group input-group form-floating">
                          <input
                            type="email"
                            value=""
                            name="EMAIL"
                            className="required email form-control"
                            placeholder="Email Address"
                            readOnly
                            id="mce-EMAIL2"
                          />
                          <label htmlFor="mce-EMAIL2">Email Address</label>
                          <input
                            type="submit"
                            value="Join"
                            name="subscribe"
                            id="mc-embedded-subscribe2"
                            readOnly
                            className="btn btn-primary"
                          />
                        </div>
                        <div id="mce-responses2" className="clear">
                          <div
                            className="response"
                            id="mce-error-response2"
                            style={{ display: 'none' }}
                          ></div>
                          <div
                            className="response"
                            id="mce-success-response2"
                            style={{ display: 'none' }}
                          ></div>
                        </div>
                        {/* <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups--> */}
                        <div
                          style={{ position: 'absolute', left: '-5000px' }}
                          aria-hidden="true"
                        >
                          <input
                            type="text"
                            name="b_ddc180777a163e0f9f66ee014_4b1bcfa0bc"
                            tabIndex="-1"
                            readOnly
                            value=""
                          />
                        </div>
                        <div className="clear"></div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default HomeScreen
