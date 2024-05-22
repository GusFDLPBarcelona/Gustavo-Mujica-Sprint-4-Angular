Bienvenid@ al Sprint 4 de It Academy. Estoy cursando para aprender Angular. 
En este Sprint creamos un proyecto web que muestra chistes utilizando una API pública. 
En este READ.me a continuación viene el enunciado tal como lo recibimos de la academia y luego agregaré las deficniciones y detalles de las funciones utilizadas.

En las anteriores entregas, los datos que hemos utilizado en nuestras webs los hemos agregado nosotros al programa (hardcoded), pero no es habitual.

Enunciado: 

Como en la mayoría de webs reales, consumiremos los datos de una API en este ejercicio. Por suerte, no deberemos implementar una API para guardar los datos en una base de datos, y poder consumirlos con una serie de llamadas. En su lugar, usaremos una API ya hecha que nos permitirá obtener el listado de naves fácilmente.

Los dos temas más importantes que pondrás en práctica en este proyecto son TypeScript y obtención de datos mediante llamadas API Rest en un servidor.

Una empresa de coaching está trayendo un experimento a empresas de Barcelona, ​​en la que está midiendo el impacto del humor y la diversión en la productividad.

Nos han pedido una aplicación web que muestre chistes a las personas trabajadoras antes de empezar la jornada laboral.

Serás el encargado/a de llevar a cabo la base del proyecto para hacer una demo en dos semanas con el cliente/ay empezar las pruebas con usuarios/as reales.

Información de API a consumir

Crearemos una web de chistes, consumiendo datos de una API gratuita que no requiere clave. Verás que es muy divertido e interesante poder conseguir datos de una API, ¡imagina la cantidad de webs que puedes hacer!

En el ámbito profesional, cuando trabajes en un proyecto, la empresa normalmente tiene un back end con una documentación para poder obtener los datos. A menudo, una web o app no ​​sólo tiene una fuente de datos, también es común utilizar API de terceros. Resumiendo, saber consumir datos de una API es una de las skills más importantes de un programador/a front end!

El ejercicio se compone de 6 (seis) ejercicios agrupados en tres niveles que detallaré a medida que vaya resolviendo las funciones necesarias.

Clona el repositorio para ver los resultados. Puedes hacerlo en este link:
https://github.com/GusFDLPBarcelona/Gustavo-Mujica-Sprint-4-Angular.git

Sigue estos pasos para instalar las dependencias necesarias. Al tratarse de un proyecto que incorpora Typescript lo común sería:
node js:
$ npm init (si quieres que npm asuma los valores por defecto $ npm init -y)
Typescript:
$ npm install -g typescript

En la carpeta .gitignore se encuentran los node_modules que no incluímos en el repositorio ni en el sitio web en general. 

Las carpetas .editorconfig, .eslintignore, .eslintrcjson, .prettier.js se crean si instalas además el compilador de TS de Google. En este ejercicio no ha trenido impacto. 

El archivo tsconfig.json se genera al iniciar Typescript en el proyecto luego de la instalación de las dependencias. En este ejercicio utilicé el comando $ tsc --init y $ npx tsc para compilar TS a JS. app.js pues, es un archivo espejo de app.ts.

--------------------------------------------------------------------

HTML:

- Al iniciar se mostrará el primer chiste por pantalla y el botón de siguiente chiste. Además de los botones de puntuación y la información climática.

- Al pulsar el botón de “Siguiente chiste” se hará fetch en la API de chistes y se mostrará por consola y por pantalla el chiste.



· app.ts:
- Contiene  todas las funciones lógicas para cumplir el objetivo de mostrar información, almacenarla, modificarla y consultarla. 

· Línea 2 a 10: Interfaces. Definen la estructura de un chiste según la API. Typescript ayuda
    a validar los datos
    para prevenir errores en el desarrollo. Por tanto, definir la interface para validar la estructura de los datos que se reciben de la API ayudaría a verificar que los datos recibidos también tienen el tipo correcto. La segunda asigna tipos a los datos que se guardarán en array de los chistes puntuados.

· Línea 23 a 25: Dado que tendremos una función para alernar chistes era necesario declarar
    una variable para inicializar primero una de las dos Api desde las cuales se tomarán datos (chistes). La primera en este caso, se establece en false, lo que supondrá que no será la primera en ser utilizada. El valor para currentJoKe se establece en null para poder ser modificado cuando se obtengan los primeros datos. Y se crea el array que almacenará las puntuaciones de los chistes para poder consultarlas según se almacenen los datos.

· línea 27 y 28: Contienen las constantes necesarias para acceder mediante API_KEY a la
    información del clima. Y la constante CITY se establece en Barcelona para mostrar los datos correspondiente a esta ciudad.

· Línea 31 y 48: Creamos una función para obtener los datos climáticos desde una API. Es una
   función asíncrona que contiene una promesa vacía. LA promesa se resuelve luego de aportar la clave API declarada anteriormente y el nombre de la ciudad de la que se informará el tiempo. Luego de comprobar si la respuesta es corrcta las constantes d temperatura e icono convierten los datos en un objeto JSON. Luego se extrae la información para actualizar los datos en el HTML, mostrando la información al usuario. La función contiene un bloque TRY y CATCH para atajar errores de ejecución. 

· Línea 51 a 69: Función para para llamar y obtener un chiste de la API icanhazdadjoke
   Como es requisito del enunciado se declara una función asíncrona que devolverá una promesa
   que se resuelve con un objeto: el chiste. Hace una solicitud a la url y espera hasta que la promesa se resuelva. Luego asigna el resultado a la variable 'response'.
   Indicamos que la respuesta esperada es en formato .json estableciendo el encabezado accept del headers en 'application/json'.
   Comprueba si la respuesta es correcta y si no lo es nos devolverá un mensaje relativo al resultado.

· Línea 72 a 80: Para la API de los chistes de Chuck Norris era necesario declarar una
   constante que contuviera las opciones para la solicitud HTTP indicando el método a utilizar (GET) para obtener los recursos. Indicamos en el encabezado que la respuesta que se espera es en formato JSON. Incluímos la clave API para acceder a esos recursos y también proporcionamos el host de la API para enrutar correctamente la solicitud al servicio correcto.

· Línea 83 a 98: Definimos la función asíncrona para obtener los chistes de la API de Chuck
   Norris, con las mismas propiedades y métodos que la función para obtener los chistes de
   la API de icanhazdadjoke. Con las mismas condiciones según respuesta y los bloques TRY y CATCH para prevenir errores.

· Línea 101 a 107: Esta es la función que de qué API se obtendrá un chiste entre las dos
   desde las cuales consumiremos datos. Al establecer en principio la constante de Chuck Norris en false, al cargar la página siempre comenzaremos viendo un chiste de la API de icanhazdadjoke. Primero comprueba que la variable es true/false y si es true llama a Chuck y si no, llama a icanhazdadjoke. Utilizamos la clave await para esperar a que la promesa se resuelva antes de devolver el resultado. 

· Línea 110 a 114: En este punto se añade una pequeña función para mostrar aleatoriamente 
   las imágenes que decoran la aplicación. Se proponen burbujas de colores y es este caso he elegido 5 diferentes que se mostrarán cada vez que se hace click en el botón "Siguiente Chiste". Se genera un índice aleatorio teniendo en cuenta que debemos obtener un índice válido para el array de formas. Utiliza randomIndex para seleccionar aleatoriamente una de las 5 formas que contiene el array y la imagen se cambia al insertar directamente variables en la cadena de texto ${selectedShape}.

· Línea 116 a 129: Función para mostrar el chiste en la pantalla.
   Declaramos una función asíncrona que devuelve una promesa que se resuelve en <void>. (La función displayJoke se encarga de dos cosas: mostrar el chiste en la pantalla y en la consola. Ambas son acciones, no producen un valor que se vaya a utilizar en otro lugar del código. Por lo tanto, no hay necesidad de que displayJoke devuelva un valor como por ejemplo "joke".)
   Iniciamos un bloque 'try' para capturar cualquier error que pueda ocurrir durante la ejecución de las instrucciones dentro del bloque.
   La constante joke llama a la función fetchJoke() y espera a que se cumpla la promesa para asignar el resultado a la variable joke.
   Las siguientes líneas capturan errores si estos ocurrieran y cambia lo que se muestra en el DOM y en la consola en caso de producirse esos posibles errores.

· Línea 132 a 151: Esta función toma el parámetro score basándose en el chiste ostrado en
   pantalla. Se crea un informe de puntuación en un array si no existe uno anterior y se modifica esa puntuación sobre el mismo chiste si el usuario asigna una puntuación diferente luego de haber votado. Es decir, permite vota y cambiar la votación almacenando un reporte que se mostrará en consola. Este reporte es acumulativo, agregando al array cada chiste que se vota.

· Línea 153 a 161: Esta función define un controlador de eventos para el evento "click" en el
   elemento votingContainer creado para agrupar los "score". Obtiene el elemento que fue clicado (el objetivo del evento) y lo almacena en la constante "target" asumiendo que el objetivo del evento es un elemento html (HTMLButtonElement). El bloque condicional asegura que target no es null y si coincide con el selector. Es decir, se ejecuta si el elemento clicado es un botón de votación. La constante score obtiene el atributo data-score para convertirlo en el número que contiene la puntuación asociada al botón en el que se ha clicado. 








