/**
 ********************* DECLARATIONS *********************
 */

const arrayRadio = document.querySelectorAll('[name="location"]'); //référence des 6 noeuds input radio
let inputResult = [];

/* déclaration des caractéristiques des 7 input dans objets */
const dataInput = {
  firstName: {
    noeud: document.querySelector('#first'),
    errorMessage: "Veuillez entrer entre 2 et 30 caractères dans le champ Prénom.",
    regex: /^[a-zA-Z]{2,30}$/,
    isValid: false
  },
  lastName: {
    noeud: document.querySelector('#last'),
    errorMessage: "Veuillez entrer entre 2 et 30 caractères dans le champ Nom.",
    regex: /^[a-zA-Z]{2,30}$/,
    isValid: false
  },
  email: {
    noeud: document.querySelector('#email'),
    errorMessage: "Veuillez entrer une syntaxe d'email valide",
    regex: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    isValid: false
  },
  birthDate: {
    noeud: document.querySelector('#birthdate'),
    errorMessage: "Veuillez entrer une date de naissance valide de type: jj/mm/aaaa",
    regex: /^(19|20)\d\d[/-](0[1-9]|1[012])[/-](0[1-9]|[12][0-9]|3[01])$/,
    isValid: false
  },
  nbTournoi: {
    noeud: document.querySelector('#quantity'),
    errorMessage: "Veuillez entrer un nombre compris entre 0 et 99",
    regex: /^([0-9]|[0-9][0-9])$/,
    isValid: false
  },
  radio: {
    noeud: document.querySelector('#location1'),
    errorMessage: "Veuillez sélectionner une ville",
    isValid: false
  },
  checkbox: {
    noeud: document.querySelector('#checkbox1'),
    errorMessage: "Veuillez accepter les conditions générales pour continuer",
    isValid: false
  },
}

/* perso: affiche un tableau des key isValid */
function testAllInput(){
  while (inputResult.length > 0) {
    inputResult.pop();
  };
  for (const key in dataInput) {
    inputResult.push(dataInput[key].isValid);
  }
  console.log(inputResult);
}

/* test des entrées avec regex (5 premieres entrées)*/
function testRegexInput(){
  for (const key in dataInput) {
    if (dataInput[key].regex) { //si il y a une regex
      if(dataInput[key].noeud.value.match(dataInput[key].regex)){
        dataInput[key].isValid = true;
      }else{
        dataInput[key].isValid = false;
      }
    }
  }
}

/* test la validité d'input 6 radio */
/* si un radio result est vrai, radio result passe a true si false il ne se passe rien: détecte si au moins une radio est cochée */
function testRadio() {
  let radioResult = false;
  for (let i = 0; i < arrayRadio.length; i++) {
    if (arrayRadio[i].checked) {
      radioResult = true;
    }
  }
  dataInput.radio.isValid = radioResult;
}

/* test la validité d'input 7 checkbox: conditions générales cochées = true */
function testCheckbox() {
  let result = false;
  if (dataInput.checkbox.noeud.checked) {
    result = true;
  }
  dataInput.checkbox.isValid = result;
}

//affiche les messages
function afficheErrorMessage(key) {
  if (!key.isValid) {
      key.noeud.parentElement.setAttribute("data-error-visible", true);
      key.noeud.parentElement.setAttribute("data-error", key.errorMessage)
  } else {
      key.noeud.parentElement.removeAttribute("data-error-visible");
      key.noeud.parentElement.removeAttribute("data-error");
  }
}

/* test les entrées et affiche les messages d'erreur */
function afficher(){
  testRegexInput();
  testRadio();
  testCheckbox();
  for (const key in dataInput) {
    console.log(dataInput[key]);
    afficheErrorMessage(dataInput[key]);
}
}
















document.querySelector('[name="reserve"]').addEventListener('submit', function (event) {
  event.preventDefault();
  testRegexInput();
  testRadio();
  testCheckbox();
  for (const key in dataInput) {
    console.log(dataInput.key);
    afficheErrorMessage(dataInput.key);
  }
}
);

/*
 let isOK = true;
  for (const key in dataInput) {
      if (dataInput[key].regex) { //si il y a une regex 
          isOK = false;
          afficheErrorMessage(dataInput[key]);
      }//else test input radio / coche
  }
/*
  if (isOK) {
      displayAllErrorMessage(testAllInput());
      document.querySelector("#thankMessage").classList.add('zIndex');
  } else {
      displayAllErrorMessage(testAllInput());
  }
 */ 


  


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

/* Passe le modal en display: block; ou none; */
function switchModal(display) {
  document.querySelector('.bground').style.display = display;
}

/**
 ********************* SUBMIT FORMULAIRE *********************
 */

/* clic sur bouton submit soumet le formulaire, si valide => affiche message remerciement, sinon affiche les messages d'erreur */
document.querySelector('[name="reserve"]').addEventListener('submit', function (event) {
  event.preventDefault();
  if (testAllInput().every()) {
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





