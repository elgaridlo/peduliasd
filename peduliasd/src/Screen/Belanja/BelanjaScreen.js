import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listProductAction } from '../../actions/productAction'

const BelanjaScreen = () => {
    const dispatch = useDispatch()

    const products = useSelector(state => state.products)
    const { listProduct} = products

    useEffect(() => {
        if(!listProduct) {
            dispatch(listProductAction())
        }
    },[listProduct])
    return (
        <>
            <div className="content-wrapper">
                <section className="wrapper bg-light">
                    <div className="container py-14 py-md-16">
                        <div className="row mb-8 text-center">
                            <div className="col-lg-9 col-xl-8 col-xxl-7 mx-auto">
                                <h2 className="fs-16 text-uppercase text-primary mb-3">BELANJA</h2>
                                <h3 className="display-4 mb-4">I Feel Goods</h3>
                                <p className="lead mb-6">I Feel Goods adalah merchant store yang lahir dari nilai dan semangat Peduli ASD untuk membangun masyarakat yang lebih inklusif, empatik, dan berdaya.</p>
                                <p className="lead mb-6">I Feel Goods bukan sekadar toko. Ia adalah ruang ekspresi nilai, rasa, dan dukungan—di mana setiap produk membawa pesan tentang penerimaan, keberagaman, dan cinta terhadap kemanusiaan.</p>
                            </div>
                        </div>

                        <div className="row mb-8 text-center">
                            <div className="col-lg-9 col-xl-8 col-xxl-7 mx-auto">
                                <h3 className="display-6 mb-4">Makna di Balik Nama</h3>
                                <div className="mb-4">
                                    <h4 className="text-primary">I FEEL</h4>
                                    <p>Inclusive Feeling, Expression, Empathy & Love</p>
                                    <p>I FEEL merepresentasikan perasaan manusia yang utuh—kemampuan untuk merasakan, memahami, dan menerima perbedaan. Melalui I Feel Goods, kami mengajak setiap individu untuk mengekspresikan empati dan cinta, khususnya kepada individu autistik dan komunitas neurodiversitas.</p>
                                </div>
                                <div className="mb-4">
                                    <h4 className="text-primary">GOODS</h4>
                                    <p>Growth • Outreach • Optimism • Diversity • Support</p>
                                    <p>GOODS mencerminkan tujuan yang lebih besar dari sekadar produk fisik. Setiap item dirancang untuk:</p>
                                    <ul className="text-start">
                                        <li>mendorong pertumbuhan (growth) kesadaran sosial,</li>
                                        <li>memperluas jangkauan (outreach) pesan inklusivitas,</li>
                                        <li>menumbuhkan optimisme,</li>
                                        <li>merayakan keberagaman (diversity),</li>
                                        <li>dan memberikan dukungan (support) nyata bagi ekosistem autisme.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="row mb-8 text-center">
                            <div className="col-lg-9 col-xl-8 col-xxl-7 mx-auto">
                                <h3 className="display-6 mb-4">Lebih dari Sekadar Merchant Store</h3>
                                <p className="lead mb-4">Sebagai bagian dari ekosistem Peduli ASD, I Feel Goods berfungsi sebagai:</p>
                                <ul className="text-start">
                                    <li>Media edukasi nilai inklusivitas melalui produk sehari-hari,</li>
                                    <li>Saluran kampanye sosial yang menjangkau publik lebih luas,</li>
                                    <li>Sumber pendapatan pendukung untuk keberlanjutan program edukasi dan advokasi Peduli ASD.</li>
                                </ul>
                                <p className="lead mb-6">Produk-produk I Feel Goods dirancang dengan pesan yang sederhana namun bermakna, agar nilai inklusivitas dapat hadir dalam keseharian—dipakai, dilihat, dan dirasakan oleh siapa saja.</p>
                            </div>
                        </div>

                        <div className="row mb-8 text-center">
                            <div className="col-lg-9 col-xl-8 col-xxl-7 mx-auto">
                                <h3 className="display-6 mb-4">Dampak yang Ingin Kami Wujudkan</h3>
                                <p className="lead mb-4">Dengan membeli dan menggunakan produk I Feel Goods, Anda turut:</p>
                                <ul className="text-start">
                                    <li>Mendukung gerakan edukasi dan penerimaan terhadap individu autistik</li>
                                    <li>Menjadi bagian dari komunitas yang peduli dan inklusif</li>
                                    <li>Membantu keberlanjutan program Peduli ASD secara jangka panjang</li>
                                </ul>
                                <p className="lead mb-6">I Feel Goods adalah pengingat bahwa perubahan sosial dapat dimulai dari hal kecil, dari apa yang kita pilih untuk pakai, bagikan, dan dukung.</p>
                            </div>
                        </div>

                        {/* Katalog di WEB - Link Catalog CANVA */}
                        {/* https://www.canva.com/design/DAGJLX0v434/3w6v7z8x9y0/ */}

                        <div className="row mb-8 text-center">
                            <div className="col-lg-9 col-xl-8 col-xxl-7 mx-auto">
                                <h3 className="display-6 mb-4">Katalog Produk</h3>
                                <p className="lead mb-6">Klik di bawah ini untuk melihat katalog lengkap produk I Feel Goods:</p>
                                <a href="https://www.canva.com/design/DAGJLX0v434/3w6v7z8x9y0/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Lihat Katalog Produk</a>
                            </div>
                        </div>

                        {/* <div className="grid grid-view projects-masonry">
                            <div className="isotope-filter filter mb-10">
                                <p>Karya anak autistik:</p>
                            </div>
                            <div className="row gx-md-10 gy-10 gy-md-13">
                                {listProduct && listProduct.map(item => (
                                    <div key={item.id} className="project item col-md-6 workshop">
                                        <figure className="lift rounded mb-6"><a href={`/product/${item.id}`}> <img src={item.photo} alt="" /></a></figure>
                                        <div className="project-details d-flex justify-content-center flex-column">
                                            <div className="post-header">
                                                <div className="post-category text-line mb-3 text-leaf">Ayya</div>
                                                <h3 className="post-title">{item.product_name}</h3>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div> */}
                    </div>
                </section>
            </div>
        </>

    )
}

export default BelanjaScreen
