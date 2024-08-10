function statusDay (numberDay) {
   switch (numberDay) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5: document.write(`Це робочий день`)
         
         break;
      case 6:
      case 7:document.write(`Це вихідний день`)
    break;
     default: document.write(`Такого дня не існує`)
     break;
}}
let numberDay=parseInt(prompt(`Введіть номер дня`,`1`))
statusDay(numberDay)

