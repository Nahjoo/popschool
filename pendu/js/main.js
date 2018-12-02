//print text letter by letter

// var tableau = "bonjour";
// var tabl = [];
// var div = document.querySelector("div");
// var texte = tableau.split('');
// var txt = texte.length;
// var ok ='';
// var msg = txt - 1;
// var i ;

// for(i = 0 ; i < txt ; i++){
//     console.log('ok');
//     texte[i] = ok + texte[i]
//     tabl.push(texte[i]);
//     ok = texte[i];
// }

// var bis = 0;
// function change(){
//     div.innerHTML = tabl[bis];
//     bis ++;
//     if(bis >= txt){
//         bis = msg;
//     }
// }



// console.log(tabl)
// setInterval("change()",1000);

//pendu

var input = document.querySelector("input");
var button = document.querySelector("button");
button.addEventListener("click", pendu);
var div = document.querySelector("div");

var tableau = ["abcde"];
var mot = tableau[0];
var taillemot = mot.length;
var motp = new Array();
var lol = "";


console.log(mot);

function pendu(){
    recup_input();
}

//recupere la valeur de l'utilisateur
function recup_input(){
    var recup = input.value;
    console.log(recup);
    erreur(recup);
    
}

//compare the lettre
function comparaison(recup){
    var ok = 0;
    input.value = "";
    motp.push(recup);
    for(var i = 0; i<taillemot ; i++){
        if(mot.charAt(i) == recup){
            motp[i] += recup;
            div.innerHTML += recup;
            ok ++;
            
        }else {

            div.innerHTML += "*";
        }
    }
}

function erreur(recup){
    if(input.value == ""){
        alert("Entrer une lettre svp");
    }else{
        comparaison(recup);
    }
}
//--------------------------------------------



