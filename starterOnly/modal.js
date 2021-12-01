/********************** déclaration variables **********************/
let lastNameStatus = false;
let firstNameStatus = false;
let radioStatus = false; 
let checkboxStatus = true;
let lastName = document.querySelector('#last');
let firstName = document.querySelector('#first');
let errorFirstName = document.querySelector('#errFirstName');
let errorLastName = document.querySelector('#errLastName');
let errorCheckbox = document.querySelector('#errCheckbox');
let errorRadios = document.querySelector('#errRadios');
const arrayRadio = [document.querySelector('#location1'), document.querySelector('#location2'), document.querySelector('#location3'), document.querySelector('#location4'), document.querySelector('#location5'), document.querySelector('#location6')]; //référence des 6 noeuds input radio 

/********************** ajout de class css **********************/
errorFirstName.classList.add('errorMessage');
errorLastName.classList.add('errorMessage');
errorCheckbox.classList.add('errorMessage');
errorRadios.classList.add('errorMessage');

/********************** déclaration function **********************/
/* ouverture fermeture modal: référence div form: display none / block */
function launchModal(){
  document.querySelector('.displayModal').style.display = "block";
}
function closeModal(){
  document.querySelector('.displayModal').style.display = "none";
}
/* Vérifie noeudEcoute. true si nombre de caractères compris entre 2 et 30: efface message noeudTexte. false: envoie message d'erreur dans noeudTexte*/
/*
function checkCaracters(noeudEcoute, noeudTexte){
  noeudEcoute.addEventListener('change', function(event){
    let inputData = event.target.value;
    if ( inputData.length > 1 && inputData.length < 31  ){
     document.querySelector(noeudTexte).textContent = "";
     return lastNameStatus = true;
     }else{
       document.querySelector(noeudTexte).textContent = "Veuillez entrer dans le champ Nom entre 2 et 30 caractères.";
       return lastNameStatus = false;
     }
    }
 );
}
checkCaracters('lastName', '#errLastName');
checkCaracters('firstName', '#errFirstName');
*/

/********************** MAIN **********************/
/* event clic sur bouton inscription fait apparaitre modal */
document.querySelector('.btn-signup').addEventListener('click', launchModal);
/* event clic sur croix fait disparaitre modal*/
document.querySelector('.close').addEventListener('click', closeModal);

/************ test input Nom et Prénoms ************/
lastName.maxlength = 30; /* ? */
lastName.addEventListener('change', function(event){
  let inputData = event.target.value;
  if ( inputData.length > 1 && inputData.length < 31  ){
   document.querySelector('#errLastName').textContent = "";
   return lastNameStatus = true;
   }else{
     document.querySelector('#errLastName').textContent = "Veuillez entrer dans le champ Nom entre 2 et 30 caractères.";
     return lastNameStatus = false;
   }
  }
);
firstName.addEventListener('change', function(event){
 let firstNameData = event.target.value;
 if ( firstNameData.length > 1 && firstNameData.length < 31  ){
  document.querySelector('#errFirstName').textContent = "";
  return firstNameStatus = true;
  }else{
    document.querySelector('#errFirstName').textContent = "Veuillez entrer dans le champ Nom entre 2 et 30 caractères.";
    return firstNameStatus = false;
  }
 }
);

/************ test input radios ************/
/* event click pour chaque noeud du tableau radios, si au moins une radio est cliquée: radioStatus = true */
arrayRadio.forEach(function(z){
  z.addEventListener('click', function(){
     radioStatus = true;
     errorRadios.textContent = "";
  })
});

/************ test checkbox1 ************/
/* référence noeud checbox1 si event click: changement boolean */
document.querySelector('#checkbox1').addEventListener("click", function(){
 if (checkboxStatus === false){
   checkboxStatus = true;
   document.querySelector('#errCheckbox').textContent = "";
 }else{
  checkboxStatus = false;
 }
});

/************ submit: validation du formulaire ************/
document.querySelector(".btn-submit").addEventListener('click', function(){
  if( radioStatus === false ){
    errorRadios.textContent = "Vous devez choisir au moins une option pour continuer.";
  }
  if( checkboxStatus === false ){
    errorCheckbox.textContent = "Vous devez accepter les conditions générales pour continuer.";
  }
  if( checkboxStatus && radioStatus === true ){  
    document.querySelector('[name="registration"]').submit();
 }
});

