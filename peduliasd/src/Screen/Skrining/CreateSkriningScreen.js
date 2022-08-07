import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { createAssesmentAction, getAssesmentByIdAction } from '../../actions/assesmentAction';

const CreateSkriningScreen = () => {

  const inputArr = [
    {
      question: '',
      id: 1,
      multichoice: [
        {
            answer: 'yes', score: 0, checked: false
        },
        {
            answer: 'no', score: 0, checked: false
        }
    ]
    }
  ];

  const [arr, setArr] = useState(inputArr);

  const addInput = () => {
    setArr(s => {
      return [
        ...s,
        {
          question: '',
          multichoice: [
            {
                answer: 'yes', score: 0, checked: false
            },
            {
                answer: 'no', score: 0, checked: false
            }
        ]
        }
      ];
    });
  };

  const dispatch = useDispatch()

  const handleChange = e => {
    e.preventDefault();

    const index = e.target.id;
    setArr(s => {
      const newArr = s.slice();
      newArr[index].question = e.target.value;

      return newArr;
    });
  };

  const handleRadioChange = e => {

    const index = e.id;
    setArr(s => {
      const newArr = s.slice();
      if (e.value === 'yes') {
        newArr[index].multichoice[0].score = 1;
        newArr[index].multichoice[0].checked = true;
        newArr[index].multichoice[1].checked = false;
        newArr[index].multichoice[1].score = 0;
      } else {
        newArr[index].multichoice[1].score = 1;
        newArr[index].multichoice[0].score = 0;
        newArr[index].multichoice[1].checked = true;
        newArr[index].multichoice[0].checked = false;
      }

      return newArr;
    });
  }

  const removeHandler = (index) => {
    const data = arr[index]
    setArr(arr.filter(item => data !== item))
    // setArr(arr.splice(index, 1))
  }

  const saveHandler = () => {
    const data = {
        title: 'M-CHAT ASSESMENT',
        publish: false,
        assesment: arr
    }
    dispatch(createAssesmentAction(data))

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
        
        {arr.map((item, index) => (
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
                          <div className="form-floating mb-4">
                            <textarea id="pertanyaan"
                              type="textarea"
                              name="pertanyaan"
                              className="form-control"
                              placeholder="Jane"
                              onChange={handleChange}
                              value={item.value}
                              id={index}
                              type={item.type}
                              required
                            />
                            <label htmlFor="pertanyaan">Pertanyaan *</label>
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="form-floating mb-4 text-start">
                            <div className="form-check">
                              <input className="form-check-input" type="radio" name={`flexRadio-${index}`} value="yes" onChange={(e) => handleRadioChange(e.target) } id={index} />
                              <label className="form-check-label" htmlFor="flexRadioDefault1"> Yes </label>
                            </div>
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="form-floating mb-4 text-start">
                            <div className="form-check">
                              <input className="form-check-input" type="radio" name={`flexRadio-${index}`} value="no" onChange={(e) => handleRadioChange(e.target) } id={index} />
                              <label className="form-check-label" htmlFor="flexRadioDefault1"> No </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                    </div>
                      <div className="container">
                        <div className="row text-center">
                          <button className="btn btn-outline-danger" onClick={() => removeHandler(index)}> <i className="uil uil-trash-alt" style={{fontSize: '1rem'}}></i></button>
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
          <div className="row text-center">
            <button className="btn btn-outline-primary" onClick={addInput}> &#xFF0B; Tambah Pertanyaan</button>
          </div>
          <div className="row py-2 text-center">
            <button className="btn btn-outline-success" onClick={saveHandler}> Simpan Kuis</button>
          </div>
        </div>

      </section>


    </>

  )
}

export default CreateSkriningScreen
