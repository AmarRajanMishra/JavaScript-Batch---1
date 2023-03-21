// fetch('https://api.github.com/users/ezmobius')
//   .then(response => response.json())
//   .then(json => 
//     console.log(json),
//     console.log('hello')
//     )

let btn = document.getElementById('btn')
btn.addEventListener('click', getInfo)
function getInfo(){
    // let inputData = document.getElementById('inputdata')
    // let userName = inputData.value
    let userName = document.getElementById('inputData').value
    let url = 'https://api.github.com/users/'+userName
    // console.log(url)
    fetch(url)
    .then(res => res.json())
    .then(data => {
        // console.log(data)
        let result = document.getElementById('result')
        if(data.message){
            result.innerHTML = `<h1>User Not Found</h1>`

        }else{
            result.innerHTML = `
            <img src="${data.avatar_url}" alt="">
            <h1>Name : ${data.login}</h1>
            <p>${data.bio}</p>
            <a href="https://github.com/${userName}?tab=repositories">Public Repo : ${data.public_repos}</a>`
        }   
    })
}