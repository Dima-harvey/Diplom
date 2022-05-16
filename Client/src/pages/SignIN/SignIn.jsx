import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';
import Axios from 'axios';
import React, { useState } from 'react';
import './SignIn.css';
import { withRouter } from 'react-router-dom';
import Cookies from 'js-cookie';

function SignIn(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState('');

  const { history } = props;

  const Login = () => {
    Axios.post('http://localhost:3003/api/loginUser', {
      username: username,
      password: password,
    }).then((response) => {
      if (response.data.message) {
        setLoginStatus(response.data.message);
      } else {
        Cookies.set('user', 'myclinic@g4484949V@myclinic');

        history.push('/PatientList/');
      }
    });
  };

  return (
    <div className="SignIn">
      <div className="items">
        <h1 className="headerlogin">
          <center>𝔑𝔦𝔠𝔬𝔩𝔞 ℭ𝔩𝔦𝔫𝔦𝔠</center>
        </h1>

        <div className="username">
          <TextField
            variant="outlined"
            InputProps={{
              style: {
                color: 'black',
                backgroundColor: 'rgba(255,255,255,0.8)',
              },
            }}
            fullWidth={true}
            placeholder="логин"
            type="username"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </div>
        <p> </p>

        <div className="password">
          <TextField
            variant="outlined"
            fullWidth={true}
            placeholder="пароль"
            InputProps={{
              style: {
                color: 'black',
                backgroundColor: 'rgba(255,255,255,0.8)',
              },
            }}
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <br></br>

        <div className="loginbtn">
          <Button
            variant="contained"
            size="large"
            color="neutral"
            id="submit"
            onClick={() => {
              Login();
            }}
          >
            Login
          </Button>
        </div>

        <h3 className="loginstatus"> {loginStatus} </h3>
      </div>
    </div>
  );
}
export default withRouter(SignIn);
