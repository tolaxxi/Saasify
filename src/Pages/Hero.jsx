const Hero = () => {
  return (
    <main className="flex justify-center items-center flex-col w-full h-[80dvh]">
      <div className="text-center w-[90%] sm:w-[70%] flex flex-col justify-center items-center">
        <h1 className="text-4xl sm:text-6xl font-bold w-full text-primary-text">
          Beautiful Navigation, <span className="text-primary">Made Simple</span>
        </h1>
        <p className="text-secondary-text my-6 text-lg sm:w-[60%] text-center ">
          Experience a modern, responsive navigation bar designed with love. Clean aesthetics, smooth animations, and
          delightful interactions.
        </p>
      </div>
      <div className=" flex  flex-col sm:flex-row gap-4">
        <button className="bg-primary  text-white cta-btn mr-5">Get Started</button>
        <button className=" text-black cta-btn border border-zinc-200">Learn More</button>
      </div>
    </main>
  );
};
export default Hero;
