// fetch('https://api.github.com/users')
// .then(res => res.json())
// .then(data => console.log(data))




// fetch('https://api.github.com/users/mojombo')
// .then(res => res.json())
// .then(data => {
//     console.log(data)
//     console.log(data.login)
//     console.log(data.public_repos)
// })
function getUserInfo(){
    let userName = document.getElementById('fname').value
    // console.log(userName)
    let url = `https://api.github.com/users/${userName}`
    // console.log(url)
    
    fetch(url)
    .then(res => res.json())
    .then(data =>{
        console.log(data)
        document.getElementById('userDetails').innerHTML = `
        <h1><a href='https://github.com/${userName}' target = 'blank'>User Name : ${data.login}</a></h1>
        <h2>User Bio : ${data.bio}</h2>
        <p>Public Repos : ${data.public_repos}</p>
        <img src= '${data.avatar_url}'>
        `

    } )
}



// const obj = {
//     Name : "Amar",
//     Age : 25,
//     Gender : "Male"
// }

// console.log(obj.Name)
// console.log(obj.Age)





// function  getUserInfo(){
//     let userName = document.getElementById('fname').value
//     let url = 'https://api.github.com/users/'+userName
//     // console.log(url)
//     let userDetails = document.getElementById('userDetails')
//     fetch(url)
//     .then(res => res.json())
//     .then(data => {
//         console.log(data)
//         userDetails.innerHTML = `<h1>User Name : ${data.login}</h1>
//         <img src="${data.avatar_url}" >
//         `
//     })

// }


// var a = 20

// console.log(`the value  ${a} of a is ${a}`)

// console.log('the value of a is ', a)























// fetch('https://jsonplaceholder.typicode.com/posts')
// .then(res => res.json())
// .then(data => console.log(data))



// fetch('http://127.0.0.1:5500/index.html')
// .then(res => res.text())
// .then(data => console.log(data))

// const obj = {
//     Name : "Amar",
//     Age : 25
// }

// console.log(obj.Name)

// const arr = [27, 28, "Hello", {Name : "Rajan"}, {Name : "Amar"}]


// function newFun(){

// }
// newFun()
// // Arrow Function or Fat Arrow Function


// const myFun = () => {

// }

// myFun()