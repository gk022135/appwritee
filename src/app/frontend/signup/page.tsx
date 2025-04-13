'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { json } from 'stream/consumers';

export default function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();
    const resposne = await axios("", )
    console.log('Signing up with:', formData);
    // handle signup logic here
  };

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-gray-100">
      {/* Left: Signup Form */}
      <div className="flex flex-col justify-center items-center px-8 py-12 bg-white shadow-lg z-10">
        <div className="w-full max-w-md space-y-6">
          <h2 className="text-4xl font-bold text-gray-800">Create an Account</h2>
          <p className="text-gray-500">Sign up to get started with our awesome app</p>
          <form onSubmit={handleSubmit} className="space-y-4 text-black ">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                className="mt-1 w-full px-4 py-2 rounded-xl bg-gray-100 border focus:outline-none focus:ring-2 focus:ring-violet-600"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                className="mt-1 w-full px-4 py-2 rounded-xl bg-gray-100 border focus:outline-none focus:ring-2 focus:ring-violet-600"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                name="password"
                className="mt-1 w-full px-4 py-2 rounded-xl bg-gray-100 border focus:outline-none focus:ring-2 focus:ring-violet-600"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-xl transition"
            >
              Sign Up
            </button>
          </form>
          <p className="text-sm text-gray-500 text-center">
            Already have an account? <a href="/frontend/login" className="text-violet-600 hover:underline">Log in</a>
          </p>
        </div>
      </div>

      {/* Right: Info Panel / Image */}
      <div className="hidden md:flex items-center justify-center bg-gradient-to-br from-violet-700 to-purple-900 text-white p-10">
        <div className="text-center space-y-4 max-w-md">
          <h2 className="text-3xl font-bold">Welcome to the Future ✨</h2>
          <p className="text-lg">
            Join our community of creators and thinkers. Get access to premium features, instant support, and more!
          </p>
          <img
            src="https://source.unsplash.com/600x400/?technology,gradient"
            alt="Signup Visual"
            className="rounded-xl shadow-xl mt-4"
          />
        </div>
      </div>
    </div>
  );
}
