


function shuffleEnemy(){
let chooseEnemy = Math.floor(Math.random() * Math.floor(4) + 1);
  switch (chooseEnemy) {
    case 1:
      return document.getElementById("secondPhase").innerHTML= '<h2>Truck Freak</h2><img src="fighters/truckFreak.png" height="100" width="100"><div>Health:' + truck.health + '</div><div>Damage: ' + truck.damage + '</div><div>Defense:' + truck.defense + '</div><button id="fight" onclick="">Fighte</buton>';
    break;
    case 2:
      return document.getElementById("secondPhase").innerHTML= '<h2>Crazy Ass</h2><img src="fighters/crazyAss.png" height="100" width="100"><div>Health:' + crazy.health + '</div><div>Damage: ' + crazy.damage + '</div><div>Defense: ' + crazy.defense + '</div><button>Fighte</buton>';
    break;
    case 3:
      return document.getElementById("secondPhase").innerHTML= '<h2>Apyr</h2><img src="fighters/Apyr.png" height="100" width="100"><div>Health:' +  apr.health + '</div><div>Damage: ' + apr.damage + '</div><div>Defense: ' + apr.defense + '</div><button>Fighte</buton>';
    break;
    default:
      return document.getElementById("secondPhase").innerHTML= '<h2>The Fighter</h2><img src="fighters/theFighter.png" height="100" width="100"><div>Health:' + the.health + '</div><div>Damage: ' + the.damage + '</div><div>Defense: ' + the.defense + '</div><button>Fighte</buton>';
    break;
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
}*/
