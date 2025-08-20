const flightsApi = 'http://localhost:3002/api/flights';
const reservationsApi = 'http://localhost:3003/api/reservations';
const myFlightsApi = flightsApi + '/mine';

async function loadFlights() {
  const res = await fetch(flightsApi);
  const flights = await res.json();
  const list = document.getElementById('flightsList');
  flights.forEach(f => {
    const li = document.createElement('li');
    li.className = 'flex items-center justify-between bg-white p-4 rounded-lg shadow hover:shadow-md transition';
    li.textContent = `${f.origin} -> ${f.destination} (${new Date(f.date).toLocaleString()}) $${f.price}`;
    const btn = document.createElement('button');
    btn.textContent = 'Reservar';
    btn.className = 'bg-purple-600 hover:bg-purple-700 text-white px-3 py-1 rounded-md transition transform hover:scale-105';
    btn.onclick = () => reserveFlight(f.id || f._id);
    li.appendChild(btn);
    list.appendChild(li);
  });
}

async function loadMyFlights() {
  const token = localStorage.getItem('token');
  if (!token) return;
  const res = await fetch(myFlightsApi, { headers: { 'Authorization': `Bearer ${token}` } });
  const flights = await res.json();
  const list = document.getElementById('myFlightsList');
  flights.forEach(f => {
    const li = document.createElement('li');
    li.className = 'bg-white p-4 rounded-lg shadow hover:shadow-md transition';
    li.textContent = `${f.origin} -> ${f.destination} (${new Date(f.date).toLocaleString()}) $${f.price}`;
    list.appendChild(li);
  });
}

async function reserveFlight(id) {
  const token = localStorage.getItem('token');
  const res = await fetch(reservationsApi, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
    body: JSON.stringify({ flight: id })
  });
  const data = await res.json();
  if (data.id) {
    Swal.fire('Éxito', 'Reserva creada', 'success');
  } else {
    Swal.fire('Error', data.message || 'Error', 'error');
  }
}

document.getElementById('flightForm')?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const token = localStorage.getItem('token');
  const res = await fetch(flightsApi, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({
      origin: document.getElementById('origin').value,
      destination: document.getElementById('destination').value,
      date: document.getElementById('date').value,
      price: Number(document.getElementById('price').value)
    })
  });
  const data = await res.json();
  alert(data._id ? 'Vuelo creado' : data.message || 'Error');
  if (data._id) {
    document.getElementById('flightsList').innerHTML = '';
    loadFlights();
  }
});
loadFlights();
