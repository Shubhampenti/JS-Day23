document.getElementById('signup-form').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    const user = { name, email };
  
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
  
    document.getElementById('signup-form').reset();
  
    displayUsers();
  });

  function displayUsers() {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const cardsContainer = document.getElementById('cards');
    cardsContainer.innerHTML = '';
  
    users.forEach((user) => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `<h3>${user.name}</h3><p>${user.email}</p>`;
      cardsContainer.appendChild(card);
    });
  }
  
  displayUsers();
  