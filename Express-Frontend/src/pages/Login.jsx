import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    // Outer container: Full screen height, centered content, soft wash background
    <div className="min-h-screen flex items-center justify-center bg-stone-50 p-4 font-sans">
      
      {/* Login Card: White background, subtle border and shadow, responsive width */}
      <div className="max-w-md w-full bg-white rounded-2xl shadow-sm border border-stone-100 p-8">
        
        {/* Header Section */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold text-stone-800 tracking-tight">Welcome back</h2>
          <p className="text-sm text-stone-500 mt-2">Please enter your details to sign in.</p>
        </div>

        {/* Form Section */}
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          
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
              placeholder="••••••••"
              required
            />
          </div>

          {/* Additional Options: Remember Me & Forgot Password */}
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center">
              <input
                id="remember-me"
                type="checkbox"
                className="h-4 w-4 text-stone-700 focus:ring-stone-400 border-stone-300 rounded cursor-pointer"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-stone-600 cursor-pointer">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a href="#" className="font-medium text-stone-500 hover:text-stone-800 transition-colors duration-200">
                Forgot password?
              </a>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full flex justify-center py-3 px-4 mt-6 rounded-lg text-sm font-medium text-stone-50 bg-stone-800 hover:bg-stone-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-stone-800 transition-all duration-200"
          >
            Sign in
          </button>
        </form>

        {/* Footer Section */}
        <p className="mt-8 text-center text-sm text-stone-500">
          Don't have an account?{' '}
          <Link to="/joinus">   
          <a href="#" className="font-medium text-stone-800 hover:underline transition-all">
            Sign up
          </a>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;