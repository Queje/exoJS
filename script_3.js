let floors = prompt("Bienvenue dans la pyramide de Mario! Combien d'étage veux-tu?");

function Pyramid(n){
    let y = "#";
    let space = " "

    for (i = 1; i <= n; i++) {
        pad = n - i;
    console.log(space.repeat(pad) + y.repeat(i));
    } 
}

Pyramid(floors);

