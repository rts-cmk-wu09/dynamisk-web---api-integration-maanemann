const params = new URLSearchParams(document.location.search);
const name = params.get("name");
const abilityBox = document.querySelector(".abilityBox");

fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then((response) => response.json())
    .then((pokeData) => {
        document.querySelector('main').innerHTML += `
            <div class="imgBox">
                <img src="${pokeData.sprites.front_default}">
                <img src="${pokeData.sprites.back_default}">
            </div>
            <h1>
                ${pokeData.forms[0].name}
            </h1>
            <p class="abilityBox">
                ${pokeData.abilities.forEach(ability => {
                    console.log(abilityBox)
                })}
                lol
            </p>
        `;
    });