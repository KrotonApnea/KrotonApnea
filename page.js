
export default function Home() {
  const eventi = [
    {
      titolo: "Apnea Experience Capo Colonna",
      data: "15 Giugno 2026",
      luogo: "Area Marina Protetta"
    },
    {
      titolo: "Corso Nuoto Pinnato",
      data: "22 Giugno 2026",
      luogo: "Piscina Olimpionica"
    },
    {
      titolo: "Pulizia Fondali Ionio",
      data: "5 Luglio 2026",
      luogo: "Porto di Crotone"
    }
  ];

  const corsi = [
    {
      nome: "Apnea Base",
      descrizione: "Tecniche di respirazione, sicurezza e immersione."
    },
    {
      nome: "Pescasub Sportiva",
      descrizione: "Preparazione tecnica e rispetto del mare."
    },
    {
      nome: "Nuoto Pinnato",
      descrizione: "Allenamento sportivo e agonistico."
    },
    {
      nome: "Apnea Agonistica",
      descrizione: "Preparazione avanzata e performance."
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950 text-white">
      <header className="sticky top-0 z-50 backdrop-blur bg-slate-950/70 border-b border-cyan-400/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img
              src="/stemma-kroton.png"
              alt="Kroton"
              className="w-16 h-16 object-contain"
            />
            <div>
              <h1 className="text-2xl font-black text-cyan-300">
                ASD KROTON APNEA
              </h1>
              <p className="text-sm text-slate-300">
                Tra Leggende e Storie di Mare
              </p>
            </div>
          </div>
        </div>
      </header>

      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600')] bg-cover bg-center opacity-30"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block border border-cyan-400/20 bg-cyan-400/10 rounded-full px-5 py-2 mb-8">
              Magna Grecia • Mare Ionio • Crotone
            </div>

            <h1 className="text-6xl font-black leading-tight mb-8">
              Respira
              <span className="block text-cyan-300">la Leggenda</span>
            </h1>

            <p className="text-xl text-slate-200 mb-10 max-w-2xl">
              ASD Kroton Apnea unisce apnea, nuoto pinnato, cultura del mare e
              tradizione della Magna Grecia.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-cyan-400 text-slate-950 px-8 py-4 rounded-2xl font-black">
                Diventa Socio
              </button>

              <button className="border border-white/20 bg-white/10 px-8 py-4 rounded-2xl">
                Eventi & Attività
              </button>
            </div>
          </div>

          <div className="flex justify-center">
            <img
              src="/kroton-logo.jpeg"
              alt="Logo Magna Grecia"
              className="rounded-full border-4 border-yellow-400/30 shadow-2xl max-w-lg w-full"
            />
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-5xl font-black text-cyan-300 mb-12 text-center">
          Area Corsi
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {corsi.map((corso) => (
            <div
              key={corso.nome}
              className="bg-white/10 rounded-3xl p-8 border border-white/10"
            >
              <div className="text-5xl mb-5">🐬</div>

              <h3 className="text-2xl font-bold text-cyan-200 mb-4">
                {corso.nome}
              </h3>

              <p className="text-slate-300">{corso.descrizione}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-black/20 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-black text-cyan-300 mb-12 text-center">
            Calendario Eventi
          </h2>

          <div className="grid lg:grid-cols-3 gap-8">
            {eventi.map((evento) => (
              <div
                key={evento.titolo}
                className="bg-white/10 rounded-3xl p-8 border border-white/10"
              >
                <div className="text-cyan-300 text-sm uppercase tracking-widest mb-3">
                  {evento.data}
                </div>

                <h3 className="text-2xl font-bold mb-4">
                  {evento.titolo}
                </h3>

                <p className="text-slate-300">📍 {evento.luogo}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-24">
        <div className="bg-white/10 border border-white/10 rounded-[40px] p-10">
          <h2 className="text-5xl font-black text-cyan-300 mb-10 text-center">
            Modulo Iscrizione Soci
          </h2>

          <form className="grid md:grid-cols-2 gap-6">
            <input type="text" placeholder="Nome" className="bg-slate-900 border border-white/10 rounded-2xl px-5 py-4" />
            <input type="text" placeholder="Cognome" className="bg-slate-900 border border-white/10 rounded-2xl px-5 py-4" />
            <input type="email" placeholder="Email" className="bg-slate-900 border border-white/10 rounded-2xl px-5 py-4" />
            <input type="tel" placeholder="Telefono" className="bg-slate-900 border border-white/10 rounded-2xl px-5 py-4" />

            <textarea
              rows="5"
              placeholder="Messaggio"
              className="md:col-span-2 bg-slate-900 border border-white/10 rounded-2xl px-5 py-4"
            ></textarea>

            <button
              type="submit"
              className="md:col-span-2 bg-cyan-400 text-slate-950 py-4 rounded-2xl font-black"
            >
              Invia Richiesta
            </button>
          </form>
        </div>
      </section>

      <section className="text-center py-20">
        <h2 className="text-5xl font-black text-cyan-300 mb-10">
          Seguici sui Social
        </h2>

        <div className="flex flex-wrap justify-center gap-6">
          {["Facebook", "Instagram", "YouTube", "TikTok"].map((social) => (
            <a
              key={social}
              href="#"
              className="bg-white/10 border border-white/10 px-8 py-4 rounded-2xl hover:bg-cyan-400 hover:text-slate-950 transition"
            >
              {social}
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
