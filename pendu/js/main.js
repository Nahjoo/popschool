//print text letter by letter

// var tableau = "bonjour";
// var tabl = [];
// var div = document.querySelector("div");
// var texte = tableau.split('');
// var txt = texte.length;
// var ok ='';
// var msg = txt - 1;
// var i = 0;



// function boucle(){
//     for(i = 0 ; i < txt ; i++){
//         console.log('ok');
//         texte[i] = ok + texte[i]
//         tabl.push(texte[i]);
//         ok = texte[i];
//     }

// }

// var bis = 0;
// function change(){
//     div.innerHTML = tabl[bis];
//     bis ++;
//     if(bis == txt){
//         div.innerHTML = "";
//         var j = 0;
//         for(j = 0 ; j< tabl.length; j++){
//             div.innerHTML= tabl[j];
//         }


//     }


//     if(bis >= txt){
//         bis = msg;
//     }
// }



// console.log(tabl)
// boucle();
// setInterval("change()",150);

//pendu

var input = document.querySelector("input");
var button = document.querySelector("button");
button.addEventListener("click", pendu);
var div = document.querySelector("div");

var etoile = [];
var mot = ["daccord"];
var tabl = mot[0].split('');

for(var i = 0; i<tabl.length; i++){
    etoile.push("*");
    div.innerHTML = etoile;
}
console.log(etoile);


function pendu() {
    var valeur = input.value;
    console.log(tabl);
    erreur(valeur);
}


function erreur(valeur){
    if(valeur == ""){
        alert("entre une lettre");
    }else{
        comparaison(valeur)
    }
}

function comparaison(valeur){
    for(var j = 0; j<tabl.length; j++){
        if(tabl[j] == valeur) {
            etoile.splice(j ,1 , valeur);
            div.innerHTML = etoile;
            console.log("ok")
        }
    }

}






