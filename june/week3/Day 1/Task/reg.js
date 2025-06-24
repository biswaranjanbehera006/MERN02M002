// Handle Registration
const registerForm = document.getElementById("registerForm");
if (registerForm) {
  registerForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("regName").value;
    const email = document.getElementById("regEmail").value;
    const password = document.getElementById("regPassword").value;
    const mobile = document.getElementById("regMobile").value;

    const userData = {
      name: name,
      email: email,
      password: password,
      mobile: mobile,
    };

    localStorage.setItem("user", JSON.stringify(userData));
    document.getElementById("registerMessage").textContent = "Registered Successfully!";
     // Redirect to login.html after 2 seconds
    
     setTimeout(() => {
      window.location.href = "login.html";
    }, 1000)
    // registerForm.reset();
  });
}

// Handle Login
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const loginName = document.getElementById("loginName").value;
    const loginPassword = document.getElementById("loginPassword").value;
    const message = document.getElementById("loginMessage");

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedUser && storedUser.name === loginName && storedUser.password === loginPassword) {
      message.style.color = "green";
      message.textContent = "Login Successfully!";
    } else {
      message.style.color = "red";
      message.textContent = "Invalid User";
    }

    loginForm.reset();
  });
}
