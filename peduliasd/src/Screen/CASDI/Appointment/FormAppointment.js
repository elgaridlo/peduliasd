import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AlertStyle from '../../../utils/Components/Alert';
import Message from '../../../utils/Components/Message';
import Loader from '../../../utils/Components/Loader';
import { AlertEnum } from '../../../utils/Enums/AlertEnum';
import {
  createAppointmentAction,
  getHourMemberAction,
} from '../../../actions/casdiAction';
import axios from 'axios';

const FormAppointment = ({ history }) => {
  const today = new Date().toISOString().split('T')[0];

  const [codeMember, setCodeMember] = useState('');
  const [dateAppointment, setDateAppointment] = useState('');
  const [hourAppointment, setHourAppointment] = useState('');
  const [hourActive, setHourActive] = useState(true);

  const createAppointment = useSelector((state) => state.createAppointment);
  const { loading, error, newAppointment } = createAppointment;

  const hourMember = useSelector((state) => state.hourMember);
  const { error: errorHour, hourMembers } = hourMember;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHourMemberAction(dateAppointment));
    setHourActive(false);
  }, [dateAppointment]);

  useEffect(() => {
    if (newAppointment && newAppointment.status === 'Success') {
      setCodeMember('');
      setDateAppointment('');
      setHourAppointment([]);
    }
  }, [newAppointment]);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const obj = {
        duration: hourAppointment,
        appointment_date: dateAppointment,
        code_member: codeMember,
      };

      dispatch(
        createAppointmentAction(
          obj.code_member,
          obj.appointment_date,
          obj.duration
        )
      );
    } catch (error) {
      console.error(error);
    }
  };

  const downloadCsv = async () => {
    try {
      // Gantilah URL dengan URL yang benar untuk mengunduh file CSV
      const fileURL = '/api/casdi/appointments/download';

      const response = await axios.get(fileURL, { responseType: 'blob' });

      // Buat objek Blob dari data yang diterima
      const blob = new Blob([response.data], { type: 'text/csv' });

      // Buat URL objek Blob
      const url = window.URL.createObjectURL(blob);

      // Buat elemen <a> untuk menginisiasi pengunduhan
      const a = document.createElement('a');
      a.href = url;
      a.download = 'janji-temu.csv'; // Nama file yang akan diunduh

      // Tempatkan elemen <a> ke dalam dokumen dan klik untuk memulai pengunduhan
      document.body.appendChild(a);
      a.click();

      // Hapus elemen <a> setelah pengunduhan selesai
      document.body.removeChild(a);

      // Hapus URL objek Blob setelah pengunduhan selesai
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading CSV:', error);
    }
  };

  return (
    <>
      <section className="wrapper">
        {newAppointment && (
          <AlertStyle variant="success" icons={AlertEnum.SUCCESS} show={true}>
            Janji kunjungan berhasil ditambahkan !
          </AlertStyle>
        )}
        {error && (
          <AlertStyle variant="danger" icons={AlertEnum.DANGER} show={true}>
            {error}
          </AlertStyle>
        )}
        {!newAppointment && errorHour && (
          <Message variant="danger">{errorHour}</Message>
        )}
        <div className="container py-14 py-md-16">
          <div>
            <h2 className="fs-15 text-uppercase text-line text-primary text-center mb-3">
              Janji Temu
            </h2>
          </div>
          <div className="row">
            <div className="col-xl-10 mx-auto">
              <div className="row gy-10 gx-lg-8 gx-xl-12">
                <div className="col-lg-12">
                  <form className="contact-form" onSubmit={onSubmitHandler}>
                    <div className="messages"></div>

                    <div className="row gx-4">
                      <div className="col-md-12">
                        <div className="form-floating mb-4">
                          <input
                            id="form_name"
                            type="text"
                            name="name"
                            className="form-control"
                            placeholder="A-123456"
                            required
                            value={codeMember}
                            onChange={(e) => setCodeMember(e.target.value)}
                          />
                          <label htmlFor="form_name">Kode Anggota *</label>
                          <div className="valid-feedback">Looks good!</div>
                          <div className="invalid-feedback">
                            Tolong masukkan Kode Anggota Anda.
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="row gx-4">
                      <div className="col-md-12">
                        <div className="form-floating mb-4">
                          <input
                            id="form_name"
                            type="date"
                            name="name"
                            className="form-control"
                            placeholder="A-123456"
                            required
                            value={dateAppointment}
                            min={
                              today > new Date('2024-03-01')
                                ? today
                                : new Date('2024-03-01')
                                    .toISOString()
                                    .split('T')[0]
                            }
                            onChange={(e) => setDateAppointment(e.target.value)}
                          />
                          <label htmlFor="form_name">
                            Tanggal Janji Temu *
                          </label>
                          <div className="valid-feedback">Looks good!</div>
                          <div className="invalid-feedback">
                            Tolong masukkan Tanggal Janji Temu Anda.
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-12">
                      <div className="form-floating mb-4">
                        <div className="form-select-wrapper">
                          <select
                            className="form-select"
                            disabled={
                              hourActive ||
                              (hourMembers && hourMembers.length === 0)
                            }
                            onChange={(e) => setHourAppointment(e.target.value)}
                          >
                            <option defaultValue>
                              {hourMembers && hourMembers.length === 0
                                ? 'Jadwal sudah penuh'
                                : 'Pilih Jam *'}
                            </option>
                            {hourMembers &&
                              hourMembers.map((item, i) => (
                                <option key={i} value={item}>
                                  {item}
                                </option>
                              ))}
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="col-12">
                      {loading ? (
                        <Loader />
                      ) : (
                        <input
                          type="submit"
                          className="btn btn-primary rounded-pill btn-send mb-3"
                          disabled={hourMembers && hourMembers.length === 0}
                          value="Buat Janji"
                        />
                      )}
                      <p className="text-muted">
                        <strong>*</strong> Kolom wajib diisi.
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {userInfo && userInfo.user.role === 'admin' && (
            <div className="col-12">
              <button
                className="btn btn-primary rounded-pill btn-send mb-3"
                onClick={() => downloadCsv()}
              >
                Download CSV
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default FormAppointment;
