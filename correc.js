/**
 ********************* DECLARATIONS *********************
 */
//référence des 6 noeuds input radio
const arrayRadio = document.querySelectorAll('[name="location"]');


/* let inputResult = [];

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

/*********** test de validité de radio ************/

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

/**
 ********************* FONCTION PRINCIPALES *********************
 */

/* affichage/retrait d'un message erreur en fonction du boolean de l'input et de son nom */
function afficheErrorMessage(inputResult) {
    if (!inputResult.isValid) {
        inputResult.noeud.parentElement.setAttribute("data-error-visible", true);
        inputResult.noeud.parentElement.setAttribute("data-error", inputResult.errorMessage)
    } else {
        inputResult.noeud.parentElement.removeAttribute("data-error-visible");
        inputResult.noeud.parentElement.removeAttribute("data-error");
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
    let isOK = true;
    for (const key in dataInput) {
        if (!dataInput[key].isValid) { //si il y a une regex 
            isOK = false;
            afficheErrorMessage(dataInput[key]);
        }//else test input radio / coche
    }

    if (isOK) {
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

for (const key in dataInput) {
    dataInput[key].noeud.addEventListener('change', function (event) {
        if (dataInput[key].regex) { //si il y a une regex 
            dataInput[key].isValid = dataInput[key].regex.test(event.target.value);
        }//else test input radio / coche
        afficheErrorMessage(dataInput[key]);
    })
}
/*
  for (let i = 0; i < inputProperties.length; i++) {
    dataInput[inputProperties[i]]["noeud"].addEventListener('change', function (event) {
      const index = i; //let réecrite a chaque fois, i = a la derniere itération
      testAllInput();
      afficheErrorMessage(inputResult[index], inputProperties[index]); 
    });
  }
*/










/* responsive */
function editNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}