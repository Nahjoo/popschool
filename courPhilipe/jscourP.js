var johan = { firstname: "Johan", lastname: "Delcourt" };

console.log(johan.lastname);

johan.hello = function () {
    console.log(`Hello my name is ${this.firstname}`);
}

//--------------------------------------------------------------------------------------------------------------------------------
//recuperation image

var bout = document.querySelector(".image1");
bout.addEventListener("click", image);
var bet = document.querySelector(".image2");
bet.addEventListener("click", image2);

function image() {
    var myImage = document.querySelector("#myImage");
    fetch("https://www.wikipedia.org/portal/wikipedia.org/assets/img/Wikipedia-logo-v2.png")
        .then(response => response.blob())
        .then(function (myBlob) {
            var objectURL = URL.createObjectURL(myBlob);
            myImage.src = objectURL;
        });

}


function image2() {
    var myImage2 = document.querySelector("#myImage2");
    fetch("https://www.wikipedia.org/portal/wikipedia.org/assets/img/Wikipedia-logo-v2.png")
        .then(response => response.blob())
        .then(function (myBlob) {
            var objectURL = URL.createObjectURL(myBlob);
            myImage2.src = objectURL;
        });

}

