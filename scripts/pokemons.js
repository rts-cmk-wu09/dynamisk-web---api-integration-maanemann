const pokemons = document.querySelector("#pokemons");

fetch('https://pokeapi.co/api/v2/pokemon')
    .then((response) => response.json())
    .then(data => {
        // console.log(data)
        // console.log(data.results[0].name);
        data.results.forEach(pokemon => {
            console.log(pokemon);
            // fetch(pokemon.url)
            //     .then((response) => response.json())
            //     .then(data => {
            //         let pokemonId = data.id;
            //     })
            //     ;
            pokemons.innerHTML += `
                <figure>
                    <a href="html/details.html?name=${pokemon.name}">
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.replace('https://pokeapi.co/api/v2/pokemon/','').replace('/','')}.png" alt="This should be an image of a Pokémon">
                        <h2>
                            ${pokemon.name}
                        </h2>
                    </a>
                </figure>
            `
        });
    })
    ;