"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaEdit, FaSave, FaTimes, FaSignOutAlt, FaCheck, FaExclamationTriangle } from 'react-icons/fa';
import { useAuth } from './AuthProvider';

// Interface para produtos
interface Product {
  name: string;
  price: string;
}

// Interface para categorias
interface CoffeeCategory {
  key: string;
  name: string;
  image: string;
  products: Product[];
}

// Dados iniciais das categorias de café
const initialCoffeeCategories: CoffeeCategory[] = [
  {
    key: "classico",
    name: "Clássico",
    image: "/cafe-classico.png",
    products: [
      { name: "Moído 250g", price: "R$25,70" },
      { name: "Moído 500g", price: "R$43,70" },
      { name: "Grãos 250g", price: "R$26,70" },
      { name: "Grãos 500g", price: "R$43,70" },
      { name: "Grãos 1kg", price: "R$88,70" },
      { name: "Granel 2Kg", price: "R$149,70" },
    ],
  },
  {
    key: "suave",
    name: "Suave",
    image: "/cafe-suave.png",
    products: [
      { name: "Moído 250g", price: "R$25,70" },
      { name: "Moído 500g", price: "R$43,70" },
      { name: "Grãos 250g", price: "R$26,70" },
      { name: "Grãos 500g", price: "R$43,70" },
      { name: "Grãos 1kg", price: "R$88,70" },
      { name: "Granel 2Kg", price: "R$149,70" },
    ],
  },
  {
    key: "canela",
    name: "Canela",
    image: "/cafe-canela.png",
    products: [
      { name: "Moído 250g", price: "R$25,70" },
      { name: "Moído 500g", price: "R$43,70" },
      { name: "Grãos 250g", price: "R$26,70" },
    ],
  },
];

// Componente de tabela de preços editável
export const EditablePriceTable = () => {
  const { logout } = useAuth();
  const [coffeeCategories, setCoffeeCategories] = useState<CoffeeCategory[]>(initialCoffeeCategories);
  const [editingProduct, setEditingProduct] = useState<{ categoryKey: string; productIndex: number } | null>(null);
  const [editValue, setEditValue] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  // Carregar dados salvos do localStorage ao inicializar
  useEffect(() => {
    try {
      const savedData = localStorage.getItem('canastra-prices');
      if (savedData) {
        const parsedData = JSON.parse(savedData);
        setCoffeeCategories(parsedData);
      }
    } catch (error) {
      console.error('Erro ao carregar dados salvos:', error);
    }
  }, []);

  // Função para iniciar edição de um produto
  const startEditing = (categoryKey: string, productIndex: number, currentPrice: string) => {
    setEditingProduct({ categoryKey, productIndex });
    setEditValue(currentPrice);
  };

  // Função para cancelar edição
  const cancelEditing = () => {
    setEditingProduct(null);
    setEditValue('');
  };

  // Função para salvar alteração de preço
  const savePrice = async (categoryKey: string, productIndex: number) => {
    setIsSaving(true);
    setSaveMessage(null);

    try {
      // Simular delay de salvamento
      await new Promise(resolve => setTimeout(resolve, 500));

      // Validar formato do preço
      const priceRegex = /^R\$\d+,\d{2}$/;
      if (!priceRegex.test(editValue)) {
        setSaveMessage({ type: 'error', text: 'Formato inválido. Use R$XX,XX' });
        return;
      }

      // Atualizar o preço
      const updatedCategories = coffeeCategories.map(category => {
        if (category.key === categoryKey) {
          const updatedProducts = [...category.products];
          updatedProducts[productIndex] = {
            ...updatedProducts[productIndex],
            price: editValue
          };
          return { ...category, products: updatedProducts };
        }
        return category;
      });

      setCoffeeCategories(updatedCategories);

      // Salvar no localStorage
      localStorage.setItem('canastra-prices', JSON.stringify(updatedCategories));

      // Feedback de sucesso
      setSaveMessage({ type: 'success', text: 'Preço atualizado com sucesso!' });
      
      // Limpar estado de edição
      setEditingProduct(null);
      setEditValue('');

      // Limpar mensagem após 3 segundos
      setTimeout(() => setSaveMessage(null), 3000);

    } catch (error) {
      setSaveMessage({ type: 'error', text: 'Erro ao salvar alteração' });
    } finally {
      setIsSaving(false);
    }
  };

  // Função para lidar com tecla Enter
  const handleKeyPress = (e: React.KeyboardEvent, categoryKey: string, productIndex: number) => {
    if (e.key === 'Enter') {
      savePrice(categoryKey, productIndex);
    } else if (e.key === 'Escape') {
      cancelEditing();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header com logout */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Gerenciador de Preços</h1>
            <p className="text-gray-600">Edite os preços dos produtos do Café Canastra</p>
          </div>
          <button
            onClick={logout}
            className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-2xl hover:bg-red-600 transition-colors"
          >
            <FaSignOutAlt />
            Sair
          </button>
        </div>
      </header>

      {/* Mensagem de feedback */}
      {saveMessage && (
        <div className={`max-w-7xl mx-auto px-6 py-3 mt-4 ${
          saveMessage.type === 'success' 
            ? 'bg-green-50 border border-green-200 text-green-700' 
            : 'bg-red-50 border border-red-200 text-red-700'
        } rounded-2xl flex items-center gap-2`}>
          {saveMessage.type === 'success' ? <FaCheck /> : <FaExclamationTriangle />}
          {saveMessage.text}
        </div>
      )}

      {/* Tabela de preços */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {coffeeCategories.map((category) => (
            <div key={category.key} className="bg-white rounded-3xl shadow-lg p-8">
              {/* Imagem e título da categoria */}
              <div className="w-full mb-6 flex items-center justify-center">
                <Image 
                  src={category.image} 
                  alt={category.name} 
                  width={300} 
                  height={300} 
                  className="object-contain w-full h-56" 
                />
              </div>
              <h3 className="font-bold text-2xl mb-6 text-amber-600 text-center">{category.name}</h3>

              {/* Lista de produtos */}
              <div className="space-y-3">
                {category.products.map((product, productIndex) => (
                  <div 
                    key={product.name} 
                    className={`flex justify-between items-center py-4 px-6 rounded-2xl ${
                      productIndex % 2 === 0 ? "bg-gray-50" : "bg-white border border-gray-100"
                    }`}
                  >
                    <span className="font-semibold text-gray-800 text-lg">{product.name}</span>
                    
                    {/* Campo de preço editável */}
                    <div className="flex items-center gap-2">
                      {editingProduct?.categoryKey === category.key && 
                       editingProduct?.productIndex === productIndex ? (
                        <>
                          <input
                            type="text"
                            value={editValue}
                            onChange={(e) => setEditValue(e.target.value)}
                            onKeyDown={(e) => handleKeyPress(e, category.key, productIndex)}
                            className="w-24 px-2 py-1 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-right"
                            placeholder="R$XX,XX"
                            autoFocus
                            disabled={isSaving}
                          />
                          <button
                            onClick={() => savePrice(category.key, productIndex)}
                            disabled={isSaving}
                            className="text-green-600 hover:text-green-700 disabled:opacity-50"
                          >
                            <FaSave size={16} />
                          </button>
                          <button
                            onClick={cancelEditing}
                            disabled={isSaving}
                            className="text-red-600 hover:text-red-700 disabled:opacity-50"
                          >
                            <FaTimes size={16} />
                          </button>
                        </>
                      ) : (
                        <>
                          <span className="font-bold text-amber-600 text-xl">{product.price}</span>
                          <button
                            onClick={() => startEditing(category.key, productIndex, product.price)}
                            className="text-gray-400 hover:text-amber-600 transition-colors ml-2"
                            title="Editar preço"
                          >
                            <FaEdit size={14} />
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Instruções */}
        <div className="mt-12 bg-blue-50 border border-blue-200 rounded-3xl p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-3">Instruções de Edição:</h3>
          <ul className="text-blue-800 space-y-2 text-sm">
            <li>• Clique no ícone de edição (lápis) ao lado do preço para editá-lo</li>
            <li>• Use o formato R$XX,XX (exemplo: R$25,70)</li>
            <li>• Pressione Enter para salvar ou Escape para cancelar</li>
            <li>• As alterações são salvas automaticamente no navegador</li>
            <li>• Para reverter alterações, recarregue a página</li>
          </ul>
        </div>
      </main>
    </div>
  );
}; 