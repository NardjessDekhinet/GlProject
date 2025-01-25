import React from "react";
import RendezVous from "../../components/Prestataires/RendezVous";
const appointments = [
  {
    id: 1,
    name: "James K. Murphy",
    email: "yarebbig1@gmail.com",
    phone: "000-000-000",
    date: "01-01-2000",
    time: "12:00",
  },
  {
    id: 2,
    name: "James K. Murphy",
    email: "yarebbig1@gmail.com",
    phone: "000-000-000",
    date: "01-01-2000",
    time: "12:00",
  },
];

const Prestataire = () => {
  return (
    <div className="min-h-screen flex flex-col items-center p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Liste des Rendez-vous</h1>
      {/* Appel du composant RendezVous */}
      <RendezVous appointments={appointments} />
    </div>
  );
};

export default Prestataire;
