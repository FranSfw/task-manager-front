const API_URL = 'https://task-manager-api-production-56f5.up.railway.app/tasks';

const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');
const emptyMsg = document.getElementById('emptyMsg');

// Get all tasks
async function fetchTasks() {
    try {
        const response = await fetch(API_URL);
        const tasks = await response.json();
        renderTasks(tasks);
    } catch (error) {
        console.error('Error al obtener las tareas:', error);
    }
}

function renderTasks(tasks) {
    taskList.innerHTML = '';

    if (tasks.length === 0) {
        emptyMsg.classList.remove('hidden');
    } else {
        emptyMsg.classList.add('hidden');

        tasks.forEach(task => {
            const li = document.createElement('li');
            li.className = 'group flex justify-between items-center py-2 px-2 hover:bg-gray-50 rounded-md transition-colors -mx-2';

            li.innerHTML = `
                <div class="flex items-center gap-3">
                    <input type="checkbox" 
                        ${task.completed ? 'checked' : ''} 
                        onchange="toggleTask(${task.id}, ${task.completed})"
                        class="w-4 h-4 text-gray-900 rounded border-gray-300 cursor-pointer transition-colors">
                    
                    <span class="text-base transition-all duration-300 ${task.completed ? 'line-through text-gray-400' : 'text-gray-800'}">
                        ${task.title}
                    </span>
                </div>
                <button onclick="deleteTask(${task.id})" 
                    class="text-gray-400 opacity-0 group-hover:opacity-100 hover:text-red-500 transition-all text-sm font-medium px-2">
                    Eliminar
                </button>
            `;
            taskList.appendChild(li);
        });
    }
}

// Create
async function addTask() {
    const title = taskInput.value.trim();
    if (!title) return;


    addBtn.disabled = true;
    addBtn.textContent = '...';

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: title,
                completed: false
            })
        });

        if (response.ok) {
            taskInput.value = '';
            fetchTasks();
        }
    } catch (error) {
        console.error('Error al agregar tarea:', error);
    } finally {
        addBtn.disabled = false;
        addBtn.textContent = 'Agregar';
    }
}

// Delete
async function deleteTask(id) {
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'DELETE'
        });

        if (response.ok) {
            fetchTasks(); // Recargamos la lista para que desaparezca
        }
    } catch (error) {
        console.error('Error al eliminar la tarea:', error);
    }
}

// Toggle
async function toggleTask(id, currentStatus) {
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                completed: !currentStatus
            })
        });

        if (response.ok) {
            fetchTasks();
        }
    } catch (error) {
        console.error('Error al actualizar la tarea:', error);
    }
}

addBtn.addEventListener('click', addTask);

taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});

fetchTasks();