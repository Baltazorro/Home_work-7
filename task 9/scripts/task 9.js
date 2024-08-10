function getNumberNegativeTemperature(temp1=0,temp2=0,temp3=0,temp4=0,temp5=0) {
   let numberNegativeTemp=0
   if (temp1<0) numberNegativeTemp++
   if (temp2<0) numberNegativeTemp++
   if (temp3<0) numberNegativeTemp++
   if (temp4<0) numberNegativeTemp++
   if (temp5<0) numberNegativeTemp++
   
      
  
  return  numberNegativeTemp
}

let a=parseFloat(prompt(`Введіть перше значення температури`,`0`))
let b=parseFloat(prompt(`Введіть друге значення температури`,`0`))
let c=parseFloat(prompt(`Введіть третє значення температури`,`0`))
let d=parseFloat(prompt(`Введіть четверте значення температури`,`0`))
let g=parseFloat(prompt(`Введіть пяте значення температури`,`0`))


document.write(`Кількість відємних показів температури = ${getNumberNegativeTemperature(a,b,c,d,g)}`)
