import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function CoffeeSite() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const parallax = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const menu = [
    { id: 1, name: 'Espresso', desc: 'Intense, rich, pure.', price: '$2.50' },
    { id: 2, name: 'Cappuccino', desc: 'Frothy milk + espresso.', price: '$3.50' },
    { id: 3, name: 'Latte', desc: 'Creamy, smooth.', price: '$3.75' },
    { id: 4, name: 'Cold Brew', desc: 'Slow steeped, refreshing.', price: '$4.00' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-amber-100 to-amber-200 text-gray-900 antialiased" ref={ref}>
      {/* NAV */}
      <nav className="fixed w-full z-40 top-4 left-0 flex justify-between px-6 md:px-12 items-center">
        <div className="backdrop-blur-sm bg-white/30 px-4 py-2 rounded-2xl flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-amber-700 flex items-center justify-center text-white font-bold">C</div>
          <div className="font-semibold">CaféCoda</div>
        </div>
        <div className="space-x-6 hidden md:flex items-center">
          <a className="hover:underline cursor-pointer">Menu</a>
          <a className="hover:underline cursor-pointer">About</a>
          <a className="hover:underline cursor-pointer">Contact</a>
          <button className="px-4 py-2 rounded-full bg-amber-700 text-white shadow-lg hover:scale-105 transform transition">Order</button>
        </div>
      </nav>

      {/* HERO */}
      <header className="relative overflow-hidden">
        <motion.div
          style={{ y: parallax }}
          className="absolute inset-0 -z-10 bg-[url('https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=5fcd9b1e2d6f4be6a2b5b3d4b3d5c48b' <https://apc01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1509042239860-f550ce710b93%3Fq%3D80%26w%3D1400%26auto%3Dformat%26fit%3Dcrop%26ixlib%3Drb-4.0.3%26s%3D5fcd9b1e2d6f4be6a2b5b3d4b3d5c48b%27&data=05%7C02%7CJayakeerthan.R%40cognizant.com%7C71a78d09b40c41b611e308de1bb6fdf2%7Cde08c40719b9427d9fe8edf254300ca7%7C0%7C0%7C638978669936872289%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&sdata=sVw4bgx2gZuHJAxoK1FXLTTs4i5GP%2FhEsNW9%2FA8Qz74%3D&reserved=0> )] bg-cover bg-center opacity-40"
        />

        <div className="max-w-6xl mx-auto pt-32 pb-20 px-6 md:px-12 flex flex-col md:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Wake up to <span className="text-amber-700">beautiful coffee</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-700 max-w-lg">Artisan roasts, crafted with care. Explore our menu and experience coffee with motion.</p>

            <div className="mt-8 flex gap-4">
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }} className="px-5 py-3 rounded-full bg-amber-700 text-white font-semibold shadow-lg">Order Now</motion.button>
              <motion.button whileHover={{ scale: 1.03 }} className="px-5 py-3 rounded-full border border-amber-700 text-amber-700 font-semibold">Learn More</motion.button>
            </div>

            <div className="mt-8 flex items-center gap-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-amber-700 flex items-center justify-center text-white">★</div>
                <div>
                  <div className="text-sm font-semibold">4.9 — 3k+ reviews</div>
                  <div className="text-xs text-gray-500">Loved by coffee fans</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 flex justify-center"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              {/* Coffee Cup Card */}
              <motion.div whileHover={{ rotate: -3, y: -6 }} className="absolute inset-0 rounded-3xl shadow-2xl bg-gradient-to-b from-white to-amber-50 border border-white/40 p-6 flex flex-col items-center justify-center">
                <svg viewBox="0 0 200 200" className="w-40 h-40">
                  <defs>
                    <linearGradient id="g1" x1="0" x2="1">
                      <stop offset="0" stopColor="#f59e0b" />
                      <stop offset="1" stopColor="#b45309" />
                    </linearGradient>
                  </defs>
                  <g>
                    <ellipse cx="100" cy="120" rx="60" ry="30" fill="url(#g1)" />
                    <rect x="50" y="40" width="100" height="70" rx="35" fill="#fff8f1" stroke="#ffd8a8" />
                  </g>
                </svg>

                {/* Steam animation */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ repeat: Infinity, duration: 3, repeatDelay: 0.5 }}
                  className="absolute top-12"
                >
                  <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg <https://apc01.safelinks.protection.outlook.com/?url=http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg&data=05%7C02%7CJayakeerthan.R%40cognizant.com%7C71a78d09b40c41b611e308de1bb6fdf2%7Cde08c40719b9427d9fe8edf254300ca7%7C0%7C0%7C638978669936887268%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&sdata=gh70yZaCkMAKj3QIv3rCh3b9QwUU5RleJXuDwwcT5JU%3D&reserved=0> ">
                    <path d="M6 3c0 2.5 2 3.5 2 6s-2 3.5-2 6" stroke="#c08400" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.9" />
                    <path d="M10 3c0 2.5 2 3.5 2 6s-2 3.5-2 6" stroke="#f97316" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.7" />
                  </svg>
                </motion.div>

                <div className="mt-4 text-amber-900 font-semibold">House Blend</div>
                <div className="text-sm text-gray-600">Medium roast • Balanced</div>
              </motion.div>

              {/* Decorative beans */}
              <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }} className="absolute -bottom-6 -right-6 w-20 h-20 rounded-full bg-amber-600/20 blur-xl" />
            </div>
          </motion.div>
        </div>
      </header>

      {/* ABOUT / PROCESS */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 py-20">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl font-bold">Our Process</motion.h2>
        <div className="mt-8 grid md:grid-cols-3 gap-8">
          {['Select Beans', 'Roast with Care', 'Brew to Order'].map((t, i) => (
            <motion.div key={t} whileHover={{ scale: 1.03 }} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.12 }} className="p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/40 shadow">
              <div className="w-14 h-14 rounded-lg bg-amber-700/10 flex items-center justify-center font-bold text-amber-700">{i + 1}</div>
              <h3 className="mt-4 font-semibold text-lg">{t}</h3>
              <p className="mt-2 text-sm text-gray-600">{i === 0 ? 'We start with ethically-sourced beans.' : i === 1 ? 'Roasted to bring out the aroma.' : 'Brewed fresh when you order.'}</p>
            </motion.div>
          ))}
        </div>
      </section>
      {/* MENU */}
      <section className="bg-amber-50 py-20">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-3xl font-bold">Menu</motion.h2>

          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {menu.map((item, idx) => (
              <motion.div key={item.id <https://apc01.safelinks.protection.outlook.com/?url=http%3A%2F%2Fitem.id%2F&data=05%7C02%7CJayakeerthan.R%40cognizant.com%7C71a78d09b40c41b611e308de1bb6fdf2%7Cde08c40719b9427d9fe8edf254300ca7%7C0%7C0%7C638978669936898073%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&sdata=njrXXIvYL1Fvw4iDSEypF3YfUFDs7abuaYoXM3BGwiU%3D&reserved=0> } whileHover={{ scale: 1.03 }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.08 }} className="p-6 bg-white rounded-2xl shadow hover:shadow-xl border">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-lg font-semibold">{item.name <https://apc01.safelinks.protection.outlook.com/?url=http%3A%2F%2Fitem.name%2F&data=05%7C02%7CJayakeerthan.R%40cognizant.com%7C71a78d09b40c41b611e308de1bb6fdf2%7Cde08c40719b9427d9fe8edf254300ca7%7C0%7C0%7C638978669936910258%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&sdata=qvK%2BdILd%2FykUrdGMGSAv6nH0HsAFkhHca%2BqNPKjODaM%3D&reserved=0> }</div>
                    <div className="text-sm text-gray-500">{item.desc}</div>
                  </div>
                  <div className="text-amber-700 font-bold">{item.price}</div>
                </div>

                <div className="mt-4 flex gap-3">
                  <motion.button whileHover={{ scale: 1.06 }} className="px-3 py-2 rounded-full border border-amber-700 text-amber-700 text-sm">Add</motion.button>
                  <motion.button whileHover={{ scale: 1.06 }} className="px-3 py-2 rounded-full bg-amber-700 text-white text-sm">Buy</motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 py-20">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-3xl font-bold">What people say</motion.h2>

        <div className="mt-8 grid sm:grid-cols-2 gap-6">
          {[
            { name: 'Asha', quote: 'Best coffee I had in years. Smooth and aromatic.' },
            { name: 'Rahul', quote: 'Perfect for mornings. Fast delivery.' },
          ].map((t, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.12 }} className="p-6 bg-white rounded-2xl shadow">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-amber-700/20 flex items-center justify-center">{t.name <https://apc01.safelinks.protection.outlook.com/?url=http%3A%2F%2Ft.name%2F&data=05%7C02%7CJayakeerthan.R%40cognizant.com%7C71a78d09b40c41b611e308de1bb6fdf2%7Cde08c40719b9427d9fe8edf254300ca7%7C0%7C0%7C638978669936920417%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&sdata=WcHNQKYRMEq8erXWfgddEwF%2F99QNfGLFENaqzqLs5q8%3D&reserved=0> [0]}</div>
                <div>
                  <div className="font-semibold">{t.name <https://apc01.safelinks.protection.outlook.com/?url=http%3A%2F%2Ft.name%2F&data=05%7C02%7CJayakeerthan.R%40cognizant.com%7C71a78d09b40c41b611e308de1bb6fdf2%7Cde08c40719b9427d9fe8edf254300ca7%7C0%7C0%7C638978669936930486%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&sdata=QAQi0CFmPhqWyY8%2FinQNCk0FyApAiKqTptYemw6SMPo%3D&reserved=0> }</div>
                  <div className="text-sm text-gray-500">Customer</div>
                </div>
              </div>
              <p className="mt-4 text-gray-700">“{t.quote}”</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gradient-to-t from-amber-100 to-transparent py-12">
        <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="font-bold text-lg">CaféCoda</div>
            <div className="text-sm text-gray-600">Made with love — &lt;3</div>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-sm text-gray-600">© {new Date().getFullYear()} CaféCoda</div>
            <div className="h-8 w-px bg-white/30" />
            <div className="text-sm">Contact</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
