let playables = [
  {
    name: 'Fire',
    picture: "./assets/images/fire.png",
    healthpoints: 150,
    attack: 10,
    attackpower: 10,
    counterattackpower: 20
  },
  {
    name: 'Air',
    picture: "./assets/images/air.png",
    healthpoints: 150,
    attack: 10,
    attackpower: 10,
    counterattackpower: 20
  },
  {
    name: 'Water',
    picture: "./assets/images/water.png",
    healthpoints: 150,
    attack: 10,
    attackpower: 10,
    counterattackpower: 20
  },
  {
    name: 'Earth',
    picture: "./assets/images/earth.png",
    healthpoints: 150,
    attack: 10,
    attackpower: 10,
    counterattackpower: 20
  },
]

let player = 0
let enemy = 0
let isEnemy = false
let isPlayer = false

let chosenPlayerName = document.querySelector('#chosenPlayerName')
let chosenPlayerPic = document.querySelector('#chosenPlayerPic')
let chosenPlayerHP = document.querySelector('#chosenPlayerHP')
let playerHP = playables[player].healthpoints

let currentEnemyName = document.querySelector('#currentEnemyName')
let currentEnemyPic = document.querySelector('#currentEnemyPic')
let currentEnemyHP = document.querySelector('#currentEnemyHP')
let enemyHP = playables[enemy].healthpoints

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
  isPlayer = true
  chosenPlayerName.innerHTML = `<h4>${playables[player].name}</h4>`
  chosenPlayerPic.innerHTML = `<img class="options" src="${playables[player].picture}" alt="${playables[player].text}">`
  chosenPlayerHP.innerHTML = `<h6>${playerHP}</h6>`

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

const pickEnemy = (player, enemy) => {
  document.addEventListener('click', e => {
    let value = parseInt(e.target.dataset.value)

    if ((!isEnemy) && (isPlayer)) {
      if ((e.target.className === 'options hiddenEnemies')) {
        console.log(enemy)
        enemy += value

        currentEnemyName.innerHTML = `<h4>${playables[enemy].name}</h4>`
        currentEnemyPic.innerHTML = `<img class="options" src="${playables[enemy].picture}" alt="${playables[enemy].text}">`
        currentEnemyHP.innerHTML = `<h6>${playables[enemy].healthpoints}</h6>`

        console.log(`value: ${value}`)
        console.log(`player: ${player}`)
        console.log(`enemy: ${enemy}`)

        document.querySelector(`#hiddenEnemy${value}`).style.display = "none"

        isEnemy = true
        console.log(`switch isEnemy`)

        fightEnemy(player, enemy)
      }
    }
  })
}


const fightEnemy = (player, enemy) => {
  let playerAttack = playables[player].attack
  let playerAttackPower = playables[player].attackpower
  let enemyAttack = playables[enemy].counterattackpower
  console.log(player)
  console.log(enemy)

  if (isEnemy && isPlayer) {
    document.querySelector('.attackBtn').style.display = "inline"
    document.addEventListener('click', e => {
      if (e.target.className === 'attackBtn') {
        playerHP -= enemyAttack
        chosenPlayerHP.innerHTML = `<h6>${playerHP}</h6>`
        enemyHP -= playerAttack
        currentEnemyHP.innerHTML = `<h6>${enemyHP}<?h6>`
        playerAttack += playerAttackPower
        // check HP of both
        hpCheck(player, enemy)
      }
    })
  }
}

const hpCheck = (player, enemy) => {
  if (playerHP <= 0) {
    // loss, show reset button
    console.log('reset')
  } else if ((playerHP > 0) && (enemyHP <= 0)) {
    currentEnemyName.innerHTML = ""
    currentEnemyPic.innerHTML = ""
    currentEnemyHP.innerHTML = ""
    isEnemy = false
    let enemyReset = 0
    // let enemyHP = ''
    pickEnemy(player, enemyReset)
  }
  // check if HP of player is 0, loss
  // check if HP of enemy is 0
  // if 0, pickEnemy
  // if not, back to fightEnemy
  // console.log('HP Check')
}

const gamePlay = (player) => {
  choosePlayer(player)
  moveEnemies(player)
  clearChoices()
  pickEnemy(player, enemy)
}

document.addEventListener('click', e => {
  let player = parseInt(e.target.dataset.value)
  if (e.target.className === 'options chooseablePlayers') {
    gamePlay(player)
  }
})

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


// run init
init()
