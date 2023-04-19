const jokeEl = document.getElementById("joke");
const get_joke = document.getElementById("get_joke");

get_joke.addEventListener("click",  generateJoke);
generateJoke();
async function generateJoke() {

    const jokeRes = fetch('https://icanhazdadjoke.com/', {
        headers: {
            'Accept' : 'application/json'
        }
    });
    console.log(jokeRes);
    const joke = (await jokeRes).json();
    joke.then((result)=> {
        jokeEl.innerHTML = result.joke;
    });
    
}