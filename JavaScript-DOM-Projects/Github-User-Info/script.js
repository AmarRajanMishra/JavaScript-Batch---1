// fetch('https://api.github.com/users')
//   .then(res => res.json())
//   .then(json => console.log(json))

//   fetch('http://127.0.0.1:5500/index.html')
//   .then(res => res.text())
//   .then(text => console.log(text))

// let userName = document.getElementById('inputData').value
// let url = 'https://api.github.com/users/'+userName



// fetch('https://api.github.com/users')
//   .then(res => res.json())
//   .then(json => 
    
//     // console.log(json)
//     // console.log(json.login)
    
//     )












// fetch(url)
// .then(response => response.text())
// .then(response => console.log(response))
// .catch(err=>console.log(err))

// fetch('https://api.github.com/users')
//   .then(response => response.json())
//   .then(json => {


//   })
//   .catch(err => console.log(err))










// var a = [
//     {
//         Name: "Amar",
//         Age : 27,
//         Gender : "Male"
//     },
//     {
//         Name: "Kamlesh",
//         Age : 27,
//         Gender : "Male"

//     },
//     {
//         Name: "P. L",
//         Age : 27,
//         Gender : "Male"
//     }
        

// ]
// console.log(a)




// // console.log(userName)
// let btn = document.getElementById('btn')
// // let userData = 


btn.addEventListener('click',gitUserInfo)
function gitUserInfo(){
    let userName = document.getElementById('inputData').value;
    console.log(userName)
    let url = 'https://api.github.com/users/'+userName;
    fetch(url).then(response => response.json()).
        then(data =>{
            // console.log(data)
            console.log(url)
            if(data.message){
                
                document.getElementById('res').innerHTML = `<h2>User Not Found</h2>`
            }else{
                document.getElementById('res').innerHTML = `
                <img src="${data.avatar_url}" >
                <h2>Name : ${data.name}</h2>
                <p>Repo : ${data.public_repos}</p>
                <p>Bio : ${data.bio}</p>
                `
            }
            
           
        }).catch(e => {
            console.log(e)
        })

}

// const sum = ()=>{
//     var a = 10, b = 20;
//     console.log(a+b)
// }
//  sum();

// let sum = function(){
//     var a = 10, b = 30;
//     console.log(a+b)
// }
// sum();


// fetch(url).then(res => res.json()).
//     then(data =>{

// }).catch(e => {
//         console.log(e)
//     }


        
    

// let btn = document.getElementById('btn')
// btn.addEventListener('click', gitUserInfo)
// function gitUserInfo(){
//     let userName = document.getElementById('inputData').value
//     console.log(userName);
//     let url = 'https://api.github.com/users/'+userName
//     // console.log(url);
//     fetch(url).then(res => res.json()).
//     then(data =>{
        
//         console.log(data);
//             if(data.message){
//                 document.getElementById('res').
//                 innerHTML = `<h3>Profile Not Found</h3>`
//             }else{
//                 document.getElementById('res').
//                 innerHTML = `
//                 <img src="${data.avatar_url}" style = "width:100%" >
//                 <p>${data.name} (${data.login})</p>
//                 <p>${data.bio}</p>
//                 <p>${data.subscriptions_url}</p>
//                 `
//             }
//         }).catch(e => {
//         console.log(e)
//     })
// }



