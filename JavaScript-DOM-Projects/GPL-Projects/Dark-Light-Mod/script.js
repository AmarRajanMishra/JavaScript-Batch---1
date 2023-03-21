let btn = document.getElementById('btn')
let text = document.getElementById('heading')
let body = document.getElementById('body')

btn.addEventListener('click', darkLightMod)
function darkLightMod(){
    
    if(btn.textContent.includes('Dark')){
        btn.innerHTML = "Light Mod"
        body.style.backgroundColor = "black"
        text.style.color = "white"
        
    }else{
        btn.innerHTML = "Dark Mod"
        body.style.backgroundColor = "white"
        text.style.color = "black"

    }
}