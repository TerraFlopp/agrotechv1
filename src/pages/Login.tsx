import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Logo from "../components/Logo";

export default function Login() {
  const navigate = useNavigate();
  const [identifiant, setIdentifiant] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // On transmet le nom saisi à la page dashboard via l'état de navigation
    navigate('/dashboard', { state: { name: identifiant } });
  };

  return (
    <div className="min-h-screen bg-[#F5F0E8] flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-md space-y-8 text-center">
        <div className="flex flex-col items-center space-y-4">
          <Logo className="w-16 h-16" />
          <p className="text-[#2D5016] font-medium italic">"Ensemble, faisons pousser le futur 🌱"</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <input 
            type="text" 
            placeholder="Identifiant Membre" 
            value={identifiant}
            onChange={(e) => setIdentifiant(e.target.value)}
            className="w-full p-4 rounded-2xl bg-white border-none shadow-sm focus:ring-2 focus:ring-[#86C494] outline-none transition" 
            required
          />
          <input 
            type="password" 
            placeholder="Mot de passe" 
            className="w-full p-4 rounded-2xl bg-white border-none shadow-sm focus:ring-2 focus:ring-[#86C494] outline-none transition" 
          />
          <button type="submit" className="w-full bg-[#2D5016] text-white p-4 rounded-2xl font-bold hover:bg-[#1f380f] transition shadow-lg">
            Se connecter
          </button>
        </form>
        
        {/* Mention demandée sous le formulaire */}
        <p className="text-xs text-gray-400 mt-4">
          Entrez n'importe quel mot de passe
        </p>
      </div>
    </div>
  );
}
