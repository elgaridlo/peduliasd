import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { listProductAction } from '../actions/productAction'
import { socialMedia } from '../model/SocialMediaModel'

const HomeScreen = () => {
  const dispatch = useDispatch()

  const products = useSelector((state) => state.products)
  const { listProduct } = products

  useEffect(() => {
    if (!listProduct) {
      dispatch(listProductAction())
    }
  }, [listProduct])
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
              <p className="lead fs-25 my-3 ">
                Bantu mewujudkan tumbuhnya kelompok orang tua/keluarga anak ASD
                yang mampu mengedukasi diri dan lingkungannya ...
              </p>
              <a href="/visi-misi" className="more hover">
                Baca selengkapnya
              </a>
            </div>
          </div>

          <div className="position-relative">
            <div
              className="shape bg-dot primary rellax w-17 h-21"
              data-rellax-speed="1"
              style={{ top: '-2.5rem', right: '-2.7rem' }}
            ></div>
            {/* <figure className="rounded mb-md-n20">
              <img
                src="./assets/img/photos/about18.png"
                srcSet="./assets/img/photos/about18.png"
                alt=""
              />
            </figure> */}
            <div
              className="player"
              data-plyr-provider="youtube"
              data-plyr-embed-id="xux8jQphyjU"
              style={{ width: '80%' }}
            ></div>
          </div>
        </div>
      </section>

      <section className="wrapper bg-light">
        <div className="container pt-14 pt-md-16 pb-14 pb-md-17">
          <div className="row mb-8 text-center">
            <div className="col-lg-8 col-xl-7 mx-auto">
              <h2 className="fs-16 text-uppercase text-primary mb-3">
                Program Peduli ASD
              </h2>
              <h3 className="display-4">
                Menjadi platform edukasi berbasis sains dengan landasan ilmiah
                yang kuat
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
                  src="./assets/img/photos/se3.png"
                  srcSet="./assets/img/photos/se3.png"
                  alt=""
                />
              </figure>
            </div>

            <div className="col-lg-6">
              <h3 className="display-6 mb-4">
                Peduli ASD{' '}
                <span className="fst-italic">
                  Parents Education Programme (PEP){' '}
                </span>
              </h3>
              <p className="mb-5 ">
                Program edukasi intensif seputar{' '}
                <span className="fst-italic"> Autism Spectrum Disorder </span>
                (ASD) yang berlangsung selama 1 semester (6 bulan). Peserta
                dibatasi maksimal 10 orang per semester dan akan berjalan ketika
                peserta di atas 5 orang. Peserta berasal dari orangtua individu
                autistik dan orang-orang yang terlibat dalam pengasuhan individu
                autistik. Awal semester perdana berjalan per tanggal 1 Juli 2022
                dan berakhir Desember 2022. Adapun materi kelas akan diberikan
                setiap akhir pekan (120 menit per pertemuan) dengan penjabaran
                materi sebagai berikut:{' '}
              </p>
              <div className="row gy-3">
                <div className="col-xl-6">
                  <ul className="icon-list bullet-bg bullet-soft-leaf mb-0">
                    <li>
                      <span>
                        <i className="uil uil-check"></i>
                      </span>
                      <span>
                        Materi Pengantar tentang{' '}
                        <span className="fst-italic">
                          {' '}
                          Autism Spectrum Disorder (ASD){' '}
                        </span>{' '}
                        (1 kali pertemuan)
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
                        Materi Persiapan Sekolah Anak Autistik (4 kali
                        pertemuan)
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
                Baca selengkapnya
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
                  src="./assets/img/photos/se4.png"
                  srcSet="./assets/img/photos/se4.png"
                  alt=""
                />
              </figure>
            </div>

            <div className="col-lg-6">
              <h3 className="display-6 mb-4">
                Tentang{' '}
                <span className="fst-italic"> Autism Spectrum Disorder </span>
              </h3>
              <p className="mb-5">
                <span className="fst-italic">
                  Autism Spectrum Disorder (ASD)
                </span>{' '}
                adalah gangguan perkembangan yang ditandai dengan munculnya
                gangguan sosial dan komunikasi, keterbatasan minat dan
                kemampuan, serta perilaku berulang yang cenderung kaku dan tidak
                fleksibel.
              </p>
              <div className="row gy-3">
                <div className="col-xl-6">
                  <ul className="icon-list bullet-bg bullet-soft-leaf mb-0">
                    <li>
                      <span>
                        <i className="uil uil-check"></i>
                      </span>
                      <span>
                        Studi pertama tentang prevalensi ASD muncul pada tahun
                        1960-an dan 1970-an.
                      </span>
                    </li>
                    <li className="mt-3">
                      <span>
                        <i className="uil uil-check"></i>
                      </span>
                      <span>
                        Diagnosis klinis spektrum autisme pertama kali pada
                        tahun 1980 diatur oleh
                        <span className="fst-italic">
                          American Psychiatric Association
                        </span>{' '}
                        (APA) dalam
                        <span className="fst-italic">
                          Diagnostic and Statistical Manual of Mental Disorders
                        </span>{' '}
                        (DSM).
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
                        Studi-studi ini melaporkan bahwa prevalensi ASD saat itu
                        sekitar 4-5 kasus per 10.000 anak.
                      </span>
                    </li>
                    <li className="mt-3">
                      <span>
                        <i className="uil uil-check"></i>
                      </span>
                      <span>
                        Pada DSM V (2013), beragam jenis gangguan yang masih
                        dalam satu spektrum digabungkan dalam istilah
                        <span className="fst-italic">
                          Autism Spectrum Disorder (ASD).
                        </span>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <a
                href="/tentang-asd"
                className="btn btn-soft-leaf rounded-pill mt-6 mb-0"
              >
                Baca selengkapnya
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        className="wrapper image-wrapper bg-image bg-overlay"
        data-image-src="./assets/img/photos/bg10.png"
      >
        <div className="container py-18">
          <div className="row text-center">
            <div className="col-lg-11 col-xl-10 col-xxl-8 mx-auto">
              <h2 className="fs-16 text-uppercase text-white mb-3">
                Bergabung Bersama Kami
              </h2>
              <h4 className="display-5 mb-6 text-white px-lg-5 px-xxl-0">
                Mewujudkan lingkungan inklusif yang menerima dan mendukung
                individu autistik beserta keluarganya agar dapat menjalankan
                peran sosial dalam masyarakat
              </h4>
              <a
                href={socialMedia.whatsappAdmin}
                target="_blank"
                className="btn btn-white rounded-pill mb-0 text-nowrap" rel="noreferrer"
              >
                Bergabung
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
                Dukung Individu Autistik <br /> Berkarya dan Berdaya
              </h3>
            </div>
          </div>

          <div className="grid grid-view projects-masonry">
            <Row>
              <Col lg={4}>
                <div className="project ">
                  <figure className="rounded mb-6">
                    <a href="/product">
                      {' '}
                      <img
                        src="/assets/img/home/section_product_ceritayya.jpeg"
                        alt=""
                      />
                    </a>
                  </figure>
                  <div className="project-details d-flex justify-content-center flex-column">
                    <div className="post-header">
                      <div className="post-category mb-2 text-yellow">
                        Ceritayya
                      </div>
                      <p className="text-justify">
                        Seorang Anak Perempuan Autistik yang memiliki bakat
                        menggambar. Ia secara aktif memperjual-belikan karyanya
                        dalam bentuk merchandise yang unik dan khas Autistik.
                      </p>
                      <a href="/product" className="more hover">
                        Yuk kenalan yuk!
                      </a>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={8}>
                <div className="row gx-md-8 gy-10 gy-md-13">
                  {listProduct &&
                    listProduct.slice(0, 2).map((item) => (
                      <div
                        key={item.id}
                        className="project item col-md-6 col-xl-6 product"
                      >
                        <figure className="lift rounded mb-6">
                          <Link to={`/product/${item.id}`}>
                            {' '}
                            <img src={item.photo} alt="" />
                          </Link>
                        </figure>
                        <div className="project-details d-flex justify-content-center flex-column">
                          <div className="post-header">
                            <div className="post-category mb-2 text-yellow">
                              {item.creator}
                            </div>
                            <h2 className="post-title h3">
                              {item.product_name}
                            </h2>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </Col>
            </Row>
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
                        “Melalui Peduli ASD Saya Menjadi Lebih Memahami Pribadi
                        Autistik dan Bangga Menjadi Orangtua dari Anak Autistik”
                      </p>
                      <div className="blockquote-details">
                        <div className="info ps-0">
                          <h5 className="mb-1">Missyarah</h5>
                          <p className="mb-0">Orang Tua Anak ASD, Yogyakarta</p>
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
                        “Selalu ketagihan ikutan webinar Peduli ASD, materi yang
                        disampaikan selalu{' '}
                        <span className="fst-italic">based on science</span> yg{' '}
                        <span className="fst-italic">update</span>.”
                      </p>
                      <div className="blockquote-details">
                        <div className="info ps-0">
                          <h5 className="mb-1">Ika Nurmayati</h5>
                          <p className="mb-0">Terapis Okupasi, Bekasi</p>
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
                        “Program2 peduliasd sangat{' '}
                        <span className="fst-italic">relate</span> dengan
                        kebutuhan orangtua dalam membekali dan membersamai anak
                        ASD, informasi mudah dipahami dan solutif.”
                      </p>
                      <div className="blockquote-details">
                        <div className="info ps-0">
                          <h5 className="mb-1">Dwi Puji</h5>
                          <p className="mb-0"> Orang Tua Anak ASD, Ponggok</p>
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
                        “Materinya sangat cocok dengan saya selaku Guru
                        pendamping khusus yang membantu mendampingi anak autis
                        dalam belajar di sekolah.”
                      </p>
                      <div className="blockquote-details">
                        <div className="info ps-0">
                          <h5 className="mb-1">Gita</h5>
                          <p className="mb-0">
                            Guru Pendamping Khusus, Yogyakarta
                          </p>
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
                M-CHAT-R (Modified Checklist for Autism in Toddlers, Revised)
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
                  src="./assets/img/photos/about20.png"
                  srcSet="./assets/img/photos/about20@2x.png 2x"
                  alt=""
                />
              </figure>
            </div>
            {/*  */}
            <div className="col-lg-6 col-xxl-5">
              <h3 className="display-6 mb-7">Tentang Instrumen M-CHAT-R</h3>
              <div className="d-flex flex-row mb-5">
                <div>
                  <span className="icon btn btn-circle btn-soft-primary disabled me-5">
                    <span className="number fs-18">1</span>
                  </span>
                </div>
                <div>
                  <p className="mb-0 text-justify">
                    Instrumen M-CHAT-R umumnya digunakan untuk pemeriksaan awal
                    anak yang memiliki ciri dan perilaku mengarah kepada ASD.
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
                  <p className="mb-0 text-justify">
                    Instrumen ini dapat diisi langsung oleh orangtua baik secara
                    offline dan online.
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
                  <p className="mb-0 text-justify">
                    Tujuan utama M-CHAT-R ini adalah untuk memaksimalkan
                    sensitifitas, yaitu mendeteksi sebanyak mungkin kasus ASD.
                  </p>
                </div>
              </div>
              <a
                href="/skrining"
                className="btn btn-soft-primary rounded-pill mt-6 mb-0"
              >
                Lakukan Skrining
              </a>
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
                  src="./assets/img/photos/about19.png"
                  srcSet="./assets/img/photos/about19@2x.png 2x"
                  alt=""
                />
              </figure>
            </div>
            {/*  */}
            <div className="col-lg-6">
              <h3 className="display-6 mb-4">Tentang Kami</h3>
              <p className="mb-5">
                Terbentuknya tim Peduli ASD berawal dari kesamaan visi dan misi
                untuk mempopulerkan tagar
                <span className="fw-bold">
                  {' '}
                  #banggamembersamaiindividuautistik{' '}
                </span>
                dan keinginan yang konsisten dalam menyajikan edukasi berbasis
                sains. Kami memiliki fokus kerja dalam 4 bidang utama :
              </p>
              <div className="row gy-3">
                <div className="col-xl-6">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <span>
                        <i className="uil uil-check"></i>
                      </span>
                      <span>Edukasi berbasis Sains</span>
                    </li>
                    <li className="mt-3">
                      <span>
                        <i className="uil uil-check"></i>
                      </span>
                      <span>Pengembangan teknologi</span>
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
                      <span>Pengadaan media edukasi</span>
                    </li>
                    <li className="mt-3">
                      <span>
                        <i className="uil uil-check"></i>
                      </span>
                      <span>Pengelolaan media sosial</span>
                    </li>
                  </ul>
                </div>
                {/*  */}
              </div>
              {/*  */}
              <a
                href="/visi-misi"
                className="btn btn-soft-primary rounded-pill mt-6 mb-0"
              >
                Baca selengkapnya
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
