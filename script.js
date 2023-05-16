for (let i = 1; i <= 12; i++) {
    let image = document.createElement("img");
    image.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/" + i + ".gif";
    let div = document.createElement("div");
    div.classList.add("pokeCard");
    div.appendChild(image);
    let pokemon = document.getElementById("pokemon");
    pokemon.appendChild(div);
}