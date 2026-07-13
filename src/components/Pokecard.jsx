import { useState } from 'react';
import { typeStyles, defaultTypeStyle } from './../utils/typeStyles.js';

function Pokedex({ pokemon, index = 0 }) {
    const [imageLoaded, setImageLoaded] = useState(false);

    const getImageUrl = (id) => {
        return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
    };

    return (
        <div
            className="flex flex-col items-center border border-slate-500 border-4 rounded-md p-4 w-64 animate-card-reveal transition-transform duration-200 hover:scale-105 hover:shadow-lg hover:shadow-slate-900/50"
            style={{ animationDelay: `${index * 100}ms` }}>
            <h4 className="text-2xl font-bold text-slate-200">{pokemon.name}</h4>
            <div className="relative w-32 h-32 flex items-center justify-center overflow-hidden">
                {!imageLoaded && <div className="absolute inset-0 rounded-md bg-slate-700 animate-pulse" />}
                <img
                    className={`w-32 transition-all duration-300 hover:scale-110 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                    src={getImageUrl(pokemon.id)}
                    onLoad={() => setImageLoaded(true)}
                />
            </div>
            <p className="text-lg text-slate-200 font-semibold">
                Type: <span className={`${typeStyles[pokemon.type] || defaultTypeStyle}`}>{pokemon.type}</span>
            </p>
            <p className="text-lg text-slate-200 font-semibold">Experience: {pokemon.base_experience}</p>
        </div>
    );
}

export default Pokedex;
