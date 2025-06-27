"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaCheckCircle, FaCoffee, FaLeaf, FaMugHot, FaSeedling, FaBoxOpen, FaCapsules, FaWhatsapp, FaEnvelope, FaArrowRight } from "react-icons/fa";

// Dados centralizados dos produtos e tipos de café
const coffeeCategories = [
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
  {
    key: "microlote",
    name: "Microlote",
    image: "/microlote-png.png",
    products: [
      { name: "250g (Moído ou Grãos)", price: "R$29,70" },
    ],
  },
  {
    key: "drip",
    name: "Drip Coffee",
    image: "/drip-coffee.jpg",
    products: [
      { name: "Display 10 unidades Suave", price: "R$24,70" },
    ],
  },
  {
    key: "capsulas",
    name: "Cápsulas Nespresso",
    image: "/capsula.png",
    products: [
      { name: "Clássico 10un", price: "R$17,70" },
      { name: "Canela 10un", price: "R$17,70" },
    ],
  },
];

const coffeeTypes = [
  { icon: <FaCoffee />, name: "Clássico", desc: "Intenso, notas achocolatadas" },
  { icon: <FaLeaf />, name: "Suave", desc: "Médio, melaço e cítrico" },
  { icon: <FaMugHot />, name: "Canela", desc: "Médio, toque de canela" },
];

const benefits = [
  { icon: <FaCheckCircle className="text-emerald-500" />, text: "Café 100% arábica, da Serra da Canastra" },
  { icon: <FaCheckCircle className="text-emerald-500" />, text: "Torra sob demanda, sempre fresco" },
  { icon: <FaCheckCircle className="text-emerald-500" />, text: "Qualidade e sabor que surpreendem" },
];

// --- COMPONENTE PRINCIPAL DA LANDING PAGE ---
export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col font-sans">
      {/* HEADER: Logo centralizada */}
      <motion.header 
        className="flex flex-col items-center pt-16 pb-12 px-6"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Image
          src="/logo-canastra-preta.png"
          alt="Logo Café Canastra"
          width={120}
          height={120}
          className="mb-8 object-contain"
          priority
        />
      </motion.header>

      {/* HEADLINE / SLOGAN */}
      <motion.section 
        className="text-center px-6 mb-20"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h1 className="text-4xl sm:text-6xl font-bold mb-6 tracking-tight text-gray-900 leading-tight">
          Direto da Serra da Canastra. <span className="text-amber-600">Frescor na xícara, sabor que conquista.</span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">Café especial, selecionado e torrado sob demanda para você.</p>
      </motion.section>

      {/* TABELA DE PREÇOS */}
      <section className="mb-24 px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 text-gray-900">
          Tabela de Preços
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {coffeeCategories.map((cat, index) => (
            <div 
              key={cat.key} 
              className="bg-white rounded-3xl shadow-lg p-8 flex flex-col items-center hover:shadow-xl transition-shadow duration-300"
            >
              {/* Imagem da categoria */}
              <div className="w-full mb-6 flex items-center justify-center">
                <Image 
                  src={cat.image} 
                  alt={cat.name} 
                  width={300} 
                  height={300} 
                  className="object-contain w-full h-56" 
                />
              </div>
              <h3 className="font-bold text-2xl mb-6 text-amber-600">{cat.name}</h3>
              <div className="w-full space-y-3">
                {cat.products.map((prod, i) => (
                  <div key={prod.name} className={`flex justify-between items-center py-4 px-6 rounded-2xl ${i % 2 === 0 ? "bg-gray-50" : "bg-white border border-gray-100"}`}>
                    <span className="font-semibold text-gray-800 text-lg">{prod.name}</span>
                    <span className="font-bold text-amber-600 text-xl">{prod.price}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TIPOS DE CAFÉ */}
      <motion.section 
        className="mb-24 px-6"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h2 
          className="text-3xl sm:text-4xl font-bold text-center mb-16 text-gray-900"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Tipos de Café
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {coffeeTypes.map((type, index) => (
            <motion.div 
              key={type.name} 
              className="flex flex-col items-center bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <span className="text-4xl mb-4 text-amber-600">{type.icon}</span>
              <span className="font-bold text-gray-900 text-xl mb-2">{type.name}</span>
              <span className="text-gray-600 text-center leading-relaxed">{type.desc}</span>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* BENEFÍCIOS */}
      <motion.section 
        className="mb-24 px-6"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2 
          className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Por que Café Canastra?
        </motion.h2>
        <div className="flex flex-col gap-6 items-center max-w-2xl mx-auto">
          {benefits.map((b, i) => (
            <motion.div 
              key={i} 
              className="flex items-center gap-4 text-xl text-gray-800 bg-white rounded-2xl px-8 py-6 shadow-sm w-full"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <span className="text-2xl">{b.icon}</span>
              <span className="font-medium">{b.text}</span>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* CHAMADA FINAL */}
      <motion.section 
        className="mb-24 px-6"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div 
          className="bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-3xl py-12 px-8 text-center max-w-4xl mx-auto shadow-xl"
          whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
        >
          <h3 className="text-3xl sm:text-4xl font-bold mb-6">Café Canastra – Da fazenda para a sua xícara. Experimente o sabor da Serra!</h3>
          <motion.a 
            href="https://wa.me/553493195252"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-amber-600 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-50 transition-colors duration-300 flex items-center gap-3 mx-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Fazer Pedido
            <FaArrowRight />
          </motion.a>
        </motion.div>
      </motion.section>

      {/* FOOTER MODERNO */}
      <motion.footer 
        className="bg-gray-900 text-white py-16 px-6 mt-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="flex flex-col items-center gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Image
              src="/logo-canastra-branca.png"
              alt="Logo Café Canastra"
              width={80}
              height={80}
              className="mb-4 object-contain"
            />
          </motion.div>
          <motion.div 
            className="text-2xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Café Canastra - Desde 1985
          </motion.div>
          <motion.div 
            className="text-base text-gray-300 text-center space-y-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div>🏢 Boaventura Cafés Especiais Ltda - CNPJ 24.252.228/0001-37</div>
            <div>📍 Fazenda Divinéia: Rodovia LMG827, km15 - Pratinha-Medeiros - Minas Gerais</div>
            <div>📍 Torrefação: Rua Nivaldo Guerreiro Nunes, 701 - Distrito Industrial - Uberlândia/MG</div>
            <div className="mt-4">📞 Telefone: (34) 3226-2600</div>
            <div>📧 Email: comercial@cafecanastra.com</div>
          </motion.div>
          <motion.div 
            className="flex gap-6 mt-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.a 
              href="https://wa.me/553432262600" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-emerald-500 text-white rounded-full p-4 flex items-center justify-center hover:bg-emerald-600 transition-colors duration-300" 
              aria-label="WhatsApp"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaWhatsapp size={24} />
            </motion.a>
            <motion.a 
              href="mailto:comercial@cafecanastra.com" 
              className="bg-gray-700 text-white rounded-full p-4 flex items-center justify-center hover:bg-gray-600 transition-colors duration-300" 
              aria-label="E-mail"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaEnvelope size={24} />
            </motion.a>
          </motion.div>
          <motion.div 
            className="text-sm text-gray-400 mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            © 2025 Café Canastra. Todos os direitos reservados.
          </motion.div>
          {/* Link discreto para o gerenciador */}
          <motion.div 
            className="text-xs text-gray-500 mt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            viewport={{ once: true }}
          >
            <a 
              href="/tabelamanager" 
              className="hover:text-gray-300 transition-colors"
              title="Gerenciador de Preços"
            >
              Área Administrativa
            </a>
          </motion.div>
        </div>
      </motion.footer>
    </div>
  );
}
