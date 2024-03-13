 // Initialize an array to store user data
        var users = [];

        // Function to handle signup
        function signup() {
            var email = document.getElementById("email").value;
            var password = document.getElementById("password").value;

            // Create an object representing the user
            var user = {
                email: email,
                password: password
            };

            // Add the user object to the users array
            users.push(user);

            // Optionally, you can save the users array to local storage for persistence
            window.location.href = "index.html";
            alert("User signed up successfully!");
            window.location.href = "index.html#shop-items";
        }

        // Function to handle login
        function login() {
            var email = document.getElementById("email").value;
            var password = document.getElementById("password").value;

            // Loop through the users array to find a matching user
            for (var i = 0; i < users.length; i++) {
                if (users[i].email === email && users[i].password === password) {
                    // Redirect to index.html with anchor to specific element
                    window.location.href = "home.html";
                    return;
                }
            }

            // If no matching user is found
            alert("Invalid email or password. Please try again.");
        }
