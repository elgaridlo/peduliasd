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
                                                <figure className="card-img-top overlay overlay1 hover-scale"><a href={`/artikel/${item._id}`}> <img src={item.poster} alt="" /></a>
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
            </>
    )
}

export default BlogScreen
