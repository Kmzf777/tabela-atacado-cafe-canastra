"use client";
import { useState } from 'react';
import { useAuth } from './AuthProvider';
import { FaEye, FaEyeSlash, FaLock, FaUser } from 'react-icons/fa';

// Componente de formulário de login
export const LoginForm = () => {
  const { login, isLoading } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Função para lidar com o envio do formulário
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    try {
      // Validação básica dos campos
      if (!username.trim() || !password.trim()) {
        setError('Por favor, preencha todos os campos.');
        return;
      }

      // Tentativa de login
      const success = await login(username, password);
      
      if (!success) {
        setError('Usuário ou senha incorretos. Tente novamente.');
      }
    } catch (error) {
      setError('Erro ao fazer login. Tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Função para alternar visibilidade da senha
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        {/* Card de login */}
        <div className="bg-white rounded-3xl shadow-xl p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Gerenciador de Preços
            </h1>
            <p className="text-gray-600">
              Acesse para gerenciar a tabela de preços do Café Canastra
            </p>
          </div>

          {/* Formulário */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Campo de usuário */}
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
                Usuário
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaUser className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                  placeholder="Digite seu usuário"
                  disabled={isSubmitting}
                  autoComplete="username"
                />
              </div>
            </div>

            {/* Campo de senha */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Senha
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaLock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full pl-10 pr-12 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                  placeholder="Digite sua senha"
                  disabled={isSubmitting}
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
                  disabled={isSubmitting}
                >
                  {showPassword ? <FaEyeSlash className="h-5 w-5" /> : <FaEye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            {/* Mensagem de erro */}
            {error && (
              <div className="bg-red-50 border border-red-200 rounded-2xl p-4">
                <p className="text-red-600 text-sm">{error}</p>
              </div>
            )}

            {/* Botão de login */}
            <button
              type="submit"
              disabled={isSubmitting || isLoading}
              className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white py-3 px-6 rounded-2xl font-semibold hover:from-amber-600 hover:to-amber-700 focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Entrando...
                </>
              ) : (
                'Entrar'
              )}
            </button>
          </form>

          {/* Informações adicionais */}
          <div className="mt-8 text-center">
            <p className="text-xs text-gray-500">
              Sistema de gerenciamento interno do Café Canastra
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}; 