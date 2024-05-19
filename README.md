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

--------------------------------------------------------------------
Nivel 1 Ejercicio 1

En este primer ejercicio crearemos la pantalla principal que mostrará chistes al usuario/a.
El funcionamiento debe ser el siguiente:

- Al iniciar se mostrará el primer chiste por pantalla y el botón de siguiente chiste.
- Al pulsar el botón de “Siguiente chiste” se hará fetch en la API de chistes y se mostrará por consola y por pantalla el chiste.

· HTML: El archivo index.html solo contendrá un botón para el siguiente chiste, más adelante la información sobre clima y algunos estilos, además de los links necesarios para bootstrap y scripts.

· app.ts: creamos las funciones para llamar a la API y mostrar el chiste en la pantalla y consola.

· Línea 1 a 4: Definen la estructura de un chiste según la API. Typescript ayuda a validar los datos para prevenir errores en el desarrollo. Por tanto, definir la interface para validar la estructura de los datos que se reciben de la API ayudaría a verificar que los datos recibidos también tienen el tipo correcto. 

· Línea 6 y 7: Tomamos los elementos del DOM declarando dos constantes para el chiste y el botón.

· Línea 9 a 20: Función para para llaar y obtener un chiste de la API. 
    Como es requisito del enunciado se declara una función asíncrona que devolverá una promesa que se resuelve con un objeto: el chiste. Hace una solicitud a la url y espera hasta que la promesa se resuelva. Luego asigna el resultado a la variable 'response'.
    Indicamos que la respuesta esperada es en formato .json estableciendo el encabezado accept del headers en 'application/json'.
    Comprueba si la respuesta es correcta y si no lo es nos devolverá un mensaje relativo al resultado.

· Línea 21 a 30: Función para mostrar el chiste en la pantalla.
    Declaramos una función asíncrona que devuelve una promesa que se resuelve en <void>. (La función displayJoke se encarga de dos cosas: mostrar el chiste en la pantalla y en la consola. Ambas son acciones, no producen un valor que se vaya a utilizar en otro lugar del código. Por lo tanto, no hay necesidad de que displayJoke devuelva un valor como por ejemplo "joke".)
    Iniciamos un bloque 'try' para capturar cualquier error que pueda ocurrir durante la ejecución de las instrucciones dentro del bloque.
    La constante joke llama a la función fetchJoke() y espera a que se cumpla la promesa para asignar el resultado a la variable joke.
    Las siguientes líneas capturan errores si estos ocurrieran y cambia lo que se muestra en el DOM y en la consola en caso de producirse esos posibles errores.

· Línea 32 y 34: Añadimos un evento al botón para obtener el siguiente chiste y llamamos a la función displayJoke(). Así pues, al iniciar la aplicación, obtenemos un chiste.


Nivel 1 Ejercicio 2

Hemos de realizar una primera maquetación, colocando cada elemento en su sitio. En este ejercicio no maquetaremos al detalle sino que centraremos los elementos y declaramos algunas clases de estilos.

· HTML: Modificcamos el archivo index.html para agregar una imagen de fondo y aplicar algunos estilos. Redefinimos los divs necesarios.

· Línea 16 a 22: Agregamos un div para la imagen de fondo y asignamos una imagen.
    Creamos un contenedor para los chistes mediante div y aplicamos clases y alineaciones verticales y horizontales.
    Creamos un div con propiedades de tarjeta para mostrar el texto de los chistes y el botón para el siguiente chiste. 
    El párrafo con id="jokeText con clase de alerta será visible si la promesa demora en resolverse y el chiste tarda en cargarse. Mostrará el mensaje "Cargando Chiste" si fuera necesario.
    Por ahora el botón solo tiene una clase primaria de bootstrap (btn-btn-primary)

· Style.css

· Línea 1 a 4: Eliminamos cualquier margen predeterminado y establecemos la altura al 100% del viewport.

· Línea 6 a 16: Aquí damos estilos al div que contiene la imagen de fondo. Posición absoluta pra cubrir todo el fondo, la ajustamos para ocupar todo el div y la centramos. Y con el zindex de -1 nos aseguramos de que la imagen se muestre detrás de los chistes.

· Líneas 18 a 20: Damos un estilo básico al container del texto de los chistes. La ajustamos al 100% de altura. 

· Línea 22 a 25: Con estas líneas damos estilo básico a la tarjeta que contendrá los textos y el botón. Fondo semi transparente y esquinas suavemente redondeadas.

· Línea 27 a 29: Esta clase aumenta levemente el tamaño de la alerta "Cargando Chiste" y afwectará también al tamaño del texto de los chistes, que llevan la misma clase .alert-info . 







