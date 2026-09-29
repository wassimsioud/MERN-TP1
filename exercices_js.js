const produits = [
    { nom: "Clavier", prix: 45 },
    { nom: "Écran", prix: 320 },
    { nom: "Souris", prix: 25 }
];

const { nom, prix } = produits[0];
console.log(nom, prix);

const produit_search = produits.find(p => p.nom === "Souris");
console.log(produit_search.prix);

const produits_filter = produits.filter(p => p.prix < 100);
console.log(produits_filter);

const Remise = prix => prix - (prix * 10 / 100);
console.log(Remise(produits[1].prix));