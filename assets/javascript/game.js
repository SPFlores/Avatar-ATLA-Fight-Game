let playables = [
  {
    name: 'Fire',
    picture: './assets/images/fire.png',
    healthpoints: 150,
    healthpointsreset: 150,
    attack: 10,
    attackpower: 10,
    counterattackpower: 2,
    backgroundimage: './assets/images/background-fire.png'
  },
  {
    name: 'Air',
    picture: './assets/images/air.png',
    healthpoints: 150,
    healthpointsreset: 150,
    attack: 10,
    attackpower: 10,
    counterattackpower: 2,
    backgroundimage: './assets/images/background-air.jpg'
  },
  {
    name: 'Water',
    picture: './assets/images/water.png',
    healthpoints: 150,
    healthpointsreset: 150,
    attack: 10,
    attackpower: 10,
    counterattackpower: 2,
    backgroundimage: './assets/images/background-water.png'
  },
  {
    name: 'Earth',
    picture: './assets/images/earth.png',
    healthpoints: 150,
    healthpointsreset: 150,
    attack: 10,
    attackpower: 10,
    counterattackpower: 2,
    backgroundimage: './assets/images/background-earth.png'
  },
]

let player = 0
let enemy = 0
let enemyCounter = 0
let enemyHolder,
  isEnemy,
  isPlayer,
  value

let chooseablePlayers = document.querySelector('#playerOptions')
let chosenPlayerName = document.querySelector('#chosenPlayerName')
let chosenPlayerPic = document.querySelector('#chosenPlayerPic')
let chosenPlayerHP = document.querySelector('#chosenPlayerHP')
let playerHP = playables[player].healthpoints
let playerAttack = playables[player].attack
let playerAttackPower = playables[player].attackpower

let currentEnemyName = document.querySelector('#currentEnemyName')
let currentEnemyPic = document.querySelector('#currentEnemyPic')
let currentEnemyHP = document.querySelector('#currentEnemyHP')
let enemyHP = playables[enemy].healthpoints
let enemyAttack = playables[enemy].counterattackpower

let playAgainButton = document.querySelector('.playAgainBtn')
let resetButton = document.querySelector('.resetBtn')
let attackButton = document.querySelector('.attackBtn')
let winLossDiv = document.querySelector('#winloss')
let backgroundEditing = document.body.style

document.addEventListener('click', e => {
  if (e.target.className === 'options chooseablePlayers') {
    player = parseInt(e.target.dataset.value)
    gamePlay(player)
  } else if ((e.target.className === 'options hiddenEnemies') && (!isEnemy)) {
    let value = parseInt(e.target.dataset.value)
    pickEnemy(value, player)
  }
})

document.addEventListener('click', e => {
  if ((e.target.className === 'attackBtn')) {
    fightEnemy(player, enemy)
  }
})

const init = _ => {
  for (var i = 0; i < playables.length; i++) {
    playables[i].healthpoints = (0 + playables[i].healthpointsreset)
  }

  for (var j = 0; j < playables.length; j++) {
    playables[j].attack = (0 + playables[j].attackpower)
  }

  for (let i = 0; i < playables.length; i++) {
    document.querySelector(`#hiddenEnemy${i}`).style.display = 'none'
  }

  isEnemy = false
  isPlayer = false
  player = 0
  enemy = 0
  enemyHolder = 0
  enemyCounter = 0
  playerHP = playables[player].healthpoints
  playerAttack = playables[player].attackpower
  chooseablePlayers.style.display = 'block'

  chosenPlayerName.innerHTML = ''
  chosenPlayerPic.innerHTML = ''
  chosenPlayerHP.innerHTML = ''

  currentEnemyName.innerHTML = ''
  currentEnemyPic.innerHTML = ''
  currentEnemyHP.innerHTML = ''
  winLossDiv.innerHTML = ''

  resetButton.style.display = 'none'
  attackButton.style.display = 'none'
  playAgainButton.style.display = 'none'

  backgroundEditing.background = `url('./assets/images/background-map.png')`
  backgroundEditing.backgroundRepeat = 'no-repeat'
  backgroundEditing.backgroundAttachment = 'fixed'
  backgroundEditing.backgroundPosition = 'center'
  backgroundEditing.backgroundSize = '100% 100%'
}

const choosePlayer = (player) => {
  isPlayer = true
  chosenPlayerName.innerHTML = `<h4>${playables[player].name}</h4>`
  chosenPlayerPic.innerHTML = `<img class="options" src="${playables[player].picture}" alt="${playables[player].text}">`
  chosenPlayerHP.innerHTML = `<h6>${playables[player].healthpoints}</h6>`

  backgroundEditing.background = `url('${playables[player].backgroundimage}')`
  backgroundEditing.backgroundRepeat = 'no-repeat'
  backgroundEditing.backgroundAttachment = 'fixed'
  backgroundEditing.backgroundPosition = 'center'
  backgroundEditing.backgroundSize = '100% 100%'

  // pickEnemy(player)
}

const moveEnemies = (player) => {
  let hiddenEnemy0 = document.querySelector('#hiddenEnemy0')
  let hiddenEnemy1 = document.querySelector('#hiddenEnemy1')
  let hiddenEnemy2 = document.querySelector('#hiddenEnemy2')
  let hiddenEnemy3 = document.querySelector('#hiddenEnemy3')

  switch (player) {
    case 0:
      hiddenEnemy1.style.display = 'inline'
      hiddenEnemy2.style.display = 'inline'
      hiddenEnemy3.style.display = 'inline'
      break
    case 1:
      hiddenEnemy0.style.display = 'inline'
      hiddenEnemy2.style.display = 'inline'
      hiddenEnemy3.style.display = 'inline'
      break
    case 2:
      hiddenEnemy0.style.display = 'inline'
      hiddenEnemy1.style.display = 'inline'
      hiddenEnemy3.style.display = 'inline'
      break
    case 3:
      hiddenEnemy0.style.display = 'inline'
      hiddenEnemy1.style.display = 'inline'
      hiddenEnemy2.style.display = 'inline'
      break
    default:
      break
  }
}

const clearChoices = _ => {
  let chooseablePlayers = document.querySelector('#playerOptions')
  chooseablePlayers.style.display = 'none'
}

const pickEnemy = (value, player) => {
  if (enemyCounter === 3) {
    win(player)
  } else if (enemyCounter < 3) {
    enemyholder = 0
    isEnemy = true
    enemy = enemyHolder + value
    enemyHP = playables[enemy].healthpoints

    currentEnemyName.innerHTML = `<h4>${playables[enemy].name}</h4>`
    currentEnemyPic.innerHTML = `<img class="options" src="${playables[enemy].picture}" alt="${playables[enemy].text}">`
    currentEnemyHP.innerHTML = `<h6>${playables[enemy].healthpoints}</h6>`

    document.querySelector(`#hiddenEnemy${value}`).style.display = 'none'

    attackButton.style.display = 'inline'
  }
}

const win = (player) => {
  document.querySelector('#winloss').innerHTML = `
  <h6>Congratulations ${playables[player].name}, you have won!</h6>
  <h6>“As long as I’m confident with who I am, it doesn’t matter what other people think”—Smellerbee, Episode 2.12 “The Serpent’s Pass”</h6>
  <h6>Do you have enough confidence to play again?</h6>
  `
  playAgainButton.style.display = 'inline'
}

const loss = _ => {
  document.querySelector('#winloss').innerHTML = `
  <h6>I'm sorry ${playables[player].name}, this time you have failed!</h6>
  <h6>“You have come to the crossroads of your destiny. It is time for you to choose.”—Iroh, Episode 2.20 “The Crossroads of Destiny”</h6>
  <h6>Do you choose to play again?</h6>
  `
  playAgainButton.style.display = 'inline'
}

const fightEnemy = (player, enemy) => {
  playerHP -= enemyAttack
  enemyHP -= playerAttack
  playerAttack += playerAttackPower
  chosenPlayerHP.innerHTML = `<h6>${playerHP}</h6>`
  currentEnemyHP.innerHTML = `<h6>${enemyHP}</h6>`
  hpCheck(player, enemy)
}

const hpCheck = (player, enemy) => {
  if (playerHP <= 0) {
    loss()
    resetButton.style.display = 'inline'
  } else if ((playerHP > 0) && (enemyHP <= 0)) {
    currentEnemyName.innerHTML = ''
    currentEnemyPic.innerHTML = ''
    currentEnemyHP.innerHTML = ''
    attackButton.style.display = 'none'
    isEnemy = false
    enemyCounter++
    enemyHP = 2000
    if (enemyCounter === 3) {
      win(player)
    }
  }
}

const gamePlay = (player) => {
  choosePlayer(player)
  moveEnemies(player)
  clearChoices()
}

init()
