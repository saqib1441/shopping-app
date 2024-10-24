import Image from "next/image";
import PayDayImg from "@/assets/pay_day.png";
import Button from "./Button";

const PayDay = () => {
  return (
    <section className="md:flex my-10 lg:h-[80vh]">
      <div className="bg-secondary/70 h-[300px] sm:h-[400px] w-[90%] mx-auto md:w-full pt-5 lg:h-full xl:pt-20">
        <Image
          src={PayDayImg}
          alt="shopping-app-pay-day"
          className="h-full w-fit mx-auto"
        />
      </div>
      <div className="w-[90%] mx-auto md:w-full py-10 md:py-0 bg-secondary relative -z-10 px-5 flex flex-col items-center md:items-start md:justify-center md:px-10">
        <h1 className="text-5xl font-bold flex flex-col gap-3 md:text-4xl md:gap-1 lg:text-5xl w-fit mx-auto md:mx-0">
          <span className="before:absolute before:bg-white before:-left-2 before:-top-1 before:h-[105%] before:w-[105%] relative inline-block before:-z-10 before:-rotate-3 md:before:w-full">
            PAYDAY
          </span>
          <span className="text-white">SALE NO 1</span>
        </h1>
        <p className="my-5 text-center text-white/80 md:text-start">
          Spend minimal $100 get 30% off voucher code for your next purchase
        </p>
        <div className="flex flex-col items-center text-white mb-5 md:items-start">
          <h1 className="font-semibold">1 June - 10 June 2024</h1>
          <p className="text-white/80">*Terms & Conditions apply</p>
        </div>
        <Button>SHOP NOW</Button>
      </div>
    </section>
  );
};

export default PayDay;
