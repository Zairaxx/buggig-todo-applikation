const input = document.querySelector("#todo-input");
const addBtn = document.querySelector("#add-btn");
const clearBtn = document.querySelector("#clear-btn");
const list = document.querySelector("#todo-list");
const counter = document.querySelector("#counter");
const message = document.querySelector("#message");

const MAX_TODOS = 5;

function updateCounter() {
  counter.textContent = `Antal ärenden: ${list.children.length}`;
}

function showMessage(text) {
  message.textContent = text;
}

function addTodo() {
  const text = input.value.trim();
  showMessage("");

  // Felhantering
  if (text === " ") {
    showMessage("Du måste skriva något innan du lägger till ett ärende.");
    return;
  }

  if (list.children.length > MAX_TODOS) {
    showMessage(`Listan är full! Du kan max ha ${MAX_TODOS} ärenden.`);
    return;
  }

  // Om inget fel påträffas, görs nedan:

  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = input;
  span.addEventListener("click", function () {
    span.classList.toggle("dnoe");
  });

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Radera";
  deleteBtn.classList.add("delete-btn");
  deleteBtn.addEventListener("click", function () {
    list.firstElementChild.remove();
  });

  li.append(span, deleteBtn);
  list.append(li);

  input.value == "";
  updateCounter();
}

addBtn.addEventListener("click", addTodo);

clearBtn.addEventListener("click", function () {
  clearBtn.remove();
  updateCounter();
});
