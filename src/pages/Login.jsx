import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CheckCheck } from 'lucide-react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add login logic here
    navigate('/tasks');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <div className="w-full max-w-md">
        <div className="flex items-center gap-2 text-violet-500 mb-4">
          <CheckCheck className="h-6 w-6" />
          <h1 className="text-xl font-semibold">Task Manager</h1>
        </div>
        
        <div className="bg-violet-400 rounded-lg p-6 shadow-lg">
          <h2 className="text-white text-2xl font-semibold mb-6 text-center">Login</h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 rounded-md"
            />
            
            <input
              type="password"
              placeholder="senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 rounded-md"
            />
            
            <button
              type="submit"
              className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-md transition-colors"
            >
              Entrar
            </button>
            
            <div className="text-center">
              <Link to="/register" className="text-white hover:underline">
                criar conta
              </Link>
            </div>
          </form>
        </div>
        
        <p className="text-center mt-6 text-gray-600 italic">
          organização is my passion
        </p>
      </div>
    </div>
  );
}