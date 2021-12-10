/********************** OUVERTURE FERMETURE MODAL **********************/
/* Passe le modal en display: block; ou none; */
function switchModal(truefalse) {
    document.querySelector(".close").style.display = "display"; //croix masquée suite appuie bouton submit
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
  
  
  /********************** ECOUTE input NOM et PRENOM **********************/
  const firstName = document.querySelector('#first'); //noeud <input> Prénom
  const lastName = document.querySelector('#last'); //noeud <input> Nom
  const regexFirstLast = new RegExp("^[a-zA-Z]{2,30}$");
  
  /* Test si la donnée input match avec la regex suite à un événement change,si non: ajoute attributs erreur: style erreur et message d'erreur, si oui: supprime les attributs erreur */
  function checkFirstLastName(event) {
    if (regexFirstLast.test(event.target.value)) {
      event.target.parentElement.removeAttribute("data-error-visible");
      event.target.parentElement.removeAttribute("data-error");
    } else {
      event.target.parentElement.setAttribute("data-error-visible", true);
      if (event.target.id === "first") {
        event.target.parentElement.setAttribute("data-error", errorMessage[0]);
      } else {
        event.target.parentElement.setAttribute("data-error", errorMessage[1]);
      }
    }
  }
  /* Ecoute <input> Prénom et Nom */
  lastName.addEventListener('change', checkFirstLastName);
  firstName.addEventListener('change', checkFirstLastName);
  
  
  /********************** TEST input EMAIL BIRTH DATE TOURNOI **********************/
  const regexMail = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])"); //regex validation mail RFC5322 format
  const regexDate = new RegExp("^(19|20)\\d\\d[/-](0[1-9]|1[012])[/-](0[1-9]|[12][0-9]|3[01])$");
  const regexTournoi = new RegExp("^([0-9]|[0-9][0-9])$");
  const email = document.querySelector('#email'); //noeud input Email
  const birthDate = document.querySelector('#birthdate'); //noeud input date de naissance
  const nbTournoi = document.querySelector('#quantity'); //noeud input nombre de tournois
  const errorMessage = ["Veuillez entrer entre 2 et 30 caractères dans le champ Prénom.", "Veuillez entrer entre 2 et 30 caractères dans le champ Nom.", "erreur syntaxe email", "erreur date de naissance", "erreur nombre tournois", "sélectionner au moins une radio", "Veuillez accepter les conditions générales pour continuer"];  //Message d'erreur d'email, date de naissance, nombre tournoi, radio, checkbox
  
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
  
  
  /********************** VALIDATION FORMULAIRE ***********************/
  /* test la saisie d'un noeud et une regex, si match, renvoie true, sinon false */
  function noeudRegex(regex, noeud) {
    return regex.test(noeud.value)
  };
  /* test les 7 input du formulaire, renvoie true si correctement remplis, sinon false */
  function testAllInput() {
    if (noeudRegex(regexFirstLast, firstName) && noeudRegex(regexFirstLast, lastName) && noeudRegex(regexMail, email) && noeudRegex(regexDate, birthDate) && noeudRegex(regexTournoi, nbTournoi) && testRadio() && testCheckbox()) {
      return true;
    } else {
      return false;
    }
  }
  
  /* test les input et envoie le formulaire, si erreur: affiche les messages d'erreur et n'envoie pas le formulaire.  */
  document.querySelector('[name="reserve"]').addEventListener('submit', function (event) {
    event.preventDefault(); //empêche l'envoi du formulaire suite à un appui sur bouton submit ET un formulaire non valide
    /* test toutes les 7 input du formulaire */
    if (testAllInput()) {
       document.querySelector("#thankMessage").style.display = "block";
       document.querySelector(".close").style.display = "none";
    } else {
      /* affiche messages d'erreur si saisie firstName, lastName, email, date de naissance, nombre de tournois, radio et checkbox non conforme */
      messageInput(firstName, regexFirstLast, errorMessage[0]);
      messageInput(lastName, regexFirstLast, errorMessage[1]);
      messageInput(email, regexMail, errorMessage[2]);
      messageInput(birthDate, regexDate, errorMessage[3]);
      messageInput(nbTournoi, regexTournoi, errorMessage[4]);
      messageRadioCheck(testRadio(), noeudRadio, errorMessage[5]);
      messageRadioCheck(testCheckbox(), noeudCheckbox, errorMessage[6]);
      return false;
    }
  }
  );
  
  
  /********************** BOUTON FERMER ***********************/
  document.querySelector("#fermer").addEventListener('click', function (event) {
    event.preventDefault(); //supprime le comportement submit button de <form>
    document.querySelector("#thankMessage").style.display = "none"; //Fait disparaitre le thank message
    switchModal(false); //ferme le modal
  });