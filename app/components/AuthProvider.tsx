"use client";
import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

// Interface para o contexto de autenticação
interface AuthContextType {
  isAuthenticated: boolean;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
}

// Criação do contexto
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Credenciais de acesso
const VALID_USERNAME = 'Canastrainteligencia';
const VALID_PASSWORD = 'Canastrainteligencia@321';

// Hook personalizado para usar o contexto de autenticação
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  }
  return context;
};

// Props do AuthProvider
interface AuthProviderProps {
  children: ReactNode;
}

// Componente principal do AuthProvider
export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Verificar autenticação ao carregar a página
  useEffect(() => {
    const checkAuth = () => {
      try {
        const authStatus = localStorage.getItem('canastra-auth');
        if (authStatus === 'true') {
          setIsAuthenticated(true);
        }
      } catch (error) {
        console.error('Erro ao verificar autenticação:', error);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, []);

  // Função de login
  const login = async (username: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    
    // Simular delay de rede para melhor UX
    await new Promise(resolve => setTimeout(resolve, 800));
    
    try {
      // Validação das credenciais
      if (username === VALID_USERNAME && password === VALID_PASSWORD) {
        localStorage.setItem('canastra-auth', 'true');
        setIsAuthenticated(true);
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error('Erro durante login:', error);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  // Função de logout
  const logout = () => {
    try {
      localStorage.removeItem('canastra-auth');
      setIsAuthenticated(false);
    } catch (error) {
      console.error('Erro durante logout:', error);
    }
  };

  const value = {
    isAuthenticated,
    login,
    logout,
    isLoading
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}; 