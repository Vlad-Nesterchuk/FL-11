function Fighter(fighterProperties) {

  let name = fighterProperties.name;
  let damage = fighterProperties.damage;
  let hp = fighterProperties.hp;
  const maxHp = fighterProperties.hp;
  let agility = fighterProperties.agility;
  let wins = 0;
  let loss = 0;

  this.getName = function () {
    return name;
  };

  this.getDamage = function () {
    return damage;
  };

  this.getAgility = function () {
    return agility;
  };

  this.getHeals = function () {
    return hp;
  };

  this.dealDamage = function (damage) {
    hp = hp > damage ? hp - damage : 0;
  };

  this.attack = function (fighterDefender) {
    let maxProbably = 100;
    let probably = maxProbably - fighterDefender.getAgility();
    if (Math.floor(maxProbably * Math.random()) < probably) {
      fighterDefender.dealDamage(damage);
      console.log(`${this.getName()} make ${this.getDamage()} damage to ${fighterDefender.getName()}`);
    } else {
      console.log(`${this.getName()} attack missed`);
    }
  };

  this.logCombatHistory = function () {
    console.log(`Name: ${this.getName()}, Wins: ${wins}, Losses: ${loss}`);
  };

  this.heal = function (healHp) {
    hp = healHp + hp > maxHp ? maxHp : healHp + hp;
  };

  this.addWin = function () {
    ++wins;
  };
  this.addLoss = function () {
    ++loss;
  };
}

function battle(fighter1, fighter2) {

  if (fighter1.getHeals() === 0) {
    return console.log(`${fighter1.getName()} is dead and can\`t fight`);
  }

  if (fighter2.getHeals() === 0) {
    return console.log(`${fighter2.getName()} is dead and can\`t fight`);
  }

  while (fighter1.getHeals() > 0 || fighter2.getHeals() > 0) {
    fighter1.attack(fighter2);
    if (fighter2.getHeals() === 0) {
      fighter1.addWin();
      fighter2.addLoss();
      break
    }
    fighter2.attack(fighter1);
    if (fighter1.getHeals() === 0) {
      fighter1.addWin();
      fighter2.addLoss();
      break
    }
  }
}


