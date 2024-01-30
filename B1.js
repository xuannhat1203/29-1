let name = prompt("Nhập họ và tên");
let age = prompt("Nhập tuổi");
let email = prompt("Nhập email");
let array = {
    name: name,
    age: age,
    email: email,
};
localStorage.setItem("array", JSON.stringify(array));
let arrays = JSON.parse(localStorage.getItem("array"));
for (let key in  arrays) {
    document.write(key + ": " + storedArray[key] + "<br>");
}