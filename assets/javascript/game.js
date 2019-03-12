let playables = [
  {
    name: 'Fire',
    picture: './assets/images/fire.png',
    healthpoints: 150,
    healthpointsreset: 150,
    attack: 10,
    attackpower: 10,
    counterattackpower: 2
  },
  {
    name: 'Air',
    picture: './assets/images/air.png',
    healthpoints: 150,
    healthpointsreset: 150,
    attack: 10,
    attackpower: 10,
    counterattackpower: 2
  },
  {
    name: 'Water',
    picture: './assets/images/water.png',
    healthpoints: 150,
    healthpointsreset: 150,
    attack: 10,
    attackpower: 10,
    counterattackpower: 2
  },
  {
    name: 'Earth',
    picture: './assets/images/earth.png',
    healthpoints: 150,
    healthpointsreset: 150,
    attack: 10,
    attackpower: 10,
    counterattackpower: 2
  },
]

let player = 0
let enemyCounter = 0
let enemyHolder,
  isEnemy,
  isPlayer,
  enemy

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

let hiddenEnemy0 = document.querySelector('#hiddenEnemy0')
let hiddenEnemy1 = document.querySelector('#hiddenEnemy1')
let hiddenEnemy2 = document.querySelector('#hiddenEnemy2')
let hiddenEnemy3 = document.querySelector('#hiddenEnemy3')

const init = _ => {
  isEnemy = false
  isPlayer = false
  haveLost = false
  needsReset = false
  player = 0
  enemyHolder = 0
  enemyCounter = 0

  for (var i = 0; i < playables.length; i++) {
    playables[i].healthpoints = playables[i].healthpointsreset
  }

  for (var i = 0; i < playables.length; i++) {
    playables[i].attack = playables[i].attackpower
  }

  chooseablePlayers.style.display = 'block'

  chosenPlayerName.innerHTML = ''
  chosenPlayerPic.innerHTML = ''
  chosenPlayerHP.innerHTML = ''

  currentEnemyName.innerHTML = ''
  currentEnemyPic.innerHTML = ''
  currentEnemyHP.innerHTML = ''

  hiddenEnemy0.style.display = 'none'
  hiddenEnemy1.style.display = 'none'
  hiddenEnemy2.style.display = 'none'
  hiddenEnemy3.style.display = 'none'

  document.querySelector('.resetBtn').style.display = 'none'
  document.querySelector('.attackBtn').style.display = 'none'
}

const choosePlayer = (player) => {
  isPlayer = true
  chosenPlayerName.innerHTML = `<h4>${playables[player].name}</h4>`
  chosenPlayerPic.innerHTML = `<img class="options" src="${playables[player].picture}" alt="${playables[player].text}">`
  chosenPlayerHP.innerHTML = `<h6>${playerHP}</h6>`
  pickEnemy(player)
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

const win = _ => {
  // show something about how you won
  console.log(`you won`)
}

const loss = _ => {
  // register loss
  console.log(`loss`)
}

const pickEnemy = (player) => {
  if (enemyCounter === 3) {
    win()
  }

  enemyholder = 0
  document.addEventListener('click', e => {
    if ((e.target.className === 'options hiddenEnemies') && (!isEnemy)) {
      let value = parseInt(e.target.dataset.value)

      isEnemy = true
      enemy = enemyHolder + value

      currentEnemyName.innerHTML = `<h4>${playables[enemy].name}</h4>`
      currentEnemyPic.innerHTML = `<img class="options" src="${playables[enemy].picture}" alt="${playables[enemy].text}">`
      currentEnemyHP.innerHTML = `<h6>${playables[enemy].healthpoints}</h6>`

      document.querySelector(`#hiddenEnemy${value}`).style.display = 'none'

      fightEnemy(player, enemy)
    }
  })
}

const fightEnemy = (player, enemy) => {
  let enemyHP = playables[enemy].healthpoints
  let enemyAttack = playables[enemy].counterattackpower

  document.querySelector('.attackBtn').style.display = 'inline'

  document.addEventListener('click', e => {
    if ((e.target.className === 'attackBtn') && (isEnemy) && (enemyHP > 0)) {
      playerHP -= enemyAttack
      chosenPlayerHP.innerHTML = `<h6>${playerHP}</h6>`
      enemyHP -= playerAttack
      currentEnemyHP.innerHTML = `<h6>${enemyHP}<?h6>`
      playerAttack += playerAttackPower
      hpCheck(player, enemy, enemyHP)
    }
  })
}

const hpCheck = (player, enemy, enemyHP) => {
  if (playerHP <= 0) {
    // loss, show reset button
    loss()
    document.querySelector('.resetBtn').style.display = 'inline'
  } else if ((playerHP > 0) && (enemyHP <= 0)) {
    currentEnemyName.innerHTML = ''
    currentEnemyPic.innerHTML = ''
    currentEnemyHP.innerHTML = ''
    document.querySelector('.attackBtn').style.display = 'none'
    isEnemy = false
    enemy = 0
    enemyCounter++
    pickEnemy(player)
  }
}

const gamePlay = (player) => {
  choosePlayer(player)
  moveEnemies(player)
  clearChoices()
}

document.addEventListener('click', e => {
  let player = parseInt(e.target.dataset.value)
  if (e.target.className === 'options chooseablePlayers') {
    gamePlay(player)
  }
})

// run init
init()
