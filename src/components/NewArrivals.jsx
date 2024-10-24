import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import Arrival1 from "@/assets/new-arrivals/new_arrival_1.png";
import Arrival2 from "@/assets/new-arrivals/new_arrival_2.png";
import Arrival3 from "@/assets/new-arrivals/new_arrival_3.png";
import Overlay1 from "@/assets/overlay/overlay_1.png";

const NewArrivals = () => {
  return (
    <section className="py-10 lg:py-10">
      <div className="wrapper">
        <h1 className="mb-10 font-bold text-4xl text-center relative w-fit mx-auto sm:mx-0">
          NEW ARRIVALS
          <Image
            src={Overlay1}
            alt=""
            className="absolute w-20 -right-1 bottom-1 -z-10 -rotate-3"
          />
        </h1>
        <div className="grid gap-10 sm:grid-cols-2 justify-center md:grid-cols-3">
          <div className="flex flex-col gap-2">
            <div>
              <Image
                src={Arrival1}
                alt="shopping-app-new-arrivals"
                className="w-[340px] mx-auto"
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
                src={Arrival2}
                alt="shopping-app-new-arrivals"
                className="w-[340px] mx-auto"
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
          <div className="flex flex-col gap-2">
            <div>
              <Image
                src={Arrival3}
                alt="shopping-app-new-arrivals"
                className="w-[340px] mx-auto"
              />
            </div>
            <div>
              <h1 className="font-semibold text-lg">Tees & T-Shirt</h1>
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

export default NewArrivals;
