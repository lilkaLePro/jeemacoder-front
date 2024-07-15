"use client"
import React from 'react';
import HackathonList from '@/component/participantt/HackathonList'
import SearchBar from '@/component/participantt/SearchBar';
import { hackathons } from '@/app/utils/data';


const App: React.FC = () => (
  <div className="p-8 bg-gray-100 min-h-screen  max-w-7xl m-auto">
    <SearchBar placeholder="Rechercher..." onSearch={function (searchText: string): void {
      throw new Error('Function not implemented.');
    } } />
    <HackathonList hackathons={hackathons} />
  </div>
);

export default App;
