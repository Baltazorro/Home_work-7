function nameMonth (numberMonth) {
   if (numberMonth===1)
      document.write(`Це місяць - Січень`)
   else if (numberMonth===2) 
      document.write(`Це місяць - Лютий`)
   else if (numberMonth===3) 
      document.write(`Це місяць - Березень`)
   else if (numberMonth===4) 
      document.write(`Це місяць - Квітень`)
   else if (numberMonth===5) 
      document.write(`Це місяць - Травень`)
   else if (numberMonth===6) 
      document.write(`Це місяць - Червень`)
   else if (numberMonth===7) 
      document.write(`Це місяць - Липень`)
   else if (numberMonth===8) 
      document.write(`Це місяць - Серпень`)
   else if (numberMonth===9) 
      document.write(`Це місяць - Вересень`)
   else if (numberMonth===10) 
      document.write(`Це місяць - Жовтень`)
   else if (numberMonth===11) 
      document.write(`Це місяць - Листопад`)
   else if (numberMonth===12) 
      document.write(`Це місяць - Грудень`)
   else document.write(`Такого місяця не існує`)
}
let numberMonth=parseInt(prompt(`Введіть номер місяця`,`1`))
nameMonth(numberMonth)