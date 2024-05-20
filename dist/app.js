"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
// Elementos HTML
var jokeText = document.getElementById('jokeText');
var nextJokeButton = document.getElementById('nextJokeButton');
var votingContainer = document.getElementById('voting-container');
var weatherText = document.getElementById('weatherText');
var weatherIcon = document.getElementById('weatherIcon');
var shapes = ['Blob(1).svg', 'blob(2).svg', 'blob(3).svg', 'blob(4).svg', 'blob(5).svg'];
// Variables
var reportAcudits = [];
var currentJoke = null;
var useChuckNorrisAPI = false;
var API_KEY = '6f5f881d8de1fa9d8310060dd6cc07c8';
var CITY = 'Barcelona';
// Función para los datos del tiempo en Barcelona desde OpenWeatherMap API
function fetchWeather() {
    return __awaiter(this, void 0, void 0, function () {
        var response, weatherData, temperature, description, iconCode, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(CITY, "&appid=").concat(API_KEY, "&units=metric"))];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return [4 /*yield*/, response.json()];
                case 2:
                    weatherData = _a.sent();
                    temperature = weatherData.main.temp;
                    description = weatherData.weather[0].description;
                    iconCode = weatherData.weather[0].icon;
                    weatherText.innerText = "La temperatura en ".concat(CITY, " es de ").concat(temperature, "\u00B0C con ").concat(description, ".");
                    weatherIcon.src = "https://openweathermap.org/img/wn/".concat(iconCode, "@2x.png");
                    weatherIcon.style.display = 'block';
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    weatherText.innerText = 'Error al cargar la información meteorológica';
                    console.error('Error fetching weather:', error_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
// Función para obtener un chiste desde icanhazdadjoke API
function fetchIcanhazdadjoke() {
    return __awaiter(this, void 0, void 0, function () {
        var response, jokeJson, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch('https://icanhazdadjoke.com/', {
                            headers: {
                                'Accept': 'application/json'
                            }
                        })];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return [4 /*yield*/, response.json()];
                case 2:
                    jokeJson = _a.sent();
                    return [2 /*return*/, {
                            id: jokeJson.id,
                            joke: jokeJson.joke
                        }];
                case 3:
                    error_2 = _a.sent();
                    throw new Error('Error fetching joke from icanhazdadjoke');
                case 4: return [2 /*return*/];
            }
        });
    });
}
// Variables y opciones para la API de Chuck Norris
var chuckNorrisUrl = 'https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random';
var chuckNorrisOptions = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        'X-RapidAPI-Key': '060082372amsh5513d8879d9aa02p1fb8d5jsn2e3c1250bafd',
        'X-RapidAPI-Host': 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com'
    }
};
// Función para obtener un chiste de Chuck Norris desde la API
function fetchChuckNorrisJoke() {
    return __awaiter(this, void 0, void 0, function () {
        var response, jokeJson, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch(chuckNorrisUrl, chuckNorrisOptions)];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return [4 /*yield*/, response.json()];
                case 2:
                    jokeJson = _a.sent();
                    return [2 /*return*/, {
                            id: jokeJson.id,
                            joke: jokeJson.value
                        }];
                case 3:
                    error_3 = _a.sent();
                    console.error(error_3);
                    throw new Error('Error fetching Chuck Norris joke');
                case 4: return [2 /*return*/];
            }
        });
    });
}
// Función para obtener un chiste desde una de las dos APIs alternativamente
function fetchJoke() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!useChuckNorrisAPI) return [3 /*break*/, 2];
                    return [4 /*yield*/, fetchChuckNorrisJoke()];
                case 1: return [2 /*return*/, _a.sent()];
                case 2: return [4 /*yield*/, fetchIcanhazdadjoke()];
                case 3: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
// Función para mostrar los chistes en la página
function displayJoke() {
    return __awaiter(this, void 0, void 0, function () {
        var joke, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, fetchJoke()];
                case 1:
                    joke = _a.sent();
                    currentJoke = joke;
                    jokeText.innerText = joke.joke;
                    useChuckNorrisAPI = !useChuckNorrisAPI;
                    console.log('New joke displayed:', joke.joke);
                    return [3 /*break*/, 3];
                case 2:
                    error_4 = _a.sent();
                    jokeText.innerText = 'Error al cargar el chiste';
                    console.error('Error fetching joke:', error_4);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
// Función para votar un chiste
function voteJoke(score) {
    if (currentJoke) {
        var existingReportIndex = reportAcudits.findIndex(function (r) { return r.joke === currentJoke.joke; });
        var report = {
            joke: currentJoke.joke,
            score: score,
            date: new Date().toISOString()
        };
        if (existingReportIndex !== -1) {
            reportAcudits[existingReportIndex] = report;
        }
        else {
            reportAcudits.push(report);
        }
        console.log('Updated reports:', reportAcudits);
    }
    else {
        console.error('currentJoke is null');
    }
}
// Eventos de escucha de los botones agrupados en el contenedor de votación
votingContainer.addEventListener('click', function (event) {
    if (event.target && event.target.matches('.vote-btn')) {
        var target = event.target;
        var score = Number(target.getAttribute('data-score'));
        console.log('Vote button clicked with score:', score);
        voteJoke(score);
    }
});
nextJokeButton.addEventListener('click', displayJoke);
// LLamadas a las funciones para mostrar el chiste y el tiempo
displayJoke();
fetchWeather();
