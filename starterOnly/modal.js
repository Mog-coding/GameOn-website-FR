/* déclaration variables */
let radioStatus = false; 
let checkboxStatus = true;
let errorCheckbox = document.querySelector('#errCheckbox');
let errorRadios = document.querySelector('#errRadios');

/* ajout de style */
errorCheckbox.classList.add('errorMessage');
errorRadios.classList.add('errorMessage');

/********************** apparition / disparition modal **********************/
/*référence div englobante formulaire, function display none / block*/
function launchModal(){
  document.querySelector('.displayModal').style.display = "block";
}
function closeModal(){
  document.querySelector('.displayModal').style.display = "none";
}
/* event clic sur bouton inscription fait apparaitre modal */
document.querySelector('.btn-signup').addEventListener('click', launchModal);
/* event clic sur croix fait disparaitre modal*/
document.querySelector('.close').addEventListener('click', closeModal);

/********************** test radios et checkbox1 cochés **********************/
/* référence des 6 noeuds input radio */
const arrayRadio = [document.querySelector('#location1'), document.querySelector('#location2'), document.querySelector('#location3'), document.querySelector('#location4'), document.querySelector('#location5'), document.querySelector('#location6')];

/* pour chaque noeud du tableau, ajouter un event click, si au moins une radio est cliquée: radioStatus = true */
arrayRadio.forEach(function(z){
  z.addEventListener('click', function(){
     radioStatus = true;
     errorRadios.textContent = "";
  })
})
/* test checkbox1 si cochée: checboxStatus = true sinon false  */
/* référence noeud checbox1 si event click: changement boolean */
document.querySelector('#checkbox1').addEventListener("click", function(){
 if (checkboxStatus === false){
   checkboxStatus = true;
   document.querySelector('#errCheckbox').textContent = "";
 }else{
  checkboxStatus = false;
 }
});

/********************** Validation du formulaire **********************/
document.querySelector(".btn-submit").addEventListener('click', function(){
  if( radioStatus === false ){
    errorRadios.textContent = "Vous devez choisir au moins une option pour continuer.";
  }
  if( checkboxStatus === false ){
    errorCheckbox.textContent = "Vous devez accepter les conditions générales pour continuer.";
  }
  if(checkboxStatus && radioStatus === true ){  
    document.querySelector('[name="registration"]').submit();
 }
});

