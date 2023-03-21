let btn = document.getElementById('add-item');
let ulList = document.getElementById('ulList')
// let
btn.addEventListener('click', addItem)
function addItem(e){
    // console.log(e)
    
    let currenInput = document.getElementById('inputText');
    // console.log(currenInput);
    let currenData = currenInput.value;
    // console.log(currenData);
    let newLi = document.createElement('li')
    // newLi.classList.add('list-group-item')
    newLi.className = "list-group-item d-flex justify-content-between"
    newLi.textContent = currenInput;
    newLi.innerHTML = `<h3 class="flex-grow-1">${currenData}</h3>
    <button class="btn btn-warning mx-5">Update</button>
    <button class="btn btn-danger" onClick = "{removeItem(this)}">Delete</button>`
    
    ulList.appendChild(newLi);
}
function removeItem(currElement){
    // console.log(currElement.parentElement)
    currElement.parentElement.remove()
    if(ulList.children.length <= 0){
        let EmptyMsg = document.createElement("h3")
        EmptyMsg.textContent = "Nothing is Here Please Add"
        ulList.appendChild(EmptyMsg);
    }
}
