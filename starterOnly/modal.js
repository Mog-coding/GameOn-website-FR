/**
 ********************* DECLARATIONS *********************
 */

const arrayRadio = document.querySelectorAll('[name="location"]'); //référence des 6 noeuds input radio
const inputProperties = ['firstName', 'lastName', 'email', 'birthDate', 'nbTournoi', 'radio', 'checkbox',];
const radioLocation = ['#location1', '#location2', '#location3', '#location4', '#location5', '#location6',];
let inputResult = [];

/* déclaration des caractéristiques des 7 input dans objets */
const dataInput = {
  firstName: {
    noeud: document.querySelector('#first'),
    errorMessage: "Veuillez entrer entre 2 et 30 caractères dans le champ Prénom.",
    regex: /^[a-zA-Z]{2,30}$/,
  },
  lastName: {
    noeud: document.querySelector('#last'),
    errorMessage: "Veuillez entrer entre 2 et 30 caractères dans le champ Nom.",
    regex: /^[a-zA-Z]{2,30}$/,
  },
  email: {
    noeud: document.querySelector('#email'),
    errorMessage: "Veuillez entrer une syntaxe d'email valide",
    regex: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
  },
  birthDate: {
    noeud: document.querySelector('#birthdate'),
    errorMessage: "Veuillez entrer une date de naissance valide de type: jj/mm/aaaa",
    regex: /^(19|20)\d\d[/-](0[1-9]|1[012])[/-](0[1-9]|[12][0-9]|3[01])$/,
  },
  nbTournoi: {
    noeud: document.querySelector('#quantity'),
    errorMessage: "Veuillez entrer un nombre compris entre 0 et 99",
    regex: /^([0-9]|[0-9][0-9])$/,
  },
  radio: {
    noeud: document.querySelector('#location1'),
    errorMessage: "Veuillez sélectionner une ville",
  },
  checkbox: {
    noeud: document.querySelector('#checkbox1'),
    errorMessage: "Veuillez accepter les conditions générales pour continuer",
  },
}

/**
 ********************* FONCTION SECONDAIRES *********************
 */

/* Passe le modal en display: block; ou none; */
function switchModal(truefalse) {
  document.querySelector('.bground').style.display = truefalse;
}

/* transforme un élément en Boolean et vérifie si il est true */
function isTrue(element) {
  return Boolean(element) === true;
}

/* test les regex des 5 premieres input: si regex match avec saisie = true */
function validRegex(inputResult) {
  for (let i = 0; i < 5; i++) {
    let result = dataInput[inputProperties[i]]["noeud"].value.match(dataInput[inputProperties[i]]["regex"]);
    inputResult.push(result);
  }
  return inputResult;
}

/* test la validité d'input 7 checkbox: conditions générales cochées = true*/
function testCheckbox() {
  let result = false;
  if (dataInput.checkbox.noeud.checked) {
    result = true;
  }
  return result;
}

/*********** test de validité de radio ************/

/* test la validité d'input 6 radio */
function checkRadio() {
  let radioResult = false;
  for (let i = 0; i < arrayRadio.length; i++) {
    if (arrayRadio[i].checked) {
      radioResult = true;
    }
  }
  return radioResult;
}

//disable / enable radio dans le html
function disableRadio() {
  for (let i = 0; i < radioLocation.length; i++) {
    document.querySelector(radioLocation[i]).checked = false;
    document.querySelector(radioLocation[i]).setAttribute("disabled", "");
  }
}
function enableRadio() {
  for (let i = 0; i < radioLocation.length; i++) {
    document.querySelector(radioLocation[i]).removeAttribute("disabled");
  }
}

// si saisie input radio = 0 ou "" => disable radio, sinon enable radio
function testRadio() {
  let valueTournoi = dataInput.nbTournoi.noeud.value;
  document.querySelector('#location1').removeAttribute("disabled");
  if (valueTournoi === '0' || valueTournoi === '') {
    disableRadio();
    return radioResult = true;
  } else if (Number(valueTournoi) >= 1 && Number(valueTournoi) < 100) {
    enableRadio()
    return checkRadio();
  };
}
/* fin test de validité de radio */

/* responsive */
function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

/**
 ********************* FONCTION PRINCIPALES *********************
 */

/* affichage/retrait d'un message erreur en fonction du boolean de l'input et de son nom */
function afficheErrorMessage(inputResult, inputProperties) {
  if (Boolean(inputResult) === false) {
    dataInput[inputProperties]["noeud"].parentElement.setAttribute("data-error-visible", true);
    dataInput[inputProperties]["noeud"].parentElement.setAttribute("data-error", dataInput[inputProperties]["errorMessage"]);
  } else {
    dataInput[inputProperties]["noeud"].parentElement.removeAttribute("data-error-visible");
    dataInput[inputProperties]["noeud"].parentElement.removeAttribute("data-error");
  }
}

/* test la validité de TOUTES les inputs, return array inputResult boolean*/
function testAllInput() {
  while (inputResult.length > 0) {
    inputResult.pop();
  };
  validRegex(inputResult);
  inputResult.push(testRadio(), testCheckbox());
  return inputResult;
}

/* affichage/retrait de tous les messages d'erreur en fonction d'un tableau de validité des l'input et d'un tableau de nom */
function displayAllErrorMessage(testAllInput) {
  for (let i = 0; i < testAllInput.length; i++) {
    afficheErrorMessage(testAllInput[i], inputProperties[i]);
  }
}

/**
 ********************* OUVERTURE / FERMETURE MODAL *********************
 */

/* Clic sur l'un des deux boutons d'inscription fait apparaitre le modal */
document.querySelectorAll(".modal-btn").forEach(function (el) {
  el.addEventListener('click', function () {
    switchModal("block");
  })
})

/*Clic sur croix, fait disparaitre le modal */
document.querySelector('.close').addEventListener('click', function () {
  switchModal("none");
});

/**
 ********************* SUBMIT FORMULAIRE *********************
 */

/* clic sur bouton submit soumet le formulaire, si valide => affiche message remerciement, sinon affiche les messages d'erreur */
document.querySelector('[name="reserve"]').addEventListener('submit', function (event) {
  event.preventDefault();
  if (testAllInput().every(isTrue)) {
    displayAllErrorMessage(testAllInput());
    document.querySelector("#thankMessage").classList.add('zIndex');
  } else {
    displayAllErrorMessage(testAllInput());
  }
}
);

/**
 ********************* MESSAGE REMERCIEMENT bouton fermer *********************
 */

/* ferme le modal suite à appui sur le bouton fermer du message de remerciement */
document.querySelector("#fermer").addEventListener('click', function (event) {
  event.preventDefault(); //supprime le comportement submit button de <form>
  document.querySelector("#thankMessage").classList.remove('zIndex'); //Fait disparaitre le thank message
  switchModal("none"); //ferme le modal
});

/**
 ********************* addEventListener sur 5 INPUT *********************
 */

dataInput[inputProperties[0]]["noeud"].addEventListener('change', function (event) {
  testAllInput();
  afficheErrorMessage(inputResult[0], inputProperties[0]);
});
dataInput[inputProperties[1]]["noeud"].addEventListener('change', function (event) {
  testAllInput();
  afficheErrorMessage(inputResult[1], inputProperties[1]);
});
dataInput[inputProperties[2]]["noeud"].addEventListener('change', function (event) {
  testAllInput();
  afficheErrorMessage(inputResult[2], inputProperties[2]);
});
dataInput[inputProperties[3]]["noeud"].addEventListener('change', function (event) {
  testAllInput();
  afficheErrorMessage(inputResult[3], inputProperties[3]);
});
dataInput[inputProperties[4]]["noeud"].addEventListener('change', function (event) {
  testAllInput();
  afficheErrorMessage(inputResult[4], inputProperties[4]);
});
dataInput[inputProperties[5]]["noeud"].addEventListener('change', function (event) {
  testAllInput();
  afficheErrorMessage(inputResult[5], inputProperties[5]);
});

/*
//1) convertir le bloc au dessus avec la fonction en dessous
function listenAll(){
for ( let z = 0; z < inputProperties.length; z++){
dataInput[inputProperties[z]]["noeud"].addEventListener('change', function (event) {
  testAllInput();
  afficheErrorMessage(inputResult[z], inputProperties[z]); //2) je n'arrive pas a envoyer [z] ici
});
}
}

listenAll(); 
*/


