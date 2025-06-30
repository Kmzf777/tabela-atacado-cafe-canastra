'use client'
import Image from "next/image";
import { motion } from "framer-motion";
import { FaCheckCircle } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';

const pacotes = [
  {
    nome: "Canastra Clássico",
    descricao: "Café 100% Arábica - Tipo Especial +80 SCAA. Torra escura intensidade 8 e moagem médio-fina, ideal para coador. Encorpado com notas caramelizadas e achocolatadas.",
    imagem: "/cafe-classico.png",
    notas: { docura: 3, acidez: 3, corpo: 5, amargor: 4 },
    opcoes: [
      { tipo: "Moídos", peso: "250g", preco: "R$25,70" },
      { tipo: "Moídos", peso: "500g", preco: "R$43,70" },
      { tipo: "Em Grãos", peso: "250g", preco: "R$26,70" },
      { tipo: "Em Grãos", peso: "500g", preco: "R$43,70" },
      { tipo: "Em Grãos", peso: "1Kg", preco: "R$88,70" },
    ],
  },
  {
    nome: "Canastra Suave",
    descricao: "Café 100% Arábica - Tipo Especial +80 SCAA. Torra média intensidade 7 e moagem médio-fina, ideal para coador. Encorpado com notas achocolatadas e finalização cítrica.",
    imagem: "/cafe-suave.png",
    notas: { docura: 3, acidez: 2, corpo: 4, amargor: 3 },
    opcoes: [
      { tipo: "Moídos", peso: "250g", preco: "R$25,70" },
      { tipo: "Moídos", peso: "500g", preco: "R$43,70" },
      { tipo: "Em Grãos", peso: "250g", preco: "R$26,70" },
      { tipo: "Em Grãos", peso: "500g", preco: "R$43,70" },
      { tipo: "Em Grãos", peso: "1Kg", preco: "R$88,70" },
    ],
  },
  {
    nome: "Canastra Canela",
    descricao: "Café 100% Arábica - Tipo Especial +80 SCAA. Torra escura intensidade 7. Encorpado com notas caramelizadas e adicionado com canela natural.",
    imagem: "/cafe-canela.png",
    notas: { docura: 3, acidez: 3, corpo: 4, amargor: 3 },
    opcoes: [
      { tipo: "Moído", peso: "250g", preco: "R$25,70" },
    ],
  },
  // Agora os especiais
  {
    nome: "Microlote",
    destaque: "Tiragem Limitada",
    descricao: "Café 100% Arábica Especial. Médio corpo, notas de cacau, melaço e finalização suavemente cítrica.",
    imagem: "/microlote-png.png",
    notas: { docura: 3, acidez: 4, corpo: 4, amargor: 3 },
    opcoes: [
      { tipo: "Moído", peso: "250g", preco: "R$29,70" },
      { tipo: "Em Grãos", peso: "250g", preco: "R$29,70" },
    ],
  },
  {
    nome: "Néctar de minas",
    descricao: "Café 100% Arábica - Tipo Exportação 76 pontos. Torra escura intensidade 8 e moagem médio-fina, ideal para coador. Encorpado com notas caramelizadas e achocolatadas.",
    imagem: "/nectar-de-minas.JPG",
    notas: { docura: 2, acidez: 3, corpo: 5, amargor: 5 },
    opcoes: [
      { tipo: "Moído", peso: "500g", preco: "R$39,70" },
      { tipo: "Em Grãos", peso: "1Kg", preco: "R$82,70" },
    ],
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
        descricao: "Café 100% Arábica - Tipo Especial +80 SCAA em sachês individuais. Torra média intensidade 7 e moagem médio-fina. Encorpado com notas achocolatadas e finalização cítrica.",
        imagem: "/drip-coffee.jpg",
        notas: { docura: 3, acidez: 3, corpo: 4, amargor: 3 },
        opcoes: [
          { tipo: "Display (10uni de sachê)", preco: "R$24,90" },
        ],
      },
      {
        nome: "Cápsula Canastra Clássico",
        descricao: "Café 100% Arábica - Tipo Especial +80 SCAA em cápsulas e compatível com sistema Nespresso. Torra escura intensidade 8 e moagem médio-fina. Encorpado com notas caramelizadas e achocolatadas.",
        imagem: "/capsula.png",
        notas: { docura: 3, acidez: 3, corpo: 4, amargor: 4 },
        opcoes: [
          { tipo: "Display (10uni de cápsula)", preco: "R$17,70" },
        ],
      },
      {
        nome: "Cápsula Canastra Suave",
        descricao: "Café 100% Arábica - Tipo Especial +80 SCAA em cápsulas e compatível com sistema Nespresso. Torra média intensidade 7 e moagem médio-fina. Encorpado com notas achocolatadas e finalização cítrica.",
        imagem: "/capsula.png",
        notas: { docura: 3, acidez: 2, corpo: 4, amargor: 3 },
        opcoes: [
          { tipo: "Display (10uni de cápsula)", preco: "R$17,70" },
        ],
      },
      {
        nome: "Cápsula Canastra Canela",
        descricao: "Café 100% Arábica - Tipo Especial +80 SCAA em cápsulas e compatível com sistema Nespresso. Torra escura intensidade 7. Encorpado com notas caramelizadas e adicionado com canela natural.",
        imagem: "/capsula.png",
        notas: { docura: 3, acidez: 3, corpo: 4, amargor: 3 },
        opcoes: [
          { tipo: "Display (10uni de cápsula)", preco: "R$17,70" },
        ],
      },
    ],
  },
  // GRANEIS
  {
    secao: "Graneis",
    produtos: [
      {
        nome: "Graneis Canastra & Néctar de Minas",
        descricao: "Granel Canastra: Clássico ou Suave (100% Arábica Especial, Pontuação 84). Granel Néctar de Minas: Intenso ou Espresso (100% Arábica do tipo Exportação, Pontuação 76).",
        imagem: "/Granel Canastra.png",
        opcoes: [
          { tipo: "Canastra Clássico ou Suave", peso: "2Kg em grãos", preco: "R$144,70" },
          { tipo: "Néctar de Minas Intenso ou Espresso", peso: "2Kg em grãos", preco: "R$134,90" },
        ],
      },
    ],
  },
];

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
  if (/granel|graneis/i.test(nome)) return "text-gray-700"; // Cinza escuro
  return "text-gray-900";
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
        {produtos.map((prod: any, idx: number) => (
          <motion.div
            key={prod.nome}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: idx * 0.08, ease: 'easeOut' }}
            className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 bg-gradient-to-br from-amber-50 via-white to-amber-100 rounded-3xl shadow-2xl p-6 md:p-8 border border-gray-100 hover:scale-[1.025] hover:shadow-amber-200 transition-all min-h-[120px] group"
          >
            {/* Imagem 1:1 */}
            <div className="w-32 h-32 md:w-36 md:h-36 rounded-2xl flex items-center justify-center overflow-hidden mx-auto sm:mx-0 mb-4 sm:mb-0">
              {prod.imagem ? (
                <Image src={prod.imagem} alt={prod.nome} width={144} height={144} className="object-cover w-full h-full rounded-2xl" />
              ) : (
                <span className="text-xs text-gray-400">Imagem<br/>1:1</span>
              )}
            </div>
            {/* Info */}
            <div className="flex-1 min-w-0 text-center sm:text-left">
              <div className="flex items-center gap-2 mb-2">
                <span className={`font-bold text-2xl md:text-3xl ${corTituloProduto(prod.nome)}`}>{prod.nome}</span>
                {prod.destaque && <span className="bg-green-600 text-white text-xs px-3 py-1 rounded ml-1 font-semibold shadow">{prod.destaque}</span>}
              </div>
              <p className="text-base md:text-lg text-gray-700 mb-3 leading-tight">{prod.descricao}</p>
              {/* Notas */}
              {prod.notas && (
                <div className="flex gap-4 text-sm mb-3">
                  <span>Doçura <NotaEstrela n={prod.notas.docura} /></span>
                  <span>Acidez <NotaEstrela n={prod.notas.acidez} /></span>
                  <span>Corpo <NotaEstrela n={prod.notas.corpo} /></span>
                  <span>Amargor <NotaEstrela n={prod.notas.amargor} /></span>
                </div>
              )}
              {/* Preços */}
              <div className="flex flex-col gap-2 mt-2">
                {prod.opcoes.map((op: any, i: number) => (
                  <div key={i} className="flex items-center justify-between bg-white rounded-xl px-4 py-2 shadow-sm border border-gray-100">
                    <span className="text-gray-700">
                      {op.tipo ? `${op.tipo} ${op.peso}` : op.peso}
                    </span>
                    <span className="text-amber-600 font-bold" style={{letterSpacing: 1}}>{op.preco}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="w-full max-w-2xl mx-auto px-2 py-6 md:py-12 font-sans">
      {/* Hero Section */}
      <section className="flex flex-col items-center mb-8 font-sans">
        <Image src="/logo-canastra-preta.png" alt="Logo Café Canastra" width={90} height={90} className="mb-4 w-20 h-20 md:w-[110px] md:h-[110px]" />
        <h1 className="text-xl md:text-3xl font-bold text-gray-900 text-center mb-2 leading-tight font-sans">Direto da Serra da Canastra. <span className="block text-amber-600 font-bold">Frescor na xícara, sabor que conquista.</span></h1>
        <p className="text-center text-sm md:text-lg text-gray-600 mb-2 font-sans">Café especial, selecionado e torrado sob demanda para você.</p>
      </section>
      {/* Seções únicas */}
      <SecaoProdutos secao="Pacotes" produtos={produtos[0].produtos} />
      <SecaoProdutos secao="Displays" produtos={produtos[1].produtos} />
      <SecaoProdutos secao="Graneis" produtos={produtos[2].produtos} />
      {/* Benefícios */}
      <section className="bg-gray-50 rounded-2xl p-3 md:p-4 mb-6 md:mb-8 font-sans">
        <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4 text-center font-sans">Por que Café Canastra?</h2>
        <div className="flex flex-col gap-2 md:gap-3">
          <div className="flex items-center gap-2 md:gap-3 bg-white rounded-xl px-3 py-2 md:px-4 md:py-3 shadow-sm font-sans">
            <FaCheckCircle className="text-green-500 text-lg md:text-xl" />
            <span className="text-sm md:text-base">Café 100% arábica, da Serra da Canastra</span>
          </div>
          <div className="flex items-center gap-2 md:gap-3 bg-white rounded-xl px-3 py-2 md:px-4 md:py-3 shadow-sm font-sans">
            <FaCheckCircle className="text-green-500 text-lg md:text-xl" />
            <span className="text-sm md:text-base">Torra sob demanda, sempre fresco</span>
          </div>
          <div className="flex items-center gap-2 md:gap-3 bg-white rounded-xl px-3 py-2 md:px-4 md:py-3 shadow-sm font-sans">
            <FaCheckCircle className="text-green-500 text-lg md:text-xl" />
            <span className="text-sm md:text-base">Qualidade e sabor que surpreendem</span>
          </div>
        </div>
      </section>
      {/* Depoimentos */}
      <section className="mb-8 md:mb-10 font-sans">
        <h2 className="text-2xl md:text-4xl font-extrabold text-center mb-6 md:mb-10">
          Histórias de <span className="text-amber-500">sucesso real</span>
        </h2>
        <div className="flex flex-col gap-4 md:flex-row md:gap-6 justify-center items-stretch">
          {/* Depoimento 1 */}
          <div className="bg-orange-50 rounded-2xl shadow-md p-4 md:p-6 flex-1 min-w-0 max-w-full md:max-w-sm mx-auto flex flex-col justify-between">
            <div className="flex items-center mb-2">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-orange-400 text-base md:text-xl">★</span>
              ))}
            </div>
            <p className="text-gray-800 mb-3 md:mb-4 text-sm md:text-base">"Nossos clientes notaram a diferença imediatamente. O aroma é incrível e as vendas aumentaram bastante."</p>
            <span className="font-bold text-gray-900 text-sm md:text-base">Brainer – Goiânia/GO</span>
          </div>
          {/* Depoimento 2 */}
          <div className="bg-orange-50 rounded-2xl shadow-md p-4 md:p-6 flex-1 min-w-0 max-w-full md:max-w-sm mx-auto flex flex-col justify-between">
            <div className="flex items-center mb-2">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-orange-400 text-base md:text-xl">★</span>
              ))}
            </div>
            <p className="text-gray-800 mb-3 md:mb-4 text-sm md:text-base">"O café gira rápido e os clientes sempre elogiam. Fomos aumentando a linha de produtos e agora dispomos dela completa, foi um sucesso."</p>
            <span className="font-bold text-gray-900 text-sm md:text-base">Petterson Amorin – Frederico Westphalen/RS</span>
          </div>
          {/* Depoimento 3 */}
          <div className="bg-orange-50 rounded-2xl shadow-md p-4 md:p-6 flex-1 min-w-0 max-w-full md:max-w-sm mx-auto flex flex-col justify-between">
            <div className="flex items-center mb-2">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-orange-400 text-base md:text-xl">★</span>
              ))}
            </div>
            <p className="text-gray-800 mb-3 md:mb-4 text-sm md:text-base">"Atendimento excepcional e produto de qualidade. A logística deles é rápida e o João me atende muito bem. Parceria que realmente funciona."</p>
            <span className="font-bold text-gray-900 text-sm md:text-base">Sônia Lopes – São Paulo/SP</span>
          </div>
        </div>
      </section>
      {/* Call to Action */}
      <section className="mb-8 md:mb-10 font-sans">
        <div className="rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 p-4 md:p-6 flex flex-col items-center shadow-lg font-sans">
          <p className="text-white text-base md:text-lg font-bold text-center mb-3 md:mb-4 font-sans">Café Canastra –<br />Da fazenda para a sua xícara.<br />Experimente o sabor da Serra!</p>
          <a
            href="https://wa.me/+553493195252"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white text-amber-600 font-bold px-4 py-2 md:px-5 md:py-2 rounded-lg shadow hover:bg-amber-50 transition-all font-sans text-sm md:text-base"
          >
            Fazer Pedido <FaArrowRight className="text-lg" />
          </a>
        </div>
      </section>
    </main>
  );
} 