import Pokecard from './../components/Pokecard.jsx';

function Pokedex({ pokemons, exp, isWinner }) {
    return (
        <div>
            <div className="flex flex-col items-center gap-2 mb-2">
                {isWinner ? (
                    <h2 className="text-green-700 font-bold text-4xl">This hand won!</h2>
                ) : (
                    <h2 className="text-red-700 font-bold text-4xl">This hand lost</h2>
                )}
                <p className="text-xl">
                    Total experience is <span className="font-bold">{exp}</span>
                </p>
            </div>

            <div className="flex justify-around gap-4">
                {pokemons.map((pokemon) => {
                    return <Pokecard key={pokemon.id} pokemon={pokemon} />;
                })}
            </div>
        </div>
    );
}

export default Pokedex;
