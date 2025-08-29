import React from 'react';
import { GoogleIcon } from './icons/Icons';
import { User } from '../types';

interface LoginPageProps {
  onLogin: (user: User) => void;
}

const adminUser: User = {
  id: 'user-admin-01',
  name: '홍길동',
  picture: `https://api.dicebear.com/8.x/initials/svg?seed=홍길동&backgroundColor=facc15`,
  isAdmin: true,
};

const regularUser: User = {
  id: 'user-regular-01',
  name: '이순신',
  picture: `https://api.dicebear.com/8.x/initials/svg?seed=이순신`,
  isAdmin: false,
};


const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  return (
    <div className="min-h-screen bg-gray-900 font-sans text-gray-200 flex items-center justify-center p-4 animate-fade-in">
      <div className="w-full max-w-md text-center bg-gray-900/50 backdrop-blur-xl rounded-2xl shadow-lg p-8 md:p-12 border border-gray-800">
        <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-emerald-400 mb-4">
          ZenTask
        </h1>
        <p className="text-gray-400 mb-10 text-lg">
          자연어 기반으로 할 일을 손쉽게 관리하세요.
        </p>
        <div className="flex flex-col gap-4">
          <button
            onClick={() => onLogin(adminUser)}
            className="w-full flex items-center justify-center gap-3 px-6 py-3 border border-gray-700/50 bg-gray-800/40 hover:bg-gray-700/50 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-gray-900"
            aria-label="관리자 계정으로 로그인"
          >
            <GoogleIcon className="w-6 h-6" />
            <span>관리자 계정으로 로그인</span>
          </button>
          <button
            onClick={() => onLogin(regularUser)}
            className="w-full flex items-center justify-center gap-3 px-6 py-3 border border-gray-700/50 bg-gray-800/40 hover:bg-gray-700/50 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-gray-900"
            aria-label="일반 사용자 계정으로 로그인"
          >
            <GoogleIcon className="w-6 h-6" />
            <span>일반 사용자 계정으로 로그인</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;