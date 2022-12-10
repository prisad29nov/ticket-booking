import { useState } from 'react';
import axios from 'axios';
import Booking from '../Booking/Booking';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [password, setPassword] = useState('');
  const [email, setemail] = useState('');
  const [error, setError] = useState('');
  const [status, setstatus] = useState(false);

  const navigate = useNavigate();

  const nameChangeHandler = (e) => {
    setemail(e.target.value);
  };

  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  const loginHandler = async (e) => {
    try {
      setError('');
      setstatus(false);
      e.preventDefault();
      console.log('loginhandler');
      const data = { email, password };
      const res = await axios.post('http://localhost:8080/login', data);
      console.log(res);
      if (res.status === 200) {
        console.log('first');
        setstatus(true);
      }
      console.log(status);
      if (status) {
        navigate('/');
      }
    } catch (e) {
      console.log(e);
      setError(e.response.data);
    }
  };

  return (
    <>
      <h2 style={{ marginTop: '20px', color: 'Blue' }}>User Login</h2>
      <form style={{ margin: '50px 500px 0px 500px' }}>
        <div className='mb-3'>
          <label htmlFor='exampleInputEmail1' className='form-label'>
            Email address
          </label>
          <input
            onChange={nameChangeHandler}
            value={email}
            type='email'
            className='form-control'
            id='exampleInputEmail1'
            aria-describedby='emailHelp'
          />
          <div id='emailHelp' className='form-text'></div>
        </div>
        <div className='mb-3'>
          <label htmlFor='exampleInputPassword1' className='form-label'>
            Password
          </label>

          <input
            value={password}
            onChange={passwordChangeHandler}
            type='password'
            className='form-control'
            id='exampleInputPassword1'
          />
        </div>
        <div style={{ color: 'red' }}>{error && error}</div>

        <div className='mb-3 form-check'></div>
        <button
          onClick={loginHandler}
          // type='submit'
          className='btn btn-primary'
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default Login;
