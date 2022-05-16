import React, { useState } from 'react';
import './AddPatient.css';
import { Link } from 'react-router-dom';
import Axios from 'axios';
export default function AddPatientCheckupData({ match }) {
  const patientId = match.params.id;

  const [chiefComplaint, setchiefComplaint] = useState('');
  const [historyofpatientIllness, sethistoryofpatientIllness] = useState('');
  const [generalAppearance, setgeneralAppearance] = useState('');

  const [BP, setBP] = useState('');
  const [HR, setHR] = useState('');
  const [RR, setRR] = useState('');
  const [temperature, setTemperature] = useState('');
  const [o2Sat, seto2Sat] = useState('');
  const [weight, setWeight] = useState('');

  const [skin, setSkin] = useState('');
  const [heent, setHeent] = useState('');
  const [neck, setNeck] = useState('');
  const [chest, setChest] = useState('');
  const [CVS, setCVS] = useState('');
  const [abdomen, setAbdomen] = useState('');
  const [gut, setGut] = useState('');
  const [extromities, setExtromities] = useState('');
  const [neuro, setNeuro] = useState('');

  const [admittingDiagnosis, setadmittingDiagnosis] = useState('');
  const [treatment, setTreatment] = useState('');

  const SubmitForm = () => {
    Axios.post('http://localhost:3003/api/PatientCheckUpInfo/insert', {
      patientId: patientId,
      BP: BP,
      HR: HR,
      RR: RR,
      temperature: temperature,
      o2Sat: o2Sat,
      weight: weight,

      chiefComplaint: chiefComplaint,
      historyofpatientIllness: historyofpatientIllness,
      generalAppearance: generalAppearance,

      skin: skin,
      heent: heent,
      neck: neck,
      chest: chest,
      CVS: CVS,
      abdomen: abdomen,
      gut: gut,
      extromities: extromities,
      neuro: neuro,

      admittingDiagnosis: admittingDiagnosis,
      treatment: treatment,
    });
  };
  return (
    <>
      <div className="AddPatient">
        <div className="main-container">
          <div className="header-container">
            <h1>Данные Проверки</h1>
          </div>
          <div className="form-container">
            <div className="grid-row">
              <div className="form-item">
                <label>Давление</label>
                <input
                  type="text"
                  placeholder="00/00"
                  onChange={(e) => {
                    setBP(e.target.value);
                  }}
                />
              </div>
              <div className="form-item">
                <label>ЧСС</label>
                <input
                  type="text"
                  placeholder="BPM"
                  onChange={(e) => {
                    setHR(e.target.value);
                  }}
                />
              </div>
            </div>

            <div className="grid-row">
              <div className="form-item">
                <label>Частота дыхания</label>
                <input
                  type="text"
                  placeholder="BPM"
                  onChange={(e) => {
                    setRR(e.target.value);
                  }}
                />
              </div>
              <div className="form-item">
                <label>Температура</label>
                <input
                  type="text"
                  placeholder="degree celcius"
                  onChange={(e) => {
                    setTemperature(e.target.value);
                  }}
                />
              </div>
            </div>

            <div className="grid-row">
              <div className="form-item">
                <label>Масса тела</label>
                <input
                  type="text"
                  placeholder="kg"
                  onChange={(e) => {
                    setWeight(e.target.value);
                  }}
                />
              </div>
              <div className="form-item">
                <label>Сатурация</label>
                <input
                  type="text"
                  placeholder="BPM"
                  onChange={(e) => {
                    seto2Sat(e.target.value);
                  }}
                />
              </div>
            </div>

            <div className="checkup-header-container">
              <h1>Жалоба/История/Внешний вид</h1>
            </div>

            <div className="form-item">
              <label>Главная жалоба</label>
              <input
                type="text"
                placeholder="Specify"
                onChange={(e) => {
                  setchiefComplaint(e.target.value);
                }}
              />
            </div>

            <div className="form-item">
              <label>Общий вид</label>
              <input
                type="text"
                placeholder="Specify"
                onChange={(e) => {
                  setgeneralAppearance(e.target.value);
                }}
              />
            </div>

            <div className="form-item">
              <label>История болезни пациента</label>
              <input
                type="text"
                placeholder="Specify"
                onChange={(e) => {
                  sethistoryofpatientIllness(e.target.value);
                }}
              />
            </div>

            <div className="checkup-header-container">
              <h1>Медицинский осмотр [Да/Нет (Описать)]</h1>
            </div>

            <div className="grid-row">
              <div className="form-item">
                <label>Кожа</label>
                <input
                  type="text"
                  placeholder="Skin"
                  onChange={(e) => {
                    setSkin(e.target.value);
                  }}
                />
              </div>
              <div className="form-item">
                <label>Шея</label>
                <input
                  type="text"
                  placeholder="Neck"
                  onChange={(e) => {
                    setNeck(e.target.value);
                  }}
                />
              </div>
            </div>

            <div className="grid-row">
              <div className="form-item">
                <label>Голова</label>
                <input
                  type="text"
                  placeholder="Heent"
                  onChange={(e) => {
                    setHeent(e.target.value);
                  }}
                />
              </div>
              <div className="form-item">
                <label>Грудная клетка/Легкие</label>
                <input
                  type="text"
                  placeholder="Chest/Lungs"
                  onChange={(e) => {
                    setChest(e.target.value);
                  }}
                />
              </div>
            </div>

            <div className="grid-row">
              <div className="form-item">
                <label>Биопсия хориона</label>
                <input
                  type="text"
                  placeholder="CVS"
                  onChange={(e) => {
                    setCVS(e.target.value);
                  }}
                />
              </div>
              <div className="form-item">
                <label>Брюшная полость</label>
                <input
                  type="text"
                  placeholder="Abdomen"
                  onChange={(e) => {
                    setAbdomen(e.target.value);
                  }}
                />
              </div>
            </div>

            <div className="grid-row">
              <div className="form-item">
                <label>Кишечник</label>
                <input
                  type="text"
                  placeholder="Gut"
                  onChange={(e) => {
                    setGut(e.target.value);
                  }}
                />
              </div>
              <div className="form-item">
                <label>Конечности</label>
                <input
                  type="text"
                  placeholder="Extremities"
                  onChange={(e) => {
                    setExtromities(e.target.value);
                  }}
                />
              </div>
            </div>

            <div className="grid-row">
              <div className="form-item">
                <label>Нервы</label>
                <input
                  type="text"
                  placeholder="Neuro"
                  onChange={(e) => {
                    setNeuro(e.target.value);
                  }}
                />
              </div>
            </div>

            <div className="checkup-header-container">
              <h1>Постановка диагноза и лечение</h1>
            </div>

            <div className="form-item">
              <label>Подтверждающий Диагноз</label>
              <textarea
                placeholder="Admitting Diagnosis"
                onChange={(e) => {
                  setadmittingDiagnosis(e.target.value);
                }}
              />
            </div>

            <div className="form-item">
              <label>Лечение</label>
              <textarea
                type="text"
                placeholder="Treatment"
                onChange={(e) => {
                  setTreatment(e.target.value);
                }}
              />
            </div>
            <>
              <Link style={{ textDecoration: 'none' }} to="/PatientList">
                <div className="btn-container">
                  <button
                    onClick={() => {
                      SubmitForm();
                    }}
                  >
                    Сохранить
                  </button>
                </div>
              </Link>
            </>
          </div>
        </div>
      </div>
    </>
  );
}
