function table (numLines,numColumns) {
document.write('<table  border="2px">')
for (let index = 1; index <= numColumns; index++) {
   document.write('<tr>')
   for (let index2 = 1; index2 <=numLines; index2++) {
      document.write('<th>Hello</th>')
   }
   document.write('</tr>')
   
}
document.write('</table>')

  
}
let numColumns=parseInt(prompt(`Введіть номер стовпців`,`3`))
let numLines = parseInt(prompt(`Введіть номер рядків`,`3`))
table(numLines,numColumns)



