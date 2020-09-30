const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

// adding + in front of movieSelect is same as wrapping it in parseInt function, turning it from a string into a number
const ticketPrice = +movieSelect.value;

// Functions

// Update total and count
function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll('.row .seat.selected');

  const selectedSeatsCount = selectedSeats.length;
  //console.log(selectedSeatsCount);

  // set text for total and count
  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice;
}

// Event listeners
container.addEventListener('click', (e) => {
  //console.log(e.target);
  if (
    e.target.classList.contains('seat') &&
    !e.target.classList.contains('occupied')
  ) {
    //console.log(e.target);
    e.target.classList.toggle('selected');

    updateSelectedCount();
  }
});
