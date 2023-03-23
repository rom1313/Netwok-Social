import json from "../variableJSON.json";

export const articles = [
  {
    nom: "Le futur dans nos mains",
    text: "Blabla, c'est quoi c'est cool je fais un test à la con pour voir comment ça va marcher hihihih !! \n\nensuite, je suis un gars cool ahahah ce site est super necessary !",
    image: "https://zupimages.net/up/23/11/nj96.jpg",
    auteur: "Jonh",
  },
  {
    nom: "Une nuit de rêve",
    text: "Blabla, c'est qu454545454oi c'est cool je fais un test à la con pour voir comment ça va marcher hihihih !!",
    image: "https://zupimages.net/up/23/12/qzv4.jpg",
    auteur: "Elsa",
  },
];

export class Profil {
  constructor() {
    this.nom = "invité";
    this.rubis = 0;
  }
}

export const donnees = {
  utilisateur: new Profil(),
  io: "https://geniusjs.herokuapp.com",
  formouvert: false,
  profilconnecte: false,
};

(function (){
console.log('yo');
})()