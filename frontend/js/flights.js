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
  alert(data.id ? 'Reserva creada' : data.message || 'Error');
}

loadMyFlights();
loadFlights();
