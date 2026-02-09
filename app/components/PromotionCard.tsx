'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const prices = [
  { qtd: 1, discount: 0, price: 24.90 },
  { qtd: 2, discount: 5, price: 47.31 },
  { qtd: 3, discount: 12, price: 65.74 },
  { qtd: 4, discount: 14, price: 85.66 },
  { qtd: 5, discount: 16, price: 104.58 },
  { qtd: 6, discount: 18, price: 122.51 },
  { qtd: 7, discount: 20, price: 139.44 },
  { qtd: 8, discount: 22, price: 155.38 },
  { qtd: 9, discount: 24, price: 170.32 },
  { qtd: 10, discount: 26, price: 184.26 },
];

export default function PromotionCard() {
  return (
    <section className="w-full mb-10 px-0">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-red-600 via-red-500 to-orange-500 p-1 shadow-2xl"
      >
        <div className="bg-white rounded-[20px] p-4 md:p-6 overflow-hidden relative">

          {/* Header QUEIMA DE ESTOQUE */}
          <div className="absolute top-0 left-0 w-full bg-red-600 text-white text-center py-2 z-10 shadow-md">
            <h2 className="text-xl md:text-3xl font-extrabold tracking-widest uppercase animate-pulse">
              🔥 Queima de Estoque 🔥
            </h2>
          </div>

          <div className="mt-12 flex flex-col md:flex-row gap-6 items-center">

            {/* Image Section */}
            <div className="w-full md:w-1/3 flex flex-col items-center">
              <div className="relative w-48 h-48 md:w-64 md:h-64 mb-4">
                <Image
                  src="/drip-coffee.png"
                  alt="Drip Coffee Canastra"
                  fill
                  className="object-contain hover:scale-105 transition-transform duration-300"
                />

              </div>
              <p className="text-xs text-gray-400 text-center max-w-[200px] mt-2 leading-tight">
                *Data de validade 25/07/26 (não faremos troca)
              </p>
              <div className="mt-4 text-center">
                <h3 className="text-lg font-bold text-gray-800">Drip Coffee</h3>
                <p className="text-sm text-gray-600">Canastra - Clássico, Suave e Canela</p>
                <p className="text-xs text-gray-500">(Por Display - 10 sachês)</p>
              </div>
            </div>

            {/* Table Section */}
            <div className="w-full md:w-2/3">
              <div className="bg-red-50 rounded-xl p-3 border border-red-100 shadow-inner">
                <h3 className="text-center font-bold text-red-700 mb-3 text-lg border-b border-red-200 pb-2">
                  Tabela de Preços Progressiva
                </h3>
                <div className="space-y-1.5">
                  {prices.map((item) => (
                    <div key={item.qtd} className={`flex justify-between items-center text-sm md:text-base px-3 py-1.5 rounded-lg ${item.discount > 0 ? 'bg-white shadow-sm border border-red-100' : 'bg-transparent'}`}>
                      <span className="font-semibold text-gray-700 w-24">
                        {item.qtd} {item.qtd === 1 ? 'display' : 'displays'}
                      </span>

                      {item.discount > 0 ? (
                        <span className="bg-red-100 text-red-700 text-xs font-bold px-2 py-0.5 rounded-full">
                          {item.discount}% OFF
                        </span>
                      ) : (
                        <span className="w-16"></span>
                      )}

                      <span className="font-bold text-red-600 text-lg">
                        R$ {item.price.toFixed(2).replace('.', ',')}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button or additional info if needed */}
          <div className="mt-6 text-center">
            <a
              href="https://wa.me/5537998668748?text=Ol%C3%A1%2C+quero+aproveitar+a+queima+de+estoque+do+Drip+Coffee%21"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transform transition hover:-translate-y-1 hover:shadow-xl"
            >
              Pedir Agora pelo WhatsApp
            </a>
          </div>

        </div>
      </motion.div>
    </section>
  );
}
