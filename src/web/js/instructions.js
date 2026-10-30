document.getElementById('form').addEventListener('submit', (e) => {
    const pass1 = document.getElementById('pass').value;
    const pass2 = document.getElementById('pass2').value;

    if (pass1 !== pass2) {
        e.preventDefault();
        alert('Passwords do not match!');
    }
})