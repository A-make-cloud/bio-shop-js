const selectionContainer = document.getElementById('selection');
const imgs = document.getElementById('#selection-images img');
const selectionImages = document.getElementById('selection-images');

let slideIm = [{ image: "images/slide1.jpg" }, { image: "images/slide2.jpg" }, { image: "images/slide3.jpg" }, { image: "images/slide4.jpg" }, { image: "images/slide5.jpg" }]
let index = 0
//selectionContainer.innerHTML = slideIm[0]
// selectionImages.innerHTML = slideIm[0]
// selectionImages.src = "images/slide1.jpg"

let element = slideIm.map((im) => {
    return ` <img src=${im.image} width="250px" alt="img">
    `
})
selectionImages.innerHTML = element[0]
function diplaySlide() {

    index++
    for (let i = 0; i < element.length; i++) {
        if (index > element.length - 1) {
            index = 0
        }
        // selectionContainer.style.transform = `translateX(${-index * 500}px)`

        selectionImages.innerHTML = element[index]
        selectionImages.style.transform = `translateX(${-index * 250}px)`
        selectionImages.style.marginLeft = '70vw'
        selectionImages.style.width = '100%'
    }
    setTimeout(diplaySlide, 2000)

    //     
}

diplaySlide()


