const galleryArray=['cars1.jpg','cars2.jpg','cars3.jpg',
'cars4.jpg','cars5.jpg','cars6.jpg','cars7.jpg',
'cars8.jpg','cars9.jpg','cars10.jpg']

const myGalleryContainer = document.getElementById('carGallery')

const myBigImageContainer=document.createElement('section')
myBigImageContainer.id = 'BigImageContainer'
console.log(myGalleryContainer)
myGalleryContainer.appendChild(myBigImageContainer)

const myTilesContainer=document.createElement('section')
myTilesContainer.id = 'TilesContainer'
myGalleryContainer.appendChild(myTilesContainer)

const myBigImage = document.createElement('img')
myBigImage.src = 'assets/img/cars1.jpg'
myBigImage.id = 'bigImage'
myBigImageContainer.appendChild(myBigImage)


galleryArray.forEach((imgName, index) => 
    {
    if (index > 0) {
     console.log(imgName, index); 
     const mySmallImage = document.createElement('img')
     mySmallImage.src ='assets/img/' +imgName
     mySmallImage.classList.add('TileImage')
     myTilesContainer.appendChild(mySmallImage)

    mySmallImage.addEventListener('click',
    
    (myClick)=>{
    let myBigImageURL =myBigImage.src
    let mySmallImageURL =myClick.target.src
   
    myBigImage.src=mySmallImageURL
    myClick.target.src=myBigImageURL
    }
   )
    }
  }
);