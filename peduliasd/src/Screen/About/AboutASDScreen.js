import React from 'react'
import {Carousel} from 'react-responsive-carousel'

const AboutASDScreen = () => {
    return (
        <>
            
            <section className="wrapper bg-gray">
                <figure className="position-absoute" style={{bottom: "0", left:"0", zIndex:"2"}}><img src="/assets/img/gambar/tentang_asd.jpg" alt="" /></figure>
            </section>

            <section className="wrapper bg-light angled upper-end lower-end">
                <div className="container py-14 py-md-16">
                    <div className="row gx-lg-8 gx-xl-12 gy-10 mb-14 mb-md-17 align-items-center">
                        <div className="col-xl-6 mx-auto">
                            <h1 className="display-1 mb-4">Tentang <span className="fst-italic"> Autism Spectrum Disorder (ASD)</span></h1>
                        </div>
                        <div className="col-lg-12">
                            <img src="./assets/img/icons/megaphone.svg" className="svg-inject icon-svg icon-svg-md mb-4" alt="" />
                            <p className="mb-6" style={{ textAlign: 'justify' }}>
                                <span className="fst-italic">Autism Spectrum Disorder (ASD) </span> adalah gangguan perkembangan yang ditandai dengan munculnya 
                                gangguan sosial dan komunikasi, keterbatasan minat dan kemampuan, serta perilaku berulang yang cenderung 
                                kaku dan tidak fleksibel. Studi pertama tentang prevalensi spektrum autistik muncul pada tahun 1960-an dan 1970-an. 
                                Saat itu autistik dianggap sebagai kondisi yang sangat parah  dan disertai dengan kecacatan intelektual. 
                                Studi-studi ini melaporkan bahwa prevalensi spektrum autistik saat itu sekitar 4-5 kasus per 10.000 anak. 
                                Diagnosis klinis spektrum autistik pertama kali pada tahun 1980 diatur oleh <span className="fst-italic"> American Psychiatric Association (APA) </span> 
                                dalam <span className="fst-italic"> Diagnostic and Statistical Manual of Mental Disorders (DSM) III</span>. Pada tahun 1994, <span className="fst-italic"> Diagnostic and Statistical 
                                Manual of Mental Disorders (DSM) IV </span> merevisi kriteria diagnostik spektrum autistik. Terdapat lima subtipe spektrum 
                                yaitu <span className="fst-italic"> autistic disorder, asperger disorder, pervasive developmental disorder–not otherwise specified (PDD-NOS), 
                                childhood disintegrative disorder, </span> dan <span className="fst-italic"> Rett’s disorder</span> yang digabungkan dalam diagnosis bersama Pervasive Developmental Disorder (PDD). Terakhir, pada tahun 2013, APA kembali mengeluarkan DSM terbaru, 
                                yaitu edisi kelima. Dalam DSM V, spektrum autistik didefinisikan sebagai gangguan perkembangan yang memiliki spektrum luas dengan penyebab multifaktorial, sehingga diberi nama<span className="fst-italic"> Autism Spectrum 
                                Disorder (ASD)</span>. 
                            </p>
                            <p className="mb-6" style={{ textAlign: 'justify' }}>
                                <span className="fst-italic">Short review </span> yang ditulis oleh Park, Lee, Moon, Lee, Kim, Kim, et al, menjelaskan bahwa ASD adalah gangguan yang disebabkan oleh 
                                banyak faktor <span className="fst-italic">(multi-factorial disorder)</span>. Faktor penyebab ASD dapat berasal dari genetik, non genetik, dan interaksi keduanya. Faktor genetik 
                                penyebab ASD umumnya berupa mutasi gen dan gangguan kromosomal yang ditemukan 10-20% pada individu dengan ASD. Anak yang lahir dengan saudara 
                                kandung ASD memiliki risiko lebih besar mengalami ASD juga, ini ditunjukkan dengan ditemukannya 5-8% kasus di dunia. Faktor lain seperti non 
                                genetik dapat berupa infeksi virus selama kehamilan ibu, lingkungan yang tidak sehat, dan banyak faktor lainnya yang sampai saat ini masih diteliti di dunia.
                            </p>
                            <p className="mb-6" style={{ textAlign: 'justify' }}>
                                Berdasarkan DSM V, diagnosis ASD didasari oleh beberapa ciri utama yang terlihat pada anak. Ciri ASD yang paling utama terlihat adalah penurunan kemampuan bahasa 
                                dan komunikasi sosial secara terus menerus.  Hal ini ditandai dengan tidak normalnya interaksi dan pendekatan sosial yang terjadi antara anak ASD dan lingkungan, sehingga sering 
                                terjadi kegagalan dalam melakukan komunikasi dua arah. Selain itu, penurunan perilaku komunikatif secara nonverbal juga terlihat pada anak yang diduga ASD.  Hal tersebut karena 
                                kurang terintegrasinya antara komunikasi verbal dan nonverbal. Ciri utama yang lain dan mudah terlihat adalah ditemukannya kontak mata dan bahasa tubuh yang lemah, sehingga sulit 
                                memahami dan menggunakan gerakan sesuai fungsinya, seperti sulit memberikan ekspresi wajah yang sesuai dalam komunikasi nonverbal. Penanda ASD yang juga menjadi ciri khas adalah 
                                pola perilaku berulang. Beberapa anak ASD melakukan gerakan motorik berulang seperti mengepakkan tangan dan memukul diri mereka berulang. 
                                Stereotip motorik sederhana lainnya seperti menyusun mainan, membolak-balikan benda, ekolali, dan menyebutkan kata hingga frasa yang mereka suka.
                            </p>
                            <p className="mb-6" style={{ textAlign: 'justify' }}>
                                Hasil diagnosis ASD berdasarkan DSM V dibagi menjadi 3 kategori yaitu level 1 (ringan), level 2 (sedang), dan level 3 (berat). 
                                Berdasarkan pemeriksaan yang dilakukan dalam sebuah penelitian yang merujuk pada kriteria DSM V, dari 990 anak yang melakukan pemeriksaan terdapat 16% anak dengan kasus ringan, 46% 
                                dengan kasus sedang, dan 21% dengan kasus berat, serta 17% adalah kasus yang tidak murni ASD.  Selain itu, jenis kelamin anak yang terdiagnosis 
                                ASD dalam penelitian ini juga terlihat dengan 77% laki-laki dan 23% perempuan. Gambaran penting lainnya adalah intelektual anak ASD, ditemukan 
                                yang mengalami gangguan intelektual sebanyak 56% dan yang tidak mengalami gangguan 43%.
                            </p>
                            <div style={{top:'10px'}}>
                                <p className="fw-bold">Sumber :</p>
                                <p style={{ textAlign: 'justify' , color: 'blueviolet'}}>
                                    Christensen DL, Braun KVN, Baio J, Bilder D, Charles J, Constantino JN, et al. Morbidity and mortality weekly report (MMWR). Centers Dis Control Prev. 2018;65(13):1–23. 
                                </p>
                                <p style={{ textAlign: 'justify' , color: 'blueviolet'}}>
                                    Park HR, Lee JM, Moon HE, Lee DS, Kim BN, Kim J, et al. A short review on the current understanding of autism spectrum disorders. Exp Neurobiol [Internet]. 2016;25(1):1–13. Available from: 10.5607/en.2016.25.1.1
                                </p>
                                <p style={{ textAlign: 'justify' , color: 'blueviolet'}}>
                                    Wiggins LD, Rubenstein E, Daniels J, Daniels C, Yeargin-Allsopp M, Schieve LAS, et al. A phenotype of childhood autism is associated with preexisting maternal anxiety and depression. J Abnorm Child Psychol [Internet]. 2019;47(4):731–40. Available from: 10.1016/j.physbeh.2017.03.040
                                </p>
                                <p style={{ textAlign: 'justify' , color: 'blueviolet'}}>
                                    APA. Diagnostic and statistical manual of mental disorders. Am Phychiatric Assoc [Internet]. 2018; Available from: www.psychiatry.org
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        
        </>

    )
}

export default AboutASDScreen
