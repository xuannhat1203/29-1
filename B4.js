let array = [1, 2, 3, 4, 5];
localStorage.setItem("array", JSON.stringify(array));
let arrays = JSON.parse(localStorage.getItem("array"));
console.log(arrays);
arrays = JSON.parse(localStorage.getItem("array"));
console.log(arrays);