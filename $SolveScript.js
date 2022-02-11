/* Method 1 */
let string = ""

let ourVision = ["B$u$i$ld", "$t$$h$e", "N$e$x$t", "E$$ra", "$$o$f$", "S$$of$t$wa$r$e", "De$$ve$l$op$me$n$t"];
ourVision.forEach(element => {
    string = string + ' ' + element;
});

console.log(string.replaceAll("$", '').toUpperCase());

/* Method 2*/

var Vision = ourVision.toString().replaceAll('$', '').toUpperCase().replaceAll(',',' ')
console.log(Vision);