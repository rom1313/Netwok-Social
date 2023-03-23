// todo ---------------------------------------------------------------------
// todo --------------------- Imports -------------------
// todo ---------------------------------------------------------------------
import { creationarticle, profil, chargementprofil, errorform } from "./modulejs/fonctions";

import { Profil, donnees, form } from "./modulejs/variables";

// todo ---------------------------------------------------------------------
// todo --------------------- variables -------------------
// todo ---------------------------------------------------------------------
export const genius = $;

const profilBDD = {
  nom: "rom",
  rubis: 200,
};
const socket = io(donnees.io);
// todo ---------------------------------------------------------------------
// todo --------------------- onload / main -------------------
// todo ---------------------------------------------------------------------
onload = () => {
  let block = document.querySelector("#blockcard");
  let w = block.clientWidth;
  let h = block.clientHeight;
  let b = block.getBoundingClientRect();

  block.addEventListener("mousemove", (e) => {
    let X = (e.clientX - b.left) / w;
    let Y = (e.clientY - b.top) / h;

    document.documentElement.style.setProperty("--lightpositionX", 100 * X + "%");
    document.documentElement.style.setProperty("--lightpositionY", 100 * Y + "%");
  });

  let couleur = getComputedStyle(document.documentElement).getPropertyValue("--rouge");
  /*  
  document.documentElement.style.setProperty("--x", 1055 + "%"); */
  /*   document.querySelector("#blockcard").addEventListener("mouseover", () => {
    console.log("mouse");
    document.querySelector("#blockcard").style.transform = `rotateX(${positionX}%)`;
  }); */



  chargementprofil(donnees.utilisateur);

  /*  chargementprofil(profilBDD) */

  /*  creationarticle(); */
};
// todo ----- Main --------

// todo ---------------------------------------------------------------------
// todo --------------------- Events -------------------
// todo ---------------------------------------------------------------------
genius.event("#compteicon", "click", () => {
  if (donnees.profilconnecte === true) {
  } else {
    if (donnees.formouvert === false) {
      profil(donnees.formouvert);
      donnees.formouvert = true;
    } else {
      profil(donnees.formouvert);
      donnees.formouvert = false;
    }
  }
});
genius.event("#spanpass", "click", () => {
  if (document.querySelector("#inputpass").type === "text") {
    document.querySelector("#inputpass").type = "password";
  } else {
    document.querySelector("#inputpass").type = "text";
  }
});

genius.event("#fermerform", "click", () => {
  profil(donnees.formouvert);
  donnees.formouvert = false;
});

genius.event("#connexionform", "click", (e) => {
  e.preventDefault();
  let inputname = document.querySelector("#inputname");
  let inputpass = document.querySelector("#inputpass");
  if (inputname.value === "" || inputpass.value === "") {
    errorform("Veuillez remplir tous les champs");
  } else if (inputname.value === "invité") {
    errorform("Choisissez un autre pseudo");
  } else {
    let compte = {
      nom: inputname.value,
      pass: inputpass.value,
    };
    socket.emit("connexionnetwork", compte);
  }
});
// todo ---------------------------------------------------------------------
// todo --------------------- socket -------------------
// todo ---------------------------------------------------------------------
socket.on("reponseconnexionnetworkok", (data) => {
  donnees.utilisateur = data;
  chargementprofil(donnees.utilisateur);
  console.log(donnees.utilisateur);
  console.log("Reponse du genius serveur ok");
});

socket.on("reponseconnexionnetworkerror", (data) => {
  errorform("Pseudo ou mot de passe incorrect");
  console.log("error");
});
