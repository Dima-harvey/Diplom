import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import PatientList from './pages/PatientList/PatientList';
import AddPatientPersonalInfo from './pages/AddPatientCheck/AddPatientPersonalInfo';
import AddPatientCheckupData from './pages/AddPatientCheck/AddPatientCheckupData';
import DetailInfo from './pages/DetailInfo/DetailInfo';
import FollowUp from './pages/Followup/followUp';
import HistoryDetails from './pages/HistoryDetail/HistoryDetail';
import SignIn from './pages/SignIN/SignIn';
import ProtectedRoute from './components/ProtectedRoute';
import TodoList from './components/TodoList';
import DoctorList from './pages/DoctorList/DoctorList'
import ContactUs from './components/ContactUs'
import Graph from './components/Graph'

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Header />
          <div className="inner-content">
            <Sidebar />
            <Switch>
              <Route path="/" exact component={SignIn} />
              <ProtectedRoute path="/PatientList/" exact component={PatientList} />
              <Route path="/AddPatientPersonalInfo" exact component={AddPatientPersonalInfo} />
              <ProtectedRoute path="/HistoryDetails/:id/:date" exact component={HistoryDetails} />
              <Route path="/AddPatientCheckupData/:id" exact component={AddPatientCheckupData} />
              <ProtectedRoute path="/TodoList" exact component={TodoList} />
              <ProtectedRoute path="/DoctorList" exact component={DoctorList} />
              <ProtectedRoute path="/Mail" exact component={ContactUs} />
              <ProtectedRoute path="/Graph" exact component={Graph} />
              <ProtectedRoute path="/DetailInfo/:id" exact component={DetailInfo} />
              <Route path="/followUp/:id" exact component={FollowUp} />
              <ProtectedRoute path="*" component={() => '404 NOT FOUND. TRY A EXISTING  ADDRESS'} />
            </Switch>
          </div>
        </Router>
      </div>
    </>
  );
}

export default App;
