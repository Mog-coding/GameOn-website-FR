
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

/* test regex */
