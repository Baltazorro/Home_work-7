function getSum (a,b,c,d) {
return a+b+c+d
}
function getMultiplication(a,b,c,d) {
   return a*b*c*d
}
function getArithmeticAverage(a,b,c,d) {
   let arithmeticAverage=(a+b+c+d)/4
   return arithmeticAverage.toFixed(2)
}
function getMinimumValue(a,b,c,d) {
   let minNumber
   if (a<b<c<d) 
      minNumber=a
else if (b<c<d<a) 
    minNumber=b
else if (c<d<a<b) 
    minNumber=c
else minNumber=d 
   return minNumber
}

let a=parseInt(prompt(`Введіть перше число`,`1`))
let b=parseInt(prompt(`Введіть друге число`,`2`))
let c=parseInt(prompt(`Введіть третє число`,`3`))
let d=parseInt(prompt(`Введіть четверте число`,`4`))
document.write(`Сума = ${getSum(a,b,c,d)}<br>`)
document.write(`Добуток = ${getMultiplication(a,b,c,d)}<br>`)
document.write(`Середнє арифметичне = ${getArithmeticAverage(a,b,c,d)}<br>`)
document.write(`Мінімальне значення = ${getMinimumValue(a,b,c,d)}<br>`)