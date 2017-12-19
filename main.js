var reservations = {
  'Bob': { claimed: false },
  'Ted': { claimed: true }
}

console.log(reservations.Bob.claimed)

var name = prompt('Please enter the name for your reservation');

var claimReservation = function (name) {
  // write your code here!
  if (reservations[name] && ! reservations[name].claimed) {
    alert('Welcome ' + name)
  }
  else if (reservations[name] && reservations[name].claimed) {
    alert('your reservation has already been claimed')
  }
  else{
    reservations[name] = {claimed: true}
    alert('Your reservation has been considered')
  }

}

claimReservation(name);
console.log(reservations)

