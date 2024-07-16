import React from 'react';

const data = [
  { id: 1, nom: 'Jemacoder', organisateur: 'Volkeno', responsable: 'Moussa Alkaly', lieu: 'en ligne', date_debut: '12-07-2024', date_fin: '15-07-2024', etat: 'inscription en cours' },
  { id: 2, nom: 'Jemacoder', organisateur: 'Volkeno', responsable: 'Ibn Fadilou', lieu: 'Bambey', date_debut: '12-07-2024', date_fin: '15-07-2024', etat: 'inscription en cours' }
];

const headers = ['ID', 'Nom', 'Organisateur', 'Responsable', 'Lieu', 'Date début', 'Date fin', 'Etat'];

export const HackathonTable: React.FC = () => {
  return (
    <div className="container px-4 my-4 flex flex-col">
      <h1 className="text-xl my-4 ">Liste des hackathons</h1>
          <TableRow data={data} headers={headers} />
    </div>
  );
};

type TableProps = {
  data: { [key: string]: string | number }[];
  headers: string[];
};

const TableRow: React.FC<TableProps> = ({ data, headers }) => {
  return (
    <div className="overflow-x-auto flex justify-center w-full max-w-4xl">
      <table className="min-w-full bg-white max-md:flex ">
        <thead >
          <tr className="bg-[#FFE7C4] text-xs leading-tight max-md:flex max-md:flex-col">
            {headers.map((header, index) => (
              <th key={index} className="py-3 max-md:py-4 px-4 text-left">{header}</th>
            ))}
          </tr>
        </thead>
        <tbody className="text-gray-600 text-xs font-light max-md:flex">
          {data.map((item, index) => (
            <tr key={index} className="border-b border-gray-200 hover:bg-gray-100 max-md:flex max:md:flex-col">
              {Object.values(item).map((value, index) => (
                <td key={index} className="py-4 px-4 text-left">{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HackathonTable ;