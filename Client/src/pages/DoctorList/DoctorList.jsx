import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import './PatientList.css';
import { Link } from 'react-router-dom';
import Colors from '../../components/theme';

export default function DoctorList() {
  const [historyList, sethistoryList] = useState([]);
  const [historySearchList, setHistorySearchList] = useState([]);
  useEffect(() => {
    Axios.get('http://localhost:3003/api/get/DoctorList').then((response) => {
      sethistoryList(response.data);
    });
  }, []);

  const deleteHistory = (id) => {
    Axios.delete(`http://localhost:3003/api/delete/${id}`).then((response) => {
      if (response != null) {
        console.log('deleted');
        window.location.reload();
      } else {
        console.log('cannot delete');
      }
    });
  };

  const search = (searchText) => {
    let matches = historyList.filter((val) => {
      const regex = new RegExp(`^${searchText}`, 'gi');
      return val.name.match(regex) || val.address.match(regex);
    });

    if (searchText.length === 0) {
      matches = [];
      setHistorySearchList([]);
    }
    setHistorySearchList(matches);
  };
  return (
    <>
      <div className="patientlist-main-container">
        <div style={{ width: '240px' }}></div>
        <div style={{ width: '100%' }}>
          <div className="header-container">
            <h1>Список врачей</h1>
          </div>
          {/* ***************HEre is Search container that i want to see after search************ */}

          <div className="search-container">
            <input
              style={{ textAlign: 'center' }}
              type="text"
              placeholder="Поиск врача"
              onChange={(event) => {
                search(event.target.value);
              }}
            />

            {historySearchList.map((val) => {
              return (
                <div className="search-result-item" key={val.id}>
                  <div className="search-result-card">
                    <div className="id-container">ID: {val.id}</div>
                    <div className="name-container">Имя: {val.name}</div>
                    <div className="dob-container">
                      <label>Дата рождения: </label>
                      {val.dateofBirth}
                      <p> </p>
                      <label>Пол: </label>
                      {val.gender}
                      <p></p>
                      <label>Адрес: </label>
                      {val.address}
                    </div>
                    <p></p>
                    <label>Специализация: </label>
                    {val.specialization}

                    <div className="doa-container">
                      <label>Опыт работы: </label>
                      {val.experience}
                    </div>
                  </div>
                </div>
              );
            })}
            <div
              style={{
                width: '100%',
                height: '2px',
                backgroundColor: Colors.secondary,
              }}
            ></div>
          </div>

          {/* Here  Starts  the content to show in PatientList **************************/}
          <div className="patient-containeritem">
            {historyList.map((val) => {
              return (
                <div className="search-result-item" key={val.id}>
                  <div className="patient-item-card">
                    <div className="id-container">ID: {val.id}</div>
                    <div className="name-container">Имя: {val.name}</div>
                    <div className="dob-container">
                      <label>Дата рождения: </label>
                      {val.dateofBirth}
                      <p> </p>
                      <label>Пол: </label>
                      {val.gender}
                      <p></p>
                      <label>Адрес: </label>
                      {val.address}
                    </div>
                    <p></p>
                    <label>Специализация: </label>
                    {val.specialization}

                    <div className="doa-container">
                      <label>Опыт работы: </label>
                      {val.experience}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
