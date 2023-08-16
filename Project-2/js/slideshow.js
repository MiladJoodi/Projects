
const $ = document
let slideElem = $.querySelector('.introduce-right-img')

let slidesArray = [
    'images/introduce4.jpg',
    'images/introduce2.png',
    'images/introduce3.png'
]
let sliderIndexItem = 0

function slider() {
    sliderIndexItem++
    if (sliderIndexItem > slidesArray.length - 1) {
        sliderIndexItem = 0
        
    }
    slideElem.setAttribute('src', slidesArray[sliderIndexItem])
}
setInterval(slider,2000)

