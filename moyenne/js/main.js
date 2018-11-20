var montableau = [];

var bouton = document.querySelector("button");
bouton.addEventListener("click", appuie);

var main = document.querySelector("main");

function appuie(){
    montableau.push(parseInt(document.querySelector("input").value));
    
    

    // var i;
    var somme = 0;
    var moyenne = 0;

    montableau.forEach(function(tab){
        somme = somme + tab;
        moyenne = somme / montableau.length;
    });

    // for(i = 0; i < montableau.length; i++){
    //     somme = somme + montableau[i];
    //     moyenne = somme / montableau.length;
    // };

    main.innerHTML = "vos valeur : " + montableau + "</br> la moyenne : " +  moyenne;

}