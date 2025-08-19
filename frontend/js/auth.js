const apiUrl = {
  users: 'http://localhost:3001/api/users'
};

document.getElementById('registerForm')?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const res = await fetch(`${apiUrl.users}/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      password: document.getElementById('password').value
    })
  });
  const data = await res.json();
  Swal.fire('Registro', data.message || 'Registrado', data.error ? 'error' : 'success');
});

document.getElementById('loginForm')?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const res = await fetch(`${apiUrl.users}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email: document.getElementById('email').value,
      password: document.getElementById('password').value
    })
  });
  const data = await res.json();
  if (data.token) {
    localStorage.setItem('token', data.token);
    window.location.href = 'flights.html';
  } else {
    Swal.fire('Error', 'Credenciales inválidas', 'error');
  }
});
