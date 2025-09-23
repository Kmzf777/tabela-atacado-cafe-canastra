'use client'
import Image from "next/image";
import { motion } from "framer-motion";
import { FaCheckCircle, FaArrowRight } from 'react-icons/fa';

const pacotes = [
  {
    nome: "Canastra Clásico",
    descricao: "Café 100% Arábica - Tipo Especial +80 SCA. Tostado oscuro intensidad 8 y molienda media-fina, ideal para filtro. Con cuerpo y notas caramelizadas y achocolatadas.",
    imagem: "/cafe-classico.png",
    notas: { docura: 3, acidez: 3, corpo: 5, amargor: 4 },
    opcoes: [
      { tipo: "Molido", peso: "250g", preco: "USD$4.17" },
      { tipo: "Molido", peso: "500g", preco: "USD$8.34" },
      { tipo: "En Granos", peso: "250g", preco: "USD$4.17" },
      { tipo: "En Granos", peso: "500g", preco: "USD$8.34" },
      { tipo: "En Granos", peso: "1kg", preco: "USD$15.87" },
    ],
  },
  {
    nome: "Canastra Suave",
    descricao: "Café 100% Arábica - Tipo Especial +80 SCA. Tostado medio intensidad 7 y molienda media-fina, ideal para filtro. Con cuerpo y notas achocolatadas y finalización cítrica.",
    imagem: "/cafe-suave.png",
    notas: { docura: 3, acidez: 2, corpo: 4, amargor: 3 },
    opcoes: [
      { tipo: "Molido", peso: "250g", preco: "USD$4.17" },
      { tipo: "Molido", peso: "500g", preco: "USD$8.34" },
      { tipo: "En Granos", peso: "250g", preco: "USD$4.17" },
      { tipo: "En Granos", peso: "500g", preco: "USD$8.34" },
      { tipo: "En Granos", peso: "1kg", preco: "USD$15.87" },
    ],
  },
  {
    nome: "Canastra Canela",
    descricao: "Café 100% Arábica - Tipo Especial +80 SCA. Tostado oscuro intensidad 7. Con cuerpo y notas caramelizadas y adicionado con canela natural.",
    imagem: "/cafe-canela.png",
    notas: { docura: 3, acidez: 3, corpo: 4, amargor: 3 },
    opcoes: [
      { tipo: "Molido", peso: "250g", preco: "USD$4.17" },
    ],
  },
  // Ahora los especiales
  {
    nome: "Microlote",
    descricao: "Café 100% Arábica Especial con 86 puntos SCA. Cuerpo medio, notas de cacao, melaza y finalización suavemente cítrica.",
    imagem: "/microlote-png.png",
    notas: { docura: 3, acidez: 4, corpo: 4, amargor: 3 },
    opcoes: [
      { tipo: "Molido", peso: "250g", preco: "USD$4.57" },
      { tipo: "En Granos", peso: "250g", preco: "USD$7.60" },
    ],
  },
  {
    nome: "Café Soluble Marca Blanca",
    descricao: "Café solúvel spray dried blend arabica e robusta.",
    imagem: "/cafe-soluvel.jpg",
    opcoes: [
      { tipo: "Standup Pouch", peso: "170g", preco: "USD$5.82" },
      { tipo: "Standup Pouch", peso: "170g", preco: "USD$13.69" },
      { tipo: "Stick 1,8gr x 180un", preco: "USD$13.41" },
    ],
  },
  {
    nome: "Néctar de Minas Gourmet",
    descricao: "Café 100% Arábica Gourmet - 75 puntos SCA. Tostado oscuro intensidad 8 y molienda media-fina, ideal para filtro. Con cuerpo y notas caramelizadas y achocolatadas.",
    imagem: "/nectar-de-minas.png",
    notas: { docura: 2, acidez: 3, corpo: 5, amargor: 5 },
    opcoes: [
      { tipo: "Molido", peso: "500g", preco: "USD$8.07" },
      { tipo: "En Granos", peso: "1kg", preco: "USD$15.57" },
    ],
  },
  {
    nome: "Néctar de Minas Blend Arabica",
    descricao: "Tostado oscuro, intensidad 8. Blend arábica y conilon, con cuerpo envolvente y notas de madera y almendras.",
    imagem: "/nectar-de-minas.png",
    notas: { docura: 2, acidez: 2, corpo: 5, amargor: 4 },
    opcoes: [
      { tipo: "Molido", peso: "500g", preco: "USD$5.97" },
      { tipo: "En Granos", peso: "1kg", preco: "USD$13.57" },
    ],
  },
  {
    nome: "Néctar de Minas Blend Robusta",
    descricao: "Tostado oscuro, intensidad 9. Blend con predominancia robusta, cuerpo intenso y notas de cacao amargo y frutos secos.",
    imagem: "/nectar-de-minas.png",
    notas: { docura: 1, acidez: 2, corpo: 5, amargor: 5 },
    opcoes: [
      { tipo: "Molido", peso: "500g", preco: "USD$5.47" },
      { tipo: "En Granos", peso: "1kg", preco: "USD$12.37" },
    ],
  },
];

const produtos = [
  { secao: "Paquetes", produtos: pacotes },
  // DISPLAYS
  {
    secao: "Displays",
    produtos: [
      {
        nome: "Drip Coffee Canastra Suave",
        descricao: "Café 100% Arábica - Tipo Especial +80 SCA en sobres individuales. Tostado medio intensidad 7 y molienda media-fina. Con cuerpo y notas achocolatadas y finalización cítrica.",
        imagem: "/drip-coffee.png",
        notas: { docura: 3, acidez: 3, corpo: 4, amargor: 3 },
        opcoes: [
          { tipo: "Display (10 unid. de sobres)", preco: "USD$6.70" },
        ],
      },
      {
        nome: "Cápsula Canastra Clásico",
        descricao: "Café 100% Arábica - Tipo Especial +80 SCA en cápsulas y compatible con sistema Nespresso. Tostado oscuro intensidad 8 y molienda media-fina. Con cuerpo y notas caramelizadas y achocolatadas.",
        imagem: "/capsula-classico-canastra.png",
        notas: { docura: 3, acidez: 3, corpo: 4, amargor: 4 },
        opcoes: [
          { tipo: "Display (10 unid. de cápsulas)", preco: "USD$5.34" },
        ],
      },
      {
        nome: "Cápsula Canastra Canela",
        descricao: "Café 100% Arábica - Tipo Especial +80 SCA en cápsulas y compatible con sistema Nespresso. Tostado oscuro intensidad 7. Con cuerpo y notas caramelizadas y adicionado con canela natural.",
        imagem: "/capsula-canela-canastra.png",
        notas: { docura: 3, acidez: 3, corpo: 4, amargor: 3 },
        opcoes: [
          { tipo: "Display (10 unid. de cápsulas)", preco: "USD$5.34" },
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
  if (/granel|graneis/i.test(nome)) return "text-gray-700"; // Prata/Cinza escuro
  return "text-gray-900";
}

// Função para gradiente do card conforme família
function gradienteCardProduto(nome: string) {
  // Clássico: marrom queimado
  if (/cl[áa]ssico|n[ée]ctar de minas/i.test(nome)) return "bg-gradient-to-br from-amber-900/20 via-white to-amber-900/5";
  // Suave: marrom claro
  if (/suave/i.test(nome)) return "bg-gradient-to-br from-yellow-600/20 via-white to-yellow-600/5";
  // Canela: vermelho vivo
  if (/canela/i.test(nome)) return "bg-gradient-to-br from-red-500/20 via-white to-red-500/5";
  // Granel: prata
  if (/granel|graneis/i.test(nome)) return "bg-gradient-to-br from-gray-300/30 via-white to-gray-200/10";
  return "bg-gradient-to-br from-amber-50 via-white to-amber-100";
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
          return (
            <motion.div
              key={prod.nome}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: 'easeOut' }}
              className={`flex flex-col sm:flex-row items-start gap-4 sm:gap-6 rounded-3xl shadow-2xl p-3 md:p-8 border transition-all min-h-[120px] group w-full max-w-full
                ${isMicrolote ? 'bg-gradient-to-br from-[#fffbe6] via-[#fff7cc] to-[#ffe066] border-yellow-400 shadow-[0_0_24px_2px_rgba(255,215,0,0.12)] ring-2 ring-yellow-300/40' : 'border-gray-100'}
                ${gradienteCardProduto(prod.nome)}
              `}
              style={isMicrolote ? {boxShadow: '0 0 32px 0 rgba(255, 215, 0, 0.18), 0 2px 8px 0 rgba(0,0,0,0.04)'} : {}}
            >
              {/* Imagem 1:1 */}
              <div className="w-28 h-28 md:w-36 md:h-36 rounded-2xl flex items-center justify-center overflow-hidden mx-auto sm:mx-0 mb-4 sm:mb-0 flex-shrink-0">
                {prod.imagem ? (
                  <Image src={prod.imagem} alt={prod.nome} width={144} height={144} className="object-cover w-full h-full rounded-2xl" />
                ) : (
                  <span className="text-xs text-gray-400">Imagem<br/>1:1</span>
                )}
              </div>
              {/* Info */}
              <div className="flex-1 min-w-0 text-center sm:text-left w-full max-w-full">
                <div className="flex items-center gap-2 mb-2 w-full max-w-full relative">
                  <span className={`font-bold text-2xl md:text-3xl ${corTituloProduto(prod.nome)} break-words w-full max-w-full`}>{prod.nome}</span>
                </div>
                <p className="text-base md:text-lg text-gray-700 mb-3 leading-tight break-words w-full max-w-full">{prod.descricao}</p>
                {/* Notas */}
                {prod.notas && (
                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm mb-3 w-full max-w-full justify-center sm:justify-start">
                    <span>Dulzura <NotaEstrela n={prod.notas.docura} /></span>
                    <span>Acidez <NotaEstrela n={prod.notas.acidez} /></span>
                    <span>Cuerpo <NotaEstrela n={prod.notas.corpo} /></span>
                    <span className="w-full flex flex-col items-center sm:flex-row sm:items-center justify-center sm:justify-start">
                      <span>Amargor</span>
                      <span className="sm:ml-1"><NotaEstrela n={prod.notas.amargor} /></span>
                    </span>
                  </div>
                )}
                {/* Preços */}
                <div className="flex flex-col gap-2 mt-2 w-full max-w-full">
                  {prod.opcoes.map((op: any, i: number) => (
                    <div key={i} className="flex items-center justify-between bg-white rounded-xl px-2 md:px-4 py-2 shadow-sm border border-gray-100 w-full max-w-full">
                      <span className="text-gray-700 break-words w-full max-w-full text-sm md:text-base text-left">
                        {`${op.tipo ? op.tipo : ''}${op.tipo && op.peso ? ' ' : ''}${op.peso ? op.peso : ''}`.trim()}
                      </span>
                      <span className="text-amber-600 font-bold text-base md:text-lg text-right" style={{letterSpacing: 1}}>{op.preco}</span>
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

export default function Chile() {
  return (
    <main className="w-full max-w-xl mx-auto px-1.5 sm:px-2 py-6 md:py-12 font-sans overflow-x-hidden">
      {/* Hero Section */}
      <section className="flex flex-col items-center mb-8 font-sans w-full">
        <div className="mb-4 w-20 h-20 md:w-[110px] md:h-[110px] flex items-center justify-center">
          <Image src="/logo-canastra-preta.png" alt="Logo Café Canastra" width={110} height={110} className="object-contain w-full h-full" />
        </div>
        <h1 className="text-xl md:text-3xl font-bold text-gray-900 text-center mb-2 leading-tight font-sans break-words w-full">Directo de la Sierra de Canastra. <span className="block text-amber-600 font-bold">Frescura en la taza, sabor que conquista.</span></h1>
        <p className="text-center text-sm md:text-lg text-gray-600 mb-2 font-sans break-words w-full">Café especial, seleccionado y tostado bajo demanda para usted.</p>
      </section>

      {/* Sección de Precios CIF Santiago */}
      <section className="mb-8 font-sans w-full">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-4 md:p-6 border border-blue-200 shadow-lg">
          <h2 className="text-lg md:text-xl font-bold text-blue-900 mb-3 text-center font-sans break-words w-full">Precio CIF Santiago - Chile</h2>
          <p className="text-sm md:text-base text-blue-800 text-center leading-relaxed font-sans break-words w-full">
            Incluye toda la logística, documentos y tasas en Brasil, el cliente deberá únicamente hacer el desaduanaje en Chile. No hay impuesto de importación ya que los países son signatarios de la ALADI.
          </p>
        </div>
      </section>

      {/* Información de Descuentos */}
      

      {/* Secciones únicas */}
      <SecaoProdutos secao="Paquetes" produtos={produtos[0].produtos} />
      <SecaoProdutos secao="Displays" produtos={produtos[1].produtos} />
      
      {/* Información de Pedido Mínimo */}
      <section className="mb-8 font-sans w-full">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-4 md:p-6 border border-blue-200 shadow-lg">
          <h2 className="text-lg md:text-xl font-bold text-blue-900 mb-3 text-center font-sans break-words w-full">Pedido Mínimo</h2>
          
          <div className="mb-6">
            <h3 className="text-base md:text-lg font-semibold text-blue-900 mb-3 text-center font-sans break-words w-full">Para molidos y granos:</h3>
            <div className="bg-white rounded-xl px-4 py-3 shadow-sm font-sans w-full text-center">
              <p className="text-sm md:text-base text-blue-800 font-semibold break-words w-full">
                • <strong>Cantidad:</strong> 2 pallets<br/>
                • <strong>Dimensiones:</strong> 1,00m x 1,20m x 1,50m<br/>
                • <strong>Peso neto:</strong> 360 kg por pallet (total de 720kg neto)
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-base md:text-lg font-semibold text-blue-900 mb-3 text-center font-sans break-words w-full">Para solubles:</h3>
            <div className="bg-white rounded-xl px-4 py-3 shadow-sm font-sans w-full text-center">
              <p className="text-sm md:text-base text-blue-800 font-semibold break-words w-full">
                Es necesario desarrollar su propio envase y dejarlo almacenado con nosotros.<br/>
                • <strong>Inversión inicial:</strong> Aproximadamente USD 3.000,00<br/>
                • <strong>Pedido mínimo:</strong> 2.000 kg (una vez realizada la inversión inicial)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="bg-gray-50 rounded-2xl p-2.5 md:p-4 mb-6 md:mb-8 font-sans w-full">
        <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4 text-center font-sans break-words w-full">¿Por qué Café Canastra?</h2>
        <div className="flex flex-col gap-2 md:gap-3 w-full">
          <div className="flex items-center gap-2 md:gap-3 bg-white rounded-xl px-2.5 py-2 md:px-4 md:py-3 shadow-sm font-sans w-full">
            <FaCheckCircle className="text-green-500 text-lg md:text-xl" />
            <span className="text-sm md:text-base break-words">Café 100% arábica especial, de la Sierra de Canastra</span>
          </div>
          <div className="flex items-center gap-2 md:gap-3 bg-white rounded-xl px-2.5 py-2 md:px-4 md:py-3 shadow-sm font-sans w-full">
            <FaCheckCircle className="text-green-500 text-lg md:text-xl" />
            <span className="text-sm md:text-base break-words">Logística rápida y eficiente</span>
          </div>
          <div className="flex items-center gap-2 md:gap-3 bg-white rounded-xl px-2.5 py-2 md:px-4 md:py-3 shadow-sm font-sans w-full">
            <FaCheckCircle className="text-green-500 text-lg md:text-xl" />
            <span className="text-sm md:text-base break-words">Tostado bajo demanda, siempre fresco</span>
          </div>
          <div className="flex items-center gap-2 md:gap-3 bg-white rounded-xl px-2.5 py-2 md:px-4 md:py-3 shadow-sm font-sans w-full">
            <FaCheckCircle className="text-green-500 text-lg md:text-xl" />
            <span className="text-sm md:text-base break-words">Calidad y sabor que sorprenden</span>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="mb-8 md:mb-10 font-sans w-full">
        <div className="rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 p-4 md:p-6 flex flex-col items-center shadow-lg font-sans w-full">
          <p className="text-white text-base md:text-lg font-bold text-center mb-3 md:mb-4 font-sans break-words w-full">Café Canastra –<br />De la finca a su taza.<br />¡Experimente el sabor de la Sierra!</p>
          <a
            href="https://wa.me/+553493195252"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white text-amber-600 font-bold px-4 py-2 md:px-5 md:py-2 rounded-lg shadow hover:bg-amber-50 transition-all font-sans text-sm md:text-base w-full justify-center"
          >
            Hacer Pedido <FaArrowRight className="text-lg" />
          </a>
        </div>
      </section>
    </main>
  );
}