let player = 0
let enemy = 0
let isEnemy = false
let isPlayer = false

let chosenPlayerName = document.querySelector('#chosenPlayerName')
let chosenPlayerPic = document.querySelector('#chosenPlayerPic')
let chosenPlayerHP = document.querySelector('#chosenPlayerHP')

let currentEnemyName = document.querySelector('#currentEnemyName')
let currentEnemyPic = document.querySelector('#currentEnemyPic')
let currentEnemyHP = document.querySelector('#currentEnemyHP')

// init function to reset
const init = _ => {
  // reset player
  // reset enemy
  // reset all health
  // reset all attack
  // reset all counter attack
  // reset all html elements
}

const choosePlayer = (player) => {
  chosenPlayerName.innerHTML = `<h4>${playables[player].name}</h4>`
  chosenPlayerPic.innerHTML = `<img class="options" src="${playables[player].picture}" alt="${playables[player].text}">`
  chosenPlayerHP.innerHTML = `<h6>${playables[player].healthpoints}</h6>`

  isPlayer = true
}

const moveEnemies = (player) => {
  let hiddenEnemy0 = document.querySelector('#hiddenEnemy0')
  let hiddenEnemy1 = document.querySelector('#hiddenEnemy1')
  let hiddenEnemy2 = document.querySelector('#hiddenEnemy2')
  let hiddenEnemy3 = document.querySelector('#hiddenEnemy3')

  switch (player) {
    case 0:
      hiddenEnemy1.style.display = "inline"
      hiddenEnemy2.style.display = "inline"
      hiddenEnemy3.style.display = "inline"
      break
    case 1:
      hiddenEnemy0.style.display = "inline"
      hiddenEnemy2.style.display = "inline"
      hiddenEnemy3.style.display = "inline"
      break
    case 2:
      hiddenEnemy0.style.display = "inline"
      hiddenEnemy1.style.display = "inline"
      hiddenEnemy3.style.display = "inline"
      break
    case 3:
      hiddenEnemy0.style.display = "inline"
      hiddenEnemy1.style.display = "inline"
      hiddenEnemy2.style.display = "inline"
      break
    default:
      break
  }
}

const clearChoices = _ => {
  let chooseablePlayers = document.querySelector('#playerOptions')
  chooseablePlayers.style.display = "none"
}

const pickEnemy = (player) => {
  document.addEventListener('click', e => {
    let value = parseInt(e.target.dataset.value)

    if ((e.target.className === 'options hiddenEnemies') && (!isEnemy) && (isPlayer)) {
      enemy += value
      
      currentEnemyName.innerHTML = `<h4>${playables[enemy].name}</h4>`
      currentEnemyPic.innerHTML = `<img class="options" src="${playables[enemy].picture}" alt="${playables[enemy].text}">`
      currentEnemyHP.innerHTML = `<h6>${playables[enemy].healthpoints}</h6>`
      
      document.querySelector(`#hiddenEnemy${value}`).style.display = "none"

      isEnemy = true

      fightEnemy(player, enemy)
    } else {
      pickEnemy()
    }

  })
}

const fightEnemy = (player, enemy) => {
  let playerHP = playables[player].healthpoints
  let playerAttack = playables[player].attack
  let playerAttackPower = playables[player].attackpower
  let enemyAttack = playables[enemy].counterattackpower
  let enemyHP = playables[enemy].healthpoints

  if (isEnemy && isPlayer) {
    document.querySelector('.attackBtn').style.display = "inline"
    document.addEventListener('click', e => {
      if (e.target.className === 'attackBtn') {
        enemyHP -= playerAttack
        playerHP -= enemyAttack
        playerAttack += playerAttackPower
        // check HP of both
        hpCheck()
      }
    })
  }
}

const hpCheck = () => {
  // check if HP of player is 0, loss
  // check if HP of enemy is 0
  // if 0, pickEnemy
  // if not, back to fightEnemy
  console.log('HP Check')
}

const gamePlay = (player) => {
  choosePlayer(player)
  moveEnemies(player)
  clearChoices()
  pickEnemy(player)
}

document.addEventListener('click', e => {
  let player = parseInt(e.target.dataset.value)
  if (e.target.className === 'options chooseablePlayers') {
    gamePlay(player)
  }
})

// when attack clicked, attack other player, lower health of enemy
// counter attack by challenger, lower health of player
// attack goes up on player for each round

// if player health <= 0, lose

// if challenger health <= 0, pick another enemy, repeat attack loop

// if player health >0 and no other enemies left, win

// const valueArr = [0, 1, 2, 3]

// const movingChars = (value) => {
//   let charValFinder = valueArr.filter(number => {
//     let charVal = value
//     return number !== value
//   })
//   // chosenPlayer.innerHTML = `
//   //   <h6>${playables[0].name}</h6>
//   //     <br>
//   //       <img class="options" src="${playables[0].picture}" alt="${playables[0].text}"> 
//   //     <br>
//   //     <p>${playables[0].healthpoints}</p>
//   //   `
//   // enemyPlayers.innerHTML = `
//   //   <h6>${playables[1].name}</h6>
//   //     <br>
//   //       <img class="options" src="${playables[1].picture}" alt="${playables[1].text}"> 
//   //     <br>
//   //     <p>${playables[1].healthpoints}</p>
//   //   `
// }

// object of enemy stats/etc.
let playables = [
  {
    name: 'Fire',
    picture: "./assets/images/fire.png",
    healthpoints: 150,
    attack: 10,
    attackpower: 10,
    counterattackpower: 20,
  },
  {
    name: 'Air',
    picture: "./assets/images/air.png",
    healthpoints: 150,
    attack: 10,
    attackpower: 10,
    counterattackpower: 20,
  },
  {
    name: 'Water',
    picture: "./assets/images/water.png",
    healthpoints: 150,
    attack: 10,
    attackpower: 10,
    counterattackpower: 20,
  },
  {
    name: 'Earth',
    picture: "./assets/images/earth.png",
    healthpoints: 150,
    atack: 10,
    attackpower: 10,
    counterattackpower: 20,
  },
]

// run init
init()
