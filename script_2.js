var factor = function(number) {
    var result = 1;
    var count;
    for (count = number; count > 1; count--) {
      result *= count;
    }
    return result;
  };

  num = prompt("Choisi un nombre pour calculer sa factorielle:");

  console.log(`La factorielle de ${num} est : ${factor(num)}`);