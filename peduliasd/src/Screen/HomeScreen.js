import React, { useEffect } from 'react'

const HomeScreen = () => {
  return (
    <>
        <section className="wrapper bg-soft-primary">
          <div className="container pt-10 pt-md-14 pb-14 pb-md-0">
            <div className="row gx-md-8 gx-lg-12 gy-3 gy-lg-0 mb-13">
              <div className="col-lg-6">
                <h1 className="display-1 fs-66 lh-xs mb-0">
                  Bangga Membersamai Individu Autistik
                </h1>
              </div>

              <div className="col-lg-6">
                <p className="lead fs-25 my-3">
                  Bantu mewujudkan tumbuhnya kelompok orang tua/keluarga anak ASD yang 
                  mampu mengedukasi diri dan lingkungannya ... 
                </p>
                <a href="/" className="more hover">
                  Lihat lebih
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
                  Program Peduli ASD
                </h2>
                <h3 className="display-4">
                  Menjadi platform edukasi berbasis ilmu pengetahuan yang memiliki landasan ilmiah yang kuat
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
                <h3 className="display-6 mb-4">Peduli ASD Parents Education Programme (PEP)</h3>
                <p className="mb-5 text-justify">
                  Program edukasi intensif seputar Autism Spectrum Disorder (ASD) yang berlangsung selama 1 semester (6 bulan). 
                  Peserta dibatasi maksimal 10 orang per semester dan akan berjalan ketika peserta di atas 5 orang. Peserta berasal 
                  dari orangtua individu autistik dan orang-orang yang berada dalam lingkungan yang bersentuhan langsung dengan 
                  individu ASD, seperti : guru, terapis, pengasuh, keluarga, dan lainnya. Awal semester perdana berjalan per tanggal 
                  1 Juli 2022 dan berakhir Desember 2022. Adapun materi kelas akan diberikan setiap akhir pekan (120 menit per pertemuan) 
                  dengan penjabaran materi sebagai berikut <i>(...continue)</i>
                </p>
                <div className="row gy-3">
                  <div className="col-xl-6">
                    <ul className="icon-list bullet-bg bullet-soft-leaf mb-0">
                      <li>
                        <span>
                          <i className="uil uil-check"></i>
                        </span>
                        <span>
                          Materi Pengantar tentang Autism Spectrum Diorder (1 kali pertemuan)
                        </span>
                      </li>
                      <li className="mt-3">
                        <span>
                          <i className="uil uil-check"></i>
                        </span>
                        <span>
                          Materi Kemandirian Anak Autistik (6 kali Pertemuan)
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
                          Materi Persiapan Sekolah Anak Autistik (4 kali pertemuan)
                        </span>
                      </li>
                      <li className="mt-3">
                        <span>
                          <i className="uil uil-check"></i>
                        </span>
                        <span>
                          Materi Kesehatan Anak Autistik (7 kali pertemuan)
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                <a
                  href="/pep"
                  className="btn btn-soft-leaf rounded-pill mt-6 mb-0"
                >
                  Baca detail
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
                <h3 className="display-6 mb-4">Tentang Autism Spectrum Disorder</h3>
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
                  Bergabung Bersama Kami
                </h2>
                <h4 className="display-5 mb-6 text-white px-lg-5 px-xxl-0">
                  Mewujudkan masyarakat inklusif yang menerima utuh individu ASD dan keluarganya dan
                  senantiasa mendukung mereka agar dapat terlibat dalam peran sosial di Indonesia
                </h4>
                <a
                  href="/"
                  className="btn btn-white rounded-pill mb-0 text-nowrap"
                >
                  Log In
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
                  Belanja
                </h2>
                <h3 className="display-4">
                  Dukung Individu Autistik Berkarya dan Berdaya
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
              <div className="col-lg-6">
                <h2 className="fs-16 text-uppercase text-primary mb-3">
                  Testimoni
                </h2>
                <h3 className="display-4 mb-3 pe-xxl-15">
                  Kesan Mereka Tentang Program Peduli ASD
                </h3>
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
                  Skrining ASD
                </h2>
                <h3 className="display-4">
                  M-CHART-R (Modified Checklist for Autism in Toddlers, Revised)
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
                <h3 className="display-6 mb-7">Tentang Instrumen M-CHART-R</h3>
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
                <h3 className="display-6 mb-4">Tentang Kami</h3>
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
    
    </>
  )
}

export default HomeScreen
