import React from 'react'

export const FilosofiLogoScreen = () => {
    return (
        <>
            <section
                className="wrapper bg-gray"
                style={{ backgroundImage: '/assets/img/gambar/filosofi_logo.jpg' }}
            >
                <figure
                    className="position-absoute"
                    style={{ bottom: '0', left: '0', zIndex: '2' }}
                >
                    <img src="/assets/img/gambar/filosofi_logo.jpg" alt="" />
                </figure>
            </section>

            <section className="wrapper bg-light angled upper-end lower-end">
                <div className="container py-14 py-md-16">
                    <div className="row gx-lg-8 gx-xl-12 gy-10 mb-14 mb-md-17 align-items-center">
                        <div className="col-xl-6 mx-auto">
                            <h1 className="display-1 mb-4">Filosofi Logo</h1>
                            {/* <p className="lead fs-lg mb-0">A company turning ideas into beautiful things.</p> */}
                        </div>
                        <div className="col-lg-12">
                            <img
                                src="./assets/img/icons/megaphone.svg"
                                className="svg-inject icon-svg icon-svg-md mb-4"
                                alt=""
                            />
                            <p className="mb-6" style={{ textAlign: 'justify' }}>
                                &emsp;&ensp;Bentuk logo menggambarkan dua lengan yang sedang
                                memeluk erat. Ini sebagai tanda bahwa salah satu bentuk
                                kepedulian kita terhadap Individu Autistik adalah dengan
                                memahami dan memeluk erat mereka. Warna biru kehijauan (toska)
                                pada lengan atas menggambarkan kenyamanan, ketenangan, dan
                                penerimaan. Warna kuning pada lengan bawah mengambarkan
                                kehangatan, keceriaan, dan semangat optimisme dalam menjalani
                                hidup. Warna ungu di tengah sebagai simbol tubuh yang merangkul
                                dengan bijaksana. Logo ini menginterpretasikan bentuk kasih
                                sayang yang begitu dalam untuk individu autistik. Awal munculnya
                                kasih sayang adalah dari rasa pengertian. Mengerti dan paham
                                bukan hal yang mudah. Kita semua butuh ilmu. Semoga Peduli ASD
                                dapat menjadi salah satu platform yang mampu mewujudkan kasih
                                sayang di atas rasa pengertian itu.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
