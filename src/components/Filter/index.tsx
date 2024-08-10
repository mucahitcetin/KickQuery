import Color from "./Color";
import Gender from "./Gender";
import Price from "./Price";
import Size from "./Size";

const Filter = () => {
  return (
    <div className="max-lg:max-w-lg max-lg:mx-auto max-lg:h-[80vh] ">
      <h2 className="text-xl font-semibold max-lg:bg-white max-lg:flex max-lg:justify-between max-lg:p-4 rounded-t-md"></h2>
      <Size />
      <Color />
      <Gender />
      <Price />
    </div>
  );
};

export default Filter;
