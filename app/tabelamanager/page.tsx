"use client";
import { useAuth } from '../components/AuthProvider';
import { LoginForm } from '../components/LoginForm';
import { EditablePriceTable } from '../components/EditablePriceTable';

// Componente de loading
const LoadingSpinner = () => (
  <div className="min-h-screen bg-gray-50 flex items-center justify-center">
    <div className="text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-600 mx-auto mb-4"></div>
      <p className="text-gray-600">Carregando...</p>
    </div>
  </div>
);

// Página principal do gerenciador de tabela
export default function TabelaManager() {
  const { isAuthenticated, isLoading } = useAuth();

  // Exibir loading enquanto verifica autenticação
  if (isLoading) {
    return <LoadingSpinner />;
  }

  // Se não estiver autenticado, exibir formulário de login
  if (!isAuthenticated) {
    return <LoginForm />;
  }

  // Se estiver autenticado, exibir tabela editável
  return <EditablePriceTable />;
} 