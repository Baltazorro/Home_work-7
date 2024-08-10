function getAveragePositiveTemperature(temp1=0,temp2=0,temp3=0,temp4=0,temp5=0) {
   let numberPositiveTemp=0
   let sumPositiveTemp=0
   if (temp1>0) {numberPositiveTemp++
   sumPositiveTemp+=temp1}
   if (temp2>0) {numberPositiveTemp++
   sumPositiveTemp+=temp2}
   if (temp3>0) {numberPositiveTemp++
   sumPositiveTemp+=temp3}
   if (temp4>0) {numberPositiveTemp++
   sumPositiveTemp+=temp4}
   if (temp5>0) {numberPositiveTemp++
   sumPositiveTemp+=temp5}
   let averagePositiveTemp=sumPositiveTemp/numberPositiveTemp
   
      
  
  return  averagePositiveTemp
}

let a=parseFloat(prompt(`Введіть перше значення температури`,`0`))
let b=parseFloat(prompt(`Введіть друге значення температури`,`0`))
let c=parseFloat(prompt(`Введіть третє значення температури`,`0`))
let d=parseFloat(prompt(`Введіть четверте значення температури`,`0`))
let g=parseFloat(prompt(`Введіть пяте значення температури`,`0`))


document.write(`Середнє значення для введених додатніх показів температури = ${getAveragePositiveTemperature(a,b,c,d,g)}°C`)
