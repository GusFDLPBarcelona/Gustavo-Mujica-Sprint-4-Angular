// Interfaces
interface Joke {
    id: string;
    joke: string;
}

interface JokeReport {
    joke: string;
    score: number;
    date: string;
}

// Elementos HTML
const jokeText = document.getElementById('jokeText') as HTMLParagraphElement;
const nextJokeButton = document.getElementById('nextJokeButton') as HTMLButtonElement;
const votingContainer = document.getElementById('voting-container') as HTMLDivElement;
const weatherText = document.getElementById('weatherText') as HTMLParagraphElement;
const weatherIcon = document.getElementById('weatherIcon') as HTMLImageElement;
const shapes = ['Blob(1).svg', 'blob(2).svg', 'blob(3).svg', 'blob(4).svg', 'blob(5).svg']

// Variables
const reportAcudits: JokeReport[] = [];
let currentJoke: Joke | null = null;
let useChuckNorrisAPI = false; 

const API_KEY = '6f5f881d8de1fa9d8310060dd6cc07c8';
const CITY = 'Barcelona';

// Función para los datos del tiempo en Barcelona desde OpenWeatherMap API
async function fetchWeather(): Promise<void> {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const weatherData = await response.json();
        const temperature = weatherData.main.temp;
        const iconCode = weatherData.weather[0].icon;

    
        weatherText.innerText = `${temperature}°C`;      
        weatherIcon.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
        weatherIcon.style.display = 'block';
    } catch (error: any) {
        weatherText.innerText = 'Error al cargar la información meteorológica';
        console.error('Error fetching weather:', error);
    }
}

// Función para obtener un chiste desde icanhazdadjoke API
async function fetchIcanhazdadjoke(): Promise<Joke> {
    try {
        const response = await fetch('https://icanhazdadjoke.com/', {
            headers: {
                'Accept': 'application/json'
            }
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const jokeJson = await response.json();
        return {
            id: jokeJson.id,
            joke: jokeJson.joke
        };
    } catch (error: any) {
        throw new Error('Error fetching joke from icanhazdadjoke');
    }
}

// Variables y opciones para la API de Chuck Norris
const chuckNorrisUrl = 'https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random';
const chuckNorrisOptions = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        'X-RapidAPI-Key': '060082372amsh5513d8879d9aa02p1fb8d5jsn2e3c1250bafd',
        'X-RapidAPI-Host': 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com'
    }
};
// Función para obtener un chiste de Chuck Norris desde la API
async function fetchChuckNorrisJoke(): Promise<Joke> {
    try {
        const response = await fetch(chuckNorrisUrl, chuckNorrisOptions);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const jokeJson = await response.json();
        return {
            id: jokeJson.id,
            joke: jokeJson.value
        };
    } catch (error: any) {
        console.error(error);
        throw new Error('Error fetching Chuck Norris joke');
    }
}

// Función para obtener un chiste desde una de las dos APIs alternativamente
async function fetchJoke(): Promise<Joke> {
    if (useChuckNorrisAPI) {
        return await fetchChuckNorrisJoke();
    } else {
        return await fetchIcanhazdadjoke();
    }
}

// Función para mostrar los chistes en la página
async function displayJoke(): Promise<void> {
    try {
        const joke = await fetchJoke();
        currentJoke = joke;
        jokeText.innerText = joke.joke;
        useChuckNorrisAPI = !useChuckNorrisAPI; 
        console.log('New joke displayed:', joke.joke);
    } catch (error: any) {
        jokeText.innerText = 'Error al cargar el chiste';
        console.error('Error fetching joke:', error);
    }
}

// Función para votar un chiste
function voteJoke(score: number) {
    if (currentJoke) {
        const existingReportIndex = reportAcudits.findIndex(r => r.joke === currentJoke!.joke);
        const report: JokeReport = {
            joke: currentJoke.joke,
            score: score,
            date: new Date().toISOString()
        };

        if (existingReportIndex !== -1) {
            reportAcudits[existingReportIndex] = report; 
        } else {
            reportAcudits.push(report); 
        }

        console.log('Updated reports:', reportAcudits);
    } else {
        console.error('currentJoke is null');
    }
}

// Eventos de escucha de los botones agrupados en el contenedor de votación
votingContainer.addEventListener('click', (event) => {
    if (event.target && (event.target as HTMLElement).matches('.vote-btn')) {
        const target = event.target as HTMLButtonElement;
        const score = Number(target.getAttribute('data-score'));
        console.log('Vote button clicked with score:', score);
        voteJoke(score);
    }
});

nextJokeButton.addEventListener('click', displayJoke);

// LLamadas a las funciones para mostrar el chiste y el tiempo
displayJoke();
fetchWeather();
