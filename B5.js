let button = document.getElementById("btn");
button.onclick = function(event) {
    event.preventDefault(); 
    let input1 = document.getElementById("input1");
    let input2 = document.getElementById("input2");
    let input3 = document.getElementById("input3");
    let name = input1.value;
    let age = input2.value;
    let email = input3.value;
    let array = {
        name: name,
        age: age,
        email: email,
    };
    localStorage.setItem("array", JSON.stringify(array));
};