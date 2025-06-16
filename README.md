# Aplicación de Lista de Tareas en Angular

Una aplicación sencilla y limpia de lista de tareas (To-Do) desarrollada con Angular que demuestra funcionalidades CRUD (Crear, Leer, Actualizar, Eliminar). Este proyecto se conecta a una API REST para gestionar tareas, proporcionando una experiencia de usuario interactiva y fluida.

-----

## Features

  - **CRUD de tareas:** Easily manage your to-do items.
    * **Ver tareas**: Lista todas las tareas existentes.
    * **Crear tareas**: Añade nuevas tareas.
    * **Editar tareas**: Modifica tareas existentes.
    * **Eliminar tareas**: Borra tareas completadas o no deseadas.
  - **Interfaz moderna:** Diseño intuitivo y fácil de usar.
  - **Conexión a API REST:** Usa `HttpClient` para interactuar con el backend.
  - **Formularios reactivos:** Validación robusta y manejo de entradas.
  - **Arquitectura modular:** Componentes reutilizables y mantenibles.

-----

## Requisitos previos

Asegúrate de tener instalado:

  - [Node.js](https://nodejs.org/) (incluye npm)
  - [Angular CLI](https://angular.io/cli)
  - Una API REST funcionando [REST API](https://www.google.com/search?q=%23rest-api) (puedes usar JSON Server para pruebas locales)

-----

## Instalación

1.  **Clona el repositorio:**

    ```sh
    git clone https://github.com/your-username/Jhon-Alv/angular-todo-list
    cd angular-todo-list
    ```

2.  **Instala las dependencias:**

    ```sh
    npm install
    ```

3.  **Configura la API:**
    Edita src/environments/environment.ts y define la URL de tu API:

    ```typescript
    export const environment = {
      apiUrl: 'http://localhost:3000/tasks' // Ejemplo para JSON Server
    };
    ```

4.  **Inicia la aplicación:**

    ```sh
    ng serve
    ```

    Abre tu navegador en `http://localhost:4200`.

-----

## Funcionalidades detalladas

### Ver tareas
* Muestra una lista de todas las tareas almacenadas.
* Filtrado por estado (completadas/pendientes).

### Crear tareas
* Formulario con validación para añadir nuevas tareas.
* Campos: Título, Descripción y Estado.
### Editar tareas
* Permite modificar título, descripción y estado de una tarea.
* Guarda los cambios en la API.
### Crear tareas
* Elimina tareas individuales con confirmación.
* Opción de borrar múltiples tareas seleccionadas.
-----

## Tecnologías utilizadas

  - **Angular:** Framework principal.
  - **Angular Material:**   Componentes UI con Material Design.
  - **TypeScript:** Lenguaje de desarrollo.
  - **HTML & CSS:** Estructura y estilos.
  - **Angular CLI:** Para la generación y gestión de proyectos.

-----

## Integración con API REST

La aplicación consume una API con los siguientes endpoints:

| Operación | Método HTTP | Endpoint | Descripción |
| :--- | :--- | :--- | :--- |
| **Leer** | `GET` | `/tasks` | Obtiene todas las tareas. |
| **Crear** | `POST` | `/tasks` | Añade una nueva tarea. |
| **Actualizar** | `PUT` | `/tasks/:id` | Modifica una tarea. |
| **Eliminar** | `DELETE` | `/tasks/:id` | Borra una tarea. |

