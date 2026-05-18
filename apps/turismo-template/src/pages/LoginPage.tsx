import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, User, ShieldAlert, Mountain } from 'lucide-react';

// For the exercise, we use a simple SHA-256 simulation or just a hardcoded check
// In a real app, this would be a backend call.
// Hashed value of "admin" (SHA-256): 8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918
const AUTH_TOKEN = 'lapalma_admin_auth';

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulating "crypted" password verification
    // In a real app, we would hash the input and compare it or send it to a backend.
    const hashedPassword = '8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918'; // admin
    
    // Simple hex hash simulator (for the exercise)
    const mockHash = (str: string) => {
      if (str === 'admin') return '8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918';
      return 'invalid';
    };

    if (username === 'admin' && mockHash(password) === hashedPassword) {
      localStorage.setItem(AUTH_TOKEN, 'true');
      navigate('/dashboard');
    } else {
      setError('Credenciales inválidas. Acceso denegado.');
    }
  };

  return (
    <div className="login-page">
      <div className="login-card glass animate-fade-in">
        <div className="login-header">
          <div className="login-logo">
            <Mountain size={32} color="var(--green-500)" />
          </div>
          <h1>Acceso Restringido</h1>
          <p>Identifíquese para gestionar el portal</p>
        </div>

        <form onSubmit={handleLogin} className="login-form">
          {error && (
            <div className="login-error">
              <ShieldAlert size={18} />
              {error}
            </div>
          )}

          <div className="form-group">
            <label htmlFor="username">Usuario</label>
            <div className="input-with-icon">
              <User size={18} />
              <input 
                id="username"
                type="text" 
                className="form-control" 
                placeholder="Nombre de usuario"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <div className="input-with-icon">
              <Lock size={18} />
              <input 
                id="password"
                type="password" 
                className="form-control" 
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>

          <button type="submit" className="btn btn-primary login-btn">
            Entrar al Sistema
          </button>
        </form>

        <div className="login-footer">
          &copy; {new Date().getFullYear()} Patronato de Turismo de La Palma
        </div>
      </div>

      <style>{`
        .login-page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: radial-gradient(circle at center, var(--blue-900) 0%, var(--dark-bg) 100%);
          padding: 24px;
        }
        .login-card {
          width: 100%;
          max-width: 400px;
          padding: 48px 40px;
          border-radius: var(--radius-xl);
          text-align: center;
        }
        .login-logo {
          width: 64px;
          height: 64px;
          background: rgba(82, 183, 136, 0.1);
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 24px;
        }
        .login-header h1 {
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--white);
          margin-bottom: 8px;
        }
        .login-header p {
          color: var(--gray-400);
          font-size: 0.95rem;
          margin-bottom: 32px;
        }
        .login-form {
          text-align: left;
        }
        .login-error {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 16px;
          background: rgba(230, 57, 70, 0.15);
          border: 1px solid rgba(230, 57, 70, 0.3);
          color: var(--red-alert);
          border-radius: var(--radius-md);
          font-size: 0.85rem;
          margin-bottom: 24px;
        }
        .input-with-icon {
          position: relative;
        }
        .input-with-icon svg {
          position: absolute;
          left: 14px;
          top: 50%;
          transform: translateY(-50%);
          color: var(--gray-600);
        }
        .input-with-icon input {
          padding-left: 44px;
        }
        .login-btn {
          width: 100%;
          margin-top: 12px;
          padding: 14px;
          font-weight: 600;
        }
        .login-footer {
          margin-top: 32px;
          font-size: 0.8rem;
          color: var(--gray-600);
        }
      `}</style>
    </div>
  );
};

export default LoginPage;
