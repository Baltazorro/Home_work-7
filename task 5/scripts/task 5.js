function getInches(a) {
   let inchInCentimeter=0.3937
return a*inchInCentimeter
}
function getKilograms(b) {
   let kilogramsToPounds= 2.2046
   return b*kilogramsToPounds
}
function getKilometers(c) {
   let kilometersToMiles=0.62137
   return c*kilometersToMiles
}


let a=parseInt(prompt(`Введіть кількість сантиметрів`,`0`))
let b=parseInt(prompt(`Введіть кількість кілограмів`,`0`))
let c=parseInt(prompt(`Введіть кількість кілометрів`,`0`))

document.write(`В ${a}сантиметрах = ${getInches(a).toFixed(2)}дюймів<br><br>`)
document.write(`В ${b}кілограмах = ${getKilograms(b).toFixed(2)}фунтів<br><br>`)
document.write(`В ${c} кілометрах =${getKilometers(c).toFixed(2)} миль`)
