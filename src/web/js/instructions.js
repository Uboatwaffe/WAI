
// Check whether the visitor has already chosen
if (localStorage.getItem("cookieChoice") === "accepted") {
    cookiePopup.hidden = true;
}

acceptButton.addEventListener("click", function () {
    localStorage.setItem("cookieChoice", "accepted");
    cookiePopup.hidden = true;
});

rejectButton.addEventListener("click", function () {
    alert("This site can't function properly without cookies")
});


document.getElementById('form').addEventListener('submit', (e) => {
    const pass1 = document.getElementById('pass').value;
    const pass2 = document.getElementById('pass2').value;

    if (pass1 !== pass2) {
        e.preventDefault();
        alert('Passwords do not match!');
    }
})