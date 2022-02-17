import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getArticleByIdAction } from "../../actions/articleAction"
import formatDate from "../../utils/FunctionHelp/FormatDate"

const ArticleByIdScreen = ({ match }) => {
    const articleDetail = useSelector((state) => state.articleDetail)
    const {loading, error, detail} = articleDetail

    const dispatch = useDispatch()
    console.log('match = ', match)

    useEffect(() => {
        dispatch(getArticleByIdAction(match.params.id))
    },[])
    return (
        <>
            <section className="wrapper bg-soft-primary">
                <div className="container pt-10 pb-19 pt-md-14 pb-md-20 text-center">
                    <div className="row">
                        <div className="col-md-10 col-xl-8 mx-auto">
                            <div className="post-header">
                                <div className="post-category text-line">
                                    <a href="/#" className="hover" rel="category">Teamwork</a>
                                </div>
                                <h1 className="display-1 mb-4">{detail && detail.title}</h1>
                                <ul className="post-meta mb-5">
                                    <li className="post-date"><i className="uil uil-calendar-alt"></i><span>{detail && formatDate(new Date(detail.updatedAt))}</span></li>
                                    <li className="post-author"><a href=""><i className="uil uil-user"></i><span>By Sandbox</span></a></li>
                                    <li className="post-likes"><a href={`${match.url}/edit`}><i className="uil uil-file-edit-alt"></i><span> Edit</span></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="wrapper bg-light">
                <div className="container pb-14 pb-md-16">
                    <div className="row">
                        <div className="col-lg-10 mx-auto">
                            <div className="blog single mt-n17">
                                <div className="card">
                                    <figure className="card-img-top"><img src={detail && detail.poster} alt="" /></figure>
                                    <div className="card-body">
                                        <div className="classic-view">
                                            {
                                                detail && (
                                                    <article className="post" dangerouslySetInnerHTML={{__html: detail.content}}>
                                                    </article>
                                                )
                                            }
                                        </div>
                                        <hr />
                                        <h3 className="mb-6">You Might Also Like</h3>
                                        <div className="carousel owl-carousel blog grid-view mb-16" data-margin="30" data-dots="true" data-autoplay="false" data-autoplay-timeout="5000" data-responsive='{"0":{"items": "1"}, "768":{"items": "2"}, "992":{"items": "2"}, "1200":{"items": "2"}}'>
                                            <div className="item">
                                                <article>
                                                    <figure className="overlay overlay1 hover-scale rounded mb-5"><a href="/#"> <img src="/assets/img/photos/b4.jpg" alt="" /></a>
                                                        <figcaption>
                                                            <h5 className="from-top mb-0">Read More</h5>
                                                        </figcaption>
                                                    </figure>
                                                    <div className="post-header">
                                                        <div className="post-category text-line">
                                                            <a href="/#" className="hover" rel="category">Coding</a>
                                                        </div>
                                                        <h2 className="post-title h3 mt-1 mb-3"><a className="link-dark" href="/blog-post.html">Ligula tristique quis risus</a></h2>
                                                    </div>
                                                    <div className="post-footer">
                                                        <ul className="post-meta mb-0">
                                                            <li className="post-date"><i className="uil uil-calendar-alt"></i><span>14 Apr 2021</span></li>
                                                            <li className="post-comments"><a href="/#"><i className="uil uil-comment"></i>4</a></li>
                                                        </ul>
                                                    </div>
                                                </article>
                                            </div>
                                            <div className="item">
                                                <article>
                                                    <figure className="overlay overlay1 hover-scale rounded mb-5"><a href="/#"> <img src="/assets/img/photos/b5.jpg" alt="" /></a>
                                                        <figcaption>
                                                            <h5 className="from-top mb-0">Read More</h5>
                                                        </figcaption>
                                                    </figure>
                                                    <div className="post-header">
                                                        <div className="post-category text-line">
                                                            <a href="/#" className="hover" rel="category">Workspace</a>
                                                        </div>
                                                        <h2 className="post-title h3 mt-1 mb-3"><a className="link-dark" href="/blog-post.html">Nullam id dolor elit id nibh</a></h2>
                                                    </div>
                                                    <div className="post-footer">
                                                        <ul className="post-meta mb-0">
                                                            <li className="post-date"><i className="uil uil-calendar-alt"></i><span>29 Mar 2021</span></li>
                                                            <li className="post-comments"><a href="/#"><i className="uil uil-comment"></i>3</a></li>
                                                        </ul>
                                                    </div>
                                                </article>
                                            </div>
                                            <div className="item">
                                                <article>
                                                    <figure className="overlay overlay1 hover-scale rounded mb-5"><a href="/#"> <img src="/assets/img/photos/b6.jpg" alt="" /></a>
                                                        <figcaption>
                                                            <h5 className="from-top mb-0">Read More</h5>
                                                        </figcaption>
                                                    </figure>
                                                    <div className="post-header">
                                                        <div className="post-category text-line">
                                                            <a href="/#" className="hover" rel="category">Meeting</a>
                                                        </div>
                                                        <h2 className="post-title h3 mt-1 mb-3"><a className="link-dark" href="/blog-post.html">Ultricies fusce porta elit</a></h2>
                                                    </div>
                                                    <div className="post-footer">
                                                        <ul className="post-meta mb-0">
                                                            <li className="post-date"><i className="uil uil-calendar-alt"></i><span>26 Feb 2021</span></li>
                                                            <li className="post-comments"><a href="/#"><i className="uil uil-comment"></i>6</a></li>
                                                        </ul>
                                                    </div>
                                                </article>
                                            </div>
                                            <div className="item">
                                                <article>
                                                    <figure className="overlay overlay1 hover-scale rounded mb-5"><a href="/#"> <img src="/assets/img/photos/b7.jpg" alt="" /></a>
                                                        <figcaption>
                                                            <h5 className="from-top mb-0">Read More</h5>
                                                        </figcaption>
                                                    </figure>
                                                    <div className="post-header">
                                                        <div className="post-category text-line">
                                                            <a href="/#" className="hover" rel="category">Business Tips</a>
                                                        </div>
                                                        <h2 className="post-title h3 mt-1 mb-3"><a className="link-dark" href="/blog-post.html">Morbi leo risus porta eget</a></h2>
                                                    </div>
                                                    <div className="post-footer">
                                                        <ul className="post-meta mb-0">
                                                            <li className="post-date"><i className="uil uil-calendar-alt"></i><span>7 Jan 2021</span></li>
                                                            <li className="post-comments"><a href="/#"><i className="uil uil-comment"></i>2</a></li>
                                                        </ul>
                                                    </div>
                                                </article>
                                            </div>
                                        </div>
                                        <hr />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="progress-wrap">
                <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
                    <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
                </svg>
            </div></>
    )
}

export default ArticleByIdScreen