'use client';

import { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // handle login logic here
    console.log('Logging in with:', { email, password });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-violet-600">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md animate-fade-in">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Welcome Back 👋</h2>
        <form onSubmit={handleSubmit} className="space-y-5 text-black">
          <div>
            <label className="block text-sm font-medium text-gray-600">Email</label>
            <input
              type="email"
              className="mt-1 w-full px-4 py-2 border rounded-xl bg-gray-100 focus:outline-none focus:ring-2 focus:ring-violet-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">Password</label>
            <input
              type="password"
              className="mt-1 w-full px-4 py-2 border rounded-xl bg-gray-100 focus:outline-none focus:ring-2 focus:ring-violet-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-violet-600 hover:bg-violet-700 text-white rounded-xl transition duration-200"
          >
            Login
          </button>
        </form>
        <p className="text-sm text-center text-gray-500 mt-6">
          Don&apos;t have an account? <a href="/frontend/signup" className="text-violet-600 font-medium hover:underline">Sign Up</a>
        </p>
      </div>
    </div>
  );
}
