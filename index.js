import { creationarticle, profil } from "./modulejs/fonctions";
const genius = $;



let form = false;
onload = () => {
  creationarticle();
  genius.event("#compteicon", "click", () => {
    if (form === false) {
      profil(form);
      form = true;
    } else {
      profil(form);
      form = false;
    }
  });

  genius.event("#fermerform", "click", () => {
    profil(form);
    form = false;
  });
};
