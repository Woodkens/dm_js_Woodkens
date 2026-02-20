//tableau avec nom de mangas/anime donné
let mangas = ["Naruto", "One Piece", "DBZ", "Bleach", "HxH", "JJK", "Spy x Family", "Sakamoto Days", "JJBA", "HnK", "Boruto"];

//crée la fonction appelée au clic du bouton Tirage au sort
function tirage() {
    //Génére un numéro random par rapoprt au mangas du tableau, génère un nombre à virgule * longueur tableau mangas (11)
    // puis enlève la virgule pour garder un nombre entier
    let indexAleatoire = Math.floor(Math.random() * mangas.length);

    //cherche le manga lié à ce numéro dans la liste
    let mangaGagnant = mangas[indexAleatoire];

    // endroit de id affichage pour montrer le gagnant
    let paragrapheAffichage = document.getElementById("affichage");
    paragrapheAffichage.textContent = "Le manga gagnant est : " + mangaGagnant;

    // afficher l'index tiré
    let paragrapheAleatoire = document.getElementById("aleatoire");
    paragrapheAleatoire.textContent = "L'index tiré au sort était le n°" + indexAleatoire;
}