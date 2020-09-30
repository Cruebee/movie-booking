const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

// adding + in front of movieSelect is same as wrapping it in parseInt function, turning it from a string into a number
const ticketPrice = +movieSelect.value;

// Event listeners
container.addEventListener('click', (e) => {
  //console.log(e.target);
  if (
    e.target.classList.contains('seat') &&
    !e.target.classList.contains('occupied')
  ) {
    //console.log(e.target);
    e.target.classList.toggle('selected');
  }
});
