import React from 'react';
import HackathonCard from './HackathonCard';

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

interface HackathonListProps {
  hackathons: Hackathon[];
}

const HackathonList: React.FC<HackathonListProps> = ({ hackathons }) => (
  <div className="max-w-10xl space-y-4 mx-auto">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
      {hackathons.map(hackathon => (
        <div key={hackathon.id} className="ml-2 mr-2">
          <HackathonCard hackathon={hackathon} />
        </div>
      ))}
    </div>
  </div>
);

export default HackathonList;
