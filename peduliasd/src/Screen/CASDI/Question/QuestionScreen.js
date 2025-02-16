import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  createAnswerCasdiAction,
  createQuestionCasdiAction,
  deleteQuestionAction,
  getQuestionCASDIAction,
} from '../../../actions/casdiAction';
import Loader from '../../../utils/Components/Loader';
import AlertStyle from '../../../utils/Components/Alert';
import { AlertEnum } from '../../../utils/Enums/AlertEnum';
import formatDateTime from '../../../utils/FunctionHelp/FormatDateTime';

const QuestionScreen = () => {
  const dispatch = useDispatch();
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [editID, setEditID] = useState(0);

  const questionCasdi = useSelector((state) => state.questionCasdi);
  const { loading, question_casdi } = questionCasdi;

  const createQuestion = useSelector((state) => state.createQuestion);
  const { createQuestion: newQuestion, error: errQuestion } = createQuestion;

  const createAnswer = useSelector((state) => state.createAnswer);
  const { createAnswer: newAnswer, error: errAnswer } = createAnswer;

  const deleteQuestion = useSelector((state) => state.deleteQuestion);
  const { error: errDelQuestion, success } = deleteQuestion;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    dispatch(getQuestionCASDIAction());
    setEditID(0);
    setAnswer('');
  }, [newQuestion, success, newAnswer, dispatch]);

  const submitQuestion = async (e) => {
    e.preventDefault();

    try {
      dispatch(createQuestionCasdiAction(question));
      setQuestion('');
    } catch (error) {
      console.error(error);
    }
  };

  const editHandler = (id) => {
    setEditID(id);
  };

  const answerHandler = (id) => {
    const obj = {
      question_id: id,
      answer,
    };

    dispatch(createAnswerCasdiAction(obj));
  };

  const onDeleteQuestion = (e) => {
    e.preventDefault();
    try {
      dispatch(deleteQuestionAction(e.target.value));
    } catch (error) {
      console.log('error = ', error);
    }
  };

  return (
    <>
      <section className="wrapper">
        {newQuestion && (
          <AlertStyle variant="success" icons={AlertEnum.SUCCESS} show={true}>
            Pertanyaan berhasil dibuat!
          </AlertStyle>
        )}
        {errQuestion && (
          <AlertStyle variant="danger" icons={AlertEnum.DANGER} show={true}>
            {errQuestion}
          </AlertStyle>
        )}
        <div className="card bg-soft-primary">
          <div className="card-body p-12">
            <div className="row gx-md-8 gx-xl-12 gy-10">
              <div className="col-lg-6">
                <h2 className="display-4 mb-3 pe-lg-10">
                  Ada pertanyaan silahkan ditanyakan.
                </h2>
                {/* <p className="lead pe-lg-12 mb-0">
                  Kita akan blka bala bla baalla blaalal.
                </p> */}
              </div>
              <div className="col-lg-6">
                <form className="contact-form" onSubmit={submitQuestion}>
                  <div className="messages"></div>
                  <div className="row gx-4">
                    <div className="col-12">
                      <div className="form-floating mb-4">
                        <textarea
                          id="frm_message"
                          name="message"
                          className="form-control border-0"
                          placeholder="Your message"
                          style={{ height: '150px' }}
                          value={question}
                          onChange={(e) => setQuestion(e.target.value)}
                          required
                        ></textarea>
                        <label htmlFor="frm_message">Tulis pertanyaan *</label>
                        <div className="valid-feedback">Terlihat bagus!</div>
                        <div className="invalid-feedback">
                          Tolong tuliskan pertanyaan.
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <input
                        type="submit"
                        className="btn btn-outline-primary rounded-pill btn-send mb-3"
                        value="Kirimkan pertanyaan"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container py-14 py-md-16">
          <h2 className="display-4 mb-3 pe-lg-10">Kumpulan pertanyaan: </h2>
          {loading ? (
            <Loader />
          ) : (
            <>
              {success && (
                <AlertStyle
                  variant="success"
                  icons={AlertEnum.SUCCESS}
                  show={true}
                >
                  Pertanyaan berhasil dihapus !
                </AlertStyle>
              )}
              {(errDelQuestion || errAnswer) && (
                <AlertStyle
                  variant="danger"
                  icons={AlertEnum.DANGER}
                  show={true}
                >
                  {errDelQuestion || errAnswer}
                </AlertStyle>
              )}
              {question_casdi &&
                question_casdi.map((item, index) => (
                  <div key={index} className="card mt-3">
                    <div className="card-body p-12 bg-cover shadow-lg">
                      <div className="row gx-md-8 gx-xl-12 gy-10">
                        <div className="col-lg-12">
                          <p className="pe-lg-12 mb-0">
                            <strong>Pertanyaan:</strong>
                          </p>
                          <p className="lead pe-lg-12 mb-0">{item.question}</p>
                          <p className="pt-4 mb-0" style={{ fontSize: '14px' }}>
                            Dibuat pada tanggal:{' '}
                            {formatDateTime(new Date(item.created_at))}
                          </p>
                        </div>
                        <div className="col-lg-12">
                          <p className="pe-lg-12 mb-0">
                            <strong>Jawaban:</strong>
                          </p>
                          <p className="lead pe-lg-12 mb-0">
                            {item.answer
                              ? item.answer
                              : 'Belum ada jawaban dari admin'}
                          </p>
                          {item.answer_updated_at && (
                            <p
                              className="pt-4 mb-0"
                              style={{ fontSize: '14px' }}
                            >
                              Dijawab pada tanggal:{' '}
                              {formatDateTime(new Date(item.answer_updated_at))}
                            </p>
                          )}
                        </div>
                        {userInfo && userInfo.user.role === 'admin' && (
                          <>
                            <div className="col-lg-12">
                              <textarea
                                id="frm_message"
                                name="message"
                                className="form-control border-0"
                                placeholder="Tulis jawaban!"
                                style={{ height: '50px' }}
                                disabled={editID !== item.id}
                                onChange={(e) => setAnswer(e.target.value)}
                                required
                              ></textarea>
                            </div>

                            <div className="row gx-md-8 gx-xl-12 gy-3">
                              <div className="col-lg-12">
                                <button
                                  className="btn btn-outline-primary rounded-pill btn-send mb-3"
                                  onClick={() => answerHandler(item.id)}
                                >
                                  Jawab
                                </button>
                                <button
                                  className="btn btn-outline-info rounded-pill btn-send mb-3"
                                  onClick={() => editHandler(item.id)}
                                >
                                  Edit
                                </button>
                                <button
                                  className="btn btn-outline-danger rounded-pill btn-send mb-3"
                                  value={item.id}
                                  onClick={(e) => onDeleteQuestion(e)}
                                >
                                  Hapus
                                </button>
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default QuestionScreen;
