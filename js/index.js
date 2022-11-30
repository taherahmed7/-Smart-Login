const userNameInput = document.getElementById("userNameInput");
const userEmailInput = document.getElementById("userEmailInput");
const userPasswordInput = document.getElementById("userPasswordInput");
const signupBtn = document.getElementById("signupBtn");

let users;
if (localStorage.getItem("users") == null) {
    users = [];
}
else {
    users = JSON.parse(localStorage.getItem("users"));
}
function signUp() {

    userInputsValidation();
    isExist();

    if (userInputsValidation() == true && isExist() == false) {
        let user =
        {
            name: userNameInput.value,
            email: userEmailInput.value,
            password: userPasswordInput.value
        }

        users.push(user)
        localStorage.setItem("users", JSON.stringify(users));
        const confirmMsg = document.getElementById("confirmMsg");
        confirmMsg.classList.replace("d-none", "d-block");
        const signin = document.getElementById("signin")
        signin.classList.replace("d-none", "d-block");
    }
    else {
        const tryAgainMsg = document.getElementById("tryAgainMsg");
        tryAgainMsg.classList.replace("d-none", "d-block");
    }

}

function usernameValidation() {
    const usernameAlert = document.getElementById("usernameAlert");

    let regex = /^[A-Za-z]{3,10}(\s?[A-Za-z]{3,10})?$/
    if (regex.test(userNameInput.value) == true && userNameInput.value != "") {
        userNameInput.classList.add("is-valid");
        userNameInput.classList.remove("is-invalid");
        usernameAlert.classList.replace("d-block", "d-none");

        return true
    }
    else {

        userNameInput.classList.add("is-invalid");
        userNameInput.classList.remove("is-valid");
        usernameAlert.classList.replace("d-none", "d-block");

        return false
    }
}
function userPasswordValidation() {
    let regex = /^.{5,15}$/;
    const userPasswordAlert = document.getElementById("userPasswordAlert");

    if (regex.test(userPasswordInput.value) == true && userPasswordInput.value != "") {
        userPasswordInput.classList.add("is-valid");
        userPasswordInput.classList.remove("is-invalid");
        userPasswordAlert.classList.replace("d-block", "d-none");

        return true
    }
    else {

        userPasswordInput.classList.add("is-invalid");
        userPasswordInput.classList.remove("is-valid");
        userPasswordAlert.classList.replace("d-none", "d-block");

        return false
    }
}

function userEmailValidation() {
    const userEmailAlert = document.getElementById("userEmailAlert");

    let regex = /@[a-z]{5,10}(\.com)$/;
    if (regex.test(userEmailInput.value) == true && userEmailInput.value != "") {
        userEmailInput.classList.add("is-valid");
        userEmailInput.classList.remove("is-invalid");
        userEmailAlert.classList.replace("d-block", "d-none");

        return true
    }
    else {

        userEmailInput.classList.add("is-invalid");
        userEmailInput.classList.remove("is-valid");
        userEmailAlert.classList.replace("d-none", "d-block");

        return false
    }
}

function isExist() {
    let accountExistMsg = document.getElementById("accountExistMsg");

    for (let i = 0; i < users.length; i++) {

        if (users[i].name.toLowerCase() == userNameInput.value.toLowerCase() || users[i].email.toLowerCase() == userEmailInput.value.toLowerCase()) {
            accountExistMsg.classList.replace("d-none", "d-block");
            userNameInput.classList.remove("is-valid");
            userEmailInput.classList.remove("is-valid");
            userPasswordInput.classList.remove("is-valid");

            return true
        }
    }
    return false
}
function userInputsValidation() {
    usernameValidation();
    userEmailValidation();
    userPasswordValidation();

    if ((usernameValidation() == true && userEmailValidation() == true && userPasswordValidation() == true)) {
        return true
    }
    else {
        return false
    }
}



var username = localStorage.getItem("usersName");
function login() {
    let loginEmail = document.getElementById("loginEmail");
    let loginPassword = document.getElementById("loginPassword");
    let loginBtn = document.getElementById("loginBtn");
    let wrongMsg = document.getElementById("wrongMsg");

    if (loginEmail.value == "" || loginPassword.value == "") {
        let fillMsg = document.getElementById("fillMsg");
        fillMsg.classList.replace("d-none", "d-block");
        return false
    }

    for (var i = 0; i < users.length; i++) {
        if (users[i].email.toLowerCase() == loginEmail.value.toLowerCase() && users[i].password.toLowerCase() == loginPassword.value.toLowerCase()) {

            localStorage.setItem('usersName', users[i].name)
            loginBtn.setAttribute("href", "Home.html");
        }
        else {
            wrongMsg.classList.replace("d-none", "d-block");
        }
    }
}
function displayUserName() {
    document.getElementById("username").innerHTML = "Welcome " + username;

}

function logout() {
    localStorage.removeItem('usersName')
}
