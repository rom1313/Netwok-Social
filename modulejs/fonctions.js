import { articles } from "./variables";

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
export function profil(form) {
  if (form === true) {
    document.querySelector("form").style.display = "none";
  } else if (form === false) {
    document.querySelector("form").style.display = "flex";
  }
}
