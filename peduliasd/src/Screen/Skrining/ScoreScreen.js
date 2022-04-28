import React, { useEffect } from 'react'

const ScoreScreen = ({history,location}) => {
    const score = location ? location.search.split('=')[1] : null
    useEffect(() => {
        if(!score) {
            history.push('/skrining')
        }
    },[score])
    return (
        <>
            <section className="wrapper bg-light">
                <div className="container py-14 py-md-16">
                    {score && (
                        <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
                            <div className="col-md-8 col-lg-6 col-xl-5 order-lg-2 position-relative">
                                <div className="shape bg-soft-primary rounded-circle rellax w-20 h-20" data-rellax-speed="1" style={{top: '-2rem', right: '-1.9rem'}}></div>
                                <figure className="rounded"><img src="./assets/img/photos/about7.jpg" srcSet="./assets/img/photos/about7@2x.jpg 2x" alt=""/></figure>
                            </div>
                            <div className="col-lg-6">
                                <h2 className="display-4 mb-3">{score < 3 ? penilaian.low.hasil : score > 2 && score <= 7 ? penilaian.medium.hasil : penilaian.high.hasil}</h2>
                                <p className="mb-6 text-justify" dangerouslySetInnerHTML={{__html: score < 3 ? penilaian.low.description : score > 2 && score <= 7 ? penilaian.medium.description : penilaian.high.description}} />
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </>
    )
}

const penilaian = {
    low: {
        hasil: 'Risiko Rendah',
        description: `<p>Jika anak lebih muda dari 24 bulan, lakukan skrining lagi setelah
        ulang tahun kedua. Tidak ada tindakan lanjutan yang diperlukan, kecuali surveilans
        untuk mengindikasikan risiko ASD</p>`
    },
    medium: {
        hasil: 'Risiko Sedang',
        description:`<p>
        Lakukan <i> Follow-up </i> (M-CHAT-R/F tahap kedua) untuk mendapat
        informasi tambahan tentang respon berisiko. Skrining positif jika skor M-CHAT-R/F
        2 atau lebih. Tindakan yang diperlukan: adalah rujuk anak untuk evaluasi diagnostik
        dan evaluasi eligibilitas untuk intervensi awal. Skrining negatif jika skor M-CHAT-
        R/F 0-1. Tidak ada tindakan lanjutan yang diperlukan, kecuali surveilans untuk
        mengindikasikan risiko ASD. Anak harus diskrining ulang saat datang kembali.
        </p>`
    },
    high: {
        hasil: 'Risiko Tinggi',
        description:`<p> <i>Follow-up </i> dapat tidak dilakukan dan pasien dirujuk segera untuk
        evaluasi diagnostik dan evaluasi eligibilitas untuk intervensi awal.</p>`
    }
}

export default ScoreScreen