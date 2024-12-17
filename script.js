
function refreshPage() {
    location.reload();
}


function showSignIn() {
    document.getElementById('signupContainer').style.display = 'none';
    document.getElementById('signinContainer').style.display = 'block';
}


function showSignUp() {
    document.getElementById('signinContainer').style.display = 'none';
    document.getElementById('signupContainer').style.display = 'block';
}


document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent actual form submission
    
    document.body.innerHTML = `
        <div class="container">
            <h1>Thank You for Signing Up!</h1>
            <p>We appreciate your registration.</p>
        </div>
    `;
});


document.getElementById('signinForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    alert('Sign In Successful!');
});
