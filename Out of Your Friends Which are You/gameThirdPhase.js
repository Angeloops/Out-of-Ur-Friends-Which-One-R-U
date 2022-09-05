function truckDamage() {
  let damageToTruck = truck.health - (truck.damage - truck.defense);
  let damageToCrazy = crazy.health - (truck.damage - crazy.defense);
  let damageToApyr = apr.health - (truck.damage - apr.defense)
  let damageToFighter = the.health - (truck.damage - the.defense)
}

function crazyDamage() {
  let damageToTruck = truck.health - (crazy.damage - truck.defense)
  let damageToCrazy = crazy.health - (crazy.damage - crazy.defense)
  let damageToApyr = apr.health - (crazy.damage - apr.defense)
  let damageToFighter = the.health - (crazy.damage - the.defense)
}

function apyrDamage() {
  let damageToTruck = truck.health - (apr.damage - truck.defense)
  let damageToCrazy = crazy.health - (apr.damage - crazy.defense)
  let damageToApyr = apr.health - (apr.damage - apr.defense)
  let damageToFighter = the.health - (apr.damage - the.defense)
}

function theDamage() {
  let damageToTruck = truck.health - (the.damage - truck.defense)
  let damageToCrazy = crazy.health - (the.damage - crazy.defense)
  let damageToApyr = apr.health - (the.damage - apr.defense)
  let damageToFighter = the.health - (the.damage - the.defense)
}


//inflict damage to Friends 
