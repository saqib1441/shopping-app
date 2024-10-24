import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import Favourite1 from "@/assets/favourites/favourite_1.png";
import Favourite2 from "@/assets/favourites/favourite_2.png";
import Overlay1 from "@/assets/overlay/overlay_1.png";

const Favourite = () => {
  return (
    <section className="py-10 lg:py-10">
      <div className="wrapper">
        <h1 className="mb-10 font-bold text-4xl text-center relative w-fit mx-auto sm:mx-0">
          YOUNG&#39;S FAVOURITE
          <Image
            src={Overlay1}
            alt=""
            className="absolute w-20 right-10 sm:-right-1 bottom-1 -z-10 -rotate-3"
          />
        </h1>
        <div className="grid gap-10 sm:grid-cols-2 justify-center">
          <div className="flex flex-col gap-2">
            <div>
              <Image
                src={Favourite1}
                alt="shopping-app-new-arrivals"
                className="lg:h-[320px] xl:h-[350px]"
              />
            </div>
            <div>
              <h1 className="font-semibold text-lg">Hoodies & Sweetshirt</h1>
              <Link href="#" className="flex items-center gap-2 text-black/60">
                Explore Now!{" "}
                <span>
                  <FaArrowRight />
                </span>
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div>
              <Image
                src={Favourite2}
                alt="shopping-app-new-arrivals"
                className="lg:h-[320px] xl:h-[350px]"
              />
            </div>
            <div>
              <h1 className="font-semibold text-lg">Coats & Parkas</h1>
              <Link href="#" className="flex items-center gap-2 text-black/60">
                Explore Now!{" "}
                <span>
                  <FaArrowRight />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Favourite;
