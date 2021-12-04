lastName.maxlength = 30; 
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


lastName.addEventListener('change', checkFirstNameOrLastName);
function checkFirstNameOrLastName(event) {
  if (/^[a-zA-Z\-éëàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇÆæœ]{2,}$/.test(event.target.value)) { 
    event.target.parentElement.removeAttribute("data-error-visible");
    event.target.parentElement.removeAttribute("data-error");
  } else {
    event.target.parentElement.setAttribute("data-error-visible", true);
    event.target.parentElement.setAttribute("data-error", "erreur nom");
  }
}