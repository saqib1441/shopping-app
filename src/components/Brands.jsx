import HM from "@/assets/brands/hm.png";
import Obey from "@/assets/brands/obey.png";
import Shopify from "@/assets/brands/shopify.png";
import Lacoste from "@/assets/brands/lacoste.png";
import Levis from "@/assets/brands/levis.png";
import Amazon from "@/assets/brands/amazon.png";
import Image from "next/image";

const Brands = () => {
  return (
    <section className="h-[150px] sm:h-[90px] bg-primary my-5 flex items-center justify-center flex-wrap">
      <div className="grid lg:grid-cols-6 wrapper gap-5 items-center grid-cols-3 sm:grid-cols-6">
        <Image src={HM} alt="shoping-app-brands" className="w-[60px]" />
        <Image src={Obey} alt="shoping-app-brands" className="w-[100px]" />
        <Image src={Shopify} alt="shoping-app-brands" className="w-[130px]" />
        <Image src={Lacoste} alt="shoping-app-brands" className="w-[170px]" />
        <Image src={Levis} alt="shoping-app-brands" className="w-[100px]" />
        <Image src={Amazon} alt="shoping-app-brands" className="w-[160px]" />
      </div>
    </section>
  );
};

export default Brands;
