//déclare la fonction pour le clic sur le bouton du HTML
function palindrome() {
// sert a recuperer la case HMTL
    let champSaisie = document.getElementById("id-mot-saisi");
    
//sert a recuperer la saisie de l'utilisateur
    let mot = champSaisie.value;

    // transformation du mot en miniscule
    let motMinuscule = mot.toLowerCase();

    // coupe, inverse et recolle les lettres pour refaire un mot
    let motInverse = motMinuscule.split("").reverse().join("");

    //endroit pour afficher la resultat
    let paragrapheResultat = document.getElementById("resultat")

    // comparaison des mots (inverse ou origine)
    if (motMinuscule === motInverse) {;
        paragrapheResultat.textContent = "Bravo ! Le mot '" + mot + "' est bien un palindrome.";
    } else {
        paragrapheResultat.textContent = "Dommage, le mot '" + mot + "' n'est pas un palindrome.";
    }
}