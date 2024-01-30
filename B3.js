let array = ["Nhất 1", "Nhất 2", "Nhất 3"];
localStorage.setItem("array", JSON.stringify(array));
let arrays = JSON.parse(localStorage.getItem("array"));
let button = document.getElementById("btn");
button.onclick = function() {
    for (let i = 0; i < arrays.length; i++) {
        if (input.value == arrays[i]) {
            arrays.splice(i, 1);
        }
    }
    for (let i = 0; i < arrays.length; i++) {
        document.write(arrays[i]);
    }
};
