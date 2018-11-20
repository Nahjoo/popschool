var jojo = document.querySelector("button");
jojo.addEventListener("click" , cal);

var div = document.querySelector("div");

function cal(){
    console.log("ok");
    var total= parseInt(document.querySelector(".nb1").value) + parseInt(document.querySelector(".nb2").value);
    div.innerHTML = total;
}



