/*for (let i = 1; i <= 12; i++) {
    let image = document.createElement("img");
    image.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/" + i + ".gif";
    
    let div = document.createElement("div");
    div.classList.add("pokeCard");
    div.appendChild(image);
    
    let pokemon = document.getElementById("pokemon");
    pokemon.appendChild(div);
}

for (let i = 1; i == 12; i++) {
let pokemonId = i;
let apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;

fetch(apiUrl) // fetch (buscar) faz uma requisição GET na URL da API PokedApi.
  .then(response => response.json()) // .then recebe a resposta do http GET e .Json faz a leitura dos dados e monta um objeto
  .then(data => {
    let image = document.createElement("img");
    image.src = data.sprites.front_default;
    let div = document.createElement("div");
    div.classList.add("pokeCard");
    div.appendChild(image);
    let pokemon = document.getElementById("pokemon");
    pokemon.appendChild(div);
    console.log("id: ", data.id, "cont: ", i);
  })
  .catch(error => { // metodo que captura erros.

    console.log(error);
  });
}*/

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