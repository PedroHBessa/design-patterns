function monsterFactory(name) {
  const monster = {
    name: name,
    life: 30,
    stamina: 100,
  };

  return { ...monster, attack, defense };
}

function swimmingMonster(name, stats) {
  const monster = monsterFactory(name);
  return {
    ...monster,
    type: "swimmer",
    ...stats,
  };
}
function flyMonster(name, stats) {
  const monster = monsterFactory(name);
  return {
    ...monster,
    type: "flyer",
    ...stats,
  };
}

function attack(target) {
  if (this.name === target.name)
    return console.log("You can't attack yourself");
  console.log(this.name + " is attacking " + target.name);
  target.defense();
}

function defense() {
  if (this.life <= 0) return console.log(this.name + " is dead");
  console.log(this.name + " is defending");
  this.shild <= 0 ? (this.life -= 50) : (this.shild -= 10);
}

function stats(force, shild) {
  return {
    force,
    shild,
  };
}

const edd = swimmingMonster("edd", stats(59, 28));
const flew = flyMonster("flew", stats(119, 25));
const myu = flyMonster("myu", stats(50, 5));

edd.attack(myu);
edd.attack(myu);
edd.attack(myu);


flew.attack(flew);
