const flightsApi = 'http://localhost:3002/api/flights';

document.getElementById('createFlightForm').addEventListener('submit', async e => {
  e.preventDefault();
  const token = localStorage.getItem('token');
  const body = {
    origin: document.getElementById('origin').value,
    destination: document.getElementById('destination').value,
    date: document.getElementById('date').value,
    price: parseFloat(document.getElementById('price').value)
  };
  const res = await fetch(flightsApi, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
    body: JSON.stringify(body)
  });
  const data = await res.json();
  alert(data._id ? 'Vuelo creado' : data.message || 'Error');
});
