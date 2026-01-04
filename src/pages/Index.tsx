import { Link } from "react-router-dom";
import Logo from "../components/Logo";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#F0F2EA] flex flex-col items-center font-sans">
      {/* Header avec Logo Central */}
      <header className="py-10 flex flex-col items-center space-y-2">
        <Logo className="w-20 h-20" />
        <h1 className="text-3xl font-bold text-[#2D4A22] tracking-tight">AgroTech</h1>
      </header>

      {/* Main Container (la grande carte beige) */}
      <main className="w-full max-w-6xl px-6 mb-12">
        <div className="bg-[#E2E8D4] rounded-[45px] p-8 md:p-16 relative overflow-hidden shadow-sm border border-white/20">
          
          {/* Bouton Connexion en haut à gauche */}
          <Link 
            to="/login" 
            className="absolute top-8 left-10 bg-[#2D4A22] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-[#1f3317] transition-colors"
          >
            Connexion
          </Link>

          {/* Logo discret en haut à droite */}
          <div className="absolute top-8 right-10 flex flex-col items-center scale-75 opacity-80">
            <Logo className="w-10 h-10" />
            <span className="text-[10px] font-bold text-[#2D4A22]">AgroTech</span>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-12 mt-8">
            {/* Texte à gauche */}
            <div className="flex-1 space-y-8 text-center md:text-left">
              <h2 className="text-5xl md:text-6xl font-bold leading-[1.1] text-[#2D4A22]">
                Ensemble, <span className="text-[#D97706]">faisons <br />pousser</span> le monde de <br />demain 🌱
              </h2>
              <p className="text-[#4A5D44] text-lg leading-relaxed max-w-md mx-auto md:mx-0">
                AgroTech réinvente l'agriculture urbaine grâce à des serres hydroponiques innovantes installées au cœur de la ville. Rejoignez un mouvement qui fait germer un avenir plus vert, plus sain et plus durable.
              </p>
              <button className="bg-[#86C494] text-[#2D4A22] px-10 py-4 rounded-full font-bold text-lg hover:bg-[#75b383] transition-all transform hover:scale-105 shadow-md">
                Découvrir nos solutions
              </button>
            </div>

            {/* Image à droite (la serre) */}
            <div className="flex-1 w-full max-w-md md:max-w-none h-[400px] rounded-[35px] overflow-hidden shadow-2xl border-4 border-white/30">
              <img 
                src="https://images.unsplash.com/photo-1558444479-c848517d736e?auto=format&fit=crop&q=80" 
                alt="Intérieur de serre hydroponique" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Copyright discret en bas au centre */}
          <div className="mt-12 text-center text-[#4A5D44]/60 text-xs">
            © 2026 AgroTech — Cultivons l'avenir ensemble.
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
