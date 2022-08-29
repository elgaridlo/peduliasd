import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  getArticleByIdAction,
  deleteArticleAction,
} from '../../actions/articleAction'
import AlertStyle from '../../utils/Components/Alert'
import Loader from '../../utils/Components/Loader'
import { AlertEnum } from '../../utils/Enums/AlertEnum'
import formatDate from '../../utils/FunctionHelp/FormatDate'

const ArticleByIdScreen = ({ match, history }) => {
  const articleDetail = useSelector((state) => state.articleDetail)
  const { loading, error, detail } = articleDetail

  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const deleteArticle = useSelector((state) => state.deleteArticle)
  const { success, error: errorDelete } = deleteArticle

  useEffect(() => {
    dispatch(getArticleByIdAction(match.params.id))
  }, [])

  useEffect(() => {
    if (success) {
      history.push('/artikel')
    }
  }, [success])

  const deleteHandler = () => {
    dispatch(deleteArticleAction(detail._id))
  }
  return (
    <>
      {errorDelete && (
        <AlertStyle variant="danger" icons={AlertEnum.DANGER} show={true}>
          {errorDelete}
        </AlertStyle>
      )}

      <section className="wrapper bg-soft-primary">
        <div className="container pt-10 pb-19 pt-md-14 pb-md-20 text-center">
          <div className="row">
            <div className="col-md-10 col-xl-8 mx-auto">
              <div className="post-header">
                <div className="post-category text-line">
                  <a href="/#" className="hover" rel="category">
                    Artikel
                  </a>
                </div>
                <h1 className="display-1 mb-4">{detail && detail.title}</h1>
                <ul className="post-meta mb-5">
                  <li className="post-date">
                    <i className="uil uil-calendar-alt"></i>
                    <span>
                      {detail && formatDate(new Date(detail.updatedAt))}
                    </span>
                  </li>
                  <li className="post-author">
                    <a href="">
                      <i className="uil uil-user"></i>
                      <span>By PeduliASD</span>
                    </a>
                  </li>
                  {userInfo && userInfo.user.role == 'admin' && (
                    <>
                      <li className="post-likes">
                        <a href={`${match.url}/edit`}>
                          <i className="uil uil-file-edit-alt"></i>
                          <span> Edit</span>
                        </a>
                      </li>
                      <li className="post-likes">
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#modal-02"
                        >
                          <i className="uil uil-trash"></i>
                          <span> Hapus</span>
                        </a>
                      </li>
                    </>
                  )}
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
                  <figure className="card-img-top">
                    <img src={detail && detail.poster} alt="" />
                  </figure>
                  <div className="card-body">
                    {loading && <Loader />}
                    <div className="classic-view">
                      {detail && (
                        <article
                          className="post"
                          dangerouslySetInnerHTML={{ __html: detail.content }}
                        ></article>
                      )}
                    </div>
                    {/* <hr /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="modal fade" id="modal-02" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered modal-md">
          <div className="modal-content text-center">
            <div className="modal-body">
              <button
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
              <p className="mb-6">Apakah anda yakin ingin menghapus ?</p>
              <div className="newsletter-wrapper">
                <div className="row">
                  <button
                    className="btn btn-info rounded-pill mb-2"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    onClick={() => deleteHandler()}
                  >
                    Ya
                  </button>{' '}
                  <button
                    className="btn btn-danger rounded-pill"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    Tidak
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ArticleByIdScreen
