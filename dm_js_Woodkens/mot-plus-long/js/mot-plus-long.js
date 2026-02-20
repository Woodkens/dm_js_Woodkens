// récupère le texte du paragraphe du HTML
let paragrapheCitation = document.getElementById("citation");
let texte = paragrapheCitation.textContent;

//nettoie le texte
//enlève le point pour ne pas compter comme un mot
let textePropre = texte.replace("'", " ").replace(".", "");

// découpe la phrase en une liste de mot 
// séparer grace a l'espace (" ")
let tableauMots = textePropre.split(" ");

// prépare un case vide pour stocker le mot le + long
let motLePlusLong = "";

// parcourt le tableau avec FOR
for (let i = 0; i < tableauMots.length; i++) {
    // Si le mot actuel est plus grand que mot + long actuel
    if (tableauMots[i].length > motLePlusLong.length) {
    // alors il devient le mot gagnant
        motLePlusLong = tableauMots[i];
    }
}
// affiche le résultat sur la page 
let paragrapheResultat = document.getElementById("motPlusLong");
paragrapheResultat.textContent = "Le mot le plus long est : " + motLePlusLong;