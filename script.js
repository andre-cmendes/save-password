document
  .getElementById('passwordForm')
  .addEventListener('submit', function (event) {
    event.preventDefault();

    const passwordInput = document.getElementById('passwordInput');
    const password = passwordInput.value;

    if (password) {
      savePassword(password);
      passwordInput.value = '';
    }
  });

let passwords = [];

function savePassword(password) {
  passwords.push(password);
  displayPasswords();
}

function displayPasswords() {
  const passwordList = document.getElementById('passwordList');
  passwordList.innerHTML = '';
  passwords.forEach((password, index) => {
    const li = document.createElement('li');
    li.textContent = `Password ${index + 1}: ${password}`;
    passwordList.appendChild(li);
  });
}
