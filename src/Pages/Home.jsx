import Banner from "../components/Banner";
import Heading from "../components/Heading";

const Home = () => {
  return (
    <div>
      {/* Banner */}
      <Banner />
      {/* Heading */}
      <Heading
        title={"Browse Coffees by Category"}
        subtitle={
          "Choose your desired coffee category to browse throught specific coffees that fit in your test."
        }
      />
      {/* Categories tab section */}
      {/* Dynamic Nested Components */}
    </div>
  );
};

export default Home;
