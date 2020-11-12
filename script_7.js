function acneBot(){
    starter = prompt("yo t'es ouf? tu me fixes? tu veux quoi?");

    if (starter.endsWith("?",starter.length)){
        console.log("ouais, ouais....");
    }
    else if (starter == starter.toUpperCase() && starter.length !== 0) {
        console.log("Pwa, calme-toi...");
    }
    else if (starter.indexOf('fortnite') > -1) {
        console.log("on s' fait une partie soum-soum ?"); 
    }
    else if (starter.length === 0) {
        console.log("t'es en PLS ?")
    }
    else {
        console.log("balek")
    }
}

acneBot();