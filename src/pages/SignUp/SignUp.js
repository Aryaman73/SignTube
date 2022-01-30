import React from 'react';

import './SignUp.css';

const FormSignup = ({ submitForm }) => {


  return (
    <div className='form-content-right'>
      <form  className='form' noValidate>
        <h1>
          Translate your Sign Language videos in real-time
        </h1>
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
        <button 
        className='form-input-btn' type='submit'
        onClick={() => this.nextPath('/Main') }
        >
          Sign up
        </button>
      </form>
    </div>
  );
};

export default FormSignup;