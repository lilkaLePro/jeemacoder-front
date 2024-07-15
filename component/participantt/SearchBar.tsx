import React, { useState } from 'react';

interface SearchBarProps {
  placeholder: string;
  onSearch: (searchText: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ placeholder, onSearch }) => {
  const [currentSort, setCurrentSort] = useState<string>('');

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedSort = e.target.value;
    setCurrentSort(selectedSort);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchText = e.target.value;
    onSearch(searchText);
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-5">La liste des hackathons</h2>
      <div className="flex items-center mb-6">
        <input
          type="text"
          placeholder={placeholder}
          className="w-60 p-3 border rounded-md mr-2"
          onChange={handleSearchChange}
        />
        <select
          value={currentSort}
          onChange={handleSortChange}
          className="p-3 border rounded-md"
        >
          <option value="">Trier par...</option>
          <option value="terminé">Hackathons terminés</option>
          <option value="en_cours">Hackathons en cours</option>
          <option value="privé">Hackathons privés</option>
          <option value="public">Hackathons publics</option>
        </select>
      </div>
    </div>
  );
};

export default SearchBar;
