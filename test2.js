const regexOK = new RegExp("^(19|20)[0-9][0-9][/](0[1-9]|1[012])[/](0[1-9]|[12][0-9]|3[01])$");

const regexSimp = new RegExp("^(0|[0-9][0-9])$");
console.log(regexSimp.test("100"));

/* "^(19|20)\d\d[/](0[1-9]|1[012])[/](0[1-9]|[12][0-9]|3[01])$"*/

/* /^[a-zA-Z\-éëàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇÆæœ]{2,}$/ */


function testBirth() {
    if (regexDate.test(birth.value)) {
      birth.parentElement.removeAttribute("data-error-visible");
      birth.parentElement.removeAttribute("data-error");
    } else {
      birth.parentElement.setAttribute("data-error-visible", true);
      birth.parentElement.setAttribute("data-error", "erreur date de naissance");
    }
  }
  function testTournoi() {
    if (regexTournoi.test(tournoi.value)) {
      tournoi.parentElement.removeAttribute("data-error-visible");
      tournoi.parentElement.removeAttribute("data-error");
    } else {
      tournoi.parentElement.setAttribute("data-error-visible", true);
      tournoi.parentElement.setAttribute("data-error", "erreur nombre tournoi");
    }
  }
  testTournoi(); 