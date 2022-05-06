**INTRODUCCIÓN**

Este mini-proyecto es una app que utiliza una API llamada [themoviedb](https://www.themoviedb.org) para obtener desde películas, series, programas de televisión y más. En mi caso, se ha empleado para dedicar especial atención a películas, por el momento.

Para obtener la información y que las peticiones tengan una respuesta válida, es necesaria la clave correspondiente, se puede adquirir [aquí](https://developers.themoviedb.org/3/getting-started/introduction) siguiendo las instrucciones.

A la hora de ocultar la clave, normalmente uso la dependecia dotenv y guardar en un **.env** dicha clave, sin embargo, debido a problemas inesperados, me vi obligado a crear un archivo normal y exportarlo a través de ahí. El archivo viene oculto gracias a añadirlo al **.gitignore**. El archivo se llama api_key.ts y su estructura viene en uno de ejemplo:


**ESTRUCTURA**

const API_KEY = <meter aquí la clave>;
const URL = 'https://api.themoviedb.org/3';

export { API_KEY, URL };


Por otro lado, es importante no olvidar realizar la instalación de todas las dependencias con **npm install**.


Tras añadir esta información, solo será necesario iniciar el repositorio con el **script**:

**npm start**


La peticiones a su servidor se han realizado a través de **Axios**, una API HTTP de Javascript que permite realizar promesas y comunicarnos con API REST. Para más información pulsa [aquí](https://axios-http.com/docs/intro).


Por otro lado, he utilizado **Redux** para la gestión del estado correspondiente a las películas favoritas, para lo cuál he tenido que aprenderlo desde el principio. Esta parte ha sido bastante desafiante puesto que lo que aprendía o bien estaba "deprecado" o bien creía que necesitaba hacerlo de manera asíncrona y subí la dificultad sin venir a cuento. Ahora está implementado solo el Slice correspondiente a favoritos, pero a lo largo de estos días habrá tantos slices como estados globales que cambiar: la búsqueda, sus resultados, las películas más populares, ...etc. Gracias a esto, que aunque me haya costado una entrega retrasada y ha afectado al tiempo disponible para diseñar y realizar más implementaciones, ha servido mucho para una comprensión más profunda de Redux y lo que ocurre por detrás. 


**EL GRAN BUG**

En principio funciona bien si se añade y quita de favoritos cada película desde la pantalla principal, funciona correctamente y no da ningún tipo de fallo. El problema llega cuando queremos eliminar esa etiqueta desde la página de favoritos. En un primer momento parece que todo bien, pero si le dais a eliminar de favoritos, a la película que se encuentre justo a su derecha va a cambiar y a pasar a tener el icono de no favorito, el corazón vacío. Eso significará que cuando se pulse de nuevo, mandará otra vez la misma película a favoritos y se duplicará con el corazón relleno, por lo que si se volviese a pulsar, ya que ambos tienen el mismo id, se eliminarían las dos películas simultáneamente.

