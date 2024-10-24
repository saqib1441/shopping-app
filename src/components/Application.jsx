import Image from "next/image";
import MobileImg from "@/assets/mobile.png";
import Apple from "@/assets/apple.png";
import Google from "@/assets/google.png";

const Application = () => {
  return (
    <section className="py-10">
      <div className="wrapper md:flex">
        <div className="flex flex-col gap-3 md:justify-center md:w-[50%]">
          <h1 className="text-3xl font-bold flex flex-col items-center md:items-start lg:text-4xl xl:text-5xl">
            <span>DOWNLOAD APP &</span> <span>GET THE VOUCHER</span>
          </h1>
          <p className="text-center w-[80%] mx-auto  md:text-start md:mx-0">
            Get 30% off for first transaction using Rondovision mobile app for
            now.
          </p>
          <div className="flex justify-center gap-3 md:justify-start">
            <Image
              src={Apple}
              alt="shopping-app-apple"
              className="w-[100px] sm:w-[140px]"
            />
            <Image
              src={Google}
              alt="shopping-app-google"
              className="w-[100px] sm:w-[140px]"
            />
          </div>
        </div>
        <div className="mt-10 md:w-[50%]">
          <Image
            src={MobileImg}
            alt="shoping-app-application"
            className="h-[400px] w-fit mx-auto lg:h-[450px] xl:h-[500px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Application;
