import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'

const SWARAAppScreen = () => {
  return (
    <>
      {/* Introduction Section */}
      <section className="wrapper bg-light">
        <div className="container py-14 py-md-16">
          <div className="row gx-lg-8 gx-xl-12 gy-10 mb-4 align-items-center">
            <div className="col-lg-6 position-relative order-lg-2">
              <div className="shape bg-dot primary rellax w-16 h-20" data-rellax-speed="1" style={{ top: '3rem', left: '5.5rem' }}></div>
              <div className="overlap-grid overlap-grid-2">
                <div className="item">
                  <figure className="rounded shadow"><img src="/assets/img/photos/about2.png" srcSet="/assets/img/photos/about2.png" alt="SWARA App mobile interface" /></figure>
                </div>
                <div className="item">
                  <figure className="rounded shadow"><img src="/assets/img/photos/about3.png" srcSet="/assets/img/photos/about3.png" alt="SWARA App communication features" /></figure>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <img src="./assets/img/icons/megaphone.svg" className="svg-inject icon-svg icon-svg-md mb-4" alt="" />
              <h2 className="display-5 mb-3"><span className="fst-italic">SWARA App – Sistem Wicara Alternatif dan Representasi Autisme</span></h2>
              <p className="mb-6 text-justify">
                SWARA App adalah aplikasi komunikasi berbasis Augmentative and Alternative Communication (AAC) jenis Speech Generating Device (SGD) yang dirancang untuk membantu individu autistik dalam mengekspresikan kebutuhan, emosi, dan pesan sosial melalui perangkat mobile.
              </p>
              <p className="mb-6 text-justify">
                SWARA dikembangkan dengan metode Komunikasi Kontekstual Berbasis Satuan Bahasa (KKB-SB), yang memanfaatkan kata, frasa, dan klausa berbasis konteks aktivitas sehari-hari. Pendekatan ini bertujuan menciptakan komunikasi yang lebih cepat, fungsional, dan minim kebingungan visual, khususnya bagi individu dengan kebutuhan komunikasi kompleks.
              </p>
              <p className="mb-6 text-justify">
                Fitur utama SWARA App meliputi:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li><span><i>1</i></span><span className="fw-bolder">Komunikasi visual-teks-suara yang interaktif</span></li>
                    <li className="mt-3"><span><i>2</i></span><span className="fw-bolder">Konten berbasis konteks aktivitas sehari-hari</span></li>
                    <li className="mt-3"><span><i>3</i></span><span className="fw-bolder">Antarmuka yang ramah dan mudah digunakan</span></li>
                    <li className="mt-3"><span><i>4</i></span><span className="fw-bolder">Dukungan offline dan sinkronisasi data</span></li>
                  </ul>
                </div>
              </div>
              <p className="mt-6 text-justify">
                SWARA App merupakan solusi teknologi mobile untuk mendukung komunikasi alternatif yang efektif dan kontekstual bagi individu autistik.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What is SWARA Section */}
      <section className="wrapper bg-light">
        <div className="container py-14 py-md-16">
          <div className="row mb-8">
            <div className="col-lg-12 text-center">
              <h2 className="fs-16 text-uppercase text-primary mb-3">Apa Itu SWARA?</h2>
              <p className="lead fs-20">
                SWARA merupakan Speech Generating Application (SGA) yang memungkinkan pengguna berkomunikasi melalui kombinasi visual, teks, dan suara.
              </p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <p className="text-justify">
                Aplikasi ini dirancang untuk individu dengan kemampuan verbal minimal hingga menengah, serta untuk mereka yang membutuhkan dukungan komunikasi alternatif. Berbeda dengan aplikasi AAC pada umumnya, SWARA dikembangkan dengan pendekatan Komunikasi Kontekstual Berbasis Satuan Bahasa, sehingga komunikasi tidak hanya berbasis kata lepas, tetapi juga frasa dan konteks aktivitas sehari-hari.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why SWARA is Important Section */}
      <section className="wrapper bg-soft-primary">
        <div className="container py-14 py-md-16">
          <div className="row mb-8">
            <div className="col-lg-12 text-center">
              <h2 className="fs-16 text-uppercase text-primary mb-3">Mengapa SWARA Penting?</h2>
              <p className="lead fs-20">
                Bagi banyak individu autistik, tantangan komunikasi bukan berarti tidak memiliki keinginan atau perasaan
              </p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <p className="text-justify mb-4">
                Bagi banyak individu autistik, tantangan komunikasi bukan berarti tidak memiliki keinginan atau perasaan, melainkan keterbatasan dalam mengekspresikannya. SWARA hadir untuk:
              </p>
              <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                <li><span><i className="uil uil-check"></i></span><span>Membantu individu autistik menyampaikan kebutuhan dan emosi</span></li>
                <li className="mt-3"><span><i className="uil uil-check"></i></span><span>Mengurangi frustrasi akibat hambatan komunikasi</span></li>
                <li className="mt-3"><span><i className="uil uil-check"></i></span><span>Mendukung interaksi yang lebih bermakna dengan lingkungan</span></li>
              </ul>
              <p className="mt-4 text-justify">
                SWARA tidak dimaksudkan untuk menggantikan terapi atau interaksi manusia, melainkan sebagai alat bantu yang mendukung proses belajar, komunikasi, dan kemandirian.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Science-Based Approach Section */}
      <section className="wrapper bg-light">
        <div className="container py-14 py-md-16">
          <div className="row mb-8">
            <div className="col-lg-12 text-center">
              <h2 className="fs-16 text-uppercase text-primary mb-3">Pendekatan Berbasis Sains</h2>
              <p className="lead fs-20">
                Pengembangan SWARA App didukung oleh kajian ilmiah dan kolaborasi multidisipliner
              </p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <p className="text-justify mb-4">
                Pengembangan SWARA App didukung oleh kajian ilmiah dan kolaborasi multidisipliner melalui Pusat Studi IARC (Indonesia Autism Research Center). Setiap fitur dan konten disusun dengan mempertimbangkan:
              </p>
              <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                <li><span><i className="uil uil-check"></i></span><span>Prinsip perkembangan bahasa dan komunikasi</span></li>
                <li className="mt-3"><span><i className="uil uil-check"></i></span><span>Kebutuhan sensori dan perilaku individu autistik</span></li>
                <li className="mt-3"><span><i className="uil uil-check"></i></span><span>Etika penggunaan teknologi pada anak dan keluarga</span></li>
              </ul>
              <p className="mt-4 text-justify">
                Pendekatan ini memastikan SWARA tidak hanya fungsional secara teknis, tetapi juga aman, etis, dan relevan secara ilmiah.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who is SWARA for Section */}
      <section className="wrapper bg-soft-primary">
        <div className="container py-14 py-md-16">
          <div className="row mb-8">
            <div className="col-lg-12 text-center">
              <h2 className="fs-16 text-uppercase text-primary mb-3">Untuk Siapa SWARA App?</h2>
              <p className="lead fs-20">
                SWARA App dapat digunakan oleh berbagai kalangan
              </p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <p className="text-justify mb-4">
                SWARA App dapat digunakan oleh:
              </p>
              <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                <li><span><i className="uil uil-check"></i></span><span>Individu autistik dengan kebutuhan komunikasi alternatif</span></li>
                <li className="mt-3"><span><i className="uil uil-check"></i></span><span>Orang tua dan keluarga sebagai pendamping komunikasi</span></li>
                <li className="mt-3"><span><i className="uil uil-check"></i></span><span>Pendidik dan tenaga pendukung di sekolah</span></li>
                <li className="mt-3"><span><i className="uil uil-check"></i></span><span>Profesional yang bekerja dalam pendampingan individu autistik</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Part of Peduli ASD Ecosystem Section */}
      <section className="wrapper bg-light">
        <div className="container py-14 py-md-16">
          <div className="row mb-8">
            <div className="col-lg-12 text-center">
              <h2 className="fs-16 text-uppercase text-primary mb-3">Bagian dari Ekosistem Peduli ASD</h2>
              <p className="lead fs-20">
                SWARA App merupakan bagian dari ekosistem Autism EdTech Peduli ASD
              </p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <p className="text-justify">
                SWARA App merupakan bagian dari ekosistem Autism EdTech Peduli ASD yang terintegrasi dengan program edukasi, layanan pendampingan, serta riset. Ke depan, SWARA dikembangkan untuk terhubung dengan layanan lain dalam ekosistem Peduli ASD guna mendukung pendekatan yang lebih holistik dan berkelanjutan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Subscription Section */}
      <section className="wrapper bg-soft-primary">
        <div className="container py-14 py-md-16">
          <div className="row mb-8">
            <div className="col-lg-12 text-center">
              <h2 className="fs-16 text-uppercase text-primary mb-3">Langganan SWARA App</h2>
              <p className="lead fs-20">
                Akses fitur dan konten SWARA secara berkelanjutan
              </p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <p className="text-justify mb-4">
                SWARA App adalah aplikasi komunikasi berbasis Augmentative and Alternative Communication (AAC) yang dikembangkan oleh Peduli ASD untuk mendukung individu autistik dalam berkomunikasi secara lebih bermakna dan kontekstual. Melalui sistem langganan, pengguna dapat mengakses fitur dan konten SWARA secara berkelanjutan, dengan dukungan pengembangan dan pembaruan yang terus dilakukan.
              </p>
              <h4 className="mb-3">Kenapa Berlangganan SWARA App?</h4>
              <p className="text-justify mb-4">
                Dengan berlangganan SWARA App, Anda mendapatkan:
              </p>
              <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                <li><span><i className="uil uil-check"></i></span><span>Akses ke fitur komunikasi visual–teks–suara</span></li>
                <li className="mt-3"><span><i className="uil uil-check"></i></span><span>Konten komunikasi yang disusun kontekstual dengan aktivitas sehari-hari</span></li>
                <li className="mt-3"><span><i className="uil uil-check"></i></span><span>Pembaruan dan pengembangan fitur secara berkala</span></li>
                <li className="mt-3"><span><i className="uil uil-check"></i></span><span>Dukungan terhadap keberlanjutan pengembangan aplikasi berbasis sains</span></li>
              </ul>
              <p className="mt-4 text-justify">
                Langganan membantu kami menjaga kualitas, keamanan, dan relevansi SWARA App bagi pengguna dan keluarga.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Registration and Subscription Steps Section */}
      <section className="wrapper bg-light">
        <div className="container py-14 py-md-16">
          <div className="row mb-8">
            <div className="col-lg-12 text-center">
              <h2 className="fs-16 text-uppercase text-primary mb-3">Cara Daftar & Berlangganan SWARA App</h2>
              <p className="lead fs-20">
                Proses pendaftaran dan langganan dirancang sederhana dan ramah pengguna
              </p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <h4 className="mb-3">Langkah 1 – Daftar Akun</h4>
              <ol className="mb-4">
                <li>Kunjungi halaman SWARA App di website Peduli ASD</li>
                <li>Klik tombol Daftar / Buat Akun</li>
                <li>Isi data dasar (nama, email, kata sandi)</li>
                <li>Akun Anda akan terdaftar dan siap digunakan</li>
              </ol>

              <h4 className="mb-3">Langkah 2 – Pilih Paket Langganan</h4>
              <p className="mb-4">
                Setelah login, pilih paket langganan SWARA App yang sesuai dengan kebutuhan Anda. (Setiap paket dirancang untuk penggunaan personal dan pendampingan sehari-hari.)
              </p>

              <h4 className="mb-3">Langkah 3 – Lakukan Pembayaran</h4>
              <ol className="mb-4" start="1">
                <li>Pilih metode pembayaran yang tersedia</li>
                <li>Ikuti instruksi pembayaran hingga selesai</li>
                <li>Setelah pembayaran terkonfirmasi, akses SWARA App akan aktif secara otomatis</li>
              </ol>

              <h4 className="mb-3">Langkah 4 – Mulai Menggunakan SWARA App</h4>
              <p className="mb-4">
                Anda dapat langsung:
              </p>
              <ul className="mb-4">
                <li>Mengakses fitur komunikasi</li>
                <li>Menggunakan SWARA bersama anak di rumah atau sekolah</li>
                <li>Menyesuaikan penggunaan sesuai kebutuhan individu</li>
              </ul>

              <h4 className="mb-3">Cara Belanja & Kelola Langganan</h4>
              <ul className="mb-0">
                <li>Langganan dapat dikelola melalui akun pengguna</li>
                <li>Perpanjangan langganan dilakukan secara berkala sesuai paket yang dipilih</li>
                <li>Riwayat pembayaran dan status langganan dapat diakses di dashboard akun</li>
                <li>Jika membutuhkan bantuan, tim Peduli ASD siap membantu melalui kanal layanan pelanggan</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Important Notes Section */}
      <section className="wrapper bg-soft-primary">
        <div className="container py-14 py-md-16">
          <div className="row justify-content-center">
            <div className="col-lg-10 text-center">
              <h2 className="fs-16 text-uppercase text-primary mb-3">Catatan Penting</h2>
              <p className="lead fs-20 mb-4">
                SWARA App merupakan alat bantu komunikasi, bukan pengganti terapi atau interaksi langsung
              </p>
              <p className="text-justify">
                Penggunaan terbaik dilakukan dengan pendampingan orang dewasa dan disesuaikan dengan kebutuhan individu.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="wrapper bg-light">
        <div className="container py-14 py-md-16">
          <div className="row justify-content-center">
            <div className="col-lg-10 text-center">
              <h2 className="display-4 mb-6">Siap Mulai Menggunakan SWARA App?</h2>
              <div className="d-flex flex-wrap justify-content-center gap-3">
                <Button href="#" variant="primary" className="rounded-pill px-5 py-3 me-3">
                  Daftar Sekarang
                </Button>
                <Button href="#" variant="outline-primary" className="rounded-pill px-5 py-3 me-3">
                  Mulai Langganan SWARA App
                </Button>
                <Button href="#" variant="secondary" className="rounded-pill px-5 py-3">
                  Pelajari Fitur SWARA
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default SWARAAppScreen