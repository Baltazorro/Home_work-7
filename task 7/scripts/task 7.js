function randomImg () {
   let imgCat1="images/download.jpg"
   let imgCat2="images/asd.jpg"
   let imgCat3="images/asdas.jpg"
   let imgCat4="images/sadeas.jpg"
  

const min = 1,
        max = 4
      let randomImageNumber = Math.floor(Math.random() * (max - min + 1)) + min
      let imgSrc
      switch (randomImageNumber) {
        case 1:imgSrc = `<img src=${imgCat1}`
          break
        case 2:imgSrc = `<img src=${imgCat2}`
            break
        case 3:imgSrc = `<img src=${imgCat3}`
          break
          case 4:imgSrc = `<img src=${imgCat4}`
          break
          
          
      }
      document.write(`${imgSrc}`)

   }
   randomImg()