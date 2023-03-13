const pokemons = document.querySelector(".pokemons");

fetch('https://pokeapi.co/api/v2/pokemon')
    .then((response) => response.json())
    .then(data => {
        console.log(data.results[0].name);
        data.results.name.forEach(element => {
            console.log(element);
        });

        // data.destinations.forEach(destination => {
        //     places.innerHTML += `
        //     <figure id="${destination.id}">
        //         <img src="./img/${destination.image}" alt="" />
        //         <div>
        //             <i class="fa-solid fa-heart"></i>
        //             <a href="destination.html?id=${destination.id}">
        //                 More
        //             </a>
        //         </div>
        //     </figure>
        //     `
        // });
    })
    ;