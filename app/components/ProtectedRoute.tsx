"use client";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from './AuthProvider';

// Props do componente de rota protegida
interface ProtectedRouteProps {
  children: React.ReactNode;
}

// Componente para proteger rotas que requerem autenticação
export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { isAuthenticated, isLoading } = useAuth();
  const router = useRouter();

  // Redirecionar para login se não estiver autenticado
  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      // Como estamos na mesma página, não precisamos redirecionar
      // O componente já vai renderizar o LoginForm
    }
  }, [isAuthenticated, isLoading, router]);

  // Se estiver carregando, mostrar loading
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Verificando autenticação...</p>
        </div>
      </div>
    );
  }

  // Se não estiver autenticado, o componente pai vai renderizar o LoginForm
  // Se estiver autenticado, renderizar o conteúdo protegido
  return <>{children}</>;
}; 