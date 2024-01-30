let input = document.getElementById("input");
        let button = document.getElementById("btn1");
        let userList = document.getElementById("userList");
        button.onclick = function() {
            let userName = input.value;
            localStorage.setItem("UserName", JSON.stringify(userName));
            let li = document.createElement("li");
            li.textContent = userName;
            userList.appendChild(li);
            input.value = "";
            button.remove();
        }