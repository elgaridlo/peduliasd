import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getArticleByIdAction } from "../../actions/articleAction"

const ArticleByIdScreen = ({ match }) => {
    const articleDetail = useSelector((state) => state.articleDetail)
    const {loading, error, detail} = articleDetail

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getArticleByIdAction(match.params.id))
    },[])
    return (
        <>
            <section class="wrapper bg-soft-primary">
                <div class="container pt-10 pb-19 pt-md-14 pb-md-20 text-center">
                    <div class="row">
                        <div class="col-md-10 col-xl-8 mx-auto">
                            <div class="post-header">
                                <div class="post-category text-line">
                                    <a href="#" class="hover" rel="category">Teamwork</a>
                                </div>
                                <h1 class="display-1 mb-4">{detail && detail.title}</h1>
                                <ul class="post-meta mb-5">
                                    <li class="post-date"><i class="uil uil-calendar-alt"></i><span>{detail && detail.updatedAt}</span></li>
                                    <li class="post-author"><a href="#"><i class="uil uil-user"></i><span>By Sandbox</span></a></li>
                                    <li class="post-comments"><a href="#"><i class="uil uil-comment"></i>3<span> Comments</span></a></li>
                                    <li class="post-likes"><a href="#"><i class="uil uil-heart-alt"></i>3<span> Likes</span></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="wrapper bg-light">
                <div class="container pb-14 pb-md-16">
                    <div class="row">
                        <div class="col-lg-10 mx-auto">
                            <div class="blog single mt-n17">
                                <div class="card">
                                    <figure class="card-img-top"><img src={detail && detail.poster} alt="" /></figure>
                                    <div class="card-body">
                                        <div class="classic-view">
                                            {
                                                detail && (
                                                    <article class="post" dangerouslySetInnerHTML={{__html: detail.content}}>
                                                    </article>
                                                )
                                            }
                                        </div>
                                        <hr />
                                        <h3 class="mb-6">You Might Also Like</h3>
                                        <div class="carousel owl-carousel blog grid-view mb-16" data-margin="30" data-dots="true" data-autoplay="false" data-autoplay-timeout="5000" data-responsive='{"0":{"items": "1"}, "768":{"items": "2"}, "992":{"items": "2"}, "1200":{"items": "2"}}'>
                                            <div class="item">
                                                <article>
                                                    <figure class="overlay overlay1 hover-scale rounded mb-5"><a href="#"> <img src="/assets/img/photos/b4.jpg" alt="" /></a>
                                                        <figcaption>
                                                            <h5 class="from-top mb-0">Read More</h5>
                                                        </figcaption>
                                                    </figure>
                                                    <div class="post-header">
                                                        <div class="post-category text-line">
                                                            <a href="#" class="hover" rel="category">Coding</a>
                                                        </div>
                                                        <h2 class="post-title h3 mt-1 mb-3"><a class="link-dark" href="/blog-post.html">Ligula tristique quis risus</a></h2>
                                                    </div>
                                                    <div class="post-footer">
                                                        <ul class="post-meta mb-0">
                                                            <li class="post-date"><i class="uil uil-calendar-alt"></i><span>14 Apr 2021</span></li>
                                                            <li class="post-comments"><a href="#"><i class="uil uil-comment"></i>4</a></li>
                                                        </ul>
                                                    </div>
                                                </article>
                                            </div>
                                            <div class="item">
                                                <article>
                                                    <figure class="overlay overlay1 hover-scale rounded mb-5"><a href="#"> <img src="/assets/img/photos/b5.jpg" alt="" /></a>
                                                        <figcaption>
                                                            <h5 class="from-top mb-0">Read More</h5>
                                                        </figcaption>
                                                    </figure>
                                                    <div class="post-header">
                                                        <div class="post-category text-line">
                                                            <a href="#" class="hover" rel="category">Workspace</a>
                                                        </div>
                                                        <h2 class="post-title h3 mt-1 mb-3"><a class="link-dark" href="/blog-post.html">Nullam id dolor elit id nibh</a></h2>
                                                    </div>
                                                    <div class="post-footer">
                                                        <ul class="post-meta mb-0">
                                                            <li class="post-date"><i class="uil uil-calendar-alt"></i><span>29 Mar 2021</span></li>
                                                            <li class="post-comments"><a href="#"><i class="uil uil-comment"></i>3</a></li>
                                                        </ul>
                                                    </div>
                                                </article>
                                            </div>
                                            <div class="item">
                                                <article>
                                                    <figure class="overlay overlay1 hover-scale rounded mb-5"><a href="#"> <img src="/assets/img/photos/b6.jpg" alt="" /></a>
                                                        <figcaption>
                                                            <h5 class="from-top mb-0">Read More</h5>
                                                        </figcaption>
                                                    </figure>
                                                    <div class="post-header">
                                                        <div class="post-category text-line">
                                                            <a href="#" class="hover" rel="category">Meeting</a>
                                                        </div>
                                                        <h2 class="post-title h3 mt-1 mb-3"><a class="link-dark" href="/blog-post.html">Ultricies fusce porta elit</a></h2>
                                                    </div>
                                                    <div class="post-footer">
                                                        <ul class="post-meta mb-0">
                                                            <li class="post-date"><i class="uil uil-calendar-alt"></i><span>26 Feb 2021</span></li>
                                                            <li class="post-comments"><a href="#"><i class="uil uil-comment"></i>6</a></li>
                                                        </ul>
                                                    </div>
                                                </article>
                                            </div>
                                            <div class="item">
                                                <article>
                                                    <figure class="overlay overlay1 hover-scale rounded mb-5"><a href="#"> <img src="/assets/img/photos/b7.jpg" alt="" /></a>
                                                        <figcaption>
                                                            <h5 class="from-top mb-0">Read More</h5>
                                                        </figcaption>
                                                    </figure>
                                                    <div class="post-header">
                                                        <div class="post-category text-line">
                                                            <a href="#" class="hover" rel="category">Business Tips</a>
                                                        </div>
                                                        <h2 class="post-title h3 mt-1 mb-3"><a class="link-dark" href="/blog-post.html">Morbi leo risus porta eget</a></h2>
                                                    </div>
                                                    <div class="post-footer">
                                                        <ul class="post-meta mb-0">
                                                            <li class="post-date"><i class="uil uil-calendar-alt"></i><span>7 Jan 2021</span></li>
                                                            <li class="post-comments"><a href="#"><i class="uil uil-comment"></i>2</a></li>
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
        <footer class="bg-dark text-inverse">
                <div class="container py-13 py-md-15">
                    <div class="row gy-6 gy-lg-0">
                        <div class="col-md-4 col-lg-3">
                            <div class="widget">
                                <img class="mb-4" src="/assets/img/logo-light.png" srcset="/assets/img/logo-light@2x.png 2x" alt="" />
                                <p class="mb-4">© 2021 Sandbox.<br class="d-none d-lg-block" />All rights reserved.</p>
                                <nav class="nav social social-white">
                                    <a href="#"><i class="uil uil-twitter"></i></a>
                                    <a href="#"><i class="uil uil-facebook-f"></i></a>
                                    <a href="#"><i class="uil uil-dribbble"></i></a>
                                    <a href="#"><i class="uil uil-instagram"></i></a>
                                    <a href="#"><i class="uil uil-youtube"></i></a>
                                </nav>
                            </div>
                        </div>
                        <div class="col-md-4 col-lg-3">
                            <div class="widget">
                                <h4 class="widget-title text-white mb-3">Get in Touch</h4>
                                <address class="pe-xl-15 pe-xxl-17">Moonshine St. 14/05 Light City, London, United Kingdom</address>
                                <a href="mailto:#">info@email.com</a><br /> +00 (123) 456 78 90
                            </div>
                        </div>
                        <div class="col-md-4 col-lg-3">
                            <div class="widget">
                                <h4 class="widget-title text-white mb-3">Learn More</h4>
                                <ul class="list-unstyled  mb-0">
                                    <li><a href="#">About Us</a></li>
                                    <li><a href="#">Our Story</a></li>
                                    <li><a href="#">Projects</a></li>
                                    <li><a href="#">Terms of Use</a></li>
                                    <li><a href="#">Privacy Policy</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md-12 col-lg-3">
                            <div class="widget">
                                <h4 class="widget-title text-white mb-3">Our Newsletter</h4>
                                <p class="mb-5">Subscribe to our newsletter to get our news & deals delivered to you.</p>
                                <div class="newsletter-wrapper">
                                    <div id="mc_embed_signup2">
                                        <form action="https://elemisfreebies.us20.list-manage.com/subscribe/post?u=aa4947f70a475ce162057838d&amp;id=b49ef47a9a" method="post" id="mc-embedded-subscribe-form2" name="mc-embedded-subscribe-form" class="validate dark-fields" target="_blank" novalidate>
                                            <div id="mc_embed_signup_scroll2"></div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer><div class="progress-wrap">
                <svg class="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
                    <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
                </svg>
            </div></>
    )
}

export default ArticleByIdScreen