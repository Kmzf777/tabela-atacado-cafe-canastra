# Café Canastra - Tabela Atacado 2025

Tabela de preços e produtos do Café Canastra para atacado.

- Mobile-first, responsivo
- Visual moderno, UX/UI atual
- Cards de produto com imagem à esquerda, informações à direita
- Espaço reservado para imagens ausentes
- Feito com Next.js (App Router) + Tailwind CSS
- Pronto para deploy na Vercel

## Como rodar localmente

```bash
npm install
npm run dev
```

Acesse: http://localhost:3000

## Deploy

1. Faça push para o GitHub
2. Conecte o repositório na Vercel
3. Deploy automático

---

Projeto refeito do zero seguindo estrutura e visual do PDF fornecido.

## 🚀 Funcionalidades

### Página Principal (`/`)
- Tabela de preços pública dos produtos do Café Canastra
- Design moderno e responsivo
- Animações suaves com Framer Motion
- Informações da empresa e contatos

## 🛠️ Tecnologias Utilizadas

- **Next.js** - Framework React
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização
- **Framer Motion** - Animações
- **React Icons** - Ícones

## 📁 Estrutura do Projeto

```
app/
├── layout.tsx                   # Layout principal
├── globals.css                  # Estilos globais
└── page.tsx                     # Página inicial
```

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

---

**Desenvolvido para Café Canastra** - Sistema interno de gerenciamento de preços
