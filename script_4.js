const entrepreneurs = [
    { first: 'Steve', last: 'Jobs', year: 1955 },
    { first: 'Oprah', last: 'Winfrey', year: 1954 },
    { first: 'Bill', last: 'Gates', year: 1955 },
    { first: 'Sheryl', last: 'Sandberg', year: 1969 },
    { first: 'Mark', last: 'Zuckerberg', year: 1984 },
    { first: 'Beyonce', last: 'Knowles', year: 1981 },
    { first: 'Jeff', last: 'Bezos', year: 1964 },
    { first: 'Diane', last: 'Hendricks', year: 1947 },
    { first: 'Elon', last: 'Musk', year: 1971 },
    { first: 'Marissa', last: 'Mayer', year: 1975 },
    { first: 'Walt', last: 'Disney', year: 1901 },
    { first: 'Larry', last: 'Page', year: 1973 },
    { first: 'Jack', last: 'Dorsey', year: 1976 },
    { first: 'Evan', last: 'Spiegel', year: 1990 },
    { first: 'Brian', last: 'Chesky', year: 1981 },
    { first: 'Travis', last: 'Kalanick', year: 1976 },
    { first: 'Marc', last: 'Andreessen', year: 1971 },
    { first: 'Peter', last: 'Thiel', year: 1967 }
  ];

  console.log("les entrepreneurs qui sont nés dans les années 70 sont:");

  entrepreneurs.forEach(index => {
    if (index.year >= 1970 && index.year <= 1979) {
        console.log(index);
    }
  });




  console.log("une array qui contient le prénom et le nom des entrepreneurs:");

  var copie = [];

  entrepreneurs.forEach(function(index){
    copie.push({first: index.first, last: index.last});
});
  console.log(copie);




  console.log("un array qui contient l'age des entrepreneurs (si ils étaient tous vivants):");

  var copie2 = [];

  entrepreneurs.forEach(function(index){
    copie2.push({age: 2020 - index.year});
});
  console.log(copie2);




  console.log("un array trier par ordre alphabetic des noms de famille:");

  entrepreneurs.sort(function compare(a, b) {
    if (a.last < b.last)
       return -1;
    if (a.last > b.last )
       return 1;
    return 0;
  });
  console.log(entrepreneurs);




  
 
   
  