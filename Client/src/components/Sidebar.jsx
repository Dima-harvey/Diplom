import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
export default function Sidebar() {
  return (
    <>
      <div className="sidebar">
        <div className="sidebar-container">
          <div className="">
            <ul className="sidebar-items-container">
              <li className="sidebar-item">
                <Link to="/AddPatientPersonalInfo" className="sidebar-link">
                  <i className="fa fa-user-plus" aria-hidden="true" /> <p>Добавить</p>
                </Link>
              </li>
              <li className="sidebar-item">
                <Link to="/PatientList" className="sidebar-link">
                  <i className="fa fa-list-alt" /> <p>Пациенты</p>
                </Link>
              </li>
              <li className="sidebar-item">
                <Link to="/TodoList" className="sidebar-link">
                  <i className="fa fa-check-circle" aria-hidden="true" /> <p>Тайм менеджер</p>
                </Link>
              </li>
              <li className="sidebar-item">
                <Link to="/DoctorList" className="sidebar-link">
                  <i className="fa fa-user-md" aria-hidden="true" /> <p>Врачи</p>
                </Link>
              </li>
              <li className="sidebar-item">
                <Link to="/Mail" className="sidebar-link">
                  <i className="fa fa-envelope" aria-hidden="true" /> <p>Mail</p>
                </Link>
              </li>
              <li className="sidebar-item">
                <Link to="/Graph" className="sidebar-link">
                  <i className="fa fa-signal" aria-hidden="true" /> <p>Цены</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
