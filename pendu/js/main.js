//print text letter by letter

// var tableau = "bonjour";
// var tabl = [];
// var div = document.querySelector("div");
// var texte = tableau.split('');
// var txt = texte.length;
// var ok = '';
// var msg = txt - 1;
// var i = 0;


// var bis = 0;
// function change() {
//     for (i = 0; i < txt; i++) {
//         console.log('ok');
//         texte[i] = ok + texte[i]
//         tabl.push(texte[i]);
//         ok = texte[i];
//     }
//     div.innerHTML = tabl[bis];
//     bis++;
//     if (bis == txt) {
//         div.innerHTML = "";

//     }
//     if (bis >= txt) {
//         bis = msg;
//     }
// }



// console.log(tabl)

// setInterval("change()", 150);

//pendu

var input = document.querySelector("input");
var button = document.querySelector("button");
var gg = document.querySelector(".gagner");
button.addEventListener("click", pendu);
var div = document.querySelector("div");

var etoile = [];
var mot = ["daccord", "elephant", "cochon", "johan", "ordinateur", "developpeur"];
var alea = Math.floor(Math.random() * mot.length);
var tabl = mot[alea].split('');
var vie = 5;

for (var i = 0; i < tabl.length; i++) {
    etoile.push("*");
    div.innerHTML = etoile;
}
console.log(etoile);


gg.innerHTML = `Vous avez ${vie} vies`;



function pendu() {
    var valeur = input.value;

    console.log(tabl);
    erreur(valeur);
}


function erreur(valeur) {
    if (valeur == "") {
        alert("entre une lettre");
    } else {
        comparaison(valeur)

    }
}

function comparaison(valeur) {

    var bon = false
    console.log(bon)
    input.value = "";
    for (var j = 0; j < tabl.length; j++) {

        if (tabl[j] == valeur) {
            etoile.splice(j, 1, valeur);
            div.innerHTML = etoile;
            console.log("ok");
            bon = true;
            console.log(bon);
        }
    }

    if (bon == false) {
        if (vie > 2) {
            vie -= 1;
            gg.innerHTML = `Dommage c'est pas bon : ${vie} vies`;
        }else {
            vie -= 1;
            gg.innerHTML = `Dommage c'est pas bon : ${vie} vie`;

        }

    }

    if (valeur == mot[alea]) {
        gg.innerHTML = `Tu as gagné , le mot est : ${mot[alea]}`;
        vie = 0;
    }

    if (vie == 0) {
        alert("Tu as perdu sale merde !");
        window.location.reload();
    }
}

// function life(valeur) {

//     for(var j = 0 ; j<tabl.length; j++){
//         if (valeur != tabl[j]) {
//             vie -= 1;
//             gg.innerHTML = `Dommage c'est pas le bon : '_' , il te reste  : ${vie} vie`;
//         }
//     }


    // if (valeur == mot[alea]) {
    //     gg.innerHTML = `Tu as gagné , le mot est : ${mot[alea]}`;
    //     vie = 0;
    // }
// }






// "Mot", "Table", "Lapin", "Xylophone", "Framework", "Procrastination", "javascript", "database", ,"upgrade", "update", "android", "ajax", "python", "cobra","symfony", "concatenation"