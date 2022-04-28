import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAssesmentByIdAction } from '../../actions/assesmentAction';
import { skriningTes } from './ObjectSkrining/skriningTest';
import './style.css'

const SkriningScreen = ({history}) => {
  const [pertanyaan, setPertanyaan] = useState(skriningTes)
  const [hasil, setHasil] = useState([])
  const [nomerDiisi, setNomerDiisi] = useState([])
  const [show, setShow] = useState(false)

  const getAssesmentId = useSelector((state) => state.getAssesmentId)
  const { detail } = getAssesmentId

  useEffect(() => {
    console.log('hasil = ', hasil)
    if(nomerDiisi.length === 20) {
      let score = 0

      for(let i=0; i < hasil.length; i++) {
        score += Number(hasil[i].score)
      }
      console.log('scorenya = ', score)
      history.push({
        pathname: '/score',
        search: `?nilai=${score}`,
      })
    }
  }, [hasil,nomerDiisi])

  const handleRadioChange = async (e, index) => {
    await setHasil(() => {
      const data = [...hasil]

      for (let i = 0; i < data.length; i++) {
        if (data[i].index == index) {
          data.splice(i,1)
        }
      }

      return [...data,{score:e, index}]
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
                                    <input className="form-check-input" type="radio" name={`flexRadio-${index}`} value={jawaban.score} onChange={(e) => handleRadioChange(e.target.value , index)} id={index} />
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

      </section>


    </>

  )
}

export default SkriningScreen
