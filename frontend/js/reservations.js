const reservationsApi = 'http://localhost:3003/api/reservations';
const allReservationsApi = reservationsApi + '/all';

async function loadReservations() {
  const token = localStorage.getItem('token');
  const res = await fetch(reservationsApi, {
    headers: { 'Authorization': `Bearer ${token}` }
  });
  const reservations = await res.json();
  const list = document.getElementById('reservationsList');
  reservations.forEach(r => {
    const li = document.createElement('li');
    li.className = 'bg-white p-4 rounded-lg shadow hover:shadow-md transition';
    li.textContent = `${r.flight.origin} -> ${r.flight.destination} (${new Date(r.flight.date).toLocaleString()}) - ${r.status}`;
    list.appendChild(li);
  });
}

async function loadAllReservations() {
  const res = await fetch(allReservationsApi);
  const reservations = await res.json();
  const list = document.getElementById('allReservationsList');
  reservations.forEach(r => {
    const li = document.createElement('li');
    li.className = 'bg-white p-4 rounded-lg shadow hover:shadow-md transition';
    li.textContent = `${r.flight.origin} -> ${r.flight.destination} (${new Date(r.flight.date).toLocaleString()}) - ${r.status}`;
    list.appendChild(li);
  });
}

loadReservations();
loadAllReservations();
