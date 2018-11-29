var buton = document.querySelector("button");
buton.addEventListener("click", damier);
var seb = document.querySelector("main");

function damier(){
    var table = 9;
    var i;
    for (i = 0; i < table ; i++){
        for(var j = 0; j < table ; j++){
            var dame = document.createElement("div");

            seb.appendChild(dame);

        };

    };    
}



