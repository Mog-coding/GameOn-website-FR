/********************** déclaration variables **********************/
let lastNameStatus = false;
let firstNameStatus = false;
let radioStatus = false;
let checkboxStatus = true;
let lastName = document.querySelector('#last'); //noeud input prénom  //CONST
let firstName = document.querySelector('#first'); //noeud input nom
let errorFirstName = document.querySelector('#errFirstName');
let errorLastName = document.querySelector('#errLastName');
let errorCheckbox = document.querySelector('#errCheckbox');
let errorRadios = document.querySelector('#errRadios');
const regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])"); //regex validation mail RFC5322 format
const arrayRadio = [document.querySelector('#location1'), document.querySelector('#location2'), document.querySelector('#location3'), document.querySelector('#location4'), document.querySelector('#location5'), document.querySelector('#location6')]; //référence des 6 noeuds input radio 
//get element tagname ou par classe en un tableau


firstName.addEventListener('change', checkFirstNameOrLastName);
lastName.addEventListener('change', checkFirstNameOrLastName);
function checkFirstNameOrLastName(event) {
  //verification, declaration, message erreur
  const id = event.target.id;
  if (/^[a-zA-Z\-éëàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇÆæœ]{2,}$/.test(event.target.value)) { //regex caractères
    event.target.parentElement.removeAttribute("data-error-visible");
    event.target.parentElement.removeAttribute("data-error");
  } else {
    event.target.parentElement.setAttribute("data-error-visible", true);
    event.target.parentElement.setAttribute("data-error", id === "first" ? "erreur prénom" : "erreur nom");
  }
}

/********************** ajout de class css **********************/
errorFirstName.classList.add('errorMessage');
errorLastName.classList.add('errorMessage');
errorCheckbox.classList.add('errorMessage');
errorRadios.classList.add('errorMessage');

/********************** déclaration functions **********************/
/* ouverture fermeture modal: référence div form: display none / block */
function toggleModal(open) {
  document.querySelector('.displayModal').style.display = open ? "block" : "none";
}
//open = true ou false
document.querySelector('.btn-signup').addEventListener('click', function () {
  toggleModal(true)
});
/* event clic sur croix fait disparaitre modal*/
document.querySelector('.close').addEventListener('click', function () {
  toggleModal(false)
});


/* Test noeudEcoute avec function checkCharacters, si true: efface message d'erreur noeud texte, si false: ajoute message d'erreur noeud texte  */
function errorMessage(noeudEcoute, noeudTexte, nameStatus) {
  noeudEcoute.addEventListener('change', function (event) {
    if (checkCharacters(event.target.value, nameStatus)) {
      document.querySelector(noeudTexte).textContent = "";
    } else {
      document.querySelector(noeudTexte).textContent = "Veuillez entrer dans le champ Nom entre 2 et 30 caractères.";
    }
  }
  );
}
lastName.maxlength = 30; /* ? 
errorMessage(firstName, '#errFirstName', firstNameStatus);
errorMessage(lastName, '#errLastName', lastNameStatus);
*/


/* test nombre caractères: true si nombre de caractères compris entre 2 et 30, sinon false */
function checkCharacters(inputData, nameStatus) {
  if (inputData.length > 1 && inputData.length < 31) {
    return nameStatus = true;
  } else {
    return nameStatus = false;
  }
}



/************ test input Prénom et Nom ************/


/************ test input mail ************/
let email = document.querySelector('#email');

function testEmail(mail) {
  console.log(regex.test(mail.target.value));
  console.log(mail.target.value);
  console.log(regex);
  email.addEventListener('change', testEmail);
}

/************ test input radios ************/
/* event click pour chaque noeud du tableau radios, si au moins une radio est cliquée: radioStatus = true */
arrayRadio.forEach(function (z) {
  z.addEventListener('click', function () {
    radioStatus = true;
    errorRadios.textContent = "";
  })
});
//recupere pas la valeur
//verifie valeur bouton radio et coche uniquement soumission formulaire
//pareil coche
//verifier evnent listener facile + verifier les 2 champ finaux



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
  if (checkboxStatus && radioStatus) {
    document.querySelector('[name="registration"]').submit();
  }
});
//sur formulaire et event submit pour balise <form>
//add.event.listner
//return pour arreter lexecution
