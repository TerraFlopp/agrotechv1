import { Link } from "react-router-dom";
import Logo from "../components/Logo";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-[#F0F2EA] flex flex-col items-center">
      {/* Header / Logo Central */}
      <header className="py-12 flex flex-col items-center">
        <Logo className="w-24 h-24 mb-4" />
        <h1 className="text-4xl font-bold text-[#2D4A22] font-sans">AgroTech</h1>
      </header>

      {/* Main Card */}
      <main className="w-full max-w-6xl px-4">
        <div className="bg-[#E2E8D4] rounded-[40px] p-12 relative overflow-hidden shadow-sm">
          <Link to="/login" className="absolute top-8 left-8 bg-[#2D4A22] text-white px-6 py-2 rounded-full text-sm">
            Connexion
          </Link>
          
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
              <h2 className="text-5xl font-bold leading-tight text-[#2D4A22]">
                Ensemble, <span className="text-[#D97706]">faisons pousser</span> le monde de demain 🌱
              </h2>
              <p className="text-[#4A5D44] text-lg max-w-md">
                AgroTech réinvente l'agriculture urbaine grâce à des serres hydroponiques innovantes installées au cœur de la ville.
              </p>
              <button className="bg-[#86C494] text-[#2D4A22] px-8 py-4 rounded-full font-semibold hover:bg-[#75b383] transition">
                Découvrir nos solutions
              </button>
            </div>

            {/* Image Placeholder (remplace par ton image de serre) */}
            <div className="flex-1 rounded-[30px] overflow-hidden shadow-xl">
              <img 
                src="/serre-hydro.jpg" 
                alt="Serre hydroponique AgroTech" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </main>

      <footer className="mt-auto py-8 text-[#4A5D44] text-sm">
        © 2026 AgroTech — Cultivons l'avenir ensemble.
      </footer>
    </div>
  );
};

export default LandingPage;
