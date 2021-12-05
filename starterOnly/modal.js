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
/* Clic sur bouton inscription fait apparaitre/disparaitre le modal */
document.querySelector('.btn-signup').addEventListener('click', function () {
  switchModal(true);
});
document.querySelector('.close').addEventListener('click', function () {
  switchModal(false);
});

/********************** TEST input NOM et PRENOM **********************/
const firstName = document.querySelector('#first'); //noeud <input> Prénom
const lastName = document.querySelector('#last'); //noeud <input> Nom

/* Vérifie que la donnée input match avec la regex si non: ajoute attributs erreur: style erreur et message d'erreur, si oui: supprime les attributs erreur */
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
/* vérification <input> Prénom et Nom */
lastName.addEventListener('change', checkFirstLastName);
firstName.addEventListener('change', checkFirstLastName);





/************ test input mail ************/
const regexMail = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])"); //regex validation mail RFC5322 format
let email = document.querySelector('#email');

function testEmail(mail) {
  if (regexMail.test(mail.target.value)) {
    mail.target.parentElement.removeAttribute("data-error-visible");
    mail.target.parentElement.removeAttribute("data-error");
  } else {
    mail.target.parentElement.setAttribute("data-error-visible", true);
    mail.target.parentElement.setAttribute("data-error", "erreur nom");
  }
}
email.addEventListener('change', testEmail);

/************ date de naissance ************/
const regexDate = new RegExp("^(19|20)\\d\\d[/](0[1-9]|1[012])[/](0[1-9]|[12][0-9]|3[01])$");

/************ test input radios ************/
/********************** déclaration variables **********************/
let radioStatus = false;
let checkboxStatus = true;
const errorCheckbox = document.querySelector('#errCheckbox');
const errorRadios = document.querySelector('#errRadios');
const arrayRadio = document.querySelectorAll('[name="location"]'); //référence des 6 noeuds input radio
/* event click pour chaque noeud du tableau radios, si au moins une radio est cliquée: radioStatus = true */
arrayRadio.forEach(function (z) {
  z.addEventListener('click', function () {
    radioStatus = true;
    errorRadios.textContent = "";
  })
});

/************ test checkbox1 ************/
/* référence noeud checbox1 si event click: changement boolean */
document.querySelector('#checkbox1').addEventListener("click", function () {
  if (checkboxStatus === false) {
    checkboxStatus = true;
    document.querySelector('#errCheckbox').textContent = "";
  } else {
    checkboxStatus = false;
  }
});

/************ submit: validation du formulaire ************/
document.querySelector(".btn-submit").addEventListener('click', function () {
  if (radioStatus === false) {
    errorRadios.textContent = "Vous devez choisir au moins une option pour continuer.";
  }
  if (checkboxStatus === false) {
    errorCheckbox.textContent = "Vous devez accepter les conditions générales pour continuer.";
  }
});

/*
 if( checkboxStatus && radioStatus ){
   document.querySelector('[name="registration"]').submit();
   console.log("submit");
}
*/