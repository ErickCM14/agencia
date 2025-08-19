document.addEventListener('DOMContentLoaded', () => {
  const token = localStorage.getItem('token');
  const loginLink = document.getElementById('nav-login');
  const registerLink = document.getElementById('nav-register');
  const logoutLink = document.getElementById('nav-logout');
  if (token) {
    loginLink?.classList.add('hidden');
    registerLink?.classList.add('hidden');
    logoutLink?.classList.remove('hidden');
  } else {
    loginLink?.classList.remove('hidden');
    registerLink?.classList.remove('hidden');
    logoutLink?.classList.add('hidden');
  }

  logoutLink?.addEventListener('click', (e) => {
    e.preventDefault();
    localStorage.removeItem('token');
    if (window.Swal) {
      Swal.fire('Sesión cerrada', '', 'success').then(() => {
        window.location.href = 'index.html';
      });
    } else {
      window.location.href = 'index.html';
    }
  });
});
