function slap() {
  if (enemy.items.length > 0) {
    enemy.health -= 1 * itemsAdded()
  } else {
    enemy.health -= 1
  }
  enemy.hits += 1
  update();
  beat();
}
function kick() {
  if (enemy.items.length > 0) {
    enemy.health -= 3 * itemsAdded()
  } else {
    enemy.health -= 3
  }
  enemy.hits += 1
  update()
  beat();
}
function gatling() {
  if (enemy.items.length > 0) {
    enemy.health -= 5 * itemsAdded()
  } else {
    enemy.health -= 5
  }
  enemy.hits += 1
  update()
  beat();
}
function reset() {
  enemy.health = 100
  enemy.hits = 0
  update()
  removeItems();
}

function update() {
  document.getElementById('health').innerText = enemy.health.toString();
  document.getElementById('hits').innerText = enemy.hits.toString();
}


let enemy = {
  name: 'doflamingo',
  health: 100,
  hits: 0,
  items: []
}
let items = {
  gearSecond: { name: 'gear second', modifier: 1.5, description: 'Gomu Gomu no Jet Pistol' },
  gearThird: { name: 'gear third', modifier: 2, description: 'Gomu Gomu no Jet Bazooka' },
  gearFourth: { name: 'gear fourth', modifier: 2.5, description: 'Gomu Gomu no Jet Gatling' }
}
function enterGearSecond() {
  enemy.items.push(items.gearSecond.modifier)
  update();
  itemsAdded();
}
function enterGearThird() {
  enemy.items.push(items.gearThird.modifier)
  update();
  itemsAdded();
}
function enterGearFourth() {
  enemy.items.push(items.gearFourth.modifier)
  update();
  itemsAdded();
}

function itemsAdded() {
  let gearDamage = 0
  for (let i = 0; i < enemy.items.length; i++) {
    gearDamage += enemy.items[i]
  }
  return gearDamage
}
function removeItems() {
  if (enemy.items.length > 0) {
    enemy.items = []
  }
}
function beat() {
  if (enemy.health <= 0) {
    enemy.health = 0
    alert('Doflamingo fainted!')
    reset();
  }
}