console.log("Bienvenue sur ByteAcademy !");
function verifierHTML() {

    let code = document.getElementById("code").value;

    let resultat = document.getElementById("resultat");


    if(code.includes("<h1>")) {

        resultat.innerHTML = "✅ Bravo ! Exercice réussi.";

    } else {

        resultat.innerHTML = "❌ Essaie encore. Utilise une balise h1.";

    }

}
function terminerLecon() {

    let xp = localStorage.getItem("xp");

    if (xp === null) {
        xp = 0;
    }

    xp = Number(xp) + 50;

    localStorage.setItem("xp", xp);
    localStorage.setItem("html_lecon", "terminee");

    alert("Bravo ! Tu as gagné 50 XP 🎉");

}
function afficherProfil() {

    let xp = localStorage.getItem("xp");

    if (xp) {

        document.getElementById("xp-profil").innerHTML = xp;

    }


    if (xp >= 500) {

        document.getElementById("niveau").innerHTML = "Expert 🏆";

    }

    else if (xp >= 200) {

        document.getElementById("niveau").innerHTML = "Intermédiaire 🥈";

    }

}

function inscription(){

let utilisateur = {

nom: document.getElementById("nom").value,

email: document.getElementById("email").value,

motdepasse: document.getElementById("motdepasse").value

};


localStorage.setItem("utilisateur", JSON.stringify(utilisateur));


document.getElementById("message").innerHTML =
"Compte créé avec succès 🎉";


}



function connexion(){


let utilisateur =
JSON.parse(localStorage.getItem("utilisateur"));


let email =
document.getElementById("emailConnexion").value;


let mdp =
document.getElementById("mdpConnexion").value;



if(utilisateur && 
email === utilisateur.email &&
mdp === utilisateur.motdepasse){


localStorage.setItem("connecte","oui");


window.location.href="dashboard.html";


}

else{


document.getElementById("messageConnexion").innerHTML =
"Email ou mot de passe incorrect ❌";


}


}
function chargerDashboard(){


let utilisateur =
JSON.parse(localStorage.getItem("utilisateur"));


let xp =
localStorage.getItem("xp") || 0;



if(utilisateur){

document.getElementById("bienvenue").innerHTML =
"Bienvenue " + utilisateur.nom + " 👋";

}



document.getElementById("xp-dashboard").innerHTML = xp;



if(xp >= 500){

document.getElementById("niveau-dashboard").innerHTML =
"Expert 🏆";

}

else if(xp >= 200){

document.getElementById("niveau-dashboard").innerHTML =
"Intermédiaire 🥈";

}


}

window.onload = function () {

    if (document.getElementById("xp-dashboard")) {
        chargerDashboard();
    }

    if (document.getElementById("xp-profil")) {
        afficherProfil();
    }

    if (document.getElementById("xp")) {
        let xp = localStorage.getItem("xp") || 0;
        document.getElementById("xp").textContent = xp;
    }

};