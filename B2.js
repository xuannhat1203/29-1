let input = document.querySelector("input");
let button = document.querySelector("button");
let array = [];
button.onclick = function() {
    let id = +prompt("Nhập id của cầu thủ");
    array.push(input.value);
    localStorage.setItem(`${id}`, JSON.stringify(array));
};