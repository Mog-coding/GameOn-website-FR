/********************** OUVERTURE FERMETURE MODAL **********************/
/* Passe le modal en display: block; ou none; */
function switchModal(truefalse) {
  document.querySelector('.bground').style.display = blockNone(truefalse); /* = if problème */
};
/* Converti true en block et false en none */
function blockNone(truefalse) {
  if (truefalse) {  //open ? "block" : "none";
    return "block"
  } else {
    return "none"
  };
};
/* Clic sur bouton d'inscription fait apparaitre/disparaitre le modal */
document.querySelector('.btn-signup').addEventListener('click', function () {
  switchModal(true);
});
document.querySelector('.close').addEventListener('click', function () {
  switchModal(false);
});


/********************** ECOUTE input NOM et PRENOM **********************/
const firstName = document.querySelector('#first'); //noeud <input> Prénom
const lastName = document.querySelector('#last'); //noeud <input> Nom
const regexFirstLast = new RegExp("^[a-zA-Z]{2,30}$");

/* Test si la donnée input match avec la regex suite à un événement change,si non: ajoute attributs erreur: style erreur et message d'erreur, si oui: supprime les attributs erreur */
function checkFirstLastName(event) {
  if (/^[a-zA-Z]{2,30}$/.test(event.target.value)) {
    event.target.parentElement.removeAttribute("data-error-visible");
    event.target.parentElement.removeAttribute("data-error");
  } else {
    event.target.parentElement.setAttribute("data-error-visible", true);
    if (event.target.id === "first") {
      event.target.parentElement.setAttribute("data-error", "Veuillez entrer entre 2 et 30 caractères dans le champ Prénom.");
    } else {
      event.target.parentElement.setAttribute("data-error", "Veuillez entrer entre 2 et 30 caractères dans le champ Nom.");
    }
  }
}
/* Ecoute <input> Prénom et Nom */
lastName.addEventListener('change', checkFirstLastName);
firstName.addEventListener('change', checkFirstLastName);


/********************** TEST input EMAIL BIRTH DATE TOURNOI **********************/
const regexMail = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])"); //regex validation mail RFC5322 format
const regexDate = new RegExp("^(19|20)\\d\\d[/-](0[1-9]|1[012])[/-](0[1-9]|[12][0-9]|3[01])$");
const regexTournoi = new RegExp("^(0|[0-9][0-9])$");
const email = document.querySelector('#email'); //noeud input Email
const birthDate = document.querySelector('#birthdate'); //noeud input date de naissance
const nbTournoi = document.querySelector('#quantity'); //noeud input nombre de tournois
const errorMessage = ["erreur syntaxe email", "erreur date de naissance", "erreur nombre tournois", "sélectionner au moins une radio", "Veuillez accepter les conditions générales pour continuer"];  //Message d'erreur d'email, date de naissance, nombre tournoi, radio, checkbox

/* Test si la donnée input match avec la regex si non: ajoute attributs erreur: style erreur et message d'erreur, si oui: supprime les attributs erreur */
function messageInput(noeud, regex, errorMessage) {
  if (regex.test(noeud.value)) {
    noeud.parentElement.removeAttribute("data-error-visible");
    noeud.parentElement.removeAttribute("data-error");
  } else {
    noeud.parentElement.setAttribute("data-error-visible", true);
    noeud.parentElement.setAttribute("data-error", errorMessage);
  }
}


/********************** TEST input RADIO et CHECKBOX **********************/
const arrayRadio = document.querySelectorAll('[name="location"]'); //référence des 6 noeuds input radio
const noeudRadio = document.querySelector("#location1");
const noeudCheckbox = document.querySelector('#checkbox1');
/* si une radio est cochée, retourne true, sinon retoune false */
function testRadio() {
  let radioResult = false;
  let radioValue = [];
  for (let i = 0; i < arrayRadio.length; i++) {
    if (arrayRadio[i].checked) {
      radioValue.push = arrayRadio[i].value;
      radioResult = true;
    }
  }
  return radioResult;
}
/* si checkbox1 est cochée, retourne true, sinon retoune false */
function testCheckbox() {
  let result = false;
  if (noeudCheckbox.checked) {
    result = true;
  }
  return result;
}
/* test radio et checkbox1, si false: ajoute attributs erreur: style erreur et message d'erreur, si true: supprime les attributs erreur  */
function messageRadioCheck(fonction, noeud, message) {
  if (fonction) {
    noeud.parentElement.removeAttribute("data-error-visible");
    noeud.parentElement.removeAttribute("data-error");
  } else {
    noeud.parentElement.setAttribute("data-error-visible", true);
    noeud.parentElement.setAttribute("data-error", message);
  }
}
messageRadioCheck(testRadio(), noeudRadio, errorMessage[3]);
messageRadioCheck(testCheckbox(), noeudCheckbox, errorMessage[4]);


/********************** Test valeur noeud avec regex **********************/
/* test un noeud et une regex, si match, renvoie true, sinon false */
function noeudRegex (regex, noeud ){
  regex.test(noeud.value)
};


/********************** VALIDATION FORMULAIRE *********************
document.querySelector(".btn-submit").addEventListener('click', function () {
  /* test de saisie email, date de naissance et nombre de tournois 
  messageInput(email, regexMail, errorMessage[0]);
  messageInput(birthDate, regexDate, errorMessage[1]);
  messageInput(nbTournoi, regexTournoi, errorMessage[2]);
  /* test de radio et checkbox 
  messageRadioCheck(testRadio(), noeudRadio, errorMessage[3]);
  messageRadioCheck(testCheckbox(), noeudCheckbox, errorMessage[4]);


  if (testRadio() && testCheckbox() && ) {
    document.querySelector('[name="registration"]').submit();
    console.log("submit");
  });

  **/