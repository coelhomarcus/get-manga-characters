const div = document.querySelector(".personagens");

const buttons = document.querySelectorAll('[data-button]');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        buttons.forEach(button => {
            button.classList.remove("selected");
        })
        button.classList.add("selected");
        mangaFetch(button.dataset.id);
    })
})

async function mangaFetch(id) {
    const mangaResponse = await fetch(`https://api.jikan.moe/v4/manga/${id}/characters`);
    const mangaJson = await mangaResponse.json();

    div.innerHTML = "";

    mangaJson.data.forEach(manga => {
        const characterName = document.createElement("p");
        const characterIMG = document.createElement("img");
        const characterDIV = document.createElement("a");

        characterDIV.target = "_blank"
        characterDIV.href = manga.character.url;
        characterName.innerText = manga.character.name;
        characterIMG.src = manga.character.images.jpg.image_url;

        characterDIV.appendChild(characterName);
        characterDIV.appendChild(characterIMG);
        div.appendChild(characterDIV);
    })
}

mangaFetch(2);

