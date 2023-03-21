// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => console.log(json))
//   .catch()

// const a = [{Name:"Ajay"},{Name:"Rajan"}]
// console.log(a)

// const obj = {}

// fetch('https://api.github.com/users')
// .then(res => res.json())
// .then(json => console.log(json))


// fetch('http://127.0.0.1:5500/index.html')
// .then(res => res.text())
// .then(text => console.log(text))


// fetch('https://api.github.com/users')
// .then(res => res.json())
// .then(json => console.log(json))

let getInfo = document.getElementById('btn')
getInfo.addEventListener('click', getUserInfo)

function getUserInfo(){
  let userName = document.getElementById('inputData').value
  // console.log(userName)
  let url = 'https://api.github.com/users/'+userName
  // console.log(url)
  fetch(url)
  .then(res => res.json())
  .then(res => {
      // console.log(data)
    let result =document.getElementById('result')
    if(res.message){
      result.innerHTML = `<h1>User Not Found </h1>`

    }else{
      result.innerHTML = `
    <img src="${res.avatar_url}">
    <h1>Name : ${res.login}</h1>
    <p>Bio : ${res.bio} </p>
    <p> Public Repo : ${res.public_repos}
    
    `
    }
    }
  )
}


// let obj = {
//   name : "Amar",
//   Age: 27
// }
// console.log(obj.Age)
// console.log(obj.name)