type Potions = {
  [key: string]: number;
};

type Bonus = {
  [key: number]: number;
}

const bonus: Bonus = {
  1: 3,
  2: 5,
  3: 10,
  4: 20,
  5: 25
}

const getTotalDamage = (attacks: number[]) =>
  attacks.reduce((total, attack) => total + bonus[attack], 0);

const getPotionsCount = (potions: Potions) =>
  Object.keys(potions).filter((key) => potions[key] > 0).length;

const reduceSinglePotion = (potions: Potions) => {
  const newPotions = { ...potions };
  for (const key in newPotions) {
    if (newPotions[key] > 0) {
      newPotions[key] -= 1;
      break;
    }
  }
  return newPotions;
};

const reducePotions = (potions: Potions): Potions => {
  const newPotions = { ...potions };
  Object.keys(newPotions).forEach((key) => {
    if (newPotions[key] > 0) {
       newPotions[key] -= 1
    }
  });
  return newPotions;
};

const getAttacks = (potions: Potions, attacks?: number[]): any => {
  let newPotions = { ...potions };
  const result: number[] = attacks || [];
  const potionsCount = getPotionsCount(newPotions);
  
  if (potionsCount > 0) {
    if (
      potionsCount % 2 === 0 &&
      bonus[potionsCount / 2] * 2 > bonus[potionsCount]
    ) {
      result.push(potionsCount / 2);
      newPotions = reduceSinglePotion(newPotions);
    } else {
      result.push(getPotionsCount(newPotions));
      newPotions = reducePotions(newPotions);
    }
    return getAttacks(newPotions, result);
  }
  return result;
};

const potionStrenghtCalculator = (potions: Potions) =>
  getTotalDamage(getAttacks(potions));

export default potionStrenghtCalculator;
