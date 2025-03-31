document
  .getElementById('passwordForm')
  .addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    const passwordInput = document.getElementById('passwordInput');
    const password = passwordInput.value;

    if (password) {
      savePassword(password);
      passwordInput.value = ''; // Clear the input field
    }
  });

let passwords = [];

function savePassword(password) {
  passwords.push(password);
  displayPasswords();
}

function displayPasswords() {
  const passwordList = document.getElementById('passwordList');
  passwordList.innerHTML = ''; // Clear the list

  passwords.forEach((password, index) => {
    const li = document.createElement('li');
    li.textContent = `Password ${index + 1}: ${password}`;
    passwordList.appendChild(li);
  });
}
