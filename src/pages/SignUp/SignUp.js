import React from 'react';
import {Link} from 'react-router-dom';
import { ReactComponent as MySvg } from "./logo.svg"
import { ReactComponent as WaveSvg } from "./wave.svg"


import './SignUp.css';

const FormSignup = ({ submitForm }) => {


  return (
    <div>
    <div className='form-content-right'>
      <form  className='form' noValidate>
        <h1>
          SignTube
        </h1>
        <MySvg />
        <div className='form-inputs'>
          <label className='form-label'>Name</label>
          <input
            className='form-input'
            type='text'
            name='username'
            placeholder='Enter your username'
 
          />
        
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Email</label>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='Enter your email'

          />

        </div>
        <div className='form-inputs'>
          <label className='form-label'>Password</label>
          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='Enter your password'

          />
   
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Confirm Password</label>
          <input
            className='form-input'
            type='password'
            name='password2'
            placeholder='Confirm your password'
   
          />
  
        </div>
        <Link 
        className='form-input-btn'
        to='/Main'
        >
          Sign up
        </Link>
      </form>
    </div>
    <div class="wave">
      <WaveSvg />
    </div>
    </div>


  );
};

export default FormSignup;