let player
let enemy
let attack
let win
let loss


// init function to reset
const init = _ => {
  // reset player
  // reset enemy
  // reset all health
  // reset all attack
  // reset all counter attack
  // reset all html elements
}

// allow picking of player--eventlistener
document.addEventListener('click', e => {

})

// move enemy into enemy div (html)

// make it impossible to click on another enemy (not chosen)

// when attack clicked, attack other player, lower health of enemy
// counter attack by challenger, lower health of player
// attack goes up on player for each round

// if player health <= 0, lose

// if challenger health <= 0, pick another enemy, repeat attack loop

// if player health >0 and no other enemies left, win

// object of enemy stats/etc.
let playables = [
  {
    name: 'Arya Stark',
    picture: "./assets/images/arya.jpg",
    healthpoints: 150,
    attackpower: 10,
    counterattackpower:20, 
  },
  {
    name: 'Jon Snow',
    picture: "./assets/images/jon.jpg",
    healthpoints: 150,
    attackpower: 10,
    counterattackpower: 20,
  },
  {
    name: 'Cersi Lanister',
    picture: "./assets/images/cersei.jpg",
    healthpoints: 150,
    attackpower: 10,
    counterattackpower: 20,
  },
  {
    name: 'Daenerys Targarian',
    picture: "./assets/images/daenerys.jpg",
    healthpoints: 150,
    attackpower: 10,
    counterattackpower: 20,
  },
]

// run init
init()
