import { articles, donnees } from "./variables";
import { genius } from "../index.js/";
// todo ---------------------------------------------------------------------
// todo --------------------- creation Aticles -------------------
// todo ---------------------------------------------------------------------
export function creationarticle() {
  articles.forEach((element) => {
    let div = document.createElement("div");
    div.className = "blockarticles";
    let h1 = document.createElement("h1");
    h1.textContent = element.nom;
    let h2 = document.createElement("h1");
    h2.textContent = element.auteur;

    let p = document.createElement("p");
    p.className = "textearticles";
    p.textContent = element.text;
    let img = document.createElement("img");
    img.className = "imagearticles";
    img.src = element.image;

    div.appendChild(h1);
    div.appendChild(img);
    div.appendChild(p);

    div.appendChild(h2);
    document.querySelector("main").appendChild(div);
  });
}
// todo ---------------------------------------------------------------------
// todo --------------------- affichage formulaire -------------------
// todo ---------------------------------------------------------------------
export function profil(form) {
  if (form === true) {
    document.querySelector("form").style.display = "none";
  } else if (form === false) {
    document.querySelector("form").style.display = "flex";
  }
}
// todo ---------------------------------------------------------------------
// todo --------------------- MAJ profil -------------------
// todo ---------------------------------------------------------------------
export function chargementprofil(utilisateurparam) {
  if (utilisateurparam.nom === "invité") {
    if (localStorage.getItem("nom") === null || localStorage.getItem("nom") === "invité") {
    }
  } else {
    donnees.utilisateur = utilisateurparam;
    localStorage.setItem("nom", utilisateurparam.nom);
    document.querySelector("#rubiscount").textContent = donnees.utilisateur.rubis;
    document.querySelector("form").style.display = "none";
    donnees.formouvert = false;
    donnees.profilconnecte = true;
  }
}
// todo ---------------------------------------------------------------------
// todo --------------------- Error form -------------------
// todo ---------------------------------------------------------------------
export function errorform(text) {
  let perror = document.createElement("p");
  perror.textContent = text;
  perror.className = "perror";
  document.querySelector("form").appendChild(perror);
  genius.timeursecondes(1, () => {
    perror.remove();
  });
}


