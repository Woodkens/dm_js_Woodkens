function construirePyramide() {
    //On récupère le nombre saisi 
    let champSaisie = document.getElementById("ligne-pyramide");
    
    // On convertit le texte en un nombre
    let nombreLignes = parseInt(champSaisie.value);

//endroit pour afficher la pyramide 
    let paragraphePyramide = document.getElementById("pyramide");
    
    // reset à 0 le texte
    paragraphePyramide.innerHTML = "";

    // créeation de la réserve d étoile
    let reserveEtoiles = "**************************************************";

    //boucle qui va tourner de ka premiere ligne ( étage) jusqu'au nombre demandé
    for (let i = 1; i <= nombreLignes; i++) {
        
        // coupe la réserve de 0 jusqu'au numéro saisie (i)
        let etage = reserveEtoiles.slice(0, i);
        
        // garde et additione les pyramide en foction du nombre saisi
        paragraphePyramide.innerHTML = paragraphePyramide.innerHTML + etage + "<br>";
    }
}