function threeResults(a=0,b=0,c=0) {
   let evenNumber=0
   if (a%2===0) evenNumber++
   if (b%2===0)evenNumber++
   if (c%2===0)evenNumber++
   
   
   let positiveNumbers=0
   if (a>0) positiveNumbers++
   if (b>0)positiveNumbers++
   if (c>0)positiveNumbers++


   let numbersOver100=0
   if (a>100) numbersOver100++
   if (b>100)numbersOver100++
   if (c>100)numbersOver100++
      
  
  return  {evenNumber,positiveNumbers,numbersOver100}
}

let a=parseInt(prompt(`Введіть перше число`,`1`))
let b=parseInt(prompt(`Введіть друге число`,`2`))
let c=parseInt(prompt(`Введіть третє число`,`3`))
let result = threeResults(a,b,c)
document.write(`Кількість парних = ${result.evenNumber},<br><br>
   кількість додатніх = ${result.positiveNumbers},<br><br>
    кількість більших за 100 = ${result.numbersOver100}`)
