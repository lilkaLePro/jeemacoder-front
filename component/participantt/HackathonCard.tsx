import Image from 'next/image';
import React from 'react';

interface Hackathon {
  id: number;
  date: string;
  title: string;
  organizer: string;
  description: string;
  isPublic: boolean;
  participants: number;
  tags: string[];
}

interface HackathonCardProps {
  hackathon: Hackathon;
}

const HackathonCard: React.FC<HackathonCardProps> = ({ hackathon }) => {
  // Fonction pour déterminer si le hackathon est en cours ou terminé
  const isHackathonInProgress = () => {
    // Récupérer la date actuelle
    const currentDate = new Date();
    // Convertir la date du hackathon en objet Date
    const hackathonDate = new Date(hackathon.date);
    // Comparer les dates pour déterminer si le hackathon est en cours
    return hackathonDate >= currentDate;
  };

  return (
    <a href="/detail" className="block border rounded-lg p-10 bg-white shadow-md hover:shadow-lg transition-shadow">
      <div className="flex gap-5">
        <Image src="/img.jpg" alt="Hackathon" className="w-36 h-36 object-cover rounded-md" width={50} height={50}/> {/* Remplacez par l'image réelle */}
        <div className="flex-grow">
          <p>{hackathon.date}</p>
          <h2 className="text-xl font-bold">{hackathon.title}</h2>
          <p>Organisateur : {hackathon.organizer}</p>
          <p>{hackathon.description}</p>
          <button className="text-blue-500">more...</button>
        </div>
      </div>
      <div className="flex justify-between items-center mt-4">
        <div className="flex gap-2 flex-wrap">
          {hackathon.isPublic ? (
            <span className="bg-green-200 px-2 py-1 rounded-md">Public</span>
          ) : (
            <span className="bg-blue-200 px-2 py-1 rounded-md">Privé</span>
          )}
          {isHackathonInProgress() ? (
            <span className="bg-yellow-200 px-2 py-1 rounded-md">En cours</span>
          ) : (
            <span className="bg-gray-200 px-2 py-1 rounded-md">Terminé</span>
          )}
          {hackathon.tags.map(tag => (
            <span key={tag} className="bg-gray-200 px-2 py-1 rounded-md w-full sm:w-auto">{tag}</span>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <p>{hackathon.participants} autres participants</p>
          <button className="bg-green-500 text-white px-4 py-2 rounded-md">Participer</button>
        </div>
      </div>
    </a>
  );
};

export default HackathonCard;
