'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const capsulePrices = [
  { qtd: 1, discount: 0, price: 22.90 },
  { qtd: 2, discount: 5, price: 43.51 },
  { qtd: 3, discount: 12, price: 60.46 },
  { qtd: 4, discount: 14, price: 78.78 },
  { qtd: 5, discount: 16, price: 96.18 },
  { qtd: 6, discount: 18, price: 112.67 },
  { qtd: 7, discount: 20, price: 128.24 },
  { qtd: 8, discount: 22, price: 142.90 },
  { qtd: 9, discount: 24, price: 156.64 },
  { qtd: 10, discount: 26, price: 169.46 },
];

export default function CapsulePromotionCard() {
  return (
    <section className="w-full mb-10 px-0">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-amber-600 via-orange-500 to-red-600 p-1 shadow-2xl"
      >
        <div className="bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 rounded-[20px] p-4 md:p-6 overflow-hidden relative">

          {/* Header QUEIMA DE ESTOQUE */}
          <div className="absolute top-0 left-0 w-full bg-gradient-to-r from-amber-600 via-orange-500 to-red-600 text-white text-center py-2 z-10 shadow-md">
            <h2 className="text-xl md:text-3xl font-extrabold tracking-widest uppercase animate-pulse">
              🔥 Queima de Estoque — Cápsulas 🔥
            </h2>
          </div>

          <div className="mt-14 flex flex-col md:flex-row gap-6 items-center">

            {/* Images Section */}
            <div className="w-full md:w-1/3 flex flex-col items-center">
              <div className="flex gap-3 mb-4">
                <div className="relative w-28 h-28 md:w-32 md:h-32">
                  <Image
                    src="/capsula-classico-canastra.png"
                    alt="Cápsula Clássico"
                    fill
                    className="object-contain hover:scale-110 transition-transform duration-300 drop-shadow-lg"
                  />
                </div>
                <div className="relative w-28 h-28 md:w-32 md:h-32">
                  <Image
                    src="/capsula-canela-canastra.png"
                    alt="Cápsula Canela"
                    fill
                    className="object-contain hover:scale-110 transition-transform duration-300 drop-shadow-lg"
                  />
                </div>
              </div>
              <p className="text-xs text-gray-500 text-center max-w-[220px] mt-1 leading-tight">
                *Data de validade 25/07/26 (não faremos troca)
              </p>
              <div className="mt-4 text-center">
                <h3 className="text-lg font-bold text-white">Cápsulas Nespresso</h3>
                <p className="text-sm text-amber-300">Clássico e Canela</p>
                <p className="text-xs text-gray-400">(Por Display - 10 cápsulas)</p>
                <p className="text-xs text-amber-400/80 mt-1">Válido para todos os sabores</p>
              </div>
            </div>

            {/* Table Section */}
            <div className="w-full md:w-2/3">
              <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-3 border border-amber-500/30 shadow-inner">
                <h3 className="text-center font-bold text-amber-400 mb-3 text-lg border-b border-amber-500/30 pb-2">
                  Tabela de Preços Progressiva
                </h3>
                <div className="space-y-1.5">
                  {capsulePrices.map((item) => (
                    <div key={item.qtd} className={`flex justify-between items-center text-sm md:text-base px-3 py-1.5 rounded-lg transition-colors ${item.discount > 0 ? 'bg-gray-700/60 border border-amber-500/20' : 'bg-transparent'}`}>
                      <span className="font-semibold text-gray-300 w-24">
                        {item.qtd} {item.qtd === 1 ? 'display' : 'displays'}
                      </span>

                      {item.discount > 0 ? (
                        <span className="bg-amber-500/20 text-amber-400 text-xs font-bold px-2 py-0.5 rounded-full border border-amber-500/30">
                          {item.discount}% OFF
                        </span>
                      ) : (
                        <span className="w-16"></span>
                      )}

                      <span className="font-bold text-amber-300 text-lg">
                        R$ {item.price.toFixed(2).replace('.', ',')}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-6 text-center">
            <a
              href="https://wa.me/5537998668748?text=Ol%C3%A1%2C+quero+aproveitar+a+queima+de+estoque+das+C%C3%A1psulas%21"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transform transition hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-500/20"
            >
              Pedir Agora pelo WhatsApp
            </a>
          </div>

        </div>
      </motion.div>
    </section>
  );
}
