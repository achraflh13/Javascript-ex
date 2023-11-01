function addition(a, b) {
  var somme = a + b;
  return somme;
}
var resultat1 = addition(1, 2);
var x = addition(3, 9);
console.log(resultat1);
console.log(x);

// *************************
function minuteToSecond(minutes) {
  var secondes = minutes * 60; // Il y a 60 secondes dans une minute
  return secondes;
}

// Exemples d'utilisation de la fonction
var resultat1 = minuteToSecond(4);
var resultat2 = minuteToSecond(9);

console.log(resultat1); // Output: 240
console.log(resultat2); // Output: 180
// *************************
function increment(nombre) {
  var resultat = nombre + 1;
  return resultat;
}

// Exemples d'utilisation de la fonction
var resultat1 = increment(1);
var resultat2 = increment(4);

console.log(resultat1); // Output: 2
console.log(resultat2); // Output: 5
// ******************
function getSurface(base, hauteur) {
  var surface = (base * hauteur) / 2;
  return surface;
}

// Exemples d'utilisation de la fonction
var resultat1 = getSurface(8, 2);
var resultat2 = getSurface(7, 3);

console.log(resultat1); // Output: 8
console.log(resultat2); // Output: 10.5
// ******************************
function strReverse(chaine) {
  // Utilisation de la méthode split() pour diviser la chaîne en un tableau de caractères, puis reverse() pour inverser le tableau, et enfin join() pour obtenir la chaîne inversée.
  var chaineInverse = chaine.split("").reverse().join("");
  return chaineInverse;
}

// Exemples d'utilisation de la fonction
var resultat1 = strReverse("WayToLearnX");
var resultat2 = strReverse("Hello");

console.log(resultat1); // Output: XnraeLoTyaW
console.log(resultat2); // Output: olleH
// ********************
function getMax(a, b, c) {
  var max = a; // On suppose initialement que 'a' est le plus grand.

  if (b > max) {
    max = b; // Si 'b' est plus grand que 'max', 'b' devient le nouveau maximum.
  }

  if (c > max) {
    max = c; // Si 'c' est plus grand que 'max', 'c' devient le nouveau maximum.
  }

  return max;
}

// Exemples d'utilisation de la fonction
var resultat1 = getMax(5, 9, 1);
var resultat2 = getMax(2, 3, 10);

console.log(resultat1); // Output: 9
console.log(resultat2); //
// ***********************
function getFirst(tableau) {
  if (tableau.length > 0) {
    return tableau[0];
  } else {
    return undefined; // Retourne undefined si le tableau est vide.
  }
}

// Exemples d'utilisation de la fonction
var resultat1 = getFirst([1, 2, 3]);
var resultat2 = getFirst([50, 60, 70]);
console.log(resultat2);
console.log(resultat1); // Output: 1
// Output: 50
// *************************
var url = window.location.href; // Récupère l'URL complète
console.log("URL complète : " + url);

var urlSansParametres = window.location.origin + window.location.pathname; // Récupère l'URL sans les paramètres de requête
console.log("URL sans paramètres : " + urlSansParametres);
// *************************
function resteDiv(a, b) {
  var reste = a % b;
  return reste;
}

// Exemples d'utilisation de la fonction
var resultat1 = resteDiv(1, 3);
var resultat2 = resteDiv(2, 4);
var resultat3 = resteDiv(3, 3);

console.log(resultat1); // Output: 1
console.log(resultat2); // Output: 2
console.log(resultat3); // Output: 0
 ****