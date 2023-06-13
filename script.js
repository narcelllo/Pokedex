/*for (let i = 1; i <= 12; i++) {
    let image = document.createElement("img");
    image.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/" + i + ".gif";
    
    let div = document.createElement("div");
    div.classList.add("pokeCard");
    div.appendChild(image);
    
    let pokemon = document.getElementById("pokemon");
    pokemon.appendChild(div);
}

for (let i = 1; i <= 12; i++) {
   let pokemonId = i;
    let apiUrl = `https://pokeapi.co/api/v2/pokemon/1`;
    
    fetch(apiUrl) // fetch (buscar) faz uma requisição GET na URL da API PokedApi.
      .then(response => response.json()) // .then recebe a resposta do http GET e .Json faz a leitura dos dados e monta um objeto
      .then(data => {  
        console.log(data);
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
   }
    


   async function fetchPokemon() {
      for (let i = 1; i <= 12; i++) {
        let pokemonId = i;
        let apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;
    
        try {
          let response = await fetch(apiUrl);
          let data = await response.json();
    
          let image = document.createElement("img");
          image.src = data.sprites.front_default;
          let div = document.createElement("div");
          div.classList.add("pokeCard");
          div.appendChild(image);
          let pokemon = document.getElementById("pokemon");
          pokemon.appendChild(div);
          console.log("id: ", data.id, "cont: ", i);
        } catch (error) {
          console.log(error);
        }
      }
    }
    
    fetchPokemon();
        */

const LIMIT = 24; //Variavel responsável pla quantidade de IDs que o programa vai buscar, fica separada pára facilitar a leitura (boas práticas)

async function fetchPokemons() { //função responsável por buscar os dados da API, converter em .json, colocar em um arrey e sincronizar os elementos promise.
  let pokemons = []

  for (let i = 1; i <= LIMIT; i++) {
    let pokemonId = i;
    let apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;

    await fetch(apiUrl) // função que busca as promises dentro da URL gerada pelo contador.
      .then(response => response.json()) //converte a promise em .jsin
      .then(data => { 
        console.log(data);
        pokemons.push(data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  draw(pokemons);
}

function draw(pokemons = []) {
  
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

function init() {
  pokemons = fetchPokemons();
  draw(pokemons =[]);
}

init();