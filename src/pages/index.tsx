import Image from "next/image";
import { Inter } from "next/font/google";
import BeakerIcon from "@/components/beaker-icon";
import Potion from "@/components/potion/potion";
import { useState } from "react";
import potionStrenghtCalculator from "@/utils/potion-strength-calculator";

type Potions = {
  [key: string]: number;
};
type PotionColors = {
  [key: string]: string;
};

const inter = Inter({ subsets: ["latin"] });

const potionsColors: PotionColors = {
  RED: "#e15554",
  BLUE: "#147df5",
  GREEN: "#a0e426",
  YELLOW: "#fdf148",
  GREY: "#ccc",
};

const intialPotions: Potions = {
  RED: 1,
  BLUE: 0,
  GREEN: 0,
  YELLOW: 0,
  GREY: 0,
};

export default function Home() {
  const [potions, setPotions] = useState<Potions>(intialPotions);
  const [damage, setDamage] = useState<number>();

  const handleOnChange = (potion: Potions) =>
    setPotions({
      ...potions,
      ...potion,
    });

  const handleSubmit = () => {
    setDamage(potionStrenghtCalculator(potions))
  }



  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <div className="relative flex flex-col min-w-0 break-words bg-white p-8 mb-6 shadow-lg rounded">
        <h3>Choose your Potions</h3>
        <div className="flex flex-wrap">
          {Object.keys(intialPotions).map((p) => (
            <Potion
              key={p}
              fill={potionsColors[p]}
              value={potions[p]}
              name={p}
              onChange={handleOnChange}
            />
          ))}
        </div>
        <button
          className="bg-blue-500 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
          onClick={handleSubmit}
        >
          ATTACK
        </button>

        <br></br>
        {!!damage &&<h2> DAMAGE: {damage}%</h2>}
      </div>
    </div>
  );
}
