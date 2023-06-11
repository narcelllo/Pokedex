const LIMIT = 24;

async function fetchPokemons(){
    let pokemons = []

    for (let i = 1; i <= LIMIT; i++) {
        let pokemonId = i;
        let apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;
    
        await fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            pokemons.push(data);
        })
        .catch(error => {
            console.log(error);
        });
    }

    draw(pokemons);
}

function draw(pokemons){
    let canvas = document.getElementById("pokemon");

    pokemons.forEach((pokemon) => {
        let image = document.createElement("img");
        let div = document.createElement("div");
        
        image.src = pokemon.sprites.front_default;
        div.classList.add("pokeCard");
        div.appendChild(image);
        canvas.appendChild(div);
    })
}

function init(){
    pokemons = fetchPokemons();
    draw(pokemons);
}

init();
