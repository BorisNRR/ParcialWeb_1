
# Descripción:

El siguiente proyecto contiene el código realizado para el primer parcial de Desarrollo con Tecnologías Web.

## Commit 0:

El primer commit contiene la inicialización del proyecto y la instalación (e importación en el archivo index.js) de bootstrap. Esta es la base para desarrollar el parcial de mañana, 14/03/2024 en clase.

## Pasos para ejecución:

En primera instancia, se debe contar con la instalación de Node.js en el equipo en que se va a ejecutar el programa. Se descarga el .zip del proyecto y se descomprime; posteriormente se abre la carpeta donde se encuentra el portafolio y se ejecuta en el IDE de su preferencia. Desde la terminal del IDE se instalan las dependencias (npm -i) y se instalan las librerias React Bootstrap, React Router, React Intl y react Dom. Una vez culminadas las intalaciones se ejecuta el proyecto en local (npm start).

## Primer Release:

En el primer Release se tiene la implementación de los componentes Home, el cual corresponde a la página que reciba al usuario. UserProfile, que contiene el detalle del usuario al dar click en su foto de perfil (/UserProfile en la URL), y se inicializa PostDetail, componente que contendrá el detalle de una publicación hecha por el usuario.

No obstante, no se logra consumir de manera adecuada datos .json desde github y no se genera de manera adecuada el routing en la aplicación.

Otro error, dentro del código del componente Home se implementó un botón para ver el detalle del perfil del usuario donde se añade el código _onClick={navigate("/UserProfile")}_ esto hace que se renderice directamente la vista de UserProfile al ejecutar el proyecto. Eliminando esta parte se visualiza la estructura de la vista Home.

## Segundo Release:

Para el segundo Release se implementa internacionalización de los textos estáticos de la aplicación.  Se crean dos archivos JSON, dentro de la carpeta locales, uno para los respectivos valores a español y otro en inglés. Se modifica index.js para ejecutar bajo el marco de IntlProvider.