// todo ---------------------------------------------------------------------
// todo --------------------- Imports -------------------
// todo ---------------------------------------------------------------------
import { creationarticle, profil, chargementprofil, errorform } from "./modulejs/fonctions";

import { Profil, donnees, form } from "./modulejs/variables";

// todo ---------------------------------------------------------------------
// todo --------------------- variables -------------------
// todo ---------------------------------------------------------------------
export const genius = $;
let pageactuel = "home";
let scriptencours;
const card = "#blockcard";
const profilBDD = {
  nom: "rom",
  rubis: 200,
};
const socket = io(donnees.io);

// todo ---------------------------------------------------------------------
// todo --------------------- onload / main -------------------
// todo ---------------------------------------------------------------------
onload = () => {
  chargementprofil(donnees.utilisateur);

  // todo ----- Card effect --------

  let couleur = getComputedStyle(document.documentElement).getPropertyValue("--rouge"); // obtenir une variable du css

  // todo ----- Main --------
  // TODO FECTH PAGES ---------------------------------------
  // todo ----------------------------------------------------- Page test

  creationarticle();
};

// todo ---------------------------------------------------------------------
// todo --------------------- Events -------------------
// todo ---------------------------------------------------------------------
// todo Event Nav Home -----------
genius.event("#lihome", "click", () => {
  if (pageactuel === "home") {
  } else {
    document.querySelector("#blockcard").remove();
    scriptencours.remove();
    document.querySelector("main").innerHTML = "";
    pageactuel = "home";
  }
});

// todo Event Nav Articles -----------
genius.event("#liarticles", "click", () => {
  fetch("./pages/test.html").then((response) => {
    response.text().then((text) => {
      let pagetest = text;

      document.querySelector("main").innerHTML = pagetest;
    });

    fetch("./pages/test.mjs")
      .then((response) => response.text())
      .then((txt) => {
        scriptencours = document.createElement("script");
        scriptencours.innerHTML = txt;
        document.querySelector("#blockcard").appendChild(scriptencours);
      });
    pageactuel = "articles";
  });
});
// todo Event logo profil -----------
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
// todo Event masque / afficher pass (form) -----------
genius.event("#spanpass", "click", () => {
  if (document.querySelector("#inputpass").type === "text") {
    document.querySelector("#inputpass").type = "password";
  } else {
    document.querySelector("#inputpass").type = "text";
  }
});
// todo Event fermer form -----------
genius.event("#fermerform", "click", () => {
  profil(donnees.formouvert);
  donnees.formouvert = false;
});
// todo Event connexion form (boutton) -----------
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
// todo Event CONNEXION OK SERVER -----------
socket.on("reponseconnexionnetworkok", (data) => {
  donnees.utilisateur = data;
  chargementprofil(donnees.utilisateur);
  console.log(donnees.utilisateur);
  console.log("Reponse du genius serveur ok");
});
// todo Event CONNEXION ERROR SERVER -----------
socket.on("reponseconnexionnetworkerror", (data) => {
  errorform("Pseudo ou mot de passe incorrect");
  console.log("error");
});
