import Filter from "../../components/Filter";
import Hero from "./Hero";
import List from "./List";

const Home = () => {
  return (
    <div>
      <Hero />

      <h1 className="text-[20px] md:text-[36px] font-semibold my-[32px]">
        Sana Uygun Seçenekler
      </h1>

      <div>
        <Filter />
        <List />
      </div>
    </div>
  );
};

export default Home;
