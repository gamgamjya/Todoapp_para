import React from 'react';
import { useLocalStorage } from './hooks/useLocalStorage';
import { User } from './types';
import LoginPage from './components/LoginPage';
import MainApp from './MainApp';

const App: React.FC = () => {
  const [user, setUser] = useLocalStorage<User | null>('user', null);

  const handleLogin = (selectedUser: User) => {
    setUser(selectedUser);
  };

  const handleLogout = () => {
    setUser(null);
  };

  if (!user) {
    return <LoginPage onLogin={handleLogin} />;
  }

  return <MainApp user={user} onLogout={handleLogout} setUser={setUser} />;
};

export default App;