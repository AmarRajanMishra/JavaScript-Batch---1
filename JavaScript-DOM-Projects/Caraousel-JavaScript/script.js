const slides = document.querySelectorAll('.slider')
// console.log(slides)
var counter = 0;
slides.forEach((slide, index)=>{
    slide.style.left = `${index*100}%`

})

const goNext = () => {
    counter++
    slideImages()
}
const goPrevious = () =>{
    counter--
    slideImages()
}

const slideImages = () =>{
    slides.forEach((slide)=>{
        // slide.style.transform = `translateX(-${counter*100}%)`
        slide.style.transform = `translateX(-${(counter%4)*100}%)`

    })
}

// const obj = {Name : "Rajan", Age : 25, Gender : "Male"}

// for(let key in obj){
//     console.log(key, obj[key])
// }

// let arr = [2, 8, 1, 9]
// // for(let key in arr){
// //     console.log(key, arr[key])
// // }
// for(let key of arr){
//     console.log(key)
// }