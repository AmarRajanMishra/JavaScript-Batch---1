let counter = document.getElementById('counter')
let count = 0;
btnIncrement.addEventListener('click', increMent)
function increMent(){
    count += 1;
    counter.innerHTML = count
}
btnDecrement.addEventListener('click', decreMent)
function decreMent(){
    if(count > 0){
        count -= 1;
        counter.innerHTML = count
    } 
}
reset.addEventListener('click', reset)
function reset(){
        count = 0;
        counter.innerHTML = count
}
