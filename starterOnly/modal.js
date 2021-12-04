/********************** déclaration variables **********************/
let radioStatus = false; 
let checkboxStatus = true;
const errorCheckbox = document.querySelector('#errCheckbox');
const errorRadios = document.querySelector('#errRadios');
const arrayRadio = document.querySelectorAll('[name="location"]'); //référence des 6 noeuds input radio 

/********************** OUVERTURE FERMETURE MODAL **********************/
/* référence div form: display none / block */
function switchModal(truefalse){
  document.querySelector('.displayModal').style.display = result(truefalse)};
/*  open ? "block" : "none"; */
function result(truefalse){ /* = if problème */
  if (truefalse){
    return "block"
  }else{
    return "none"
  };
};
/* clic sur bouton inscription fait apparaitre modal */
document.querySelector('.btn-signup').addEventListener('click', function(){
  switchModal(true);
});
/* clic sur croix fait disparaitre modal */
document.querySelector('.close').addEventListener('click', function(){
  switchModal(false);
});

/********************** TEST NOM **********************/
const lastName = document.querySelector('#last'); 
const firstName = document.querySelector('#first'); 
function checkLastName(event) {
  if (/^[a-zA-Z]{2,30}$/.test(event.target.value)) { 
    event.target.parentElement.removeAttribute("data-error-visible");
    event.target.parentElement.removeAttribute("data-error");
  } else {
    event.target.parentElement.setAttribute("data-error-visible", true);
    event.target.parentElement.setAttribute("data-error", "erreur nom");
  }
}
lastName.addEventListener('change', checkLastName);

/************ test input mail ************/
const regexMail = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])"); //regex validation mail RFC5322 format
let email = document.querySelector('#email');

function testEmail(mail){
if(regexMail.test(mail.target.value)){
  mail.target.parentElement.removeAttribute("data-error-visible");
  mail.target.parentElement.removeAttribute("data-error");
}else{
  mail.target.parentElement.setAttribute("data-error-visible", true);
  mail.target.parentElement.setAttribute("data-error", "erreur nom");
}
}
email.addEventListener('change', testEmail);

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
 });

 /*
  if( checkboxStatus && radioStatus ){  
    document.querySelector('[name="registration"]').submit();
    console.log("submit");
 }
 */