// Séléctionner les aiguilles de montre
const AIGUILLEHR = document.getElementById("hour");
const AIGUILLEMIN = document.getElementById("minute");
const AIGUILLESEC = document.getElementById("second");

//Extraire l'heure actuel à l'aide de l'objet Date()

//Stocker l'heure , minute , seconde  dans des varaiables
let today = new Date();
let HR = today.getHours();
let MIN = today.getMinutes();
let SEC = today.getSeconds();
let heure = 360 / (12 * 3600);
let minute = 360 / (60 * 60);
let seconde = 360 / 60;
let positionHR;
let positionMIN;
let positionSEC;

// Calculer de degré de mouvement de l'aiguille heure, de l'aiguille minute, de l'aiguille seconde
// Hint : Tous les aiguilles doivent se déplacer chaque second selon un degré
function hourDeg() {
  heure = 360 / (12 * 3600);
  return heure;
}

heure = hourDeg();

function minuteDeg() {
  minute = 360 / (60 * 60);
  return minute;
}
minute = minuteDeg();

function secondeDeg() {
  seconde = 360 / 60;
  return seconde;
}
seconde = secondeDeg();

positionHR = HR * 3600 * heure;
positionMIN = MIN * 60 * minute;
positionSEC = SEC * seconde;

AIGUILLEHR.style.transform += `rotate(${positionHR}deg)`;
AIGUILLEMIN.style.transform += `rotate(${positionMIN}deg)`;
AIGUILLESEC.style.transform += `rotate(${positionSEC}deg)`;
// Déplacer les aiguilleslet

function demarrerLaMontre() {
  today = new Date();
  HR = today.getHours();
  MIN = today.getMinutes();
  SEC = today.getSeconds();
  heure = 360 / (12 * 3600);
  minute = 360 / (60 * 60);
  seconde = 360 / 60;
  //  pour l'heure faire la somme de  (heure en seconde +minute en seconde +seconde) afin d'obtenir une donnée horaire precise a chaque seconde;
  positionHR = (HR * 3600 + MIN * 60 + SEC) * heure;
  //   idem que précédement pour un placement precis de l'aiguille des minutes.
  positionMIN = (MIN * 60 + SEC) * minute;
  positionSEC = SEC * seconde;
  AIGUILLEHR.style.transform = `rotate(${positionHR}deg)`;
  AIGUILLEMIN.style.transform = `rotate(${positionMIN}deg)`;
  AIGUILLESEC.style.transform = `rotate(${positionSEC}deg)`;
}
const interval = setInterval(demarrerLaMontre, 1000);

// Exercuter la fonction chaque second

// console.log(positionHR);
// console.log(MIN * 60 * minute);
// console.log(SEC * seconde);
