import React, { useRef } from 'react'
import Header from './Header'
import { signin, signup } from '../utils/firebase';

const Login = () => {
  const passwordRef = useRef(null);
  const usernameRef = useRef(null);
  return (
    <div>
      <Header />
      <div className='absolute'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/32c47234-8398-4a4f-a6b5-6803881d38bf/eed3a573-8db7-47ca-a2ce-b511e0350439/IN-en-20240122-popsignuptwoweeks-perspective_alpha_website_small.jpg" />
      </div>
      <div className='absolute bg-black/80 p-12 w-3/12 m-24 mx-auto right-0 left-0 text-white'>
        <h1 className='font-semibold text-3xl'>Sign In</h1>
        <input className='bg-black/20 border-gray-500 border p-2 m-2 rounded' ref={usernameRef} type='text' placeholder='Email address' />
        <input className='bg-black/20 border-gray-500 border p-2 m-2 rounded' ref={passwordRef} type='text' placeholder='Password' />
        <div className='flex-col'>
          <button className='bg-red-600 m-1 p-2 rounded w-40 opacity-100'
            onClick={() => signin(usernameRef.current.value, passwordRef.current.value)}>Sign in</button>
          <button className='bg-red-600 m-1 p-2 rounded w-40 opacity-100'
            onClick={() => signup(usernameRef.current.value, passwordRef.current.value)}>Sign Up</button>
        </div>
      </div>
    </div>
  )
}

export default Login