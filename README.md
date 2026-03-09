# Task Manager - Frontend

Este es el frontend para la aplicación de gestión de tareas (Task Manager), desarrollado por Francisco Perez. Es una interfaz sencilla, limpia y responsiva construida con tecnologías web estándar y estilizada con Tailwind CSS.

## 🚀 Características

*   **Listar Tareas**: Visualiza todas las tareas pendientes y completadas.
*   **Agregar Tarea**: Añade nuevas tareas a la lista fácilmente.
*   **Completar/Desmarcar Tarea**: Marca las tareas como completadas (tachándolas en la lista) o desmárcalas.
*   **Eliminar Tarea**: Borra tareas que ya no necesites.
*   **Diseño Responsivo**: Interfaz clara y moderna adaptada para cualquier dispositivo, impulsada por CSS utilities.

## 🛠️ Tecnologías Utilizadas

*   **HTML5**
*   **JavaScript (Vanilla)**: Manejo del DOM, eventos y peticiones HTTP (`fetch`).
*   **Tailwind CSS** (vía CDN): Para estilos rápidos y diseño moderno.
*   **Google Fonts**: Fuente 'Inter' para una mejor legibilidad.

## ⚙️ Conexión con el Backend

La aplicación se conecta a una API REST alojada en Railway:
`https://task-manager-api-production-56f5.up.railway.app/tasks`

Las operaciones CRUD (Crear, Leer, Actualizar, Eliminar) se comunican directamente con este endpoint, manteniendo la interfaz actualizada de manera asíncrona.

## 📦 Instalación y Uso

Dado que es un proyecto frontend estático que utiliza Tailwind vía CDN, no requiere instalación de dependencias locales (como `npm install`).

1.  **Clonar el repositorio**:
    git clone https://github.com/FranSfw/task-manager-front
    cd TaskBackend/task-manager-front
    
2.  **Abrir el proyecto**:
    Simplemente abre el archivo `index.html` en tu navegador web de preferencia.
    
