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
/* Clic les boutons d'inscription fait apparaitre/disparaitre le modal */
document.querySelector('.btn-signup').addEventListener('click', function () {
  switchModal(true);
});
document.querySelector('.close').addEventListener('click', function () {
  switchModal(false);
});

/********************** INPUT **********************/
const arrayRadio = document.querySelectorAll('[name="location"]'); //référence des 6 noeuds input radio
const inputProperties = ['firstName', 'lastName', 'email', 'birthDate', 'nbTournoi', 'radio', 'checkbox',];

const dataInput = {
  firstName: {
    noeud: document.querySelector('#first'),
    errorMessage: "Veuillez entrer entre 2 et 30 caractères dans le champ Prénom.",
    regex: /^[a-zA-Z]{2,30}$/,
    isValid: false,
  },
  lastName: {
    noeud: document.querySelector('#last'),
    errorMessage: "Veuillez entrer entre 2 et 30 caractères dans le champ Nom.",
    regex: /^[a-zA-Z]{2,30}$/,
    isValid: true,
  },
  email: {
    noeud: document.querySelector('#email'),
    errorMessage: "erreur syntaxe email",
    regex: /^[a-zA-Z]{2,30}$/,
    //regex validation mail RFC5322 format
    isValid: false,
  },
  birthDate: {
    noeud: document.querySelector('#birthdate'),
    errorMessage: "erreur date de naissance",
    regex: /^(19|20)\\d\\d[/-](0[1-9]|1[012])[/-](0[1-9]|[12][0-9]|3[01])$/,
    isValid: true,
  },
  nbTournoi: {
    noeud: document.querySelector('#quantity'),
    errorMessage: "erreur nombre tournois",
    regex: /^([0-9]|[0-9][0-9])$/,
    isValid: false,
  },
  radio: {
    noeud: document.querySelector('#location1'),
    errorMessage: "Veuillez sélectionner une ville",
    regex: "",
    isValid: false,
  },
  checkbox: {
    noeud: document.querySelector('#checkbox1'),
    errorMessage: "Veuillez accepter les conditions générales pour continuer",
    regex: "",
    isValid: false,
  },
}

/* toute les input isValid dans un tableau Boolean */
function isInputValid(objet) {
  let arrayInputValid = [];
  for (const property in objet) {
        arrayInputValid.push(objet[property]["isValid"]);
  }
console.log(arrayInputValid);
return arrayInputValid;
}

/* affichage/retrait message erreur en fonction de isValid */
function displayErrorMessage(array) {
  for (let i = 0; i < array.length; i++) {
    if(array[i] === false){
    dataInput[inputProperties[i]]["noeud"].parentElement.setAttribute("data-error-visible", true);
    dataInput[inputProperties[i]]["noeud"].parentElement.setAttribute("data-error", dataInput[inputProperties[i]]["errorMessage"]);
  }else{
    dataInput[inputProperties[i]]["noeud"].parentElement.removeAttribute("data-error-visible");
    dataInput[inputProperties[i]]["noeud"].parentElement.removeAttribute("data-error");
  }
}
}/* displayErrorMessage(isInputValid(dataInput)) */