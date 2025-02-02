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

function mangaFetch(id) {
    const jikan = fetch(`https://api.jikan.moe/v4/manga/${id}/characters`)
    jikan.then(r => r.json()).then(json => {
        div.innerHTML = "";
        json.data.forEach(e => {
            const characterName = document.createElement("p");
            const characterIMG = document.createElement("img");
            const characterDIV = document.createElement("a");

            characterName.innerText = e.character.name;
            characterDIV.href = e.character.url;
            characterIMG.src = e.character.images.jpg.image_url;

            characterDIV.appendChild(characterName);
            characterDIV.appendChild(characterIMG);
            div.appendChild(characterDIV);

        })
    })
}

mangaFetch(2);

