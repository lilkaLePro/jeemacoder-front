"use client"
import React, { useState } from 'react';

const AddHackathon: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    structure: '',
    theme: '',
    description: '',
    startDate: '',
    endDate: '',
    firstPrize: '',
    secondPrize: '',
    thirdPrize: '',
    location: '',
    // logo: null
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData({ ...formData, 
        // logo: e.target.files[0]
       });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form onSubmit={handleSubmit} className="w-full max-w-5xl mx-auto bg-red-400 p-8 rounded-lg shadow-md">
        <h2 className="text-center text-2xl mb-6 font-bold">Ajouter un hackathon</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-bold mb-2">Nom</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-80 p-2 border border-gray-300 rounded"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="structure" className="block text-sm font-bold mb-2">Structure</label>
              <input
                type="text"
                id="structure"
                name="structure"
                value={formData.structure}
                onChange={handleChange}
                className="w-80 p-2 border border-gray-400 rounded"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="theme" className="block text-sm font-bold mb-2">Thème</label>
              <input
                type="text"
                id="theme"
                name="theme"
                value={formData.theme}
                onChange={handleChange}
                className="w-80 p-2 border border-gray-300 rounded"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="description" className="block text-sm font-bold mb-2">Description</label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="w-80 p-2 border border-gray-300 rounded"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="location" className="block text-sm font-bold mb-2">Lieu</label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-80 p-2 border border-gray-300 rounded"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="logo" className="block text-sm font-bold mb-2">Logo</label>
              <input
                type="file"
                id="logo"
                name="logo"
                onChange={handleLogoChange}
                className="w-80 p-2 border border-gray-300 rounded"
              />
            </div>
          </div>

          <div>
            <div className="mb-4">
              <label htmlFor="startDate" className="block text-sm font-bold mb-2">Date Début</label>
              <input
                type="datetime-local"
                id="startDate"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
                className="w-80 p-2 border border-gray-300 rounded"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="endDate" className="block text-sm font-bold mb-2">Date Final</label>
              <input
                type="datetime-local"
                id="endDate"
                name="endDate"
                value={formData.endDate}
                onChange={handleChange}
                className="w-80 p-2 border border-gray-300 rounded"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="firstPrize" className="block text-sm font-bold mb-2">1er Prix</label>
              <input
                type="text"
                id="firstPrize"
                name="firstPrize"
                value={formData.firstPrize}
                onChange={handleChange}
                className="w-80 p-2 border border-gray-300 rounded"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="secondPrize" className="block text-sm font-bold mb-2">2em Prix</label>
              <input
                type="text"
                id="secondPrize"
                name="secondPrize"
                value={formData.secondPrize}
                onChange={handleChange}
                className="w-80 p-2 border border-gray-300 rounded"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="thirdPrize" className="block text-sm font-bold mb-2">3em Prix</label>
              <input
                type="text"
                id="thirdPrize"
                name="thirdPrize"
                value={formData.thirdPrize}
                onChange={handleChange}
                className="w-80 p-2 border border-gray-300 rounded"
              />
            </div>
          </div>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Valider
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddHackathon;
