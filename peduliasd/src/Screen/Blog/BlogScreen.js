import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listArticleAction } from '../../actions/articleAction'

const BlogScreen = () => {

    const articleList = useSelector((state) => state.articleList)
    const {loading, error, listArticle} = articleList

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(listArticleAction())
    },[])

    return (
        <>
            <section className="wrapper bg-soft-primary">
                <div className="container pt-10 pb-12 pt-md-14 pb-md-16 text-center">
                    <div className="row">
                        <div className="col-md-7 col-lg-6 col-xl-5 mx-auto">
                            <h1 className="display-1 mb-3">Business News</h1>
                            <p className="lead px-lg-5 px-xxl-8">Tampilan untuk comunitas sudah selesai, tapi backend belum selesai. Tampilan dan backend untuk admin belum selesai</p>
                        </div>

                    </div>

                </div>

            </section>

            <section className="wrapper bg-light wrapper-border">
                <div className="container inner py-8">
                    <div className="row gx-lg-8 gx-xl-12 gy-4 gy-lg-0">
                        <div className="col-lg-8 align-self-center">
                            <div className="blog-filter filter">
                                <p>Cari Artikel: Makan Nasi Dendeng</p>
                            </div>

                        </div>

                        <aside className="col-lg-4 sidebar">
                            <form className="search-form">
                                <div className="form-floating mb-0">
                                    <input id="search-form" type="text" className="form-control" placeholder="Search"/>
                                    <label htmlFor="search-form">Search</label> 
                                </div>
                            </form>
                        </aside>
                    </div>
                </div>
            </section>

            <section className="wrapper bg-light">
                <div className="container py-14 py-md-16">
                    <div className="row gx-lg-12 gx-xl-12">
                        <div className="col-lg-12">

                            <div className="blog grid grid-view">
                                <div className="row isotope gx-md-8 gy-8 mb-8">
                                    {listArticle && listArticle.map((item) => (
                                        <article key={item._id} className="item post col-md-6">
                                            <div className="card">
                                                <figure className="card-img-top overlay overlay1 hover-scale"><a href="/"> <img src={item.poster} alt="" /></a>
                                                    <figcaption>
                                                        <h5 className="from-top mb-0">Read More</h5>
                                                    </figcaption>
                                                </figure>
                                                <div className="card-body">
                                                    <div className="post-header">
                                                        <div className="post-category text-line">
                                                            <a href="/" className="hover" rel="category">Coding</a>
                                                        </div>

                                                        <h2 className="post-title h3 mt-1 mb-3"><a className="link-dark" href="/">{item.title}</a></h2>
                                                    </div>

                                                    <div className="post-content" dangerouslySetInnerHTML={{__html: item.content}}>
                                                    </div>

                                                </div>

                                                <div className="card-footer">
                                                    <ul className="post-meta d-flex mb-0">
                                                        <li className="post-date"><i className="uil uil-calendar-alt"></i><span>{item.updatedAt}</span></li>
                                                    </ul>
                                                </div>

                                            </div>

                                        </article>
                                    ))}

                                    <article className="item post col-md-6">
                                        <div className="card">
                                            <figure className="card-img-top overlay overlay1 hover-scale"><a href="/"> <img src="./assets/img/photos/b5.jpg" alt="" /></a>
                                                <figcaption>
                                                    <h5 className="from-top mb-0">Read More</h5>
                                                </figcaption>
                                            </figure>
                                            <div className="card-body">
                                                <div className="post-header">
                                                    <div className="post-category text-line">
                                                        <a href="/" className="hover" rel="category">Workspace</a>
                                                    </div>

                                                    <h2 className="post-title h3 mt-1 mb-3"><a className="link-dark" href="./blog-post.html">Nullam id dolor elit id nibh</a></h2>
                                                </div>

                                                <div className="post-content">
                                                    <p>Mauris convallis non ligula non interdum. Gravida vulputate convallis tempus vestibulum cras imperdiet nun eu dolor. Aenean lacinia bibendum nulla sed.</p>
                                                </div>

                                            </div>

                                            <div className="card-footer">
                                                <ul className="post-meta d-flex mb-0">
                                                    <li className="post-date"><i className="uil uil-calendar-alt"></i><span>29 Mar 2021</span></li>
                                                    <li className="post-comments"><a href="/"><i className="uil uil-comment"></i>3</a></li>
                                                    <li className="post-likes ms-auto"><a href="/"><i className="uil uil-heart-alt"></i>3</a></li>
                                                </ul>

                                            </div>

                                        </div>

                                    </article>

                                    <article className="item post col-md-6">
                                        <div className="card">
                                            <figure className="card-img-top overlay overlay1 hover-scale"><a href="/"> <img src="./assets/img/photos/b6.jpg" alt="" /></a>
                                                <figcaption>
                                                    <h5 className="from-top mb-0">Read More</h5>
                                                </figcaption>
                                            </figure>
                                            <div className="card-body">
                                                <div className="post-header">
                                                    <div className="post-category text-line">
                                                        <a href="/" className="hover" rel="category">Meeting</a>
                                                    </div>

                                                    <h2 className="post-title h3 mt-1 mb-3"><a className="link-dark" href="./blog-post.html">Ultricies fusce porta elit</a></h2>
                                                </div>

                                                <div className="post-content">
                                                    <p>Mauris convallis non ligula non interdum. Gravida vulputate convallis tempus vestibulum cras imperdiet nun eu dolor. Aenean lacinia bibendum nulla sed.</p>
                                                </div>

                                            </div>

                                            <div className="card-footer">
                                                <ul className="post-meta d-flex mb-0">
                                                    <li className="post-date"><i className="uil uil-calendar-alt"></i><span>26 Feb 2021</span></li>
                                                    <li className="post-comments"><a href="/"><i className="uil uil-comment"></i>6</a></li>
                                                    <li className="post-likes ms-auto"><a href="/"><i className="uil uil-heart-alt"></i>3</a></li>
                                                </ul>

                                            </div>

                                        </div>

                                    </article>

                                    <article className="item post col-md-6">
                                        <div className="card">
                                            <figure className="card-img-top overlay overlay1 hover-scale"><a href="/"> <img src="./assets/img/photos/b7.jpg" alt="" /></a>
                                                <figcaption>
                                                    <h5 className="from-top mb-0">Read More</h5>
                                                </figcaption>
                                            </figure>
                                            <div className="card-body">
                                                <div className="post-header">
                                                    <div className="post-category text-line">
                                                        <a href="/" className="hover" rel="category">Business Tips</a>
                                                    </div>

                                                    <h2 className="post-title h3 mt-1 mb-3"><a className="link-dark" href="./blog-post.html">Morbi leo risus porta eget</a></h2>
                                                </div>
                                                <div className="post-content">
                                                    <p>Mauris convallis non ligula non interdum. Gravida vulputate convallis tempus vestibulum cras imperdiet nun eu dolor. Aenean lacinia bibendum nulla sed.</p>
                                                </div>

                                            </div>

                                            <div className="card-footer">
                                                <ul className="post-meta d-flex mb-0">
                                                    <li className="post-date"><i className="uil uil-calendar-alt"></i><span>7 Jan 2021</span></li>
                                                    <li className="post-comments"><a href="/"><i className="uil uil-comment"></i>2</a></li>
                                                    <li className="post-likes ms-auto"><a href="/"><i className="uil uil-heart-alt"></i>5</a></li>
                                                </ul>

                                            </div>

                                        </div>

                                    </article>

                                </div>

                            </div>

                            <nav className="d-flex" aria-label="pagination">
                                <ul className="pagination">
                                    <li className="page-item disabled">
                                        <a className="page-link" href="/" aria-label="Previous">
                                            <span aria-hidden="true"><i className="uil uil-arrow-left"></i></span>
                                        </a>
                                    </li>
                                    <li className="page-item active"><a className="page-link" href="/">1</a></li>
                                    <li className="page-item"><a className="page-link" href="/">2</a></li>
                                    <li className="page-item"><a className="page-link" href="/">3</a></li>
                                    <li className="page-item">
                                        <a className="page-link" href="/" aria-label="Next">
                                            <span aria-hidden="true"><i className="uil uil-arrow-right"></i></span>
                                        </a>
                                    </li>
                                </ul>

                            </nav>

                        </div>
                    </div>

                </div>

            </section>

            <footer className="bg-dark text-inverse">
                <div className="container py-13 py-md-15">
                    <div className="row gy-6 gy-lg-0">
                        <div className="col-md-4 col-lg-3">
                            <div className="widget">
                                <img className="mb-4" src="./assets/img/logo-light.png" srcSet="./assets/img/logo-light@2x.png 2x" alt="" />
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
                                    {/* <!-- Begin Mailchimp Signup Form --> */}
                                    <div id="mc_embed_signup2">
                                        <form action="https://elemisfreebies.us20.list-manage.com/subscribe/post?u=aa4947f70a475ce162057838d&amp;id=b49ef47a9a" method="post" id="mc-embedded-subscribe-form2" name="mc-embedded-subscribe-form" className="validate dark-fields" target="_blank" noValidate>
                                            <div id="mc_embed_signup_scroll2"></div>
                                        </form>
                                    </div>

                                </div>
                                ]
                            </div>

                        </div>

                    </div>

                </div>

            </footer><div className="progress-wrap">
                <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
                    <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
                </svg>
            </div></>
    )
}

export default BlogScreen
