interface Joke {
    id: string;
    joke: string;
}

const jokeText = document.getElementById('jokeText') as HTMLParagraphElement;
const nextJokeButton = document.getElementById('nextJokeButton') as HTMLButtonElement;

async function fetchJoke(): Promise<Joke> {
    const response = await fetch('https://icanhazdadjoke.com/', {
        headers: {
            'Accept': 'application/json'
        }
    });
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const joke: Joke = await response.json();
    return joke;
}
async function displayJoke(): Promise<void> {
    try {
        const joke = await fetchJoke();
        console.log(joke);
        jokeText.innerText = joke.joke;
    } catch (error: any) {
        jokeText.innerText = 'Error al cargar el chiste';
        console.error('Error fetching joke:', error);
    }
}

nextJokeButton.addEventListener('click', displayJoke);

displayJoke();
