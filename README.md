# Café Canastra - Tabela de Preços

Sistema de tabela de preços e gerenciamento interno para o Café Canastra.

## 🚀 Funcionalidades

### Página Principal (`/`)
- Tabela de preços pública dos produtos do Café Canastra
- Design moderno e responsivo
- Animações suaves com Framer Motion
- Informações da empresa e contatos

### Gerenciador de Preços (`/tabelamanager`)
- **Acesso Protegido**: Requer autenticação
- **Edição Inline**: Preços editáveis diretamente na tabela
- **Persistência Local**: Alterações salvas no localStorage
- **Validação**: Formato de preço validado (R$XX,XX)
- **Feedback Visual**: Mensagens de sucesso e erro

## 🔐 Sistema de Autenticação

### Credenciais de Acesso
- **Usuário**: `Canastrainteligencia`
- **Senha**: `Canastrainteligencia@321`

### Características
- Autenticação via localStorage (sem backend)
- Sessão persistente entre recarregamentos
- Formulário seguro com validação
- Feedback visual durante login

## 🛠️ Tecnologias Utilizadas

- **Next.js 14** - Framework React
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização
- **Framer Motion** - Animações
- **React Icons** - Ícones
- **localStorage** - Persistência de dados

## 📁 Estrutura do Projeto

```
app/
├── components/
│   ├── AuthProvider.tsx         # Contexto de autenticação
│   ├── LoginForm.tsx            # Formulário de login
│   ├── EditablePriceTable.tsx   # Tabela editável
│   └── ProtectedRoute.tsx       # Proteção de rotas
├── tabelamanager/
│   └── page.tsx                 # Página protegida
├── layout.tsx                   # Layout principal
├── globals.css                  # Estilos globais
└── page.tsx                     # Página inicial
```

## 🎯 Como Usar

### Acessando o Gerenciador
1. Acesse a página principal: `http://localhost:3000`
2. Clique em "Área Administrativa" no footer
3. Ou acesse diretamente: `http://localhost:3000/tabelamanager`
4. Faça login com as credenciais fornecidas

### Editando Preços
1. Clique no ícone de edição (lápis) ao lado do preço
2. Digite o novo valor no formato R$XX,XX
3. Pressione Enter para salvar ou Escape para cancelar
4. As alterações são salvas automaticamente

## 🔧 Instalação e Execução

```bash
# Instalar dependências
npm install

# Executar em modo desenvolvimento
npm run dev

# Build para produção
npm run build

# Executar em produção
npm start
```

## 📱 Responsividade

O sistema é totalmente responsivo e funciona em:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🎨 Design System

### Cores
- **Primária**: Amber (dourado/café)
- **Neutra**: Gray (tons de cinza)
- **Sucesso**: Green (verde)
- **Erro**: Red (vermelho)
- **Info**: Blue (azul)

### Componentes
- Cards com bordas arredondadas (rounded-3xl)
- Sombras suaves (shadow-lg)
- Transições suaves (transition-all)
- Botões com hover effects

## 🔒 Segurança

### Autenticação
- Autenticação simples via localStorage
- Validação de formato de preços
- Proteção contra entrada inválida
- Feedback de erro para usuário

## 📝 Notas Importantes

- As alterações são salvas apenas no navegador local
- Para reverter alterações, recarregue a página
- O sistema não possui backend, sendo ideal para uso interno
- As credenciais estão hardcoded no código (não usar em produção)

## 🚀 Próximas Melhorias

- [ ] Integração com backend real
- [ ] Sistema de backup automático
- [ ] Histórico de alterações
- [ ] Múltiplos usuários
- [ ] Exportação de dados
- [ ] Notificações em tempo real

---

**Desenvolvido para Café Canastra** - Sistema interno de gerenciamento de preços
