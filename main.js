const signUpName = document.getElementById('signUpName');
const signUpEmail = document.getElementById('signUpEmail');
const signUpPassword = document.getElementById('signUpPassword');
const signinEmail = document.getElementById('signinEmail');
const signinPassword = document.getElementById('signinPassword');

function showSignUpPage() {
  document.getElementById('signUpPage').style.display = 'block';
  document.getElementById('loginPage').style.display = 'none';
  document.getElementById('welcomePage').style.display = 'none';
  document.getElementById('signUpMessage').textContent = '';
  document.getElementById('loginMessage').textContent = '';
}

function showLoginPage() {
  document.getElementById('signUpPage').style.display = 'none';
  document.getElementById('loginPage').style.display = 'block';
  document.getElementById('welcomePage').style.display = 'none';
  document.getElementById('signUpMessage').textContent = '';
  document.getElementById('loginMessage').textContent = '';
}

function signUp() {
  const name = signUpName.value;
  const email = signUpEmail.value;
  const password = signUpPassword.value;

  if (name && email && password) {
    localStorage.setItem('userName', name);
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userPassword', password);
    document.getElementById('signUpMessage').textContent = 'Account created successfully!';
    document.getElementById('signUpMessage').style.color = 'green';
    setTimeout(() => {
      showLoginPage();
    }, 2000);
  } else {
    document.getElementById('signUpMessage').textContent = 'All Inputs are required!';
  }
}

function login() {
  const email = signinEmail.value;
  const password = signinPassword.value;

  const storedEmail = localStorage.getItem('userEmail');
  const storedPassword = localStorage.getItem('userPassword');
  const storedName = localStorage.getItem('userName');

  if (email === storedEmail && password === storedPassword) {
    document.getElementById('userName').textContent = storedName;
    showWelcomePage();
  } else {
    document.getElementById('loginMessage').textContent = 'Incorrect email or password!';
  }
}

function showWelcomePage() {
  const storedName = localStorage.getItem('userName');
  if (storedName) {
    document.getElementById('userName').textContent = storedName;
    document.getElementById('signUpPage').style.display = 'none';
    document.getElementById('loginPage').style.display = 'none';
    document.getElementById('welcomePage').style.display = 'block';
  } else {
    showLoginPage();
  }
}

function logout() {
  localStorage.clear();
  showLoginPage();
}

if (localStorage.getItem('userEmail')) {
  showWelcomePage();
} else {
  showLoginPage();
}
