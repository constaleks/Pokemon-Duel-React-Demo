import { pokemons } from './mocks/mockData';
import Pokecard from './components/Pokecard';

function App() {
    const randomPokemon = pokemons[Math.floor(Math.random() * pokemons.length)];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100 p-6">
            <h1 className="text-6xl font-semibold mb-8 text-center">Pokémon Duel Game</h1>
            <Pokecard pokemon={randomPokemon} />
        </div>
    );
}

export default App;
