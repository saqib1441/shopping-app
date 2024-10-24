import Application from "@/components/Application";
import Brands from "@/components/Brands";
import Favourite from "@/components/Favourite";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import NewArrivals from "@/components/NewArrivals";
import PayDay from "@/components/PayDay";
import Subcription from "@/components/Subcription";

const Home = () => {
  return (
    <section>
      <Navbar />
      <Header />
      <Brands />
      <NewArrivals />
      <PayDay />
      <Favourite />
      <Application />
      <Subcription />
      <Footer />
    </section>
  );
};

export default Home;
