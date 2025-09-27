const Hero = () => {
  return (
    <main className="flex h-[80dvh] w-full flex-col items-center justify-center">
      <div className="flex w-[90%] flex-col items-center justify-center text-center sm:w-[70%]">
        <h1 className="text-primary-text w-full text-4xl font-bold sm:text-6xl">
          Beautiful Navigation,{' '}
          <span className="text-primary">Made Simple</span>
        </h1>
        <p className="text-secondary-text my-6 text-center text-lg sm:w-[60%]">
          Experience a modern, responsive navigation bar designed with love.
          Clean aesthetics, smooth animations, and delightful interactions.
        </p>
      </div>
      <div className="flex flex-col gap-4 sm:flex-row">
        <button className="bg-primary cta-btn text-white">Get Started</button>
        <button className="cta-btn border border-zinc-200 text-black">
          Learn More
        </button>
      </div>
    </main>
  );
};
export default Hero;
