import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import ProductCategory from "../ProductCategory/ProductCategory";
import Featured from "../Featured/Featured";
import Service from "../Service/Service";
import Subscribe from "../Subscribe/Subscribe";




const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Sun Fashion | Home</title>
      </Helmet>
      <Banner></Banner>
      <ProductCategory></ProductCategory>
      <Featured></Featured>
      <Service></Service>
      <Subscribe></Subscribe>
    </div>
  );
};

export default Home;