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
let inputResult = [];

/* déclaration des objets */
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
    errorMessage: "erreur syntaxe email",
    regex: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
  },
  birthDate: {
    noeud: document.querySelector('#birthdate'),
    errorMessage: "erreur date de naissance",
    regex: /^(19|20)\d\d[/-](0[1-9]|1[012])[/-](0[1-9]|[12][0-9]|3[01])$/,
  },
  nbTournoi: {
    noeud: document.querySelector('#quantity'),
    errorMessage: "erreur nombre tournois",
    regex: /^([0-9]|[0-9][0-9])$/,
  },
  radio: {
    noeud: document.querySelector('#location1'),
    errorMessage: "Veuillez sélectionner une ville",
    regex: "",
  },
  checkbox: {
    noeud: document.querySelector('#checkbox1'),
    errorMessage: "Veuillez accepter les conditions générales pour continuer",
    regex: "",
  },
}

/* affichage/retrait message erreur en fonction d'un tableau avec validité des entrées */
function displayErrorMessage(isInputValid) {
  for (let i = 0; i < isInputValid.length; i++) {
    if (Boolean(isInputValid[i]) === false) {
      dataInput[inputProperties[i]]["noeud"].parentElement.setAttribute("data-error-visible", true);
      dataInput[inputProperties[i]]["noeud"].parentElement.setAttribute("data-error", dataInput[inputProperties[i]]["errorMessage"]);
    } else {
      dataInput[inputProperties[i]]["noeud"].parentElement.removeAttribute("data-error-visible");
      dataInput[inputProperties[i]]["noeud"].parentElement.removeAttribute("data-error");
    }
  }
}

/*********** test de validité des 7 entrées ************/
/* test les regex des 5 premieres input */
function validRegex(inputResult) {
  for (let i = 0; i < 5; i++) {
    let result = dataInput[inputProperties[i]]["noeud"].value.match(dataInput[inputProperties[i]]["regex"]);
    inputResult.push(result);
  }
  return inputResult;
};

/* test la validité d'input 6 radio */
function testRadio() {
  let radioResult = false;
  for (let i = 0; i < arrayRadio.length; i++) {
    if (arrayRadio[i].checked) {
      radioResult = true;
    }
  }
  return radioResult;
}

/* test la validité d'input 7 checkbox*/
function testCheckbox() {
  let result = false;
  if (dataInput.checkbox.noeud.checked) {
    result = true;
  }
  return result;
}

/* test la validité de TOUTES les inputs (appel les 3 fonctions au dessus), return array boolean*/
function testAllInput() {
  while (inputResult.length > 0) {
    inputResult.pop();
  };
  validRegex(inputResult);
  inputResult.push(testRadio(), testCheckbox());
  console.log(inputResult);
  return inputResult;
}

function isTrue(element) {
  return Boolean(element) === true;
}


/******** Appui bouton submit ******/
document.querySelector('[name="reserve"]').addEventListener('submit', function (event) {
  event.preventDefault();
  if (testAllInput().every(isTrue)) {
    document.querySelector("#thankMessage").style.display = "block";
    document.querySelector(".close").style.display = "none";
  } else {
    displayErrorMessage(testAllInput());
  }
}
);

/********************** BOUTON FERMER ***********************/
document.querySelector("#fermer").addEventListener('click', function (event) {
  event.preventDefault(); //supprime le comportement submit button de <form>
  document.querySelector("#thankMessage").style.display = "none"; //Fait disparaitre le thank message
  switchModal(false); //ferme le modal
});
