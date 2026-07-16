const sound = document.getElementById("clickSound");
const loginBtn = document.getElementById("LoginBtn");
const confirmBtn = document.getElementById("confirmBtn");
const cancelBtn = document.getElementById("cancelBtn");


const alertOverlay = document.getElementById("Alert");
const alertText = document.getElementById("alertText");
const alertBox = document.querySelector(".alert")

const form = document.querySelector("form");

const username = document.getElementById("username");
const password = document.getElementById("password");

// Play click sound on any button
document.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", () => {
        sound.currentTime = 0;
        sound.play();
    });
});

// Login button shows the confirmation modal
loginBtn.addEventListener("click", () => {
    
    alertText.textContent = "Do you want to log in?";
    confirmBtn.style.display = "block";
    cancelBtn.style.display = "block";

    openAlert();
});

// Confirm: submit the form
confirmBtn.addEventListener("click", () => {
    

    setTimeout(() => {
        if (username.value === "admin" && password.value === "1234") {
            closeAlert();
        setTimeout(() => {
                window.location.href = "Mywebforport/2_myport.html";
            }, 1000);
        } else {
            alertText.textContent = "Username or Password is incorrect!";
            confirmBtn.style.display = "none";
            cancelBtn.style.display = "none";
        setTimeout(() => {
                confirmBtn.style.display = "block";
                cancelBtn.style.display = "block";
                closeAlert();
            }, 1500);
        }
    }, 300);
});

// Cancel: close modal, stay on page
cancelBtn.addEventListener("click", () => {
    closeAlert();
});

// Prevent accidental form submit via Enter key
form.addEventListener("submit", (e) => {
    e.preventDefault();
});

//function alert 
//open
function openAlert(){
    alertOverlay.style.display = "flex";
    setTimeout(() => {
        alertBox.classList.add("show");
    }, 10);
}
//close
function closeAlert(){
    alertBox.classList.remove("show");
    setTimeout(() => {
        alertOverlay.style.display = "none";
    },350);
}