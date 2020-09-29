function fight() {
  let monster = prompt(`Name The Monster You're Fighting!`);
  let hero = prompt(`Name the Hero you're using!`);
  let monsterHealth = 50;
  let heroHealth = 50;

  while (heroHealth > 0 && monsterHealth > 0) {
    let heroDiceAnswer = Number.parseInt(Math.floor(Math.random() * 20 + 1));
    let monsterDiceAnswer = Number.parseInt(Math.floor(Math.random() * 20 + 1));

    if (heroDiceAnswer == 1 && heroDiceAnswer == 2) {
      heroHealth -= 5;
      alert(
        `${hero} has rolled ${heroDiceAnswer},accidently stabs self Minus 5 health! ${hero}'s new health is ${heroHealth}`
      );
    } else if (monsterDiceAnswer == 1 && monsterDiceAnswer == 2) {
      monsterHealth -= 5;
      alert(
        `${monster} has rolled ${monsterDiceAnswer}, accidently stabs self Minus 5 health! ${monster}'s new health is ${monsterHealth}`
      );
    }
    if (heroDiceAnswer >= 3 && heroDiceAnswer <= 10) {
      monsterHealth = monsterHealth - 0;
      alert(
        `${hero} has rolled ${heroDiceAnswer}, ${hero} Misses ${monster}'s health is ${monsterHealth}`
      );
    } else if (monsterDiceAnswer >= 3 && monsterDiceAnswer <= 10) {
      heroHealth = heroHealth - 0;
      alert(
        `${monster} has rolled ${monsterDiceAnswer}, ${monster} Misses ${hero}'s health is ${heroHealth}`
      );
    }
    if (heroDiceAnswer >= 11 && heroDiceAnswer <= 18) {
      monsterHealth -= 10;
      alert(
        `${hero} has rolled ${heroDiceAnswer}, ${hero} Hits for 10 damage! ${monster}'s health is ${monsterHealth}`
      );
    } else if (monsterDiceAnswer >= 11 && monsterDiceAnswer <= 18) {
      heroHealth -= 10;
      alert(
        `${monster} has rolled ${monsterDiceAnswer}, ${monster} Hits for 10 damage! ${hero}'s health is ${heroHealth}`
      );
    }
    if (heroDiceAnswer == 19 && heroDiceAnswer == 20) {
      monsterHealth -= 20;
      alert(
        `${hero} has rolled ${heroDiceAnswer}, Critical HIT! ${monster}'s new health is ${monsterHealth}`
      );
    } else if (monsterDiceAnswer == 19 && monsterDiceAnswer == 20) {
      heroHealth -= 20;
      alert(
        `${monster} has rolled ${monsterDiceAnswer}, Critical HIT! ${hero}'s new health is ${heroHealth}`
      );
    }
  }
  if (monsterHealth <= 0 && heroHealth <= 0) {
    return alert(`Both ${hero} and ${monster} are dead!`);
  }
  if (monsterHealth <= 0) {
    return alert(`${hero} has Won!`);
  }
  return alert(`${monster} has won!`);
}
fight();
