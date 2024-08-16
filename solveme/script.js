function checkPassword() {
    const correctPassword = "reset"; // Replace with your actual password
    const userPassword = document.getElementById("password").value.toLowerCase();

    if (userPassword === correctPassword.toLowerCase()) {
        window.location.href = "https://www.youtube.com/watch?v=mtmxrSg28qY"; // Replace with your actual YouTube link
    } else {
        alert("なんも変わらなかったようだ。");
    }
}
