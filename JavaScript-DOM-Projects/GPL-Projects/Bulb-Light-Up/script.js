// var a = "My name is amar"
// console.log(a)
// console.log(a.includes('not'))


let btn = document.getElementById('btn')
let bulbImg = document.getElementById('bulb')
btn.addEventListener('click', togleFun)
function togleFun(){
    // console.log(btn.textContent)
    // console.log(btn.textContent.includes('ON'))
    if(btn.textContent.includes('ON')){
        bulbImg.src = 'images/ONbulb.png'
        btn.innerHTML = "Turn OFF Light"
        btn.style.color = 'red'

    }else{
        btn.innerHTML = "Turn ON Light"
        bulbImg.src = 'images/OFFbulb.png'
        btn.style.color = 'green'
    }   
}