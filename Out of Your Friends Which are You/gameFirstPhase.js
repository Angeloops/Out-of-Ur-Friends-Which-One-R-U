
let truck = new Friends(275, 90, 50);
let crazy = new Friends(215, 80, 70);
let the = new Friends(235, 125, 35);

let aprHP = Math.floor(Math.random() * Math.floor(200) + 125);
let aprDmg = Math.floor(Math.random() * Math.floor(50) + 40);
let aprDef = Math.floor(Math.random() * Math.floor(50) + 40);

function Friends(health, damage, defense) {
  this.health = health;
  this.damage = damage;
  this.defense = defense;
  this.decreaseHealth = function(receivedDamage){
    this.health -= receivedDamage
  }
};

truck.health = truck.health - crazy.damage
truck.decreaseHealth(crazy.damage)

apr = {
  health: aprHP,
  damage: aprDmg,
  defense: aprDef
};

characters = {
  truckFreak: function() {
    document.getElementById("firstPhase").innerHTML = '<h1>Out of your Friends find out who is most likely to fight you</h1><h2>Truck Freak</h2><img src="fighters/truckFreak.png" height="100" width="100"><div id="truckHealth">Health: ' + truck.health + '<div class="truckHealth">Damage: ' + truck.damage + '</div><div>Defense: ' + truck.defense + '</div><button onclick="shuffleEnemy()"> Find Frienemy</button>';
  },
  crazyAss: function() {
    document.getElementById("firstPhase").innerHTML = '<h1>Out of your Friends find out who is most likely to fight you</h1><h2>Crazy Ass</h2><img src="fighters/crazyAss.png" height="100" width="100"><div>Health: ' + crazy.health + '<div>Damage: ' + crazy.damage + '</div><div>Defense: ' + crazy.defense + '</div><button onclick="shuffleEnemy()"> Find Frienemy</button>';
  },
  apyr: function() {
    document.getElementById("firstPhase").innerHTML = '<h1>Out of your Friends find out who is most likely to fight you</h1><h2>Apyr</h2><img src="fighters/Apyr.png" height="100" width="100"><div>Health: ' + apr.health + '<div>Damage: ' + apr.damage + '</div><div>Defense: ' + apr.defense + '</div><button onclick="shuffleEnemy()"> Find Frienemy</button>';
  },
  theFighter: function() {
    document.getElementById("firstPhase").innerHTML = '<h1>Out of your Friends find out who is most likely to fight you</h1><h2>The Fighter</h2><img src="fighters/theFighter.png" height="100" width="100"><div>Health: ' + the.health + '<div>Damage: ' + the.damage + '</div><div>Defense: ' + the.defense + '</div><button onclick="shuffleEnemy()"> Find Frienemy</button>';
  }
};


/*function chooseYourFighter(first, second, third, fourth, fifth){
  this.first = function() { document.querySelector(".firstPhase").innerHTML = '<div class="truckFreak"><h1>Truck Freak</h1><img src="fighters/truckFreak.png" height="100" width="100" ><div><p>Damage: 65(added your said item)</p></div><div><p>Defense: 65</p></div><div><p> Agility: 50</p></div></div><button class="gameStart" onclick="shuffleEnemy()">start game</button>'
  }
  this.second = function() { document.querySelector(".firstPhase").innerHTML = '<div class="crazyAss"><h1>Crazy Ass</h1><img src="fighters/crazyAss.png" height="100" width="100" ><div><p>Damage: 95(added your guns which I am definitely going to report to the authorityies)</p></div><div><p>Defense: 30</p></div><div><p> Agility: 80</p></div></div><button class="gameStart" onclick="">start game</button>'
  }
  this.third = function() { document.querySelector(".firstPhase").innerHTML = '<div class="Apyr"><h1>Apyr</h1><img src="fighters/Apyr.png" height="100" width="100" ><div><p>???</p></div><div><p>???</p></div><div><p>???</p></div></div><button class="gameStart" onclick="">start game</button>'
  }
  this.fourth = function(){ document.querySelector(".firstPhase").innerHTML = '<div class="theFighter"><h1>The Fighter</h1><img src="fighters/theFighter.png" height="100" width="100" ><div><p>Damage: 85(added your mp5 in the bag)</p></div><div><p>Defense: 85</p></div><div><p> Agility: 30</p></div></div><button class="gameStart" onclick="">start game</button>'
  }

}
let choose = new chooseYourFighter()



console.log(damage)*/
