const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

const STORAGE_KEY = "todo-list";

// Tasks live as a plain array of {text, checked}. Persisting structured
// data — instead of dumping listContainer.innerHTML into localStorage —
// avoids storing arbitrary HTML that would then be re-inserted via
// innerHTML on reload (stored-XSS).
let tasks = loadTasks();
render();

function loadTasks() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) return [];
        const parsed = JSON.parse(raw);
        return Array.isArray(parsed) ? parsed.filter(
            (t) => t && typeof t.text === "string"
        ) : [];
    } catch (_) {
        return [];
    }
}

function saveTasks() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

function render() {
    listContainer.replaceChildren();
    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.textContent = task.text; // textContent, not innerHTML — no HTML parsing
        if (task.checked) li.classList.add("checked");

        li.addEventListener("click", (e) => {
            if (e.target === li) {
                tasks[index].checked = !tasks[index].checked;
                saveTasks();
                render();
            }
        });

        const closeBtn = document.createElement("span");
        closeBtn.className = "close";
        closeBtn.textContent = "✖"; // ✖
        closeBtn.setAttribute("aria-label", "Delete task");
        closeBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            tasks.splice(index, 1);
            saveTasks();
            render();
        });
        li.appendChild(closeBtn);

        listContainer.appendChild(li);
    });
}

function addTask() {
    const value = inputBox.value.trim();
    if (!value) {
        alert("You must write something!");
        return;
    }
    tasks.push({ text: value, checked: false });
    saveTasks();
    render();
    inputBox.value = "";
    inputBox.focus();
}

// Enter-to-submit — previously the only way to add a task was clicking the button.
inputBox.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
        addTask();
    }
});

// Expose addTask for the inline onclick="addTask()" in index.html.
window.addTask = addTask;
