console.log('Hello')

// function wishMe(){
//     console.log('Welcome to Event Handling')
//     document.getElementById('heading').style.color='red'
// }
// btn1.onclick = wishMe()

btn.addEventListener('click', wishHello)

function wishHello(){
    document.getElementById('heading').style.color='green'
    alert('Click Ok')

}
btn.addEventListener('click', changeColor)

function changeColor(){
    document.getElementById('heading').style.color='yellow'
    

}

