import { describe, expect, it, test } from "@jest/globals";
import potionStrenghtCalculator from "../utils/potion-strength-calculator";

describe("PotionStrenghtCalculator module", () => {
  describe("Different types of potions", () => {
    it("should return 0 if no potions", () => {
      const potions = {};
      expect(potionStrenghtCalculator(potions)).toBe(0);
    });

    it("should return 3 if there is a potion", () => {
      const potions = { red: 1 };
      expect(potionStrenghtCalculator(potions)).toBe(3);
    });

    it("should return 6 if there are 2 different potions", () => {
      const potions = { red: 1, blue: 1 };
      expect(potionStrenghtCalculator(potions)).toBe(6);
    });

    it("should return 10 if there are 3 different potions", () => {
      const potions = { red: 1, blue: 1, green: 1 };
      expect(potionStrenghtCalculator(potions)).toBe(10);
    });

    it("should return 20 if there are 4 different potions", () => {
      const potions = { red: 1, blue: 1, green: 1, yellow: 1 };
      expect(potionStrenghtCalculator(potions)).toBe(20);
    });

    it("should return 25 if there are 5 different potions", () => {
      const potions = { red: 1, blue: 1, green: 1, yellow: 1, gray: 1 };
      expect(potionStrenghtCalculator(potions)).toBe(25);
    });
  });

  describe("Potion combinations", () => {
    
    it("should return 13", () => {
      const potions = { red: 2, blue: 1, green: 1 };
      expect(potionStrenghtCalculator(potions)).toBe(13);
    });

    it("should return 31", () => {
      const potions = { red: 2, blue: 2, green: 1, yellow: 1, gray: 1 };
      expect(potionStrenghtCalculator(potions)).toBe(31);
    });


    it("should return 35", () => {
      const potions = { red: 2, blue: 2, green: 2, yellow: 1, gray: 1 };
      expect(potionStrenghtCalculator(potions)).toBe(35);
    });

  });
});
