import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const JoinUs = () => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function SubmitForm(){
        console.log("Form submitted");
        axios.post('http://localhost:5000/users', {
            username: username,
            email: email,
            password: password
        }).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(error);
        })
        
        setEmail(" ");
        setUsername(" ");
        setPassword(" ");
    }
  return (
    // Outer container: Full screen height, centered content, soft wash background
    <div className="min-h-screen flex items-center justify-center bg-stone-50 p-4 font-sans">
      
      {/* Sign Up Card: White background, subtle border and shadow, responsive width */}
      <div className="max-w-md w-full bg-white rounded-2xl shadow-sm border border-stone-100 p-8">
        
        {/* Header Section */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold text-stone-800 tracking-tight">Join us today</h2>
          <p className="text-sm text-stone-500 mt-2">Create an account to get started.</p>
        </div>

        {/* Form Section */}
        <form className="space-y-5" onSubmit={(e) => e.preventDefault(SubmitForm())}>
          
          {/* Full Name Input */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-3 rounded-lg border border-stone-200 bg-stone-50 text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-200 focus:bg-white transition-colors duration-200"
              placeholder="John Doe"
              required
              name="username"
              value={username}
              onChange={(e)=>{
                setUsername(e.target.value);
              }}
            />
          </div>

          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-3 rounded-lg border border-stone-200 bg-stone-50 text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-200 focus:bg-white transition-colors duration-200"
              placeholder="name@example.com"
              required
              value={email}
               name="email"
              onChange={(e)=>{
                setEmail(e.target.value);
              }}
            />
          </div>

          {/* Password Input */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-stone-700 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-3 rounded-lg border border-stone-200 bg-stone-50 text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-200 focus:bg-white transition-colors duration-200"
              placeholder="Create a strong password"
              required
              value={password}
            name="password"
              onChange={(e)=>{
                setPassword(e.target.value);
              }}
            />
          </div>

          {/* Terms & Conditions Checkbox */}
          <div className="flex items-start mt-4">
            <div className="flex items-center h-5">
              <input
                id="terms"
                type="checkbox"
                className="h-4 w-4 text-stone-700 focus:ring-stone-400 border-stone-300 rounded cursor-pointer mt-0.5"
                required    
              />
            </div>
            <label htmlFor="terms" className="ml-2 block text-sm text-stone-600 cursor-pointer">
              I agree to the{' '}
              <a href="#" className="font-medium text-stone-800 hover:underline">
                Terms of Service
              </a>{' '}
              and{' '}
              <a href="#" className="font-medium text-stone-800 hover:underline">
                Privacy Policy
              </a>.
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full flex justify-center py-3 px-4 mt-6 rounded-lg text-sm font-medium text-stone-50 bg-stone-800 hover:bg-stone-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-stone-800 transition-all duration-200"
          >
            Create account
          </button>
        </form>

        {/* Footer Section */}
        <p className="mt-8 text-center text-sm text-stone-500">
          Already have an account?{' '}
          <Link to = "/login">
          <a href="#" className="font-medium text-stone-800 hover:underline transition-all">
            Login
          </a>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default JoinUs;