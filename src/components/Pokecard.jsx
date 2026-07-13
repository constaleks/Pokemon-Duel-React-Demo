function Pokedex({ pokemon }) {
    const getImageUrl = (id) => {
        return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
    };

    return (
        <div className="flex flex-col items-center border border-slate-500 border-4 rounded-md p-4 w-64">
            <h4 className="text-2xl font-bold text-slate-200">{pokemon.name}</h4>
            <img className="w-32" src={getImageUrl(pokemon.id)} />
            <p className="text-lg text-slate-200 font-semibold">Type: {pokemon.type}</p>
            <p className="text-lg text-slate-200 font-semibold">Experience: {pokemon.base_experience}</p>
        </div>
    );
}

export default Pokedex;
