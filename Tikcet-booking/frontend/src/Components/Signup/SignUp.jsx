import { useState } from 'react';
import axios from 'axios';

const Signup = () => {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [password, setPassword] = useState('');
  const [email, setemail] = useState('');
  const [status, setStatus] = useState('');

  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };

  const contactChangeHandler = (e) => {
    setContact(e.target.value);
  };

  const emailChangeHandler = (e) => {
    setemail(e.target.value);
  };

  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  const signupHandler = async (e) => {
    e.preventDefault();
    setName('');
    setContact('');
    setemail('');
    setPassword('');
    setStatus('');
    const data = { name, email, contact, password };
    const res = await axios.post('http://localhost:8080/signup', data);
    if (res.status === 200) {
      setStatus('Sign up successful. Please login');
    } else if (res.status !== 400) {
      setStatus('Please enter valid details');
    }
    console.log(status);
    console.log(res);
  };

  return (
    <>
      <h2 style={{ marginTop: '20px', color: 'Blue' }}>User Signup</h2>
      <form style={{ margin: '50px 500px 0px 500px' }}>
        <div className='mb-3'>
          <label htmlFor='exampleInputEmail1' className='form-label'>
            Name
          </label>
          <input
            onChange={nameChangeHandler}
            value={name}
            type='text'
            className='form-control'
            id='exampleInputEmail1'
            aria-describedby='emailHelp'
          />
          <div id='emailHelp' className='form-text'></div>
        </div>
        <div className='mb-3'>
          <label htmlFor='exampleInputEmail1' className='form-label'>
            Email address
          </label>
          <input
            onChange={emailChangeHandler}
            value={email}
            type='email'
            className='form-control'
            id='exampleInputEmail1'
            aria-describedby='emailHelp'
          />
          <div id='emailHelp' className='form-text'></div>
        </div>
        <div className='mb-3'>
          <label htmlFor='exampleInputEmail1' className='form-label'>
            Contact No.
          </label>
          <input
            onChange={contactChangeHandler}
            value={contact}
            type='Number'
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
            onChange={passwordChangeHandler}
            value={password}
            type='password'
            className='form-control'
            id='exampleInputPassword1'
          />
        </div>
        <div style={{ color: 'Green', fontWeight: 'bold' }}>
          {status && status}
        </div>
        <div style={{ marginTop: '20px' }}>
          <button
            onClick={signupHandler}
            type='submit'
            className='btn btn-primary'
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default Signup;
