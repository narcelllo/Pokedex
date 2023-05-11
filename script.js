for (let i = 1; i < 649; i++) {
    let image = document.createElement("img");
    image.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/" + i + ".gif";
    let div = document.getElementById("pokemon");
    div.appendChild(image);
}