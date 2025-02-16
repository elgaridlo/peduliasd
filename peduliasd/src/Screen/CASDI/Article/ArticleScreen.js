import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from '../../../utils/Components/Loader';
import { casdiListArticleAction } from '../../../actions/casdiAction';

const ArticleCASDIScreen = () => {
  const casdiListArticle = useSelector((state) => state.casdiListArticle);
  const { loading, casdiArticle } = casdiListArticle;

  const [search, setSearch] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    const filter = search ? {title: search} : {title: ''}
    const timer = setTimeout(() => {
      dispatch(casdiListArticleAction(filter));
    }, 500)

    return () => clearTimeout(timer)
  },[search, dispatch]);

  useEffect(() => {
    dispatch(casdiListArticleAction());
  },[dispatch])
  useEffect(() => {},[casdiArticle])

  return (
    <>
      <div className="content-wrapper">
        <section className="wrapper bg-light wrapper-border">
          <div className="container inner py-8">
            <div className="row gx-lg-8 gx-xl-12 gy-4 gy-lg-0">
              <div className="col-lg-8 align-self-center">
                <div className="blog-filter filter">
                  <p>Cari Artikel: </p>
                </div>
              </div>

              <aside className="col-lg-4 sidebar">
                  <div className="form-floating mb-0">
                    <input
                      id="search-form"
                      type="text"
                      className="form-control"
                      placeholder="Search"
                      value={search}
                      onChange={(e) => {
                       return setSearch(e.target.value)
                    }}
                    />
                    <label htmlFor="search-form">Search</label>
                  </div>
              </aside>
            </div>
          </div>
        </section>

        <section className="wrapper bg-light">
          <div className="container py-14 py-md-16">
            <div className="row gx-lg-12 gx-xnhl-12">
              <div className="col-lg-12">
                <div className="blog grid grid-view">
                  <div
                    className="row isotope gx-md-8 gy-8 mb-8"
                    ref={(element) => {
                      if (element)
                        element.style.setProperty(
                          "height",
                          "auto",
                          "important"
                        );
                    }}
                  >
                    {loading && <Loader size={"50"} />}
                    {casdiArticle &&
                      casdiArticle.map((item) => (
                        <article key={item.id} className="item post col-md-6">
                          <div className="card">
                            <figure className="card-img-top overlay overlay1 hover-scale">
                              <a href={`/casdi/article/${item.urlTitle}`}>
                                {" "}
                                <img src={item.poster} alt="" />
                              </a>
                              <figcaption>
                                <h5 className="from-top mb-0">Read More</h5>
                              </figcaption>
                            </figure>
                            <div className="card-body">
                              <div className="post-header">
                                <div className="post-category text-line">
                                  <a
                                    href={`/casdi/article/${item.urlTitle}`}
                                    className="hover"
                                    rel="category"
                                  >
                                    Artikel
                                  </a>
                                </div>
                                <h2 className="post-title h3 mt-1 mb-3">
                                  <a
                                    className="link-dark"
                                    href={`/casdi/article/${item.urlTitle}`}
                                  >
                                    {item.title}
                                  </a>
                                </h2>
                              </div>
                              <div
                                className="post-content"
                                dangerouslySetInnerHTML={{
                                  __html: `${item.content.substring(
                                    0,
                                    150
                                  )}  <a href='/casdi/article/${
                                    item.urlTitle
                                  }'>...Read More</a> `,
                                }}
                              ></div>
                            </div>
                            <div className="card-footer">
                              <ul className="post-meta d-flex mb-0">
                                <li className="post-date">
                                  <i className="uil uil-calendar-alt"></i>
                                  <span>{item.updatedAt}</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </article>
                      ))}
                    {!casdiArticle && (
                        <div>
                            BELUM ADA ARTIKEL
                        </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ArticleCASDIScreen;
