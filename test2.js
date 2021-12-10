/* messageErreur(testAllInput(objet)) */
function messageErreur(arrayFalse) {
  /*affiche les message d'erreur */
  dataInput[arrayFalse[0]]["noeud"].parentElement.setAttribute("data-error-visible", true);
  dataInput[arrayFalse[0]]["noeud"].parentElement.setAttribute("data-error", dataInput[arrayFalse[0]]["errorMessage"]);
}
/* messageOk(arrayFull, testAllInput(dataInput)); */
function messageOk(arrayFull, arrayFalse){
  /* tableau full - tableau erreur = reste noeud ok */
  let arrayTrue = soustraire(arrayFull, arrayFalse);
  for (let i = 0; i < arrayTrue.length; i++ ){
    if (arrayTrue[i] !== false){
      dataInput[arrayTrue[i]]["noeud"].parentElement.removeAttribute("data-error-visible");
      dataInput[arrayTrue[i]]["noeud"].parentElement.removeAttribute("data-error");
    }
  } 
}
/* messageAllErreur(testAllInput(dataInput)) */
function messageAllErreur(arrayFalse) {
  for (let i = 0; i < arrayFalse.length; i++) {
    dataInput[arrayFalse[i]]["noeud"].parentElement.setAttribute("data-error-visible", true);
    dataInput[arrayFalse[i]]["noeud"].parentElement.setAttribute("data-error", dataInput[arrayFalse[i]]["errorMessage"]);
  }
}