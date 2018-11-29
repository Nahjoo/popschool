// var myjson = JSON.parse(`{
//     "students": [
//         {
//             "firstname": "Alexandre",
//             "lastname": "Briffaut",
//             "sex": "M"
//         },
//         {
//             "firstname": "Béatrice",
//             "lastname": "Bécue",
//             "sex": "F"
//         },
//         {
//             "firstname": "Benoît",
//             "lastname": "Delobel",
//             "sex": "M"
//         },
//         {
//             "firstname": "Émeric",
//             "lastname": "Glinkowski",
//             "sex": "M"
//         },
//         {
//             "firstname": "Florian",
//             "lastname": "Thelliez",
//             "sex": "M"
//         },
//         {
//             "firstname": "Gwenaëlle",
//             "lastname": "Lohard",
//             "sex": "F"
//         },
//         {
//             "firstname": "Jérémy",
//             "lastname": "Théry",
//             "sex": "M"
//         },
//         {
//             "firstname": "Johan",
//             "lastname": "Fievet",
//             "sex": "M"
//         },
//         {
//             "firstname": "Justine",
//             "lastname": "Moreau",
//             "sex": "F"
//         },
//         {
//             "firstname": "Justine",
//             "lastname": "Piebois",
//             "sex": "F"
//         },
//         {
//             "firstname": "Justine",
//             "lastname": "Telmann",
//             "sex": "F"
//         },
//         {
//             "firstname": "Kévin",
//             "lastname": "Lebrun",
//             "sex": "M"
//         },
//         {
//             "firstname": "Loïc",
//             "lastname": "Noisette",
//             "sex": "M"
//         },
//         {
//             "firstname": "Mathieu",
//             "lastname": "Castel",
//             "sex": "M"
//         },
//         {
//             "firstname": "Matthias",
//             "lastname": "Dacquignie",
//             "sex": "M"
//         },
//         {
//             "firstname": "Rémi",
//             "lastname": "Ponche",
//             "sex": "M"
//         },
//         {
//             "firstname": "Samuel",
//             "lastname": "Poudroux",
//             "sex": "M"
//         },
//         {
//             "firstname": "Sébastien",
//             "lastname": "Jurdeczka",
//             "sex": "M"
//         },
//         {
//             "firstname": "Sullivan",
//             "lastname": "Delaby",
//             "sex": "M"
//         },
//         {
//             "firstname": "Thomas",
//             "lastname": "Gérard",
//             "sex": "M"
//         },
//         {
//             "firstname": "Tiffany",
//             "lastname": "Deschauwer",
//             "sex": "F"
//         },
//         {
//             "firstname": "Valentin",
//             "lastname": "Misiaszek",
//             "sex": "M"
//         },
//         {
//             "firstname": "Yann",
//             "lastname": "Duchateau",
//             "sex": "M"
//         }
//     ]
// }`);

// select the body in html
var body = document.querySelector("body");

//create for-each for browse the table
// var i;
// for(i = 0; i < myjson.students.length ; i++){
//     var list = document.createElement("li");
//     body.appendChild(list);
//     list.innerHTML = myjson.students[i].firstname + myjson.students[i].lastname + myjson.students[i].sex;
//     console.log(list);
// }

//create list
// var ul = document.createElement("ul");


fetch("http://api-students.popschool-lens.fr/students.json")
    .then(response => response.json())
    .then(function (studentslist) {
        
        studentslist.students.forEach(function (student) {

            //create the bootstrap card container
            var div = document.createElement("div");
            div.className = "Card";
            div.style.width = "18rem";
            body.appendChild(div);

            //create the image of the card
            var studentCard = document.createElement("img");
            studentCard.src = "https://via.plcaeholder.com/100x100";
            studentCard.alt = "card image cap";
            studentCard.className = "card-img-top";
            //attach the image of the card div
            div.appendChild(studentCard);

            // create the card-body div
            var StudentBody = document.createElement("div");
            StudentBody.className = "card-body";
            //attach the card-body div to the card div
            div.appendChild(StudentBody);

            //create the H5 to the card-div
            var studentH5 = document.createElement("h5");
            studentH5.className = "card-title";
            studentH5.innerHTML = `${student.lastname} ${student.firstname}`;
            // attach the H5 to the card-div
            StudentBody.appendChild(studentH5);

            //create the button to the card-div
            var studentbtn = document.createElement("a");
            studentbtn.href = "#";
            studentbtn.className = "btn btn-primary";
            studentbtn.innerHTML = "Modifier";
            //attach the button to the card-div
            StudentBody.appendChild(studentbtn);

//-------------------------------------------------------------------------------------------------------------------------------
            // var list = document.createElement("li");
            // body.appendChild(div);
            // ul.appendChild(list);
            // list.innerHTML = student.firstname + student.lastname + student.sex;
//-------------------------------------------------------------------------------------------------------------------------------
            //create card html
            // div.innerHTML = `<div class="card" style="width: 18rem;">
            //     <img class="card-img-top" src=".../100px180/" alt="Fiche stagiaire">
            //     <div class="card-body">
            //     <h5 class="card-title">Nom : ${student.lastname}</h5>
            //     <p class="card-text">Prénom : ${student.firstname}<br>sex : ${student.sex}</p>
            //     <a href="#" class="btn btn-primary">Useless Button xD</a>
            //     </div>
            // </div>`

            // console.log(list);
            
            console.log(div);
        })
        
        // console.log(studentslist)
    });





