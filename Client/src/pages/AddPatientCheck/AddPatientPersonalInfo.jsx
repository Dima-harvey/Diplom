import './AddPatient.css';
import React, { useState } from 'react';

import Axios from 'axios';
export default function AddPatientPersonalInfo(props) {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [dateofBirth, setdateofBirth] = useState('');
  const [address, setAddress] = useState('');
  const [bloodType, setBloodType] = useState('');

  const { history } = props;

  const Next = () => {
    Axios.post('http://localhost:3003/api/PatientPersonalInfo/insert', {
      name: name,
      gender: gender,
      dateofBirth: dateofBirth,
      address: address,
      bloodType: bloodType,
    }).then((response) => {
      history.push(`/AddPatientCheckupData/${response.data.insertId}`);
    });
  };
  return (
    <>
      <div className="AddPatient">
        <div className="main-container">
          <div className="header-container">
            <h1>Личная информация пациента</h1>
          </div>
          <div className="form-container">
            <div className="form-item">
              <label>Полное имя</label>
              <input
                type="text"
                placeholder="полное имя"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div className="form-item">
              <label>Пол</label>
              <input
                type="text"
                placeholder="пол"
                onChange={(e) => {
                  setGender(e.target.value);
                }}
              />
            </div>

            <div className="grid-row">
              <div className="form-item">
                <label>Дата рождения</label>
                <input
                  type="date"
                  placeholder="дата рождения"
                  onChange={(e) => {
                    setdateofBirth(e.target.value);
                  }}
                />
              </div>

              <div className="form-item">
                <label>Группа крови</label>
                <input
                  type="text"
                  placeholder="група крови"
                  onChange={(e) => {
                    setBloodType(e.target.value);
                  }}
                />
              </div>
            </div>

            <div className="form-item">
              <label>Адрес</label>
              <input
                type="text"
                placeholder="Номер дома, улицы , город"
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="btn-container">
            <button
              onClick={() => {
                Next();
              }}
            >
              Следующий
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
