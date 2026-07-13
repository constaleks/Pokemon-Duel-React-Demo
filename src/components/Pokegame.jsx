import { useState } from 'react';
import { pokemons } from './../mocks/mockData.js';
import Pokedex from './Pokedex.jsx';

const getRandomHands = (pokemonList, handSize = 4) => {
    const tempArr = [...pokemonList];

    for (let i = tempArr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [tempArr[i], tempArr[j]] = [tempArr[j], tempArr[i]];
    }

    const hand1 = tempArr.slice(0, handSize);
    const hand2 = tempArr.slice(handSize, handSize * 2);

    return [hand1, hand2];
};

function Pokegame() {
    const [[hand1, hand2]] = useState(() => getRandomHands(pokemons));

    const exp1 = hand1.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);
    const exp2 = hand2.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);

    return (
        <div className="flex flex-col gap-16">
            <Pokedex pokemons={hand1} exp={exp1} isWinner={exp1 > exp2} />
            <Pokedex pokemons={hand2} exp={exp2} isWinner={exp1 < exp2} />
        </div>
    );
}

export default Pokegame;
