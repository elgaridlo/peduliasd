import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAssesmentByIdAction } from '../../actions/assesmentAction';

const SkriningScreen = () => {
  const [pertanyaan, setPertanyaan] = useState([])
  const dispatch = useDispatch()

  const getAssesmentId = useSelector((state) => state.getAssesmentId)
  const { detail } = getAssesmentId

  useEffect(() => {
    if (!detail) {
      dispatch(getAssesmentByIdAction('61fb822affa16c452f0a06c6'))
    } else {
      setPertanyaan(detail.assesment)
      console.log('pertanyaan = ', pertanyaan)
    }
  }, [detail])

  // useEffect(() => {
  //   if (detail) {
  //     setPertanyaan(detail.assesment)
  //     console.log('pertanyaan = ', pertanyaan)
  //   }
  // }, [detail])

  const handleRadioChange = e => {
    const index = e.id;
  }

  return (
    <>
      <section className="wrapper bg-light">
        <div className="container py-14 py-md-17">
          <div className="row mb-8 text-center">
            <div className="col-lg-9 col-xl-8 col-xxl-7 mx-auto">
              <h2 className="fs-16 text-uppercase text-primary mb-3">
                Tes Skrining belum di develop
              </h2>
            </div>
          </div>
        </div>

        {/* {uppdateError && (
              <AlertStyle variant='danger' icons={AlertEnum.DANGER} show={true}>{uppdateError}</AlertStyle>
            )}
            {update && update.status && (
              <AlertStyle variant='success' icons={AlertEnum.SUCCESS} show={true}>Password berhasil diubah!</AlertStyle>
            )} */}

        {detail && pertanyaan.map((item, index) => (
          <div key={index} className="container py-4 py-md-4">
            <div className="row mb-8 text-center">
              <div className="card">
                <div className="card-body">
                  <div className="col-xl-10 mx-auto">
                    <div className="row gy-10 gx-lg-8 gx-xl-12">
                      <div className="col-lg-12">
                        <h2 className="fs-15 text-uppercase text-line text-primary mb-3">No {index + 1}</h2>
                        <div className="row gx-4">
                          <div className="col-md-12">
                            <div className="mb-4">
                              <p>{item.question}</p>
                            </div>
                          </div>

                          <div className="row gx-4">
                            {item.multichoice.map((jawaban) => (
                              <div className="col-6">
                                <div className="mb-4 text-start">
                                  <div className="form-check">
                                    <input className="form-check-input" type="radio" name={`flexRadio-${index}`} value={jawaban.score} onChange={(e) => handleRadioChange(e.target)} id={index} />
                                    <label className="form-check-label" htmlFor="flexRadioDefault1"> {jawaban.answer} </label>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="container py-4 py-md-4">
          <div className="row py-2 text-center">
            <button className="btn btn-outline-success"> Check Score</button>
          </div>
        </div>

      </section>


    </>

  )
}

export default SkriningScreen
