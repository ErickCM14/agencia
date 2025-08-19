document.addEventListener('DOMContentLoaded', () => {
  const token = localStorage.getItem('token');
  const loginLink = document.getElementById('nav-login');
  const registerLink = document.getElementById('nav-register');
  if (token) {
    loginLink?.classList.add('hidden');
    registerLink?.classList.add('hidden');
  } else {
    loginLink?.classList.remove('hidden');
    registerLink?.classList.remove('hidden');
  }
});
