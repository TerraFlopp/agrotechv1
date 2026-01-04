import Logo from "../components/Logo";
import { Thermometer, Droplets, FlaskConical, Bell, Calendar, QrCode } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#F5F0E8] pb-10">
      {/* Header */}
      <nav className="p-6 flex justify-between items-center max-w-4xl mx-auto">
        <div>
          <h2 className="text-xl font-bold text-[#2D5016]">Bienvenue, Thomas</h2>
          <span className="text-[10px] bg-[#2D5016] text-white px-2 py-0.5 rounded-full uppercase font-bold tracking-wider">Membre Premium</span>
        </div>
        <Logo className="w-10 h-10 opacity-80" />
      </nav>

      <main className="max-w-4xl mx-auto px-6 space-y-6">
        {/* Maintenance Alert */}
        <div className="bg-[#D97706]/10 border border-[#D97706]/20 p-4 rounded-2xl flex items-center gap-3">
          <Bell className="text-[#D97706] w-5 h-5" />
          <p className="text-[#92400E] text-sm font-medium">Note : Pensez à vérifier le niveau de nutriments du bac B4.</p>
        </div>

        {/* Jauge de Récolte */}
        <section className="bg-white p-6 rounded-[30px] shadow-sm">
          <div className="flex justify-between items-end mb-4">
            <div>
              <p className="text-xs text-gray-400 uppercase font-bold">Stade actuel</p>
              <h3 className="text-xl font-bold text-[#2D5016]">Floraison avancée</h3>
            </div>
            <span className="text-4xl font-black text-[#86C494]">88%</span>
          </div>
          <div className="h-4 bg-gray-100 rounded-full overflow-hidden">
            <div className="h-full bg-[#86C494] transition-all duration-1000 w-[88%] shadow-[0_0_10px_#86C494]"></div>
          </div>
          <p className="mt-4 text-sm text-gray-500 text-center font-medium">Récolte optimale dans : <span className="text-[#2D5016]">3j 14h 22min</span></p>
        </section>

        {/* Monitoring */}
        <div className="grid grid-cols-3 gap-4">
          <Card icon={<Thermometer />} label="Temp." value="22.5°C" />
          <Card icon={<Droplets />} label="Humid." value="65%" />
          <Card icon={<FlaskConical />} label="pH Eau" value="6.2" badge="Stable" />
        </div>

        {/* Réservation */}
        <section className="bg-white p-6 rounded-[30px] shadow-sm space-y-6">
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-[#2D5016] flex items-center gap-2"><Calendar size={18}/> Réservation</h3>
            <span className="text-xs font-bold text-gray-400 uppercase tracking-tighter">12/20 membres présents</span>
          </div>
          <div className="grid grid-cols-4 gap-2 text-center">
            {['09:00', '10:00', '11:00', '14:00'].map((time, i) => (
              <div key={i} className={`p-2 rounded-xl text-sm font-medium border ${i === 2 ? 'bg-[#86C494] border-[#86C494] text-white' : 'border-gray-100 text-gray-400'}`}>
                {time}
              </div>
            ))}
          </div>
          <button className="w-full bg-[#2D5016] text-white p-4 rounded-2xl font-bold flex items-center justify-center gap-3">
             Confirmer la réservation <QrCode size={20}/>
          </button>
        </section>
      </main>
    </div>
  );
}

function Card({ icon, label, value, badge }: any) {
  return (
    <div className="bg-white p-4 rounded-3xl shadow-sm text-center border border-white flex flex-col items-center">
      <div className="text-[#86C494] mb-2">{icon}</div>
      <p className="text-[10px] text-gray-400 uppercase font-bold">{label}</p>
      <p className="font-bold text-[#2D5016]">{value}</p>
      {badge && <span className="text-[8px] bg-[#86C494]/20 text-[#2D5016] px-1.5 rounded-full font-bold mt-1 uppercase">{badge}</span>}
    </div>
  );
}
