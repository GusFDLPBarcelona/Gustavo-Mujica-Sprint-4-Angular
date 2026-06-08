# Chistes Aleatorios

Aplicación web que muestra chistes obtenidos de dos APIs públicas de forma alternada, con sistema de votación por emojis y widget del tiempo en Barcelona en tiempo real.

## Demo

[Ver demo en GitHub Pages](https://gusfdlpbarcelona.github.io/Gustavo-Mujica-Sprint-4-Angular/)

## Tecnologías

- TypeScript
- HTML5 / CSS3
- Bootstrap 5
- APIs REST: [icanhazdadjoke](https://icanhazdadjoke.com/) y [Chuck Norris Jokes](https://api.chucknorris.io/)
- [OpenWeatherMap API](https://openweathermap.org/)

## Funcionalidades

- Carga automática de un chiste al iniciar la página
- Alternancia entre dos fuentes de chistes en cada petición
- Votación de cada chiste con tres emojis (😡 😊 😂), con posibilidad de cambiar el voto
- Registro acumulativo de puntuaciones en memoria
- Fondo decorativo con formas SVG que cambia en cada chiste
- Widget meteorológico en tiempo real con icono y temperatura de Barcelona

## Estructura del proyecto

```
├── src/
│   └── app.ts          # Lógica principal en TypeScript
├── dist/
│   └── app.js          # TypeScript compilado
├── css/
│   └── style.css
├── images/             # Blobs SVG decorativos
└── index.html
```

## Instalación y uso

```bash
# Clonar el repositorio
git clone https://github.com/GusFDLPBarcelona/Gustavo-Mujica-Sprint-4-Angular-.git

# Instalar dependencias
npm install

# Compilar TypeScript
npx tsc

# Abrir index.html en el navegador
```

## Conceptos practicados

- Interfaces TypeScript para tipar respuestas de API
- Funciones asíncronas con `async/await` y manejo de errores con `try/catch`
- Consumo de múltiples APIs REST en paralelo
- Manipulación del DOM con TypeScript tipado
- Delegación de eventos
