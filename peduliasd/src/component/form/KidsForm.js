import React, { useEffect, useState } from 'react'
import DateFromDB from '../../utils/FunctionHelp/DateFromDB';
import formatDate from '../../utils/FunctionHelp/FormatDate';

const KidsForm = ({ _name, _birthDate, _condition, _level, _therapyPlace, _firstTherapy, _description, onKidFormHandler }) => {
    const [name, setName] = useState(_name)
    const [birthDate, setBirthDate] = useState(DateFromDB(_birthDate))
    const [condition, setCondition] = useState(_condition)
    const [level, setLevel] = useState(_level)
    const [therapyPlace, setTherapyPlace] = useState(_therapyPlace)
    const [firstTherapy, setFirstTherapy] = useState(DateFromDB(_firstTherapy))
    const [description, setDescription] = useState(_description)

    useEffect(() => {
        if(condition === 'non') {
            setLevel('0')
        }
    },[condition])

    const kidHandler = (e) => {
        onKidFormHandler({ name, level, condition, birthDate, therapyPlace, firstTherapy, description })
        e.preventDefault()
    }

    return (
        <>
            <div className="card">
                <div className="card-body">
                    <div className="col-xl-10 mx-auto">
                        <div className="row gy-10 gx-lg-8 gx-xl-12">
                            <div className="col-lg-12">
                                <form className="contact-form" onSubmit={(e) => kidHandler(e)}>
                                    <h2 className="fs-15 text-uppercase text-line text-primary mb-3">Data diri anak</h2>
                                    <div className="row gx-4">
                                        <div className="col-md-6">
                                            <div className="form-floating mb-4">
                                                <input id="form_name"
                                                    type="text"
                                                    name="name"
                                                    className="form-control"
                                                    placeholder="Jane"
                                                    required
                                                    value={name}
                                                    onChange={(e) => setName(e.target.value)} />
                                                <label htmlFor="form_name">Nama Lengkap *</label>
                                            </div>
                                        </div>

                                        {/* We dont need to change the email, because we dont have validation to the email */}
                                        <div className="col-md-6">
                                            <div className="form-floating mb-4">
                                                <input id="form_birthDate"
                                                    type="date"
                                                    name="birthDate"
                                                    className="form-control"
                                                    required
                                                    style={{color: 'grey'}}
                                                    value={birthDate}
                                                    onChange={(e) => setBirthDate(e.target.value)} />
                                                <label htmlFor="form_email">Tanggal Lahir *</label>
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="form-floating mb-4">
                                                <div className="form-select-wrapper">
                                                    <select className="form-select" onChange={(e) => setCondition(e.target.value)}>
                                                        <option defaultValue>Pilih Kondisi *</option>
                                                        <option value='non' >Non ASD</option>                                                        
                                                        <option value='asd' >ASD</option>                                                        
                                                    </select>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="form-floating mb-4">
                                                <div className="form-select-wrapper">
                                                    <select className="form-select" disabled={condition === 'non' ? true : false} value={level} onChange={(e) => setLevel(e.target.value)}>
                                                        <option defaultValue>Pilih Tingkatan *</option>
                                                        <option value='0' >0</option>                                                        
                                                        <option value='1' >1</option>                                                        
                                                        <option value='2' >2</option>                                                        
                                                        <option value='3' >3</option>                                                        
                                                    </select>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="form-floating mb-4">
                                                <input id="form_therapyPlace"
                                                    type="text"
                                                    name="therapyPlace"
                                                    className="form-control"
                                                    placeholder="sada"
                                                    required
                                                    value={therapyPlace}
                                                    onChange={(e) => setTherapyPlace(e.target.value)} />
                                                <label htmlFor="form_phone">Tempat Terapi *</label>
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="form-floating mb-4">
                                                <input id="form_firstTherapy"
                                                    type="date"
                                                    name="firstTherapy"
                                                    className="form-control"
                                                    placeholder="Pertama Kali Melakukan Terapi"
                                                    required
                                                    style={{color: 'grey'}}
                                                    value={firstTherapy}
                                                    onChange={(e) => setFirstTherapy(e.target.value)} />
                                                <label htmlFor="form_phone">Pertama Kali Terapi *</label>
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <div className="form-floating mb-4">
                                                <textarea id="form_description"
                                                    name="description"
                                                    className="form-control"
                                                    placeholder="description"
                                                    style={{ height: "150px" }}
                                                    required
                                                    value={description}
                                                    onChange={(e) => setDescription(e.target.value)}></textarea>
                                                <label htmlFor="form_message">Deskripsi Anak *</label>
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <input type="submit" className="btn btn-primary btn-send mb-3" value="Ubah Data" />
                                            <p className="text-muted"><strong>*</strong> Wajib diisi</p>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

// KidsForm.prototype = {
//     _name: PropTypes.string,
//     _birthDate: PropTypes.string,
//     _condition: PropTypes.string,
//     _level: PropTypes.string,
//     _therapyPlace: PropTypes.string,
//     _firstTherapy: PropTypes.string,
//     _description: PropTypes.string
// }

export default KidsForm