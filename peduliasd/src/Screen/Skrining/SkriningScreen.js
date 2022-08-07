import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAssesmentByIdAction } from '../../actions/assesmentAction';
import { skriningTes } from './ObjectSkrining/skriningTest';
import './style.css'

const SkriningScreen = ({ history }) => {
  const [pertanyaan, setPertanyaan] = useState(skriningTes)
  const [hasil, setHasil] = useState([])
  const [nomerDiisi, setNomerDiisi] = useState([])
  const [show, setShow] = useState(false)

  const getAssesmentId = useSelector((state) => state.getAssesmentId)
  const { detail } = getAssesmentId

  useEffect(() => {
    if (nomerDiisi.length === 20) {
      let score = 0

      for (let i = 0; i < hasil.length; i++) {
        score += Number(hasil[i].score)
      }
      history.push({
        pathname: '/score',
        search: `?nilai=${score}`,
      })
    }
  }, [hasil, nomerDiisi])

  const handleRadioChange = async (e, index) => {
    await setHasil(() => {
      const data = [...hasil]

      for (let i = 0; i < data.length; i++) {
        if (data[i].index == index) {
          data.splice(i, 1)
        }
      }

      return [...data, { score: e, index }]
    })
  }

  const checkHasil = () => {
    setNomerDiisi(() => {
      const indexManipulate = []
      for (let i = 0; i < hasil.length; i++) {
        indexManipulate.push(hasil[i].index)
      }
      return [...indexManipulate]
    })
    setShow(true)
  }

  return (
    <>
      <section className="wrapper bg-soft-primary">
        <div className="container pt-10 pb-12 pt-md-14 pb-md-16 text-center">
          <div className="row">
            <div className="col-md-12 col-lg-12 col-xl-12 mx-auto">
              <h1 className="display-1 mb-3">Tes Skrining</h1>
              <p className="lead px-lg-5 px-xxl-8">
                Mohon jawab pertanyaan berikut ini tentang anak anda. Pikirkan bagaimana perilaku anak anda biasanya. Jika
                pernah melihat anak anda melakukan tindakan itu beberapa kali, namun dia tidak selalu melakukannya, maka
                jawab tidak. Tolong lingkari ya atau tidak pada setiap pertanyaan. Terima Kasih.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="wrapper bg-light">

        {pertanyaan.map((item, index) => (
          <div key={index} className="container py-4 py-md-4">
            <div className="row mb-8">
              <div className={`card ${show ? nomerDiisi.includes(index) ? '' : 'red-box-pertanyaan' : ''}`} id={`box-pertanyaan-${index}`}>
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
                            {item.multichoice.map((jawaban, indexABC) => (
                              <div key={`jawaban-${indexABC}`} className="col-6">
                                <div className="mb-4 text-start">
                                  <div className="form-check">
                                    <input className="form-check-input" type="radio" name={`flexRadio-${index}`} value={jawaban.score} onChange={(e) => handleRadioChange(e.target.value, index)} id={index} />
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
            <button className="btn btn-outline-success" onClick={(e) => checkHasil()}> Lihat hasil</button>
          </div>
        </div>

        <div className="container py-4 py-md-4">
          <div className="fs-16">Source:</div>
          <div className="fs-14">@ 2009 Diana Robins, Deborah Fein, &amp; Marianne Barton</div>
          <div className="fs-14">M-CHAT-R/F ini diterjemahkan oleh Soetjiningsih, Trisna Windiani, Sugitha Adnyana, &amp; Apik Lestari, 2014</div>
        </div>

      </section>


    </>

  )
}

export default SkriningScreen
