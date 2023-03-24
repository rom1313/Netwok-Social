export const articles = [
  {
    nom: "Online Font creator",
    text: "Voici un petit site sympa pour créer votre propre Font ! \nIl faudra vous armé de patience pour faire toutes vos lettres..La bonne nouvelle est qu'il vous propose aussi de modifier des fonts existantes. 🤘🏼",
    image: "../ressources/img/articles/font.webp",
    auteur: "https://fontark.net/farkwp",
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
