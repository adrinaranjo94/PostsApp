# PRUEBA TECNICA

## Descripción

Este proyecto ha sido creado con la intención de llevar a cabo una prueba técnica de nivel.

## Tecnologías

Ha sido desarrollado con las siguientes tecnologías o herramientas:

- Vite
- React
- TS
- SCSS

## Linters y estilos

En esta parte del proyecto, cabe destacar que se han implementado funcionalidades o metodologías con el objetivo de marcar unas reglas de cara al desarrollo en equipo.

ESLINT para las reglas de buenas prácticas en la escritura de código
PRETTIER para la tabulación y limitación de filas del proyecto
STYLELINT para las reglas de buenas prácticas en la escritura de CSS

## Librerías externas

Se ha utilizado las siguientes librerías:

- `axios` para la funcionalidad de peticiones FETCH a la API.
- `react-router-dom` para proveer de rutas a la aplicación
- `react-toastify` para implementar toast con los que mostrar avisos en la descarga de la información de la API
- `path` para la generación de importaciones con alias de los distintos ficheros dentro del proyecto

## Estilos

Se ha utilizado SCSS para implementar estilos al proyecto, con el objetivo de poder implementar a futuro mixins y declaración de variables para establecer estilos de una manera más rápida y poder reutilizar.

En este proyecto no se ha utilizado una librería de terceros, ya que se han utilizado pocos componentes y se ha preferido diseñar los componentes desde dentro del proyecto.

Se ha partido de la metodología Mobile First, por lo que todos los componentes están adaptados a visualizar correctamente desde un móvil.

## Rutas

Se ha implementado React Router Dom para la generación de las rutas.

Aunque se ha decidido avanzar en el camino de generación de rutas dinámicas a través de archivos de configuración. Esto permitirá implementar rápidamente más rutas a utilizar, sin tener que variar la parte del código.

## Arquitectura

Se ha utilizado la metodología DDD con el objetivo de dividir en 2 partes las funcionalidades del negocio.

- `applications`: Contiene las aplicaciones que se utilizarán en las rutas comentadas en el punto anterior. De esta manera podremos reutilizar o crear tantas aplicaciones como deseemos.

- `domains`: Contiene los dominios ortientados a la parte de negocio. Esto nos permitirá definir las entidades del modelo que se utilizarán dentro de cada dominio

No obstante, si se necesitara implementar un dominio dentro de otro dominio, esto se realizará desde la capa de `applications` sirviendo de puente entre ambos y enviando la información que sea necesaria.

Todos los componentes dentro de cada dominio tendrán acceso directo al contexto mediante el hook `useContext`

## State management

Se ha utilizado Context API, con el objetivo de crear dominios con componentes que sean capaces de autogestionarse de manera dinamica.

Esto quiere decir que dentro de una aplicación podremos renderizar dos componentes Post que cada uno de ellos tendra su Provider, y desde ahí están encapsulados, por lo que se podrá trabajar con más de uno a la vez en la misma página sin problema.

Estos contextos se han utilizado con reducers, permitiendo tener un control más exhaustivo del estado a modificar y notificar al resto de componentes.

## Estructura del proyecto

-`applications` Aplicaciones que se utilizarán para renderizar dentro de las rutas -`domains` Dominios orientados al negocio que se utilizarán dentro de las aplicaciones -`router` Lógica del router dinámico para la aplicación -`shared` Conjunto de componentes y lógicas que se usarán de forma transversal en la aplicación

## Notificaciones

Para la parte de notificación, se ha creado el adaptador de Axios, que permitirá usar diferentes conectores.
En este caso se ha implementado el de `ToastConnector` pero podría implementarse distintos conectores y cambiarlos en ejecución.

## Requisitos para abrir el proyecto

Se ha implementado Docker y Docker Compose con el objetivo de simplificar la apertura del proyecto

```
docker-compose up
```

Lanzará el proyecto y directamente en el puerto 3000

Si se deseará utilizar sin Docker:

```
npm i && npm run dev
```

## DEMO

El proyecto ha sido desplegado en Heroku mediante docker-container

[DEMO DEL PROYECTO EN HEROKU](https://posts-react-ts-app.herokuapp.com)
