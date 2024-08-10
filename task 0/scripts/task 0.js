function season (numberMonth) {
   if (numberMonth<=2||numberMonth===12)
      document.write(`Пора року - зима`)
   else if (numberMonth<=5) 
      document.write(`Пора року - весна`)
   else if (numberMonth<=8) 
      document.write(`Пора року - літо`)
   else if (numberMonth<=11) 
      document.write(`Пора року - осінь`)
   else document.write(`Такого місяця не існує`)
}
let numberMonth=parseInt(prompt(`Введіть номер місяця`,`1`))
season(numberMonth)