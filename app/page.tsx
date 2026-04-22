'use client'
import Image from "next/image";
import { motion } from "framer-motion";
import { FaCheckCircle, FaArrowRight } from 'react-icons/fa';
import PromotionCard from "./components/PromotionCard";

const pacotes = [
  {
    nome: "Canastra Clássico",
    descricao: "Café 100% Arábica - Tipo Especial acima de 80 pontos SCA. Torra escura intensidade 8 e moagem médio-fina, ideal para coador. Encorpado com notas caramelizadas e achocolatadas.",
    imagem: "/cafe-classico.png",
    notas: { docura: 3, acidez: 3, corpo: 5, amargor: 4 },
    opcoes: [
      { tipo: "Moído", peso: "250g", preco: "R$28,70" },
      { tipo: "Moído", peso: "500g", preco: "R$52,70" },
      { tipo: "Em Grãos", peso: "250g", preco: "R$31,70" },
      { tipo: "Em Grãos", peso: "500g", preco: "R$54,70" },
      { tipo: "Em Grãos", peso: "1kg", preco: "R$97,70" },
    ],
  },
  {
    nome: "Canastra Suave",
    descricao: "Café 100% Arábica - Tipo Especial acima de 80 pontos SCA. Torra média intensidade 7 e moagem médio-fina, ideal para coador. Encorpado com notas achocolatadas e finalização cítrica.",
    imagem: "/cafe-suave.png",
    notas: { docura: 3, acidez: 2, corpo: 4, amargor: 3 },
    opcoes: [
      { tipo: "Moído", peso: "250g", preco: "R$28,70" },
      { tipo: "Moído", peso: "500g", preco: "R$52,70" },
      { tipo: "Em Grãos", peso: "250g", preco: "R$31,70" },
      { tipo: "Em Grãos", peso: "500g", preco: "R$54,70" },
      { tipo: "Em Grãos", peso: "1kg", preco: "R$97,70" },
    ],
  },
  {
    nome: "Canastra Canela",
    descricao: "Café 100% Arábica - Tipo Especial acima de 80 pontos SCA. Torra escura intensidade 7. Encorpado com notas caramelizadas e adicionado com canela natural.",
    imagem: "/cafe-canela.png",
    notas: { docura: 3, acidez: 3, corpo: 4, amargor: 3 },
    opcoes: [
      { tipo: "Moído", peso: "250g", preco: "R$28,70" },
    ],
  },
  {
    nome: "Microlote",
    descricao: "Café 100% Arábica Especial com 86 pontos SCA. Médio corpo, notas de cacau, melaço e finalização suavemente cítrica.",
    imagem: "/microlote-png.png",
    notas: { docura: 3, acidez: 4, corpo: 4, amargor: 3 },
    opcoes: [
      { tipo: "Moído", peso: "250g", preco: "R$32,70" },
      { tipo: "Em Grãos", peso: "250g", preco: "R$32,70" },
    ],
  },
  {
    nome: "Néctar de Minas Gourmet",
    descricao: "Café 100% Arábica Gourmet - 75 pontos SCA. Torra escura intensidade 8 e moagem média para coador. Encorpado com notas caramelizadas e achocolatadas.",
    imagem: "/nectar-de-minas.png",
    notas: { docura: 2, acidez: 3, corpo: 5, amargor: 5 },
    opcoes: [
      { tipo: "Moído", peso: "500g", preco: "R$39,70" },
      { tipo: "Em Grãos", peso: "1kg", preco: "R$88,70" },
      { tipo: "Kit 10 unidades", peso: "500g", preco: "R$357,00", precoUnitario: "R$35,70/unid." },
    ],
  },
  {
    nome: "Néctar de Minas Blend Arábica com Robusta",
    descricao: "Blend especial de café Arábica com Robusta. Encorpado, com notas intensas, amargor equilibrado e crema marcante. Ideal para espresso e máquinas automáticas.",
    imagem: "/nectar-de-minas.png",
    notas: { docura: 2, acidez: 2, corpo: 5, amargor: 5 },
    opcoes: [
      { tipo: "Em Grãos", peso: "1kg", preco: "R$79,70" },
    ],
  },
  {
    nome: "Moedor Café Canastra",
    descricao: "Moedor elétrico profissional. Moagem na hora para garantir o máximo de frescor e aroma no seu café.",
    imagem: "/moedor.png",
    opcoes: [],
  },
];

const produtos = [
  { secao: "Pacotes", produtos: pacotes },
  // DISPLAYS
  {
    secao: "Displays",
    produtos: [
      {
        nome: "Drip Coffee Canastra Suave",
        descricao: "Café 100% Arábica - Tipo Especial acima de 80 pontos SCA em sachês individuais. Torra média intensidade 7 e moagem médio-fina. Encorpado com notas achocolatadas e finalização cítrica.",
        imagem: "/drip-coffee.png",
        notas: { docura: 3, acidez: 3, corpo: 4, amargor: 3 },
        opcoes: [
          { tipo: "Display (10 unid. de sachês)", preco: "R$24,90" },
        ],
      },
      {
        nome: "Cápsula Canastra Clássico",
        descricao: "Café 100% Arábica - Tipo Especial acima de 80 pontos SCA em cápsulas e compatível com sistema Nespresso. Torra escura intensidade 8 e moagem médio-fina. Encorpado com notas caramelizadas e achocolatadas.",
        imagem: "/capsula-classico-canastra.png",
        notas: { docura: 3, acidez: 3, corpo: 4, amargor: 4 },
        queima: true,
        opcoes: [
          { tipo: "Display (10 unid. de cápsulas)", preco: "R$22,90" },
        ],
      },
      {
        nome: "Cápsula Canastra Canela",
        descricao: "Café 100% Arábica - Tipo Especial acima de 80 pontos SCA em cápsulas e compatível com sistema Nespresso. Torra escura intensidade 7. Encorpado com notas caramelizadas e adicionado com canela natural.",
        imagem: "/capsula-canela-canastra.png",
        notas: { docura: 3, acidez: 3, corpo: 4, amargor: 3 },
        queima: true,
        opcoes: [
          { tipo: "Display (10 unid. de cápsulas)", preco: "R$22,90" },
        ],
      },
    ],
  },
  // GRANEIS
  {
    secao: "Graneis",
    produtos: [
      {
        nome: "Granel Canastra Suave",
        descricao: "Café 100% Arábica Especial, Pontuação 80. Torra média, encorpado com notas achocolatadas e finalização cítrica.",
        imagem: "/Granel Canastra.png",
        opcoes: [
          { tipo: "Canastra Suave", peso: "2kg em grãos", preco: "R$169,70" },
        ],
      },
      {
        nome: "Granel Canastra Clássico",
        descricao: "Café 100% Arábica Especial, Pontuação 80. Torra escura, encorpado com notas caramelizadas e achocolatadas.",
        imagem: "/Granel Canastra.png",
        opcoes: [
          { tipo: "Canastra Clássico", peso: "2kg em grãos", preco: "R$169,70" },
        ],
      },
      {
        nome: "Granel Néctar de Minas Espresso",
        descricao: "Blend especial para espresso. Encorpado com crema marcante e amargor equilibrado.",
        imagem: "/nectar-de-minas.png",
        opcoes: [
          { tipo: "Néctar de Minas Espresso", peso: "2kg em grãos", preco: "R$166,70" },
        ],
      },
      {
        nome: "Granel Néctar de Minas Intenso",
        descricao: "Blend intenso com notas marcantes. Ideal para quem busca um café forte e encorpado.",
        imagem: "/nectar-de-minas.png",
        opcoes: [
          { tipo: "Néctar de Minas Intenso", peso: "2kg em grãos", preco: "R$166,70" },
        ],
      },
    ],
  },
];

// (Removido) Componente promocional exclusivo do Néctar de Minas

// Função para estrelas de avaliação
function NotaEstrela({ n }: { n: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <span key={i} className={i <= n ? "text-yellow-500" : "text-gray-300"}>★</span>
      ))}
    </div>
  );
}

// Função para cor do título conforme família
function corTituloProduto(nome: string) {
  if (/cl[áa]ssico|n[ée]ctar de minas/i.test(nome)) return "text-gray-900"; // Preto
  if (/suave/i.test(nome)) return "text-yellow-900"; // Marrom
  if (/canela/i.test(nome)) return "text-red-600"; // Vermelho
  if (/granel|graneis/i.test(nome)) return "text-gray-700"; // Prata/Cinza escuro
  return "text-gray-900";
}

// Função para gradiente do card conforme família
function gradienteCardProduto(nome: string) {
  if (/^n[ée]ctar de minas/i.test(nome)) return "bg-gradient-to-br from-purple-50 via-white to-orange-50";
  if (/cl[áa]ssico/i.test(nome)) return "bg-gradient-to-br from-amber-900/20 via-white to-amber-900/5";
  if (/suave/i.test(nome)) return "bg-gradient-to-br from-yellow-600/20 via-white to-yellow-600/5";
  if (/canela/i.test(nome)) return "bg-gradient-to-br from-red-500/20 via-white to-red-500/5";
  if (/granel|graneis/i.test(nome)) return "bg-gradient-to-br from-gray-300/30 via-white to-gray-200/10";
  return "bg-gradient-to-br from-amber-50 via-white to-amber-100";
}

function CardNectar({ prod, idx }: { prod: any; idx: number }) {
  const precoBase = prod.opcoes?.[0]?.preco ?? 'R$0,00';
  const precoPromo = precoComDesconto(precoBase, 20);
  return (
    <motion.div
      key={prod.nome}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: idx * 0.08, ease: 'easeOut' }}
      className="relative overflow-hidden rounded-[28px] p-4 md:p-6 border border-[#d4af37] ring-1 ring-[#d4af37]/50 shadow-2xl bg-[linear-gradient(135deg,#2a0f3b_0%,#3b1555_24%,#4b1a59_42%,#632a1a_70%,#ff7a1a_92%,#ff6600_100%)]"
    >
      <div className="absolute left-4 top-4 rounded-full px-3 py-1 text-xs md:text-sm font-bold text-white shadow-sm bg-[linear-gradient(135deg,#3b1555,#f3d37a)]">20% OFF</div>
      <div className="absolute -top-10 -right-14 rotate-45 w-52 h-12 bg-black rounded-md shadow-2xl">
        <div className="absolute top-0 left-0 w-full h-1.5 bg-[linear-gradient(90deg,#d4af37,#f3d37a)] rounded-t-md"></div>
        <div className="absolute bottom-0 left-0 w-full h-1.5 bg-[linear-gradient(90deg,#d4af37,#f3d37a)] rounded-b-md"></div>
      </div>
      <div className="absolute -bottom-10 -left-14 -rotate-45 w-56 h-12 bg-black rounded-md shadow-2xl">
        <div className="absolute top-0 left-0 w-full h-1.5 bg-[linear-gradient(90deg,#d4af37,#f3d37a)] rounded-t-md"></div>
        <div className="absolute bottom-0 left-0 w-full h-1.5 bg-[linear-gradient(90deg,#d4af37,#f3d37a)] rounded-b-md"></div>
      </div>
      <div className="absolute bottom-3 right-3 w-3 h-3 rotate-45 bg-[linear-gradient(135deg,#d4af37,#f3d37a)] rounded-[2px]"></div>
      <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
        <div className="w-[192px] h-[192px] md:w-32 md:h-32 rounded-2xl flex items-center justify-center overflow-hidden mx-auto sm:mx-0 flex-shrink-0">
          {prod.imagem ? (
            <Image src={prod.imagem} alt={prod.nome} width={256} height={256} className="object-cover w-full h-full rounded-2xl" />
          ) : (
            <span className="text-xs text-gray-300">Imagem</span>
          )}
        </div>
        <div className="flex-1 min-w-0 w-full">
          <div className="mb-2">
            <span className="block font-extrabold text-2xl md:text-3xl text-white tracking-tight">{prod.nome}</span>
          </div>
          <div className="inline-flex items-center rounded-xl px-3 py-2 bg-[linear-gradient(135deg,#d4af37,#f3d37a)] shadow text-black font-extrabold uppercase mb-3">BLACK FRIDAY</div>
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm mb-3 text-white/90">
            <span>Doçura <NotaEstrela n={prod.notas.docura} /></span>
            <span>Acidez <NotaEstrela n={prod.notas.acidez} /></span>
            <span>Corpo <NotaEstrela n={prod.notas.corpo} /></span>
            <span className="w-full sm:w-auto">Amargor <NotaEstrela n={prod.notas.amargor} /></span>
          </div>
          <div className="flex items-center gap-3 mb-3">
            <span className="text-gray-300 line-through text-lg">{precoBase}</span>
            <span className="text-2xl md:text-3xl font-extrabold bg-clip-text text-transparent bg-[linear-gradient(180deg,#ffffff,#f3d37a)]">{precoPromo}</span>
          </div>
          <div className="inline-flex items-center rounded-full border border-[#d4af37] px-3 py-1 text-xs md:text-sm text-white/90">A partir de 10un.</div>
          <div className="mt-3 flex flex-col gap-2">
            {prod.opcoes
              .filter((op: any) => {
                const tipo = (op.tipo || '').toLowerCase();
                const isGraos = /gr[ãa]os/.test(tipo);
                return !(isGraos && op.peso === '1kg');
              })
              .map((op: any, i: number) => (
                <div key={i} className="flex items-center justify-between rounded-xl px-3 md:px-4 py-2 border border-[#d4af37]/60 bg-black/20 backdrop-blur-sm">
                  <span className="text-white/90">{`${op.tipo ? op.tipo : ''}${op.tipo && op.peso ? ' ' : ''}${op.peso ? op.peso : ''}`.trim()}</span>
                  <div className="flex items-center gap-3">
                    <span className="text-gray-300 line-through">{op.preco}</span>
                    <span className="rounded-full px-2.5 py-1 text-xs md:text-sm font-bold text-white bg-[linear-gradient(135deg,#3b1555,#f3d37a)]">20% OFF</span>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function CardMoedor({ prod, idx }: { prod: any; idx: number }) {
  return (
    <motion.div
      key={prod.nome}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: idx * 0.08, ease: 'easeOut' }}
      className="relative overflow-hidden rounded-[28px] p-4 md:p-6 border border-gray-600 shadow-2xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700"
    >
      <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
        <div className="w-40 h-40 rounded-2xl flex items-center justify-center overflow-hidden mx-auto sm:mx-0 flex-shrink-0 bg-gray-800">
          {prod.imagem ? (
            <Image src={prod.imagem} alt={prod.nome} width={160} height={160} className="object-contain w-full h-full p-2" />
          ) : (
            <span className="text-xs text-gray-300">Imagem</span>
          )}
        </div>
        <div className="flex-1 min-w-0 w-full">
          <span className="block font-extrabold text-2xl md:text-3xl text-white tracking-tight mb-1">{prod.nome}</span>
          <p className="text-gray-300 text-sm mb-4 leading-snug">{prod.descricao}</p>
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between rounded-xl px-4 py-3 bg-white/10 border border-white/20">
              <span className="text-white/90 text-sm font-medium">Moedor sozinho</span>
              <div className="flex items-baseline gap-1">
                <span className="text-white font-extrabold text-lg">R$949</span>
              </div>
            </div>
            <div className="flex items-center justify-between rounded-xl px-4 py-3 bg-amber-500/20 border border-amber-400/40">
              <div>
                <span className="text-white/90 text-sm font-medium block">Com 10 pacotes de granel</span>
                <span className="text-amber-300 text-xs">Moedor com desconto especial</span>
              </div>
              <span className="text-amber-300 font-extrabold text-xl">R$599</span>
            </div>
            <div className="flex items-center justify-between rounded-xl px-4 py-3 bg-green-500/20 border border-green-400/40">
              <div>
                <span className="text-white/90 text-sm font-medium block">Com 20 pacotes de granel</span>
                <span className="text-green-300 text-xs">Moedor com super desconto</span>
              </div>
              <span className="text-green-300 font-extrabold text-xl tracking-wide">R$99</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function precoComDesconto(preco: string, desconto: number) {
  const n = parseFloat(preco.replace(/[R$\s]/g, '').replace('.', '').replace(',', '.'));
  const d = (n * (100 - desconto)) / 100;
  return `R$${d.toFixed(2).replace('.', ',')}`;
}

function SecaoProdutos({ secao, produtos }: { secao: string; produtos: any[] }) {
  return (
    <section className="mb-16">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="text-3xl md:text-4xl font-extrabold mb-8 text-gray-900 border-l-8 border-amber-500 pl-5 uppercase tracking-widest bg-white/90 py-3 rounded-xl shadow-md"
      >
        {secao}
      </motion.h2>
      <div className="flex flex-col gap-10">
        {produtos.map((prod: any, idx: number) => {
          const isMicrolote = prod.nome.toLowerCase().includes('microlote');
          const isNectarPromo = /^n[ée]ctar de minas$/i.test(prod.nome);
          const isMoedor = prod.nome.toLowerCase().includes('moedor');
          const isQueima = prod.queima === true;
          if (isNectarPromo) {
            return <CardNectar key={prod.nome} prod={prod} idx={idx} />;
          }
          if (isMoedor) {
            return <CardMoedor key={prod.nome} prod={prod} idx={idx} />;
          }
          return (
            <motion.div
              key={prod.nome}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: 'easeOut' }}
              className={`flex flex-col sm:flex-row items-start gap-4 sm:gap-6 rounded-3xl shadow-2xl p-3 md:p-8 border transition-all min-h-[120px] group w-full max-w-full relative
                ${isMicrolote ? 'bg-gradient-to-br from-[#fffbe6] via-[#fff7cc] to-[#ffe066] border-yellow-400 shadow-[0_0_24px_2px_rgba(255,215,0,0.12)] ring-2 ring-yellow-300/40' : 'border-gray-100'}
                ${isQueima ? 'bg-gradient-to-br from-red-50 via-white to-orange-50 border-red-300 ring-1 ring-red-200' : gradienteCardProduto(prod.nome)}
              `}
              style={isMicrolote ? { boxShadow: '0 0 32px 0 rgba(255, 215, 0, 0.18), 0 2px 8px 0 rgba(0,0,0,0.04)' } : {}}
            >
              {isQueima && (
                <div className="absolute top-3 right-3 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md animate-pulse z-10">
                  🔥 Queima de Estoque
                </div>
              )}
              <div className="w-28 h-28 md:w-36 md:h-36 rounded-2xl flex items-center justify-center overflow-hidden mx-auto sm:mx-0 mb-4 sm:mb-0 flex-shrink-0">
                {prod.imagem ? (
                  <Image src={prod.imagem} alt={prod.nome} width={144} height={144} className="object-cover w-full h-full rounded-2xl" />
                ) : (
                  <span className="text-xs text-gray-400">Imagem<br />1:1</span>
                )}
              </div>
              <div className="flex-1 min-w-0 text-center sm:text-left w-full max-w-full">
                <div className="flex items-center gap-2 mb-2 w-full max-w-full relative">
                  <span className={`font-bold text-2xl md:text-3xl ${corTituloProduto(prod.nome)} break-words w-full max-w-full`}>{prod.nome}</span>
                </div>
                <p className="text-base md:text-lg text-gray-700 mb-3 leading-tight break-words w-full max-w-full">{prod.descricao}</p>
                {isQueima && (
                  <p className="text-sm text-red-600 font-semibold mb-2">Mesmo desconto progressivo do Drip Coffee — válido para todos os sabores!</p>
                )}
                {prod.notas && (
                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm mb-3 w-full max-w-full justify-center sm:justify-start">
                    <span>Doçura <NotaEstrela n={prod.notas.docura} /></span>
                    <span>Acidez <NotaEstrela n={prod.notas.acidez} /></span>
                    <span>Corpo <NotaEstrela n={prod.notas.corpo} /></span>
                    <span className="w-full flex flex-col items-center sm:flex-row sm:items-center justify-center sm:justify-start">
                      <span>Amargor</span>
                      <span className="sm:ml-1"><NotaEstrela n={prod.notas.amargor} /></span>
                    </span>
                  </div>
                )}
                <div className="flex flex-col gap-2 mt-2 w-full max-w-full">
                  {prod.opcoes.map((op: any, i: number) => (
                    <div key={i} className="flex items-center justify-between rounded-xl px-2 md:px-4 py-2 shadow-sm border w-full max-w-full bg-white border-gray-100">
                      <span className="text-gray-700 break-words text-sm md:text-base text-left">
                        {`${op.tipo ? op.tipo : ''}${op.tipo && op.peso ? ' ' : ''}${op.peso ? op.peso : ''}`.trim()}
                      </span>
                      <div className="flex flex-col items-end shrink-0 ml-2">
                        <span className="text-amber-600 font-bold text-base md:text-lg text-right" style={{ letterSpacing: 1 }}>{op.preco}</span>
                        {op.precoUnitario && <span className="text-gray-400 text-xs text-right">{op.precoUnitario}</span>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="w-full max-w-xl mx-auto px-1.5 sm:px-2 py-6 md:py-12 font-sans overflow-x-hidden">
      {/* Hero Section */}
      <section className="flex flex-col items-center mb-8 font-sans w-full">
        <div className="mb-4 w-20 h-20 md:w-[110px] md:h-[110px] flex items-center justify-center">
          <Image src="/logo-canastra-preta.png" alt="Logo Café Canastra" width={110} height={110} className="object-contain w-full h-full" />
        </div>
        <h1 className="text-xl md:text-3xl font-bold text-gray-900 text-center mb-2 leading-tight font-sans break-words w-full">Direto da Serra da Canastra. <span className="block text-amber-600 font-bold">Frescor na xícara, sabor que conquista.</span></h1>
        <p className="text-center text-sm md:text-lg text-gray-600 mb-2 font-sans break-words w-full">Café especial, selecionado e torrado sob demanda para você.</p>
      </section>

      {/* Queima de Estoque */}
      <PromotionCard />

      {/* Seções únicas */}
      <SecaoProdutos secao="Pacotes" produtos={produtos[0].produtos} />
      <SecaoProdutos secao="Displays" produtos={produtos[1].produtos} />
      <SecaoProdutos secao="Graneis" produtos={produtos[2].produtos} />
      {/* Benefícios */}
      <section className="bg-gray-50 rounded-2xl p-2.5 md:p-4 mb-6 md:mb-8 font-sans w-full">
        <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4 text-center font-sans break-words w-full">Por que Café Canastra?</h2>
        <div className="flex flex-col gap-2 md:gap-3 w-full">
          <div className="flex items-center gap-2 md:gap-3 bg-white rounded-xl px-2.5 py-2 md:px-4 md:py-3 shadow-sm font-sans w-full">
            <FaCheckCircle className="text-green-500 text-lg md:text-xl" />
            <span className="text-sm md:text-base break-words">Café 100% arábica especial, da Serra da Canastra</span>
          </div>
          <div className="flex items-center gap-2 md:gap-3 bg-white rounded-xl px-2.5 py-2 md:px-4 md:py-3 shadow-sm font-sans w-full">
            <FaCheckCircle className="text-green-500 text-lg md:text-xl" />
            <span className="text-sm md:text-base break-words">Logística rápida e eficiente</span>
          </div>
          <div className="flex items-center gap-2 md:gap-3 bg-white rounded-xl px-2.5 py-2 md:px-4 md:py-3 shadow-sm font-sans w-full">
            <FaCheckCircle className="text-green-500 text-lg md:text-xl" />
            <span className="text-sm md:text-base break-words">Torra sob demanda, sempre fresco</span>
          </div>
          <div className="flex items-center gap-2 md:gap-3 bg-white rounded-xl px-2.5 py-2 md:px-4 md:py-3 shadow-sm font-sans w-full">
            <FaCheckCircle className="text-green-500 text-lg md:text-xl" />
            <span className="text-sm md:text-base break-words">Qualidade e sabor que surpreendem</span>
          </div>
        </div>
      </section>
      {/* Depoimentos - Comentado para uso futuro */}
      {/*
      <section className="mb-8 md:mb-10 font-sans w-full">
        <h2 className="text-2xl md:text-4xl font-extrabold text-center mb-6 md:mb-10 break-words w-full">
          Histórias de <span className="text-amber-500">sucesso real</span>
        </h2>
        <div className="flex flex-col gap-4 md:flex-row md:gap-6 justify-center items-stretch w-full">
          <div className="bg-orange-50 rounded-2xl shadow-md p-4 md:p-6 flex-1 min-w-0 w-full mx-auto flex flex-col justify-between">
            <div className="flex items-center mb-2">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-orange-400 text-base md:text-xl">★</span>
              ))}
            </div>
            <p className="text-gray-800 mb-3 md:mb-4 text-sm md:text-base break-words">"Nossos clientes notaram a diferença imediatamente. O aroma é incrível e as vendas aumentaram bastante."</p>
            <span className="font-bold text-gray-900 text-sm md:text-base break-words">Brainer – Goiânia/GO</span>
          </div>
          <div className="bg-orange-50 rounded-2xl shadow-md p-4 md:p-6 flex-1 min-w-0 w-full mx-auto flex flex-col justify-between">
            <div className="flex items-center mb-2">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-orange-400 text-base md:text-xl">★</span>
              ))}
            </div>
            <p className="text-gray-800 mb-3 md:mb-4 text-sm md:text-base break-words">"O café gira rápido e os clientes sempre elogiam. Fomos aumentando a linha de produtos e agora dispomos dela completa, foi um sucesso."</p>
            <span className="font-bold text-gray-900 text-sm md:text-base break-words">Petterson Amorin – Frederico Westphalen/RS</span>
          </div>
          <div className="bg-orange-50 rounded-2xl shadow-md p-4 md:p-6 flex-1 min-w-0 w-full mx-auto flex flex-col justify-between">
            <div className="flex items-center mb-2">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-orange-400 text-base md:text-xl">★</span>
              ))}
            </div>
            <p className="text-gray-800 mb-3 md:mb-4 text-sm md:text-base break-words">"Atendimento excepcional e produto de qualidade. A logística deles é rápida e o João me atende muito bem. Parceria que realmente funciona."</p>
            <span className="font-bold text-gray-900 text-sm md:text-base break-words">Sônia Lopes – São Paulo/SP</span>
          </div>
        </div>
      </section>
      */}
    </main>
  );
}
