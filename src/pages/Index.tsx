import { Link } from "react-router-dom";
import Logo from "../components/Logo";

export default function Index() {
  return (
    <div className="min-h-screen bg-[#F5F0E8] flex flex-col items-center p-6 font-sans">
      {/* Header avec ton logo personnalisé */}
      <header className="py-10 flex flex-col items-center space-y-3">
        <Logo className="w-24 h-24" />
        <h1 className="text-3xl font-bold text-[#2D5016] tracking-tight">AgroTech</h1>
      </header>

      <main className="w-full max-w-5xl">
        <div className="bg-[#E2E8D4] rounded-[40px] p-8 md:p-16 relative overflow-hidden shadow-sm border border-white/20">
          
          {/* Bouton de redirection vers la page de login */}
          <Link 
            to="/login" 
            className="absolute top-8 left-8 bg-[#2D5016] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-[#1f380f] transition shadow-md z-20"
          >
            Connexion
          </Link>
          
          <div className="flex flex-col md:flex-row items-center gap-12 mt-10">
            <div className="flex-1 space-y-6 text-center md:text-left">
              <h2 className="text-5xl md:text-6xl font-extrabold leading-tight text-[#2D5016]">
                Ensemble, <span className="text-[#D97706]">faisons pousser</span> le futur 🌱
              </h2>
              <p className="text-[#4A5D44] text-lg max-w-md mx-auto md:mx-0 leading-relaxed">
                AgroTech réinvente l'agriculture urbaine communautaire avec des solutions hydroponiques intelligentes et durables.
              </p>
              <button className="bg-[#86C494] text-[#2D5016] px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all shadow-lg border border-white/20">
                Découvrir nos solutions
              </button>
            </div>

            {/* Image de la serre */}
            <div className="flex-1 w-full h-[350px] md:h-[450px] rounded-[35px] overflow-hidden shadow-2xl border-4 border-white/50">
              <img 
                src="https://images.unsplash.com/photo-1585059895311-85942478964d?auto=format&fit=crop&q=80" 
                className="w-full h-full object-cover" 
                alt="Serre AgroTech" 
              />
            </div>
          </div>

          {/* Petit rappel du logo en filigrane ou déco */}
          <div className="absolute bottom-[-20px] right-[-20px] opacity-10">
             <Logo className="w-64 h-64 rotate-12" />
          </div>
        </div>
      </main>

      <footer className="mt-auto py-8 text-[#4A5D44]/60 text-sm">
        © 2026 AgroTech — Cultivons l'avenir ensemble.
      </footer>
    </div>
  );
}
