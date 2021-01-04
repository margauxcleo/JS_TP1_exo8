function additionner() {
    let nbr1 = document.calc.nbr1.value;
    let nbr2 = document.calc.nbr2.value;
    let resultat = parseInt(nbr1) + parseInt(nbr2);
    document.calc.res.value = resultat;
}
function soustraire() {
    let nbr1 = document.calc.nbr1.value;
    let nbr2 = document.calc.nbr2.value;
    let resultat = parseInt(nbr1) - parseInt(nbr2);
    document.calc.res.value = resultat;
}
function multiplier() {
    let nbr1 = document.calc.nbr1.value;
    let nbr2 = document.calc.nbr2.value;
    let resultat = parseInt(nbr1) * parseInt(nbr2);
    document.calc.res.value = resultat;   
}
function diviser() {
    if(nbr2 != 0) {
    let nbr1 = document.calc.nbr1.value;
    let nbr2 = document.calc.nbr2.value;
    let resultat = parseInt(nbr1) / parseInt(nbr2);
    document.calc.res.value = resultat;
    } else {
        resultat = "Erreur.";
    }
    
}
