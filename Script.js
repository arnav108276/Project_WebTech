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
            window.location.href = "index.html";
            alert("User signed up successfully!");
            window.location.href = "index.html#shop-items";
        }
        function login() {
            var email = document.getElementById("email").value;
            var password = document.getElementById("password").value;
            var len=users.length;
            for (var i = 0; i < len; i++) {
                if (users[i].email === email && users[i].password === password) {
                    // Redirect to index.html with anchor to specific element
                    window.location.href = "index.html#shop-items";
                    return;
                }
                else{
                  window.alert("Invalid email or password. Please try again.");
                }
            }
           
        }
