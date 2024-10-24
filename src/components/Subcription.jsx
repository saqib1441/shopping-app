import Button from "./Button";

const Subcription = () => {
  return (
    <section className="bg-secondary/70">
      <div className="wrapper py-20 flex flex-col gap-4">
        <h1 className="text-3xl text-center font-bold text-white w-[400px] mx-auto sm:w-[600px] md:text-4xl">
          JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO
        </h1>
        <p className="w-[80%] mx-auto text-center text-white/70">
          Type your email down below and be young wild generation
        </p>
        <form className="sm:w-[450px] mx-auto bg-white flex py-1 px-4 rounded">
          <input
            type="text"
            placeholder="Add your email here"
            className="w-full focus:outline-none"
          />
          <Button>SEND</Button>
        </form>
      </div>
    </section>
  );
};

export default Subcription;
