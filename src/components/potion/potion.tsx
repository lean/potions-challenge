import BeakerIcon from "../beaker-icon";

type Potions = {
  [key: string]: number;
};

type Props = {
  fill: string;
  name: string;
  onChange: (arg0: Potions) => void;
  value: number
};

const Potion = ({ fill, name, value, onChange }: Props) => {
  

  const handleOnChange = (e: React.FormEvent<HTMLInputElement>) => {
    onChange({[name]: parseInt(e.currentTarget.value) as unknown as number});
  }
  
  return (
  <div className="flex flex-col items-center justify-center m-3  ">
    <BeakerIcon fill={fill} />
    <input
      className="shadow appearance-none border rounded w-1/3 mt-1 py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      type="number"
      defaultValue={value}
      onChange={handleOnChange}
      min={0}
    />
  </div>
)}

export default Potion;