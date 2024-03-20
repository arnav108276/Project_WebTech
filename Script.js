// Arnav Goel 500108276
var users = [];
        function signup() {
            var email = document.getElementById("email").value;
            var password = document.getElementById("password").value;
            var user = {
                email: email,
                password: password
            };
            users.push(user);
            alert("User signed up successfully!");
            window.location.href = "index.html";
        }
        function login() {
            var email = document.getElementById("email").value;
            var password = document.getElementById("password").value;
            var len=users.length;
            var isLoggedIn = false;
            for (var i = 0; i < len; i++) {
                if (users[i].email === email && users[i].password === password) {
                    isLoggedIn = true;
                    break;
                }
            }
            
            if (isLoggedIn) {
                window.location.href = "index.html #shop-items";
            } else {
                window.alert("Invalid email or password. Please try again.");
            }
            
           
        }
