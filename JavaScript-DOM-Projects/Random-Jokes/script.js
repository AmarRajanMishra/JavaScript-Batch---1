let jokesBtn = document.getElementById('jokesBtn')
jokesBtn.addEventListener('click', generateNewJokes)

function generateNewJokes(){
    let url = 'https://api.chucknorris.io/jokes/random'
    // console.log(url)
    fetch(url)
    .then(res => res.json())
    .then(res => {
        let jokesSection = document.getElementById('jokeSection')
        jokesSection.innerHTML = `
        <h1>New jokes </h1>
        <p> ${res.value}
        `
    })
}

CRUD => Create, Retrieve, Update, Delete