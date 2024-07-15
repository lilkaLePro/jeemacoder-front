"use client"
import React, { useState } from 'react';
import Modal from '@/component/participantt/modal';

interface Hackathon {
  id: number;
  title: string;
  organizer: string;
  description: string;
  isPublic: boolean;
  startDate: Date;
  endDate: Date;
}

const Page: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const closeModal = () => setIsModalOpen(false);

  // Exemple de données de hackathon
  const hackathon: Hackathon = {
    id: 1,
    title: 'Jemacoder 2024',
    organizer: 'Nom Organisateur',
    description:
      'Lorem ipsum dolor sit amet. In tenetur necessitatibus cum possimus blanditiis est ipsam perspiciatis est deserunt adipisci eum vitae nulla sed possimus voluptate...',
    isPublic: true,
    startDate: new Date('2024-06-01'),
    endDate: new Date('2024-06-07'),
  };

  // Fonction pour déterminer si le hackathon est en cours ou terminé
  const isHackathonInProgress = () => {
    const currentDate = new Date();
    return currentDate >= hackathon.startDate && currentDate <= hackathon.endDate;
  };

  // Fonction pour obtenir le statut du hackathon (public/privé et en cours/terminé)
  const getHackathonStatus = () => {
    let status = '';

    // Statut public/privé
    if (hackathon.isPublic) {
      status += 'Public';
    } else {
      status += 'Privé';
    }

    status += ' | ';

    // Statut en cours/terminé
    if (isHackathonInProgress()) {
      status += 'En cours';
    } else {
      status += 'Terminé';
    }

    return status;
  };

  return (
    <div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className="max-w-4xl mx-auto p-5 bg-white shadow-md rounded-lg font-sans">
          <h2 className="text-4xl font-bold mb-5 text-center">
            Theme: <span className="text-green-500">Intelligence artificielle</span>
          </h2>
          <img src="img.jpg" className="block mx-auto w-2/5 h-auto rounded-lg" alt="Event" />
          <h3 className="text-2xl text-center mb-3 mt-5">{hackathon.title}</h3>
          <p className="text-center italic mb-5">Organisateur: {hackathon.organizer}</p>
          <div className="text-left mb-5">
            <h4 className="text-xl font-bold mb-2">Description</h4>
            <p className="text-base leading-6">{hackathon.description}</p>
          </div>
          <div className="text-left text-xl mb-5">
            <p><strong>Date de début:</strong> <span className="text-green-500">{hackathon.startDate.toLocaleDateString()}</span></p>
            <p><strong>Date de fin:</strong> <span className="text-green-500">{hackathon.endDate.toLocaleDateString()}</span></p>
            <p><strong>Lieu:</strong> HLM Grand Yoff</p>
            <p><strong>Prix:</strong> Aucun</p>
          </div>
          <div className="text-center mb-5">
            <span className="px-3 py-1 rounded-md bg-blue-200 text-sm">{getHackathonStatus()}</span>
          </div>
          <div className="text-center">
            <button className="bg-green-500 text-white py-2 px-5 text-lg rounded cursor-pointer">Participer</button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Page;
