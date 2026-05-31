const searchInput = document.querySelector("input");

if(searchInput){

searchInput.addEventListener("keyup", function(){

const texte = searchInput.value.toLowerCase();

const titres = document.querySelectorAll("h2");

titres.forEach(titre => {

if(titre.textContent.toLowerCase().includes(texte)){
titre.style.display = "block";
}
else{
titre.style.display = "none";
}

});

});

}

const favoriteBtn = document.getElementById("favoriteBtn");

if(favoriteBtn){

favoriteBtn.addEventListener("click", () => {

localStorage.setItem("favori", "Avatar 3");

favoriteBtn.textContent = "✅ Ajouté aux favoris";

});

}

const films = [
    "Avatar",
    "John Wick"
];

const search = document.getElementById("searchInput");
const results = document.getElementById("searchResults");

if(search){

    search.addEventListener("keyup", () => {

        results.innerHTML = "";

        const valeur = search.value.toLowerCase();

        films.forEach(film => {

            if(film.toLowerCase().includes(valeur) && valeur !== ""){

                const p = document.createElement("p");
p.textContent = "🎬 " + film;

p.addEventListener("click", () => {

    if(film === "Avatar"){
        window.location.href = "avatar.html";
    }

    if(film === "John Wick"){
        window.location.href = "johnwick.html";
    }

});

results.appendChild(p);
                



            }

        });

    });

}

const search = document.getElementById("searchInput");

if(search){

    search.addEventListener("keyup", () => {

        const valeur = search.value.toLowerCase();

        films.forEach(film => {

            if(film.toLowerCase().includes(valeur)){
                console.log("Trouvé :", film);
            }

        });

    });

}