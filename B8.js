let input = document.getElementById("input");
    let button = document.getElementById("btn");
    let todoList = document.getElementById("todoList");
    button.onclick = function() {
        let title = input.value;
        let li = document.createElement("li");
        li.textContent = title;
        let button2 = document.createElement("button");
        button2.innerHTML = '<span class="material-icons-outlined">close</span>';
        button2.onclick = function() {
        li.remove();
        button2.remove();
        };
        li.appendChild(button2);
        todoList.appendChild(li);
        input.value = "";
};