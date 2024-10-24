import Image from "next/image";
import Hero from "@/assets/hero.png";
import Link from "next/link";
import Button from "./Button";

const Header = () => {
  return (
    <header className="py-10">
      <div className="wrapper bg-[#F4F6F5] rounded-xl -z-20 relative md:flex md:px-10 lg:px-20">
        <div className="py-10 flex flex-col items-center text-center gap-3 md:w-[50%] md:items-start md:text-start md:justify-center">
          <h1 className="text-5xl font-bold flex flex-col gap-3 md:text-4xl md:gap-1 lg:text-5xl">
            <span className="before:absolute before:bg-white before:-left-2 before:-top-1 before:h-[105%] before:w-[110%] relative inline-block before:-z-10 before:-rotate-3 md:before:w-full">
              LET&#39;S{" "}
            </span>{" "}
            <span>EXPLORE</span>
            <span className="before:absolute before:bg-primary before:-left-2 before:-top-1 before:h-[105%] before:w-[110%] relative inline-block before:-z-10 before:-rotate-3 md:before:w-full">
              UNIQUE
            </span>{" "}
            <span>CLOTHES.</span>
          </h1>
          <p>Live for Influential and Innovative fashion!</p>
          <Link href="#">
            <Button>Shop Now</Button>
          </Link>
        </div>
        <div className="pt-10 flex items-center justify-center px-5 md:w-[50%] md:items-end">
          <Image
            src={Hero}
            alt="the-ace-solutions-hero"
            className="h-[300px] w-fit sm:h-[370px] md:h-[300px] md:w-auto lg:h-[400px]"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
