import React from 'react';
import  Sidebar  from "../../component/sidebare/sidebare";

export default function Page() {
    const description = [
        { nom: 'cheikh', taille: "2M", age: 25 },
        { nom: 'ousmane', taille: "2M", age: 26 },
        { nom: 'omar', taille: "2M", age: 27 },
        { nom: 'ngone', taille: "2M", age: 28 },
        { nom: 'ami', taille: "2M", age: 29 },
    ];

    return (
        <div>
            <Sidebar/> 
            <h1>description</h1>
            <div className='p-24 flex flex-row flex-wrap'>
                {description.map(({ taille, age, nom }, index) => (
                    <div key={index} className='bg-white m-2 rounded flex flex-col p-4'>
                        <p>nom: {nom}</p>
                        <p>taille: {taille}</p>
                        <p>Age: {age}</p>
                    </div>
                ))}
            </div>
            <a href="/org">organisation</a>
        </div>
    );
}

