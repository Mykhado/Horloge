// Séléctionner les aiguilles de montre
const AIGUILLEHR = document.getElementById("hour");
const AIGUILLEMIN = document.getElementById("minute");
const AIGUILLESEC = document.getElementById("second");

//Extraire l'heure actuel à l'aide de l'objet Date()
let today = new Date();


//Stocker l'heure , minute , seconde  dans des varaiables
let  HR = today.getHours();
let MIN = today.getMinutes();
let SEC= today.getSeconds();
let heure;
let minute;
let seconde;
let positionHR = HR*3600*heure;
let positionMIN = MIN*60*minute;
let positionSEC = SEC*seconde;


// Calculer de degré de mouvement de l'aiguille heure, de l'aiguille minute, de l'aiguille seconde
// Hint : Tous les aiguilles doivent se déplacer chaque second selon un degré
function hourDeg (){
    heure = (360/(24*3600))
   return heure;
}

heure = hourDeg();
console.log(heure);

function minuteDeg (){ 
    minute = 360/(60*60)
    return minute;
 }
 minute = minuteDeg();
 console.log(minute);


 function secondeDeg (){ 
    seconde = 360/60
    return seconde;
 }
 seconde=secondeDeg();
 console.log(seconde);

positionHR = HR*3600*heure;
positionMIN = MIN*60*minute;
positionSEC = SEC*seconde;


   
// Déplacer les aiguilles 
function demarrerLaMontre() {
AIGUILLEHR.style.transform= `rotate(${positionHR}deg)`;
AIGUILLEMIN.style.transform= `rotate(${positionMIN}deg)`;
AIGUILLESEC.style.transform=`rotate(${positionSEC}deg)`;
}



// Exercuter la fonction chaque second

let interval = setInterval(demarrerLaMontre, 1000);

console.log (positionHR)
console.log (MIN*60*minute)
console.log (SEC*seconde)