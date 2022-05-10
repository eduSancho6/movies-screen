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


La peticiones a su servidor se han realizado a través de **Axios**, una API HTTP de Javascript que permite realizar promesas y comunicarnos con API REST. Para más información pulsa [aquí](https://axios-http.com/docs/intro). Por otro lado, he utilizado **Redux** para la gestión del estado correspondiente a las películas favoritas.




