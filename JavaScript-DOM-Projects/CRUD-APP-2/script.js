let counter = document.getElementById('counter')
let count = 0;
function incrementFun(){
    count += 1;  // count = count + 1;
    counter.innerHTML = count

}
function decrementFun(){
    count -= 1;
    counter.innerHTML = count
}

function resetFun(){
    count = 0;
    counter.innerHTML = count
}

let countertwo = document.getElementById('countertwo')
let count2 = 0;
plustwo.addEventListener('click', incrementNum)
minustwo.addEventListener('click', decrementNum)
resettwo.addEventListener('click', resetNum)

function incrementNum(){
    count2 += 1;
    countertwo.innerHTML = count2;

}
function decrementNum(){
    if(count2 > 0){
        count2 -= 1;
    countertwo.innerHTML = count2;

    }
}
function resetNum(){
    count2 = 0;
    countertwo.innerHTML = count2;

}

let counterthree = document.getElementById('counterthree')
let count3 = 0;

function handleNum(button){
    if(button == 'plus'){
        count3 += 1;
    }else if(button == 'minus'){
        if(count3>0){
            count3 -= 1;

        }   
    }
    else if(button == 'reset'){
        count3 = 0;
    }
    counterthree.innerHTML = count3;

}























function onFormSubmit(e){
    event.preventDefault();
    // console.log("Running")
    var data = getInfo();
    console.log(data)
    console.log(data.name)
}

// Retrieve DAta
function getInfo(){
    var formData = {}
    formData['name'] = document.getElementById('name').value
    formData['email'] = document.getElementById('email').value
    formData['number'] = document.getElementById('number').value
    formData['message'] = document.getElementById('message').value
    return formData;


}

// var obj = {}
// console.log(obj)
// obj['Name' ] = "Amar";
// obj['age'] = 25;
// console.log(obj)


