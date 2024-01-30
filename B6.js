let array = {
    name: "xuannhat1203",
    pass: "Xuannhat1",
};
localStorage.setItem("array", JSON.stringify(array));
let user = document.getElementById("user");
let pass = document.getElementById("pass");
let arrays = JSON.parse(localStorage.getItem("array"));
let button = document.getElementById("btn");
button.onclick = function(){
    if(user.value === arrays.name && pass.value === arrays.pass){
        alert("Thong tin nhap chinh xac");
    }else{
        alert("Thong tin nhap khong chinh xac");
    }
};