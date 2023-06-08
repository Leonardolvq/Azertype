/*********************************************************************************
 * 
 * Ce fichier contient toutes les fonctions nécessaires au fonctionnement du jeu. 
 * 
 *********************************************************************************/

/**
 * Cette fonction affiche dans la console le score de l'utilisateur
 * @param {number} score : le score de l'utilisateur
 * @param {number} nbMotsProposes : le nombre de mots proposés à l'utilisateur
 */
function afficherResultat(score, nbMotsProposes) {
    // Récupération de la zone dans laquelle on va écrire le score
    let spanScore = document.querySelector(".zoneScore span")
    // Ecriture du texte
    let affichageScore = `${score} / ${nbMotsProposes}` 
    // On place le texte à l'intérieur du span. 
    spanScore.innerText = affichageScore
}

function afficherProposition (tableau) {
    let divAfficher = document.querySelector(".zoneProposition");
    divAfficher.innerText = tableau;
}

/**
 * Cette fonction lance le jeu. 
 * Elle demande à l'utilisateur de choisir entre "mots" et "phrases" et lance la boucle de jeu correspondante
 */
function lancerJeu() {
    // Initialisations
    let score = 0;
    let i = 0;
  
    let listeProposition = listeMots; 
    let optionsRadio = document.querySelectorAll(".optionSource input[type=radio]");
  
    let btnValidation = document.getElementById("btnValiderMot");
    let zoneTexte = document.getElementById("inputEcriture");
  
    afficherProposition(listeProposition[i]); // Afficher le premier mot dès le début
  
    btnValidation.addEventListener("click", () => {
      console.log(`${zoneTexte.value}`); // Affiche la valeur entrée par le user
      console.log(listeProposition[i]);
      
      if (zoneTexte.value === listeProposition[i]) {
        score++;
      }
  
      i++;
  
      afficherResultat(score, i);
      console.log(score);
      zoneTexte.value = ""; // Vider le champ de saisie
      if (listeProposition[i] === undefined) {
        afficherProposition("Le jeu est terminé.");
        btnValidation.disabled = true;
      } else {
        afficherProposition(listeProposition[i]);
      }
    });
  
    zoneTexte.addEventListener("keypress", (event) => {
      if (event.keyCode === 13) {
        console.log(`${zoneTexte.value}`); // Affiche la valeur entrée par le user
        console.log(listeProposition[i]);
        
        if (zoneTexte.value === listeProposition[i]) {
          score++;
        }
  
        i++;
  
        afficherResultat(score, i);
        console.log(score); 
        zoneTexte.value = ""; // Vider le champ de saisie
        if (listeProposition[i] === undefined) {
          afficherProposition("Le jeu est terminé.");
          btnValidation.disabled = true;
        } else {
          afficherProposition(listeProposition[i]);
        }
      }
    });

    for (let i = 0; i < optionsRadio.length; i++) {
      optionsRadio[i].addEventListener('change', () => {
        if (optionsRadio[i].checked) {
          console.log(optionsRadio[i].value)
          let value = optionsRadio[i].value;
          if (value === 'Mots') {
            listeProposition = listeMots;
            console.log(listeMots)
          } else if (value === 'Phrases') {
            listeProposition = listePhrases;
            console.log(listePhrases)
          }
        }
      })
    }

    afficherResultat(score, i);
  }
