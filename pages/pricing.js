import Layout from "../components/Layout";
import Banner from "../components/Banner";
import MainPricing from "../components/MainPricing";
import Prices from "../components/Prices";
import ComparePrice from "../components/ComparePrice";

const Pricing = () => {
  return (
    <Layout>
      <MainPricing />
      <Prices />
      <ComparePrice />
      <Banner />
    </Layout>
  );
};

export default Pricing;
