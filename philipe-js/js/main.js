document.querySelector("main").addEventListener("click", change);



function change(event){
    if (event.target.className == ""){

        event.target.className = "black";

    } else {
        event.target.className = "";
    }
};

